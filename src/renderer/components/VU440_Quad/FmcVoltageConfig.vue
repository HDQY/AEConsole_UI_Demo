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
    <div class="stackPanel" style="width:800px; margin-top:12px; ">
      <div id="div-FpgaIdSelect" style="width:800px; height:10px;">
        <div class="wrapPanel" style="margin: 5px 10px 0px 0px; ">
          <div class="radio fpga-select-radio" >
            <input type="radio" id="fpga_1_FmcVoltageConfig" v-model="fpgaId" value="fpga1" checked="checked"/>
            <label for="fpga_1_FmcVoltageConfig" >FPGA1</label>
          </div>
          <div class="radio fpga-select-radio" >
            <input type="radio" id="fpga_2_FmcVoltageConfig" v-model="fpgaId" value="fpga2"/>
            <label for="fpga_2_FmcVoltageConfig" >FPGA2</label>
          </div>
          <div class="radio fpga-select-radio" >
            <input type="radio" id="fpga_3_FmcVoltageConfig" v-model="fpgaId" value="fpga3"/>
            <label for="fpga_3_FmcVoltageConfig" >FPGA3</label>
          </div>
          <div class="radio fpga-select-radio" >
            <input type="radio" id="fpga_4_FmcVoltageConfig" v-model="fpgaId" value="fpga4"/>
            <label for="fpga_4_FmcVoltageConfig" >FPGA4</label>
          </div>
        </div>
      </div>
      <div class="stackPanel" style="height:420px; margin-top:31px; background-image:linear-gradient(to right, #7E624F 0%, #A38C7A 100%);">
        <div class="wrapPanel" style="margin-left:30px;">
          <voltage-control ref="voltageControl_Fmc3" fmc-id="Fmc 3" FmcName="TOP FMC 3" :InitIsVoltageFixed="false" style="margin-left:5px; margin-top:15px;"/>
          <voltage-control ref="voltageControl_Fmc7" fmc-id="Fmc 7" FmcName="BOTTOM FMC 7" :InitIsVoltageFixed="true" FmcNameBackground="#755D4C" style="margin-left:15px; margin-top:15px;"/>
          <voltage-control ref="voltageControl_Fmc6" fmc-id="Fmc 6" FmcName="BOTTOM FMC 6" :InitIsVoltageFixed="true" FmcNameBackground="#755D4C" style="margin-left:15px; margin-top:15px;"/>
          <voltage-control ref="voltageControl_Fmc2" fmc-id="Fmc 2" FmcName="TOP FMC 2" :InitIsVoltageFixed="true" style="margin-left:15px; margin-top:15px;"/>
        </div>
        <div class="wrapPanel" style="width:800px; height:145px;">
          <div id="div_test" style="margin-left:340px; margin-top:50px; width:120px; height:100px;">
            <div class="stackPanel  Vertical-Align-Center Horiz-Align-Center">
              <p style="width:82px; text-align:center; height:30px; line-height:30px;">FPGA</p>
              <p style="width:82px; text-align:center; height:30px; line-height:30px;">( VU440 )</p>
            </div>
          </div>
        </div>
        <div class="wrapPanel" style="margin-left:30px; margin-top:10px;">
          <voltage-control ref="voltageControl_Fmc4" fmc-id="Fmc 4" FmcName="TOP FMC 4" :InitIsVoltageFixed="false" style="margin-left:5px; margin-top:8px;"/>
          <voltage-control ref="voltageControl_Fmc8" fmc-id="Fmc 8" FmcName="BOTTOM FMC 8" :InitIsVoltageFixed="true" FmcNameBackground="#755D4C" style="margin-left:15px; margin-top:8px;"/>
          <voltage-control ref="voltageControl_Fmc5" fmc-id="Fmc 5" FmcName="BOTTOM FMC 5" :InitIsVoltageFixed="true" FmcNameBackground="#755D4C" style="margin-left:15px; margin-top:8px;"/>
          <voltage-control ref="voltageControl_Fmc1" fmc-id="Fmc 1" FmcName="TOP FMC 1" :InitIsVoltageFixed="true" style="margin-left:15px; margin-top:8px;"/>
        </div>
      </div>
      <div class="wrapPanel" style="margin-top:3px;">
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
  import ProgramButton from '../CustomControl/ProgramButton.vue';
  import VoltageControl from '../CustomControl/VoltageControl.vue';
  

  var client = new AEConsoleGatewayClient('http://127.0.0.1:10002', null, null);
  var request = new FmcVoltageInfo();

  export default {
    name: 'fmc-voltage-config',
    components: {VoltageControl, ProgramButton },
    data() {
      return {
        deviceId: "202103220001",
        fpgaId : 'fpga1',
      }
    },
    methods: {
        clickButton:function() {
        this.$refs.programBtn01.IsPrograming = true;

          var voltageControls = [
              this.$refs.voltageControl_Fmc1, this.$refs.voltageControl_Fmc2, this.$refs.voltageControl_Fmc3, this.$refs.voltageControl_Fmc4,
              this.$refs.voltageControl_Fmc5, this.$refs.voltageControl_Fmc6, this.$refs.voltageControl_Fmc7, this.$refs.voltageControl_Fmc8,
          ];

          var isOK_All = true;
          for (var i = 0; i < voltageControls.length; i++)
          {
              request.setDeviceid(this.deviceId);
              request.setFpgaid(this.fpgaId);
              request.setFmcid(i + 1);
              request.setVoltagevalueindex(voltageControls[i].voltageIndex);
              request.setIswritetoeeprom(true);

              if (voltageControls[i].IsVoltageFixed)
              {
                continue;
              }

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
  }

  #div_test {
    background-image: url('../../assets/background_hardware.png');
  }
</style>