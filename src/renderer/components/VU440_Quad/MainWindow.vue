<template>
  <div id="main-grid">
    <div id="title-grid" class="drag">
      <div style="margin-left:20px; margin-top:10px; width:375px;">AEConsole( VU440-Quad ) - ( Emulation Platform Disconnected )</div>
      <div class="wrapPanel-contentAlignRight">
        <title-bar class="no-drag" style=""/>
      </div>
    </div>
    <div id="separator-line-cross" />
	  <div id="client-grid">
      <div id="menu-items" class="stackPanel" style="opacity:1;">
        <div class="menuItem_label">
          <label style="text-align:left; line-height:42px;">     Power Management</label>
        </div>
        <div class="radio menuItem_Radio">
          <input type="radio" id="RemotePowerControl" name="groupName_FunctionSelect" v-on:click="clickButton"/>
          <label for="RemotePowerControl" style="text-align:right; line-height:42px;">Remote Power Control     </label>
        </div>
        <div class="menuItem_label">
          <label style="text-align:left; line-height:42px;">     Reset Function</label>
        </div>
        <div class="radio menuItem_Radio">
          <input type="radio" id="ResetFunction" name="groupName_FunctionSelect" v-on:click="clickButton"/>
          <label for="ResetFunction" style="text-align:right; line-height:42px;">Reset     </label>
        </div>
        <div class="menuItem_label">
          <label style="text-align:left; line-height:42px;">     Voltage configuration</label>
        </div>
        <div class="radio menuItem_Radio">
          <input type="radio" id="FmcVoltageConfig" name="groupName_FunctionSelect" v-on:click="clickButton"/>
          <label for="FmcVoltageConfig" style="text-align:right; line-height:42px;">FMC Voltage     </label>
        </div>
        <div class="menuItem_label">
          <label style="text-align:left; line-height:42px;">     PLL Clock configuration</label>
        </div>
        <div class="radio menuItem_Radio">
          <input type="radio" id="PllClockConfig_Global" name="groupName_FunctionSelect" v-on:click="clickButton"/>
          <label for="PllClockConfig_Global" style="text-align:right; line-height:42px;">Global Clock     </label>
        </div>
        <div class="radio menuItem_Radio">
          <input type="radio" id="PllClockConfig_MgtRef" name="groupName_FunctionSelect" v-on:click="clickButton"/>
          <label for="PllClockConfig_MgtRef" style="text-align:right; line-height:42px;">MGT_REFclk     </label>
        </div>
        <div class="menuItem_label">
          <label style="text-align:left; line-height:42px;">     FPGA configuration</label>
        </div>
        <div class="radio menuItem_Radio">
          <input type="radio" id="FpgaConfig" name="groupName_FunctionSelect" v-on:click="clickButton"/>
          <label for="FpgaConfig" style="text-align:right; line-height:42px;">FPGA Bin Download     </label>
        </div>
        <div class="menuItem_label">
          <label style="text-align:left; line-height:42px;">     Gadgets</label>
        </div>
        <div class="radio menuItem_Radio">
          <input type="radio" id="BoardSelfTest" name="groupName_FunctionSelect" v-on:click="clickButton"/>
          <label for="BoardSelfTest" style="text-align:right; line-height:42px;">Board Self-Test     </label>
        </div>
        <div class="radio menuItem_Radio">
          <input type="radio" id="RegisterAccess" name="groupName_FunctionSelect" v-on:click="clickButton"/>
          <label for="RegisterAccess" style="text-align:right; line-height:42px;">FPGA Customized Access     </label>
        </div>
      </div>
      <div id="separator-line" />
		  <div id="contents" style="">
        <power-control v-show="selectedId === 'RemotePowerControl'"/>
        <reset v-show="selectedId === 'ResetFunction'"/>
        <fmc-voltage-config v-show="selectedId === 'FmcVoltageConfig'"/>
        <pll-clock-config uid="Global" v-show="selectedId === 'PllClockConfig_Global'"/>
        <pll-clock-config uid="MgtRef" v-show="selectedId === 'PllClockConfig_MgtRef' "/>
        <fpga-config v-show="selectedId === 'FpgaConfig'"/>
        <reg-access v-show="selectedId === 'RegisterAccess'"/>
      </div>
	  </div>
  </div>
</template>

<script>
  const { remote } = require('electron')
  import TitleBar from '../CustomControl/TitleBar.vue';
  import {  } from '../../../main/AEConsoleBoard_pb';
  import { AEConsoleGatewayClient } from '../../../main/AEConsoleGateway_grpc_web_pb';
  import FmcVoltageConfig from './FmcVoltageConfig.vue';
  import PllClockConfig from './PllClockConfig.vue';
  import FpgaConfig from './FpgaConfig.vue';
  import RegAccess from './RegAccess.vue';
  import PowerControl from './PowerControl.vue';
  import Reset from './Reset.vue';


   var client = new AEConsoleGatewayClient('http://127.0.0.1:10002', null, null);

  export default {
    name: 'main-Window',
    components: { TitleBar, PowerControl, Reset, FmcVoltageConfig, PllClockConfig, RegAccess, FpgaConfig, },
    data() {
        return {
        selectedId: 'RegisterAccess'
      }
    },
    mounted() {
        let currentWindow = remote.getCurrentWindow();
        currentWindow.setSize(1200, 800, true);
        currentWindow.center();
      },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      clickButton:function() {
          var e = arguments[0] || window.event;  
          var src = e.srcElement || e.target;       // src 就是事件的触发源
          this.selectedId = src.id;
      },
    }
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css" scoped>

  #main-grid {
    width: 1200px;
    height: 800px;
    grid-template-rows: 42px 2px 756px;
  }

  #title-grid {
    grid-row: 1 / span 1;
    grid-template-columns: auto 105px;
    background-image: url('../../assets/background_title.png');
    background-size: cover;
  }

  #client-grid {
    grid-row: 3 / span 1;
    grid-template-columns: 297px 3px 900px;
    background-image: url('../../assets/background_main.png');
    background-size: cover;
  }

  #menu-items {
    grid-column: 1 / span 1;
    position:relative;
    left:30px;
    top:35px;
    width:230px;
  }

  #separator-line-cross {
    width: 1200px;
    height: 3px;
    background-color: whitesmoke;
  }

  #separator-line {
    width: 3px;
    height: 900px;
    background-color: whitesmoke;
  }

  #contents {
    grid-column: 3 / span 1;
  }

  .menuItem_label
  {
    margin-top:2px; 
    margin-left:7px; 
    width:230px;
    background:#807069;
  }

  .menuItem_Radio
  {
    margin-top:2px; 
    margin-left:7px; 
    height:42px;
  }

  /* RadioButton 样式 */
  .radio {
    position: relative;
    display: inline-block;
  }

  .radio input {
    width: 230px;
    height: 42px;
    opacity: 0;
  }

  .radio label {
    position: absolute;
    left: 0;
    width: 230px;
    height: 42px;
    color: #3B3838;
    background:#ECDECC;
    font-size: 16px;
  }

  .radio input:checked+label{
    position: absolute;
    left: 0;
    width: 230px;
    height: 42px;
    color:white;
    background: #B5685F;
    font-size: 15px;
  }

  .label {
    position: absolute;
    left: 0;
    width: 230px;
    height: 42px;
    color: #3B3838;
    background:#ECDECC;
    font-size: 16px;
  }
</style>