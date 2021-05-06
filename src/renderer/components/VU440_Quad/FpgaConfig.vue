<template>
  <div id="fpgaConfig-grid" style="padding-left:32px;">
    <h1 style="margin-top:20px; grid-row: 1 / span 1;">FPGA Configuration</h1>
    <div class="stackPanel" style="grid-row: 2 / span 1; width:800px; margin-top:5px;">
      <h2 class="attention-title" >Attentions</h2>
      <div class="attention-content" style="height:75px;">
        1. Configure FPGA using exiting bin file.
        2. Save the selected bin file to micro SD card.
      </div>
    </div>
    <div id="div-FpgaIdSelect" style="grid-row: 3 / span 1; height:30px;">
      <div class="wrapPanel" style="margin: 5px 10px 0px 0px; ">
        <div class="radio fpga-select-radio" >
          <input type="radio" id="fpga_1" v-model="fpgaId" value="fpga1" checked="checked"/>
          <label for="fpga_1" >FPGA1</label>
        </div>
        <div class="radio fpga-select-radio" >
          <input type="radio" id="fpga_2" v-model="fpgaId" value="fpga2"/>
          <label for="fpga_2" >FPGA2</label>
        </div>
        <div class="radio fpga-select-radio" >
          <input type="radio" id="fpga_3" v-model="fpgaId" value="fpga3"/>
          <label for="fpga_3" >FPGA3</label>
        </div>
        <div class="radio fpga-select-radio" >
          <input type="radio" id="fpga_4" v-model="fpgaId" value="fpga4"/>
          <label for="fpga_4" >FPGA4</label>
        </div>
      </div>
    </div>
    <div class="stackPanel" style="grid-row: 4 / span 1; width:800px; margin-top:12px; background-image:linear-gradient(to right, #7E624F 0%, #A38C7A 100%);">
      <h3 style="height:27px; width:800px; line-height:27px; text-align:center; background-color:#A9685D;">Main FPGA Configuration</h3>
      <div id="div_Config" class="wrapPanel" style="width:800px; height:130px; margin-top:10px;">
        <div style="margin-left:15px; width:252px; height:130px; background:rgba(88,75,66,0.75);">
          <div class="radio2 RadioItem Align-Center" >
            <input type="radio" id="radio_ConfigFpga" title="ss" name="groupName_ConfigType" checked="checked"/>
            <label for="radio_ConfigFpga" title="ss" style="text-align:center; line-height:75px;">Config From PC</label>
          </div>
        </div>
        <div style="margin-left:10px; margin-right:15px; width:508px; height:130px; background:rgba(88,75,66,0.75);">
          <div class="stackPanel" >
            <div class="Align-Content-Center" style="margin-left:18px; margin-top:15px; width:220px; height:42px; border-radius:6px; background:#8FB752; font-size:16px; box-shadow:5px 5px 2px rgba(0,0,0,0.5); cursor:default;"
                 v-on:click="selectBinFile">Select download file</div>
            <input class="textBox-01" v-model="binFileName"
                  style="margin-top:10px; margin-left:18px; padding-left:15px; padding-right:15px; width:445px; height:42px; text-align:left; border-radius:2px;">
            <progress ref="progressBar_Process" value="0" max="100" style="margin-top:5px; margin-left:18px; width:475px; height:20px;"></progress> 
          </div>
        </div>
      </div>
      <div id="div_Reconfig" class="wrapPanel" style="width:800px; height:130px; margin-top:10px; ">
        <div style="margin-left:15px; width:252px; height:130px; background:rgba(88,75,66,0.75);">
          <div class="radio2 RadioItem Align-Center" >
            <input type="radio" id="radio_ReconfigFpga" title="ss" name="groupName_ConfigType"/>
            <label for="radio_ReconfigFpga" title="ss" style="text-align:center; line-height:75px;">Reconfig FPGA</label>
          </div>
        </div>
        <div style="opacity:0.6; margin-left:10px; margin-right:15px; width:508px; height:130px; background:rgba(88,75,66,0.75);">
          <div class="stackPanel" >
            <input class="textBox-01" value="" 
                  style="margin-top:65px; margin-left:18px; padding-left:15px; width:458px; height:42px; text-align:left; border-radius:2px;">
          </div>
        </div>
      </div>
      <div class="wrapPanel Vertical-Content-Align-Center" style="margin-top:20px; margin-left:0px; width:800px; height:80px; background:#584B42;">
        <p style="margin-left:30px;">Configure to FPGA</p>
        <switch-button ref="btn1" init-is-switch-on="true" style="margin-left:20px;"/>
        <p style="margin-left:100px;">Save to SD card</p>
        <switch-button ref="btn2" init-is-switch-on="" style="margin-left:20px;"/>
      </div>
    </div>
    <div class="wrapPanel" style="grid-row: 5 / span 1; margin-top:8px; margin-bottom:30px;">
      <div v-on:click="clickButton">
        <program-button ref="programBtn01" ButtonText="Program" class="Align-Content-Center" style="margin-top:10px; width:660px; height:50px; font-size: 20px;"/>
      </div>
      <div ref="label_ProgramStatus" class="Align-Content-Center" style="margin-top:10px; width:140px; height:50px; background:#8FB752;"> </div>
    </div>
  </div> 
