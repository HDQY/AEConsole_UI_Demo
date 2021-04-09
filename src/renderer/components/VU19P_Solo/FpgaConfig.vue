<template>
  <div id="fpgaConfig-grid" style="padding-left:32px;">
    <h1 style="margin-top:20px;">FPGA Configuration</h1>
    <div class="stackPanel" style="width:800px; margin-top:5px;">
      <h2 class="attention-title" >Attentions</h2>
      <div class="attention-content" style="height:75px;">
        1. Configure FPGA using exiting bin file.
        2. Save the selected bin file to micro SD card.
      </div>
    </div>
    <div class="stackPanel" style="width:800px; height:465px; margin-top:12px; background-image:linear-gradient(to right, #7E624F 0%, #A38C7A 100%);">
      <h3 style="height:27px; width:800px; line-height:27px; text-align:center; background-color:#A9685D;">Main FPGA Configuration</h3>
      <div id="div_Config" class="wrapPanel" style="width:800px; height:130px; margin-top:10px;">
        <div style="margin-left:15px; width:252px; height:130px; background:rgba(88,75,66,0.75);">
          <div class="radio RadioItem Align-Center" >
            <input type="radio" id="radio_ConfigFpga" name="groupName_01" checked="true"/>
            <label for="radio_ConfigFpga" style="text-align:center; line-height:75px;">Config From PC</label>
          </div>
        </div>
        <div style="margin-left:10px; margin-right:15px; width:508px; height:130px; background:rgba(88,75,66,0.75);">
          <div class="stackPanel" >
            <div class="Align-Content-Center" style="margin-left:18px; margin-top:15px; width:220px; height:42px; border-radius:6px; background:#8FB752; font-size: 16px;"
                 v-on:click="selectBinFile">Select download file</div>
            <input class="textBox-01" value="FPGAx_TOP.bin" 
                  style="margin-top:10px; margin-left:18px; padding-left:15px; width:458px; height:42px; text-align:left; border-radius:2px;">
            <progress ref="progressBar_Process" value="0" max="100" style="margin-top:5px; margin-left:18px; width:475px; height:20px;"></progress> 
          </div>
        </div>
      </div>
      <div id="div_Reconfig" class="wrapPanel" style="width:800px; height:130px; margin-top:10px; ">
        <div style="margin-left:15px; width:252px; height:130px; background:rgba(88,75,66,0.75);">
          <div class="radio RadioItem Align-Center" >
            <input type="radio" id="radio_ReconfigFpga" name="groupName_01"/>
            <label for="radio_ReconfigFpga" style="text-align:center; line-height:75px;">Reconfig FPGA</label>
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
      <div class="wrapPanel" style="margin-top:8px;">
        <div v-on:click="clickButton">
          <program-button ref="programBtn01" ButtonText="Program" class="Align-Content-Center" style="margin-top:10px; width:660px; height:50px; font-size: 20px;"/>
        </div>
        <div ref="label_ProgramStatus" class="Align-Content-Center" style="margin-top:10px; width:140px; height:50px; background:#8FB752;"> </div>
      </div>
    </div>
  </div> 
</template>

<script>
  const fs = require('fs');
  import {FpgaConfigInfo, OperationType, FpgaConfigStatus, FpgaConfigProgress } from '../../../main/AEConsoleBoard_pb';
  import {FileRequest, FileReply} from '../../../main/AEConsoleBoard_pb';
  import {AEConsoleGatewayClient} from '../../../main/AEConsoleGateway_grpc_web_pb';
  import SwitchButton from '../CustomControl/SwitchButton.vue';
  import ProgramButton from '../CustomControl/ProgramButton.vue';

  var client = new AEConsoleGatewayClient('http://127.0.0.1:10002', null, null);
  var fpgaConfigRequest = new FpgaConfigInfo();

  export default {
    name: 'fpga-config',
    components: {SwitchButton, ProgramButton  },
    data() {
      return {
        interval_UpdateProgress: '',
        interval_UpdateResult: '',
        isRunning_DownloadDDR: false,
        isOk_DownloadDDR: false,
        isOk_Program_Once: false,
        retryCount: 3,
      }
    },
    methods: {
      selectBinFile:function() {
        },
      updateProgress:function() {
          var progressBar_Process = this.$refs.progressBar_Process;

          client.getFpgaConfigProgress(fpgaConfigRequest, {}, (err, response) => {
          if (err) {
            alert(`Unexpected error for getFpgaConfigProgress: code = ${err.code}` +
                        `, message = "${err.message}"`);
          } 
          else 
          {
            var progress = response.getProgress();
            progressBar_Process.value = progress;

            if (progress == 100)
            {
              clearInterval(this.interval_UpdateProgress);
            }
          }
        });
        },
      updateResult:function() {
        },
      clickButton:function() {
        //导入child_process模块的exec函数
        var child_process = require('child_process');
        const child = child_process.execFile('./FileUploadClient', ['FPGA_TOP.bin'],  function (error, stdout, stderr) {
            alert('stdout: ' + stdout);
            alert('stderr: ' + stderr);
            if (error !== null) {
              alert('exec error: ' + error);
            }
        });
        return;

        var e = arguments[0] || window.event;  
        var src = e.srcElement || e.target;       // src 就是事件的触发源

        this.$refs.programBtn01.IsPrograming = true;
        this.$refs.label_ProgramStatus.innerText = " ";
        this.$refs.label_ProgramStatus.style.background = "#8FB752";

        fpgaConfigRequest.setFpgaid(1);
        fpgaConfigRequest.setOperationtype(OperationType.CONFIGFPGA);
        fpgaConfigRequest.setBinfilepath("FileDemos\\FPGA_TOP.bin");

        client.startFpgaConfig(fpgaConfigRequest, {}, (err, response) => {
          if (err) {
            alert(`Unexpected error for configFpga: code = ${err.code}` +
                        `, message = "${err.message}"`);
          } 
          else 
          {
            this.$refs.programBtn01.IsPrograming = false;

            var code = response.getResultcode();
            if (code == 0)
            {
              this.$refs.label_ProgramStatus.innerText = "READY";
              this.$refs.label_ProgramStatus.style.background = "#8FB752";
            }
            else
            {
              this.$refs.label_ProgramStatus.innerText = "FAILED";
              this.$refs.label_ProgramStatus.style.background = "#FF0000";
            }
          }
        });
        this.interval_UpdateProgress = setInterval(this.updateProgress, 1000);
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
    grid-template-rows: auto auto 1fr auto auto;
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
  .radio {
    position: relative;
    display: inline-block;
  }

  .radio input {
    width: 200px;
    height: 75px;
    opacity: 0;
  }

  .radio label {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 200px;
    height: 75px;
    color: whitesmoke;
    background:#3B3838;
    font-size: 16px;
  }

  .radio input:checked+label{
    position: absolute;
    left: 0;
    width: 200px;
    height: 75px;
    color:whitesmoke;
    background: #282328;
    font-size: 16px;
  }
</style>