<template>
  <div id="reset-grid" style="padding-left:32px;">
    <h1 style="margin-top:20px;">Reset</h1>
    <div class="stackPanel" style="width:800px; margin-top:5px;">
      <h2 class="attention-title" >Attentions</h2>
      <div class="attention-content" style="height:75px;">
        In this wizard, user can Reset FPGA modules with [Global reset] , or reset FPGA independently.
        Also you can use [Sync output] to generate a synchronizing signal for your system.
      </div>
    </div>
    <div class="stackPanel" style="width:800px; height:540px; margin-top:12px; background-image:linear-gradient(to right, #7E624F 0%, #A38C7A 100%);">
      <div class="wrapPanel resetPanel border Vertical-Content-Align-Center" style="margin-top:15px; height:50px;" v-on:click="clickButton">
        <p style="margin-left:30px; margin-top:-5px; ">Global Reset</p>
        <reset-button ref="resetButton_FpgaAll" :InitIsEnableOn="true" style="margin-left:435px; margin-top:4px; transform:scale(0.9,0.75);"/>
      </div>
      <div class="stackPanel resetPanel border" style="margin-top:10px; height:230px;">
        <div class="wrapPanel Vertical-Content-Align-Center" style="margin-top:10px;">
          <p style="margin-left:30px;">Independently Reset Entrance</p>
          <switch-button ref="switchButton_IndependentlyReset" :InitIsSwitchOn="false" style="margin-left:50px; transform:scaleY(0.85);"/>
        </div>
        <div class="wrapPanel Vertical-Content-Align-Center" style="margin-top:0px;" v-on:click="clickButton">
          <p style="margin-left:30px;">Reset FPGA1</p>
          <reset-button ref="resetButton_Fpga1" :InitIsEnableOn="true" style="margin-left:435px; transform:scale(0.9,0.75);"/>
        </div>
        <div class="wrapPanel Vertical-Content-Align-Center" style="margin-top:-10px;" v-on:click="clickButton">
          <p style="margin-left:30px;">Reset FPGA2</p>
          <reset-button ref="resetButton_Fpga2" :InitIsEnableOn="true" style="margin-left:435px; transform:scale(0.9,0.75);"/>
        </div>
        <div class="wrapPanel Vertical-Content-Align-Center" style="margin-top:-10px;" v-on:click="clickButton">
          <p style="margin-left:30px;">Reset FPGA3</p>
          <reset-button ref="resetButton_Fpga3" :InitIsEnableOn="true" style="margin-left:435px; transform:scale(0.9,0.75);"/>
        </div>
        <div class="wrapPanel Vertical-Content-Align-Center" style="margin-top:-10px;" v-on:click="clickButton">
          <p style="margin-left:30px;">Reset FPGA4</p>
          <reset-button ref="resetButton_Fpga4" :InitIsEnableOn="true" style="margin-left:435px; transform:scale(0.9,0.75);"/>
        </div>
      </div>
      <div class="wrapPanel resetPanel Vertical-Content-Align-Center border" style="margin-top:15px; height:50px;">
        <p style="margin-left:30px;">Sync Pulse Output (Reference Clock : 200MHz)</p>
        <p style="margin-left:60px;">Save To SD Card</p>
        <switch-button ref="switchButton_IndependentlyReset" :InitIsSwitchOn="false" style="margin-left:50px; transform:scaleY(0.85);"/>
      </div>
      <div class="stackPanel resetPanel" style="height:145px;">
        <div class="wrapPanel resetPanel Vertical-Content-Align-Center" style="margin-top:15px; background:#765F4E; width:600px;">
          <p style="margin-left:40px; width:180px;">Frequency(MHz)</p>
          <input id="input_RegValue" class="Align-Content-Center border" style="margin-left:50px; width:100px; height:34px; text-align:center; color:#3B3838; background:#ECDECC; border-radius:5px;"/>
          <p style="margin-left:90px; width:150px; height:35px; text-align: center; line-height:35px; background-color:#282328">Write</p>
        </div>
        <div class="wrapPanel resetPanel Vertical-Content-Align-Center" style="margin-top:5px; background:#765F4E; width:600px;">
          <p style="margin-left:40px; width:180px;">Width (refclk Period xN)</p>
          <input id="input_RegValue" class="Align-Content-Center border" style="margin-left:50px; width:100px; height:34px; text-align:center; color:#3B3838; background:#ECDECC; border-radius:5px;"/>
          <p style="margin-left:90px; width:150px; height:35px; text-align: center; line-height:35px; background-color:#282328">Write</p>
        </div>
        <div class="wrapPanel resetPanel Vertical-Content-Align-Center" style="margin-top:5px; background:#765F4E; width:600px;">
          <p style="margin-left:40px; width:180px;">Pulse Pattern</p>
          <input id="input_RegValue" class="Align-Content-Center border" style="margin-left:50px; width:100px; height:34px; text-align:center; color:#3B3838; background:#ECDECC; border-radius:5px;"/>
          <p style="margin-left:90px; width:150px; height:35px; text-align: center; line-height:35px; background-color:#282328">Write</p>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
  import {ResetInfo, ResultCodeInfo} from '../../../main/AEConsoleBoard_pb';
  import {AEConsoleGatewayClient} from '../../../main/AEConsoleGateway_grpc_web_pb';
  import ResetButton from '../CustomControl/ResetButton.vue';
  import SwitchButton from '../CustomControl/SwitchButton.vue';

  var client = new AEConsoleGatewayClient('http://127.0.0.1:10002', null, null);
  var request = new ResetInfo();

  export default {
    name: 'reset-control',
    components: {ResetButton, SwitchButton  },
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
        request.setResetid(1);

        client.reset(request, {}, (err, response) => {
                  if (err) 
                  {
                    alert(`Unexpected error for reset: code = ${err.code}` +
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

  #reset-grid {
    width: 900px;
    height: 750px;
    grid-template-rows: auto auto 1fr auto auto;
  }

  .resetPanel {
    width:660px;
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