</template>

<script>
  const fs = require('fs');
  const { dialog } = require('electron').remote;
  import {FpgaConfigInfo, OperationType, FpgaConfigStatus, FpgaConfigProgress } from '../../../main/AEConsoleBoard_pb';
  import {ConfigStatus, CONFIGFPGA, RECONFIGFPGA} from '../../../main/AEConsoleBoard_pb';
  import {AEConsoleGatewayClient} from '../../../main/AEConsoleGateway_grpc_web_pb';
  import SwitchButton from '../CustomControl/SwitchButton.vue';
  import ProgramButton from '../CustomControl/ProgramButton.vue';

  var client = new AEConsoleGatewayClient();
  var fpgaConfigRequest = new FpgaConfigInfo();

  export default {
    name: 'fpga-config',
    components: {SwitchButton, ProgramButton  },
    data() {
      return {
        deviceId: "",
        fpgaId : "fpga1",
        binFileName: '',
        interval_UpdateConfigStatus: '',
      }
    },
    mounted() {
      this.deviceId = this.$store.getters.deviceId;
    },
    methods: {
      selectBinFile:function() {
        var selectedFilePath = dialog.showOpenDialog(
        {
          title: '文件选择',                             // 对话框的标题
          defaultPath: '',                              // 默认的文件名字
          filters: [
            {
              name: 'bin',
              extensions: ['bin']                       // 只允许选择 xxx.bin 类型的文件（文件类型可以指定多个，用 "," 隔开）
            }
          ],
          buttonLabel: '选择'                           // 自定义按钮文本显示内容
        });
        this.binFileName = selectedFilePath[0];
      },
      updateConfigStatus:function() {
          client.getFpgaConfigStatus(fpgaConfigRequest, {}, (err, response) => {
            
            var progressBar_Process = this.$refs.progressBar_Process;
            if (err) {
              alert(`Unexpected error for getFpgaConfigStatus: code = ${err.code}` +
                          `, message = "${err.message}"`);
            } 
            else 
            {
              var configStatus = response.getConfigstatus();
              var progress = response.getProgress();

              progressBar_Process.value = progress;
              if (configStatus != ConfigStatus.CONFIGING)
              {
                progressBar_Process.value = 100;
                this.$refs.programBtn01.IsPrograming = false;
                if (configStatus == ConfigStatus.CONFIGSUCCEED)
                {
                  this.$refs.label_ProgramStatus.innerText = "READY";
                  this.$refs.label_ProgramStatus.style.background = "#8FB752";
                }
                else if (configStatus == ConfigStatus.CONFIGSUCCEED)
                {
                  this.$refs.label_ProgramStatus.innerText = "FAILED";
                  this.$refs.label_ProgramStatus.style.background = "#FF0000";
                }
                clearInterval(this.interval_UpdateConfigStatus);
              }
            }
          });
        },
      clickButton:function() {
        
        this.$refs.progressBar_Process.value = 0;
        this.$refs.programBtn01.IsPrograming = true;
        this.$refs.label_ProgramStatus.innerText = " ";
        this.$refs.label_ProgramStatus.style.background = "#8FB752";

        fpgaConfigRequest.setDeviceid(this.deviceId);
        fpgaConfigRequest.setFpgaid(this.fpgaId);
        //fpgaConfigRequest.setOperationtype(CONFIGFPGA);
        fpgaConfigRequest.setOperationtype(2); 
        fpgaConfigRequest.setFilepath(this.binFileName); 

        client.startFpgaConfig(fpgaConfigRequest, {}, (err, response) => {
                if (err) {
                  alert(`Unexpected error for startFpgaConfig: code = ${err.code}` +
                              `, message = "${err.message}"`);
                } 
                else 
                {
                    var msg = "startFpgaConfig(): resultCode = " + response.getResultcode();
                    //alert(msg);
                }
              });

        //导入child_process模块的exec函数
        var child_process = require('child_process');
        /*
        const child = child_process.execFileSync('./FpgaConfig', [this.binFileName],  function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
              alert('exec error: ' + error);
            }
        });
        */
       
        //const child = child_process.execFile('./FpgaConfig', [this.deviceId, this.fpgaId, this.binFileName]);  
        this.interval_UpdateConfigStatus = setInterval(this.updateConfigStatus, 2000);
      },
    }
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css" scoped>

  #fpgaConfig-grid {
    width: 900px;
    height: 750px;
    grid-template-rows: auto auto auto 1fr auto;
  }

  .RadioItem
  {
    width: 200px;
    height: 75px; 
  }

  p {
    text-align: center;
    width: 180px;
    height: 80px;
    line-height: 80px;
    font-size: 16px;
  }

  /* RadioButton 样式 */
  .radio2 {
    position: relative;
    display: inline-block;
  }

  .radio2 input {
    width: 200px;
    height: 75px;
    opacity: 0;
  }

  .radio2 label {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 200px;
    height: 75px;
    color: whitesmoke;
    background:#3B3838;
    font-size: 16px;
  }

  .radio2 input:checked+label {
    position: absolute;
    left: 0;
    width: 200px;
    height: 75px;
    color:whitesmoke;
    background: #282328;
    font-size: 16px;
  }
</style>