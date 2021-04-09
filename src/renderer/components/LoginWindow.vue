<template>
  <div id="main-grid-login">
    <div id="title-grid-login" class="drag">
      <title-bar class="no-drag Horiz-Align-Right" style="margin-top:10px; margin-right:5px;"/>
    </div>
	  <div id="client-grid-login stackPanel" class="drag">
		  <img src="../assets/text_login.png" style="margin-top:75px;"/>
      <div style="margin-left:115px;" class="no-drag">
        <img src="../assets/background_mode.png"/>
        <div class="wrapPanel " style="position:absolute; z-index:1;">
          <div class="btn-01" >
            <img class="Align-Center" src="../assets/usb_unchecked.png"/>
          </div>
          <div class="btn-01" style="width:160px;" v-on:click="clickButton">
            <img class="Align-Center" src="../assets/prompt_connect.png"/>
          </div>
          <div class="btn-01">
            <img class="Align-Center" src="../assets/network_unchecked.png"/>
          </div>
        </div>
      </div>
	  </div>
  </div>
</template>

<script>
  import TitleBar from './CustomControl/TitleBar.vue'
  import {ServiceStatus} from '../../main/AEConsoleBoard_pb';
  import {AEConsoleGatewayClient} from '../../main/AEConsoleGateway_grpc_web_pb';

  const {ipcRenderer: ipc} = require('electron');
  var client = new AEConsoleGatewayClient('http://127.0.0.1:10002', null, null);
  var request = new ServiceStatus();

  export default {
    name: 'landing-window',
    components: { TitleBar },
    mounted() {
        //导入child_process模块的exec函数
        var child_process = require('child_process');
        const child = child_process.execFile('./AEConsole-GatewayService',   function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
              console.log('exec error: ' + error);
            }
        });

        var pid_GatewayService = child.pid;
        ipc.send('setpid_GatewayService', pid_GatewayService);
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      clickButton:function(){

        var filePath = 'C:\\Users\\123\\Desktop\\SD Card Files\\IP_ADDR.txt';
        var child_process = require('child_process');
        child_process.execFile('notepad', [filePath], function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
              console.log('exec error: ' + error);
            }
        });
        child_process.execFile('gedit', [filePath], function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
              console.log('exec error: ' + error);
            }
        });
        return;

      this.$router.push({name:'main-window-vu440-quad',params:{ userId: '123'}});
      return;

        if (window.Worker) {
          //alert("是否支持多线程？是");
        }

        var date = new Date();
        console.log("getServiceStatus() 1:" + date.getSeconds() + '.' + date.getMilliseconds());
        
        var date2 = new Date();
        console.log("getServiceStatus() 2:" + date2.getSeconds() + '.' + date2.getMilliseconds());
        
        client.getServiceStatus(request, {}, (err, response) => {
          var date3 = new Date();
          console.log("getServiceStatus() 3:" + date3.getSeconds() + '.' + date3.getMilliseconds());
        });

        client.getServiceStatus(request, {}, (err, response) => {
          var date4 = new Date();
          console.log("getServiceStatus() 4:" + date4.getSeconds() + '.' + date4.getMilliseconds());
        });

        client.getServiceStatus(request, {}, (err, response) => {
          var date5 = new Date();
          console.log("getServiceStatus() 5:" + date5.getSeconds() + '.' + date5.getMilliseconds());
          //debugger;

          if (err) {
            alert(`Unexpected error for login: code = ${err.code}` +
                        `, message = "${err.message}"`);
          } else {
            //alert(response.getResultcode());
            this.$router.push({name:'main-window-vu440-quad',params:{ userId: '123'}});
            //this.$router.push({name:'main-window-vu19p-solo',params:{ userId: '123'}});
          }
        });
      }
    }
  }
</script>


<style src="../../../static/css/wpf-style-layout.css"></style>
<style src="../../../static/css/common.css"></style>
<style type="text/css" scoped>

  #main-grid-login {
    grid-template-rows: 50px 500px;
    width: 912px;
    height: 550px;
    background-image: url('../assets/background_login.png');
  }

  #title-grid-login {
    grid-row: 1 / span 1;
  }

  #client-grid-login {
    grid-row: 2 / span 1;
  }

  .btn-01 {
    border: none;
    outline: none;
    background: rgba(255,255,255,0);
    width:260px; 
    height:165px;
    padding: 0px;
  }
</style>
