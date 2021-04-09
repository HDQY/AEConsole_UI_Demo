<template>
  <div id="powerControl-grid" style="padding-left:32px;">
    <h1 style="margin-top:20px;">Remote Power Control</h1>
    <div class="stackPanel" style="width:800px; margin-top:5px;">
      <h2 class="attention-title" >Attentions</h2>
      <div class="attention-content" style="height:57px;">
        In this wizard, user can remote control power ON/OFF of Core Module Board 1,2,3 and 4.
      </div>
    </div>
    <div class="stackPanel" style="width:800px; height:550px; margin-top:12px; background-image:linear-gradient(to right, #7E624F 0%, #A38C7A 100%);">
      <div class="wrapPanel powerOnOffPanel border Vertical-Content-Align-Center" v-on:click="clickButton">
        <p style="margin-left:30px;">FPGA1 Core Board</p>
        <power-button ref="powerButton_Fpga1" :InitIsPowerOn="true" style="margin-left:20px; transform:scaleY(0.85);"/>
        <p style="margin-left:100px;">Reconfig</p>
        <switch-button ref="reconfigButton_Fpga1" :InitIsSwitchOn="false" style="margin-left:20px; transform:scaleY(0.85);"/>
      </div>
      <div class="wrapPanel powerOnOffPanel border Vertical-Content-Align-Center" v-on:click="clickButton">
        <p style="margin-left:30px;">FPGA2 Core Board</p>
        <power-button ref="powerButton_Fpga2" :InitIsPowerOn="true" style="margin-left:20px; transform:scaleY(0.85);"/>
        <p style="margin-left:100px;">Reconfig</p>
        <switch-button ref="reconfigButton_Fpga2" :InitIsSwitchOn="false" style="margin-left:20px; transform:scaleY(0.85);"/>
      </div>
      <div class="wrapPanel powerOnOffPanel border Vertical-Content-Align-Center" v-on:click="clickButton">
        <p style="margin-left:30px;">FPGA3 Core Board</p>
        <power-button ref="powerButton_Fpga3" :InitIsPowerOn="true" style="margin-left:20px; transform:scaleY(0.85);"/>
        <p style="margin-left:100px;">Reconfig</p>
        <switch-button ref="reconfigButton_Fpga3" :InitIsSwitchOn="false" style="margin-left:20px; transform:scaleY(0.85);"/>
      </div>
      <div class="wrapPanel powerOnOffPanel border Vertical-Content-Align-Center" v-on:click="clickButton">
        <p style="margin-left:30px;">FPGA4 Core Board</p>
        <power-button ref="powerButton_Fpga4" :InitIsPowerOn="true" style="margin-left:20px; transform:scaleY(0.85);"/>
        <p style="margin-left:100px;">Reconfig</p>
        <switch-button ref="reconfigButton_Fpga4" :InitIsSwitchOn="false" style="margin-left:20px; transform:scaleY(0.85);"/>
      </div>
    </div>
  </div> 
</template>

<script>
  import {PowerStatusInfo, ResultCodeInfo, POWEROFF, POWERON} from '../../../main/AEConsoleBoard_pb';
  import {AEConsoleGatewayClient} from '../../../main/AEConsoleGateway_grpc_web_pb';
  import SwitchButton from '../CustomControl/SwitchButton.vue';
  import PowerButton from '../CustomControl/PowerButton.vue';

  var client = new AEConsoleGatewayClient('http://172.22.113.238:10002', null, null);
  var request = new PowerStatusInfo();

  export default {
    name: 'power-control',
    components: {SwitchButton, PowerButton  },
    data() {
      return {
        deviceId: "202103220001",
        fpgaId : "fpga1"
      }
    },
    methods: {
      clickButton:function()
      {
        request.setDeviceid(this.deviceId);
        request.setFpgaid(this.fpgaId);
        request.setPoweronoff(POWEROFF);

        client.setPowerStatus(request, {}, (err, response) => {
                  if (err) 
                  {
                    alert(`Unexpected error for setPowerStatus: code = ${err.code}` +
                                `, message = "${err.message}"`);
                  } 
                  else 
                  {
                    alert(response.getResultcode().toString(16));
                  }
                });
      }
    }
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css" scoped>

  #powerControl-grid {
    width: 900px;
    height: 750px;
    grid-template-rows: auto auto 1fr auto auto;
  }

  .powerOnOffPanel {
    width:660px; 
    height:80px; 
    margin-top:45px; 
    margin-left:26px; 
    background:rgba(88,75,66,0.75); 
  }

  .border
  {
    border-style:solid; 
    border-width:1px; 
    border-color:rgba(236,222,204,0.45); 
    border-radius:8px;
  }

</style>