<template>
<div id="main-grid-pll-manual">
  <div class="drag" id="title-grid">
    <div style="margin-left:20px; margin-top:10px; width:275px;">PLL Clock Configuration ( Manual Select )</div>
    <div class="wrapPanel-contentAlignRight">
      <title-bar class="no-drag" parentWindowName="PllManualSelectWindow" style=""/>
    </div>
  </div>
  <div id="separator-line-cross" />
  <div class="stackPanel" style="grid-row: 3 / span 1; height:550px;">
    <div class="stackPanel" style="width:800px; margin-top:20px; margin-left:85px;">
      <h2 class="attention-title" style="background:#3B3838" >Attentions</h2>
      <div class="attention-content" style="height:100px;">
        Setting Range
        Input （MHz）: 0.008 ~ 750 ( Diff ) ; 0.008 ~ 250 ( LVCMOS )
        Output ( MHz ) : 0.100 ~ 1028 ( Diff ) ; 0.100 ~ 250 ( LVCMOS )
      </div>
    </div>
    <div class="stackPanel" style="width:800px; height:270px; margin-top:20px; margin-left:85px; background:rgba(236,222,204,0.2);">
      <div class="wrapPanel" style="margin-left:65px; margin-top:50px;">
        <h3 style="width:150px; height:42px; line-height:42px; text-align:center ; background:rgba(59,56,56,0.9);" >Pll Id : </h3>
        <input class="textBox-01" v-model="pllId"
                  style="margin-left:40px; padding-left:55px; padding-right:15px; width:108px; height:42px; text-align:left; border-radius:2px;">
        <div class="Align-Content-Center" style="margin-left:122px; width:180px; height:42px; border-radius:6px; background:#8FB752; font-size:16px; box-shadow:5px 5px 2px rgba(0,0,0,0.5); cursor:default;"
                 v-on:click="selectFileClicked">Select Register File</div>
      </div>
      <div class="wrapPanel" style="margin-left:65px; margin-top:50px;">
        <h3 style="width:150px; height:42px; line-height:42px; text-align:center ; background:rgba(59,56,56,0.9);" >Register File : </h3>
        <input class="textBox-01" v-model="regFileName"
                  style="margin-left:40px; padding-left:15px; padding-right:15px; width:452px; height:42px; text-align:left; border-radius:2px;">
      </div>
    </div>
    <div v-on:click="clickButton" >
      <program-button ref="programBtn01" ButtonText="Program" style="margin-top:20px; margin-left:155px; transform:scale(1.212, 0.92);"/>
    </div>
  </div>
</div> 
</template>

<script>
  const { dialog } = require('electron').remote;
  var fs = require('fs');
  var readline = require('readline');
  import TitleBar from './TitleBar.vue'
  import ProgramButton from './ProgramButton.vue'
  import {PllClockInfo, ResultCodeInfo, PllRunMode} from '../../../main/AEConsoleBoard_pb';
  import {AEConsoleGatewayClient} from '../../../main/AEConsoleGateway_grpc_web_pb';

  var client = new AEConsoleGatewayClient('http://127.0.0.1:10002', null, null);
  var request = new PllClockInfo();


  export default {
    name: 'pll-manual-select-dialog',
    components: {TitleBar, ProgramButton  },
    data() {
      return {
        pllId : '',
        regFileName: '',
      }
    },
    methods: {
      selectFileClicked:function() {
        var selectedFilePath = dialog.showOpenDialog(
        {
          title: '寄存器文件选择',                       // 对话框的标题
          defaultPath: '',                              // 默认的文件名字
          filters: [
            {
              name: 'txt',
              extensions: ['txt']                       // 只允许选择 xxx.bin 类型的文件（文件类型可以指定多个，用 "," 隔开）
            }
          ],
          buttonLabel: '选择'                           // 自定义按钮文本显示内容
        });
        this.regFileName = selectedFilePath[0];
      },
      clickButton:function()
      {
        var fRead = fs.createReadStream(this.regFileName);
        var objReadline = readline.createInterface({
            input:fRead
        });
        var arr_Addr = new Array();
        var arr_Value = new Array();
        objReadline.on('line',function (line) 
        {
            if (line[0] == '0')
            {
              arr_Addr.push(line.split(',')[0]);
              arr_Value.push(line.split(',')[1]);
            }
        });
        objReadline.on('close',function () {          
            request.setPllid(1);
            request.setPllrunmode(PllRunMode.FREERUNMODE);
            request.setInputfrequency(54.0);
            request.setConfigfilepath(this.regFileName);
            request.setRegaddressesList(arr_Addr);
            request.setRegvaluesList(arr_Value);

            client.setPllClock(request, {}, (err, response) => {
              if (err) {
                alert(`Unexpected error for setPllClock: code = ${err.code}` +
                            `, message = "${err.message}"`);
              } 
              else 
              {
                var code = response.getResultcode();
                
                this.$refs.programBtn01.IsPrograming = false;
              }
            });
            alert("close");
        });
      }
    }
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css" scoped>
  
  #main-grid-pll-manual {
    width: 995px;
    height: 600px;
    grid-template-rows: 43px 2px 555px;
    background-image: url('../../assets/background_client2.png');
    background-size:cover;
  }

  #title-grid {
    grid-row: 1 / span 1;
    grid-template-columns: auto 105px;
  }

  #separator-line-cross {
    width: 995px;
    height: 2px;
    background-color: whitesmoke;
  }
</style>