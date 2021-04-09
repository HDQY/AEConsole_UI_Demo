<template>
  <div id="regAccess-grid" style="padding-left:32px;">
    <h1 style="margin-top:20px;">FPGA Customized Access</h1>
    <div class="stackPanel" style="width:800px; margin-top:5px;">
      <h2 class="attention-title" >Attentions</h2>
      <div class="attention-content" style="height:57px;">
        This wizard will guide you to use register access,Click "Edit" to show script format when Script file is empty.
      </div>
    </div>
    <div class="stackPanel" style="width:800px; height:430px; margin-top:12px; background-image:linear-gradient(to right, #7E624F 0%, #A38C7A 100%);">
      <h3 style="height:27px; width:800px; line-height:27px; text-align:center; background-color:#A9685D; opacity:0.875;">Register Mapping</h3>
      <div class="stackPanel">
        <div id="div-FpgaIdSelect">
          <div class="wrapPanel" style="margin: 5px 10px 0px 0px; ">
            <div class="radio fpga-select-radio" >
              <input type="radio" id="fpga_1_RegAccess" v-model="fpgaId" value="fpga1" checked="checked"/>
              <label for="fpga_1_RegAccess" >FPGA1</label>
            </div>
            <div class="radio fpga-select-radio" >
              <input type="radio" id="fpga_2_RegAccess" v-model="fpgaId" value="fpga2"/>
              <label for="fpga_2_RegAccess" >FPGA2</label>
            </div>
            <div class="radio fpga-select-radio" >
              <input type="radio" id="fpga_3_RegAccess" v-model="fpgaId" value="fpga3"/>
              <label for="fpga_3_RegAccess" >FPGA3</label>
            </div>
            <div class="radio fpga-select-radio" >
              <input type="radio" id="fpga_4_RegAccess" v-model="fpgaId" value="fpga4"/>
              <label for="fpga_4_RegAccess" >FPGA4</label>
            </div>
            <div class="radio fpga-select-radio" >
              <input type="radio" id="fpga_Base_RegAccess" v-model="fpgaId" value="fpga1-base"/>
              <label for="fpga_Base_RegAccess">BASE</label>
            </div>
          </div>
        </div>
        <div class="stackPanel" id="input_addr" style="margin-top:2px;">
          <div class="stackPanel" style="width:800px; height:100px; background-color:#5C5047;">
            <div class="wrapPanel" style="padding:10px 0px 0px 10px;">
              <h3 class="text-level3" style="width:560px;">   Addr      :      0x</h3>
              <input id="input_RegAddress" class="textBox-01 Align-Content-Center" v-model="regAddr"
                  style="position:absolute; margin-top:10px; margin-left:158px; width:220px; height:35px; text-align:center; border-radius:2px;">
              <button id="button_Read" class="text-level3" style="justify-content: center; width:200px; background-color:#282328;" v-on:click="clickButton">Read</button>
            </div>
            <div class="wrapPanel" style="padding:10px 0px 0px 10px;">
              <h3 class="text-level3" style="width:560px;">   Data      :      0x</h3>
              <input id="input_RegValue" class="textBox-01 Align-Content-Center" v-model="regValue"
                  style="position:absolute; margin-top:10px; margin-left:158px; width:220px; height:35px; text-align:center; border-radius:2px;">
              <button id="button_Write" class="text-level3" style="justify-content: center; width:200px; background-color:#282328;" v-on:click="clickButton">Write</button>
            </div>
          </div>
          <div style="background:#5C5047; width:800px; height:249px; margin-top:5px;">
            <div class="wrapPanel">
              <div class="Align-Content-Center" style="background:#B5695F; margin-left:3px; margin-top:1px; width:100px; height:23px;">LN</div>
              <div class="Align-Content-Center" style="background:#B5695F; margin-left:3px; margin-top:1px; width:140px; height:23px;">Operate</div>
              <div class="Align-Content-Center" style="background:#B5695F; margin-left:3px; margin-top:1px; width:140px; height:23px;">Address</div>
              <div class="Align-Content-Center" style="background:#B5695F; margin-left:3px; margin-top:1px; width:140px; height:23px;">ExceptValue</div>
              <div class="Align-Content-Center" style="background:#B5695F; margin-left:3px; margin-top:1px; width:140px; height:23px;">RealValue</div>
              <div class="Align-Content-Center" style="background:#B5695F; margin-left:3px; margin-top:1px; width:113px; height:23px;">Result</div>
            </div>
          </div>
          <div class="wrapPanel" style="margin-top:8px;">
            <input class="textBox-01 Align-Content-Center" value="C:\Users\123\Desktop\FP1_DDR4.txt"
                style="padding-left:15px; margin-top:10px; width:585px; height:50px; ">
            <div class="Align-Content-Center" 
                style="margin-top:10px; width:200px; height:50px; background:#8FB752; font-size: 18px;">Select Script File</div>
          </div>
          <div class="wrapPanel" style="margin-top:8px;">
            <div v-on:click="clickButton" class="Align-Content-Center" style="margin-top:10px; width:140px; height:50px; background:#8FB752; font-size: 20px;">Edit</div>
            <div class="Align-Content-Center" style="margin-top:10px; width:660px; height:50px; background:#282328; font-size: 20px;">Execute ></div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
  import {RegAccessInfo, ResultCodeInfo} from '../../../main/AEConsoleBoard_pb';
  import {AEConsoleGatewayClient} from '../../../main/AEConsoleGateway_grpc_web_pb';

  var client = new AEConsoleGatewayClient('http://172.22.113.238:10002', null, null);
  var request = new RegAccessInfo();

  export default {
    name: 'reg-access',
    components: {  },
    data() {
      return {
        deviceId: "202103220001",
        fpgaId : 'fpga1',
        regAddr: '0000',
        regValue: '0000'
      }
    },
    methods: {
      clickButton:function()
      {
          request.setDeviceid(this.deviceId);
          request.setFpgaid(this.fpgaId);
          request.setRegaddr(parseInt(this.regAddr, 16));
          request.setRegdata(parseInt(this.regValue, 16));

          var e = arguments[0] || window.event;  
          var src = e.srcElement || e.target;       // src 就是事件的触发源
          switch(src.id)
            {
              case "button_Read":
                client.registerRead(request, {}, (err, response) => {
                  if (err) 
                  {
                    alert(`Unexpected error for registerRead: code = ${err.code}` +
                                `, message = "${err.message}"`);
                  } 
                  else 
                  {
                    this.regValue = response.getRegdata().toString(16);
                  }
                });
                break;
              case "button_Write":
                client.registerWrite(request, {}, (err, response) => {
                  if (err) 
                  {
                    alert(`Unexpected error for registerWrite: code = ${err.code}` +
                                `, message = "${err.message}"`);
                  }
                });
                break;
              default:
                break;
            }
      }
    }
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css" scoped>

  #regAccess-grid {
    width: 900px;
    height: 750px;
    grid-template-rows: auto auto 1fr auto auto;
  }

  .fpga-select-radio {
    width: 129px;
    height: 35px;
  }

  /* RadioButton 样式 */
  .radio {
    position: relative;
    display: inline-block;
  }

  .radio input {
    width: 125px;
    height: 35px;
    opacity: 0;
  }

  .radio label {
    position: absolute;
    left: 0px;
    width: 125px;
    height: 35px;
    line-height: 35px;
    color: whitesmoke;
    background:#807069;
    font-size: 14px;
    text-align: center;
  }

  .radio input:checked+label{
    position: absolute;
    left: 0px;
    width: 125px;
    height: 35px;
    line-height: 35px;
    color: whitesmoke;
    background: #7A5D4B;
    font-size: 14px;
  }
</style>