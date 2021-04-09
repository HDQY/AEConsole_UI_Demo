<template>
  <div id="fmcConfig-grid" style="padding-left:32px;">
    <h1 style="margin-top:20px;">FMC Voltage Setting</h1>
    <div class="stackPanel" style="width:800px; margin-top:5px;">
      <h2 class="attention-title" >Attentions</h2>
      <div class="attention-content" style="height:100px;">
        Set [Auto Restore] to 'ON' will save your setting.
        When your next power on, FMCs' voltage will automaticly restore the saved value.
        Please check your FMC option board's schematics before setting the FMC Voltage.
      </div>
    </div>
    <div class="stackPanel" style="width:800px; height:440px; margin-top:12px; background-image:linear-gradient(to right, #7E624F 0%, #A38C7A 100%);">
      <div class="stackPanel">
        <div class="wrapPanel" style="margin-left:30px; margin-top:8px;">
          <voltage-control-2 ref="voltageControl_Fmc4" fmc-id="Fmc 4" style="margin-left:15px; margin-top:15px;"/>
          <voltage-control-2 ref="voltageControl_Fmc3" fmc-id="Fmc 3" style="margin-left:55px; margin-top:15px;"/>
          <voltage-control-2 ref="voltageControl_Fmc2" fmc-id="Fmc 2" style="margin-left:55px; margin-top:15px;"/>
          <voltage-control-2 ref="voltageControl_Fmc1" fmc-id="Fmc 1" style="margin-left:55px; margin-top:15px;"/>
        </div>
        <div class="wrapPanel" style="width:800px; height:200px;">
          <div class="stackPanel" style="margin-top:8px; margin-left:45px; ">
            <voltage-control-2 ref="voltageControl_Fmc5" fmc-id="Fmc 5"/>
            <voltage-control-2 ref="voltageControl_Fmc6" fmc-id="Fmc 6"/>
          </div>
          <div id="div_test" style="margin-left:160px; margin-top:50px; width:120px; height:125px;">
            <div class="stackPanel  Vertical-Align-Center Horiz-Align-Center">
              <p style="width:82px; text-align:center; height:30px; line-height:30px;">FPGA</p>
              <p style="width:82px; text-align:center; height:30px; line-height:30px;">( VU19P )</p>
            </div>
          </div>
          <div class="stackPanel" style="margin-top:8px; margin-left:145px; ">
            <voltage-control-2 ref="voltageControl_Fmc12" fmc-id="Fmc 12"/>
            <voltage-control-2 ref="voltageControl_Fmc11" fmc-id="Fmc 11"/>
          </div>
        </div>
        <div class="wrapPanel" style="margin-left:30px;">
          <voltage-control-2 ref="voltageControl_Fmc7" fmc-id="Fmc 7" style="margin-left:15px; margin-top:8px;"/>
          <voltage-control-2 ref="voltageControl_Fmc8" fmc-id="Fmc 8" style="margin-left:55px; margin-top:8px;"/>
          <voltage-control-2 ref="voltageControl_Fmc9" fmc-id="Fmc 9" style="margin-left:55px; margin-top:8px;"/>
          <voltage-control-2 ref="voltageControl_Fmc10" fmc-id="Fmc 10" style="margin-left:55px; margin-top:8px;"/>
        </div>
        </div>
      <div class="wrapPanel" style="margin-top:28px;">
        <div v-on:click="clickButton">
          <program-button ref="programBtn01" ButtonText="Program" class="Align-Content-Center" style="margin-top:10px; width:660px; height:50px; font-size: 20px;"/>
        </div>
        <div class="Align-Content-Center" style="margin-top:10px; width:140px; height:50px; background:#8FB752; font-size: 20px;"> </div>
      </div>
    </div>
  </div> 
</template>

<script>
  import {FmcVoltageInfo, ResultCodeInfo} from '../../../main/AEConsoleBoard_pb';
  import {AEConsoleGatewayClient} from '../../../main/AEConsoleGateway_grpc_web_pb';
  import VoltageControl2 from '../CustomControl/VoltageControl2.vue';
  import ProgramButton from '../CustomControl/ProgramButton.vue';
  

  var client = new AEConsoleGatewayClient('http://127.0.0.1:10002', null, null);
  var request = new FmcVoltageInfo();

  export default {
    name: 'fmc-voltage-config',
    components: {VoltageControl2, ProgramButton },
    methods: {
      clickButton:function() {
        this.$refs.programBtn01.IsPrograming = true;

          var voltageControls = [
              this.$refs.voltageControl_Fmc1, this.$refs.voltageControl_Fmc2, this.$refs.voltageControl_Fmc3, this.$refs.voltageControl_Fmc4,
              this.$refs.voltageControl_Fmc5, this.$refs.voltageControl_Fmc6, this.$refs.voltageControl_Fmc7, this.$refs.voltageControl_Fmc8,
              this.$refs.voltageControl_Fmc9, this.$refs.voltageControl_Fmc10, this.$refs.voltageControl_Fmc11, this.$refs.voltageControl_Fmc12,
          ];

          var isOK_All = true;
          for (var i = 0; i < voltageControls.length; i++)
          {
              request.setFpgaid(1);
              request.setFmcid(i + 1);
              request.setVoltagevalueindex(voltageControls[i].voltageIndex);
              request.setIswritetoeeprom(true);
              client.setFmcVoltage(request, {}, (err, response) => {
                if (err) {
                  alert(`Unexpected error for setFmcVlotage: code = ${err.code}` +
                              `, message = "${err.message}"`);
                } else {
                  var code = response.getResultcode();
                  if (code == 0)
                  {
                    isOK_All = false;
                  }
                  this.$refs.programBtn01.IsPrograming = false;
                }
              });
          } 
      }
    }
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css">
  
  #fmcConfig-grid {
    width: 900px;
    height: 750px;
    grid-template-rows: auto auto 1fr auto auto;
  }

  #div_test {
    background-image: url('../../assets/background_hardware.png');
  }
</style>