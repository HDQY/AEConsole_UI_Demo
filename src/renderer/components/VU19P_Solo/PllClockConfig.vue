<template>
  <div id="pllConfig-grid" style="padding-left:32px;">
    <h1 style="margin-top:20px;">PLL Clock Configuration</h1>
    <div class="stackPanel" style="width:800px; margin-top:5px;">
      <h2 class="attention-title" >Attentions</h2>
      <div class="attention-content" style="height:100px;">
        Setting Range
        Input （MHz）: 0.008 ~ 750 ( Diff ) ; 0.008 ~ 250 ( LVCMOS )
        Output ( MHz ) : 0.100 ~ 1028 ( Diff ) ; 0.100 ~ 250 ( LVCMOS )
      </div>
    </div>
    <div class="stackPanel" style="width:820px; height:420px; margin-top:12px; background-image:linear-gradient(to right, #7E624F 0%, #A38C7A 97.56%, transparent 97.56%, transparent 100%);">
      <div class="wrapPanel">
        <div class="stackPanel" style="margin-left:25px; margin-top:16px;">
          <h3 style="height:27px; width:185px; line-height:27px; text-align:center; background-color:#A9685D;">Input Clock</h3>
          <div class="stackPanel" style="margin-top:2px; width:185px; height:375px; background-color:#55473E;">
             <div class="radio inputItem_Radio" style="margin-top:15px; margin-left:12px;">
              <input type="radio" id="FreeRun_54MHz" name="groupName_01" v-on:click="clickButton"/>
              <label for="FreeRun_54MHz" style="text-align:left; line-height:34px;">     FreeRun  54MHz</label>
            </div>
          </div>
        </div>
        <div class="stackPanel" style="margin-left:5px; margin-top:16px;">
          <h3 style="height:27px; width:420px; line-height:27px; text-align:center; background-color:#A9685D;">Output Clock</h3>
          <div class="stackPanel" style="height:375px; width:450px; margin-left:0px; margin-top:2px; background-image:linear-gradient(to right, #55473E 0%, #55473E 93.33%, transparent 93.33%, transparent 100%);"/>
          <div class="stackPanel" style="position:absolute; height:375px; width:600px; margin-left:0px; margin-top:29px;">
            <h3 style="margin-top:22px; height:27px; width:420px; line-height:27px; text-align:center;">Require Frequence</h3>
            <div class="stackPanel ScrollbarStyle-01" style="overflow:auto;">
              <output-clock-control ref="outputControl_01" class="clockControl" value="10.0" PromptMsg_Top="FPGA" PromptMsg_Bottom="HP20__GC01" PromptMsg_Bottom2="BM43/BN43" init-is-my-enabled ="true"/>
              <output-clock-control ref="outputControl_02" class="clockControl" value="20.0" PromptMsg_Top="FPGA" PromptMsg_Bottom="HP26__GC02" PromptMsg_Bottom2="AY50/BA50" init-is-my-enabled ="true"/>
              <output-clock-control ref="outputControl_03" class="clockControl" value="30.0" PromptMsg_Top="FPGA" PromptMsg_Bottom="HP32__GC03" PromptMsg_Bottom2="W52/W53" init-is-my-enabled ="true"/>
              <output-clock-control ref="outputControl_04" class="clockControl" value="40.0" PromptMsg_Top="FPGA" PromptMsg_Bottom="HP35__GC04" PromptMsg_Bottom2="F56/F57" init-is-my-enabled ="true"/>
              <output-clock-control ref="outputControl_05" class="clockControl" value="50.0" PromptMsg_Top="FPGA" PromptMsg_Bottom="Global CLK5" PromptMsg_Bottom2=" " init-is-my-enabled ="true"/>
              <output-clock-control ref="outputControl_06" class="clockControl" value="60.0" PromptMsg_Top="FPGA" PromptMsg_Bottom="HP38__GC06" PromptMsg_Bottom2="R42/R43" />
              <output-clock-control ref="outputControl_07" class="clockControl" value="70.0" PromptMsg_Top="FPGA" PromptMsg_Bottom="HP71__GC07" PromptMsg_Bottom2="F32/E32" />
              <output-clock-control ref="outputControl_08" class="clockControl" value="80.0" PromptMsg_Top="FPGA" PromptMsg_Bottom="HP77__GC08" PromptMsg_Bottom2="K9/K8" />
              <output-clock-control ref="outputControl_09" class="clockControl" value="90.0" PromptMsg_Top="FPGA" PromptMsg_Bottom="HP60__GC09" PromptMsg_Bottom2="BR15/BR14" />
              <output-clock-control ref="outputControl_10" class="clockControl" value="100.0" PromptMsg_Top="FPGA" PromptMsg_Bottom="Global CLK10" PromptMsg_Bottom2=" "/>
              <div style="height:172px;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapPanel" style="margin-top:8px;">
        <div v-on:click="clickButton">
          <program-button ref="programBtn01" ButtonText="Program" class="Align-Content-Center" style="margin-top:10px; width:660px; height:50px; font-size: 20px;"/>
        </div>
        <div class="Align-Content-Center" style="margin-top:10px; width:140px; height:50px; background:#8FB752; font-size: 20px;"> </div>
      </div>
    </div>
  </div> 
</template>

<script>
  import {PllClockInfo, ResultCodeInfo, PllRunMode} from '../../../main/AEConsoleBoard_pb';
  import {AEConsoleGatewayClient} from '../../../main/AEConsoleGateway_grpc_web_pb';
  import OutputClockControl from '../CustomControl/OutputClockControl.vue';
  import ProgramButton from '../CustomControl/ProgramButton.vue';

  var client = new AEConsoleGatewayClient('http://127.0.0.1:10002', null, null);
  var request = new PllClockInfo();

  export default {
    name: 'pll-clock-config',
    components: {OutputClockControl, ProgramButton  },
    methods: {
      clickButton:function(){
        this.$refs.programBtn01.IsPrograming = true;

        var outputControls = [
              this.$refs.outputControl_01, this.$refs.outputControl_02, this.$refs.outputControl_03, this.$refs.outputControl_04,
              this.$refs.outputControl_05, this.$refs.outputControl_06, this.$refs.outputControl_07, this.$refs.outputControl_08,
              this.$refs.outputControl_09, this.$refs.outputControl_10
          ];

        var filePath = "Si5345_ZDM_50M.txt";
        request.setPllid(1);
        request.setPllrunmode(PllRunMode.FREERUNMODE);
        request.setInputfrequency(54.0);
        request.setConfigfilepath(filePath);
        request.clearOutputenablesList();
        request.clearOutputfrequencysList();
        for (var i = 0; i < 10; i++)
        {
          request.addOutputenables(outputControls[i].IsMyEnabled, i);
          request.addOutputfrequencys(outputControls[i].inputVal, i);
        }

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
      }
    }
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css" scoped>

  #pllConfig-grid {
    width: 900px;
    height: 750px;
    grid-template-rows: auto auto 1fr auto auto;
  }

  .inputItem_Radio
  {
    margin-top: 2px; 
    margin-left: 7px;
    width: 170px;
    height: 34px; 
  }

  .clockControl
  {
    margin-left: 30px;
    margin-top: 10px;
    width: 530px; 
  }

  /* RadioButton 样式 */
  .radio {
    position: relative;
    display: inline-block;
  }

  .radio input {
    width: 160px; 
    height: 34px;
    opacity: 0;
  }

  .radio label {
    position: absolute;
    left: 0;
    width: 160px; 
    height: 34px;
    color: whitesmoke;
    background:#755D4D;
    font-size: 16px;
  }

  .radio input:checked+label{
    position: absolute;
    left: 0;
    width: 160px; 
    height: 34px;
    color:white;
    background: #B5685F;
    font-size: 15px;
  }
</style>