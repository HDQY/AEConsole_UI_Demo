<template>
  <div id="main-grid-login-network">
    <div id="title-grid-login" class="drag">
      <div style="margin-left:20px; margin-top:15px; width:275px;">Network Connect Mode</div>
      <div class="wrapPanel-contentAlignRight">
        <title-bar class="no-drag" style=""/>
      </div>
    </div>
    <div id="separator-line-cross" />
    <div id="client-grid-login stackPanel" class="drag">
      <div class="wrapPanel" style="margin-left:75px; margin-top:50px;">
        <h3 style="width:95px; height:38px; line-height:38px; text-align:center; background:#ECDECC; color:rgba(111,89,89,0.94); font-weight:bold;" > Config File：</h3>
        <input class="textBox-01" v-model="configFilePath"
                  style="margin-left:5px; padding-left:15px; padding-right:15px; width:510px; height:38px; text-align:left; border-radius:2px;">
        <div class="no-drag Align-Content-Center" style="margin-left:5px; width:75px; height:38px; border-radius:6px; background:#8FB752; font-size:16px; box-shadow:3px 3px 2px rgba(0,0,0,0.5); cursor:default;"
                 v-on:click="editFileClicked">Edit</div>
      </div>
      <div style="margin-left:75px; margin-top:0px; width:720px; height:315px; background:#ECDECC; ">
        <textarea readonly v-model="input_text" style="padding:30px; line-height:1.5; font-size:16px; font-weight:bold; background:#ECDECC; color:rgba(111,89,89,0.94); " ></textarea>
      </div>
      <div v-on:click="clickButton">
        <program-button class="no-drag" ref="programBtn01" ButtonText="Connect" style="margin-top:0px; margin-left:105px; transform:scale(1.1, 0.85);"/>
      </div>
    </div>
    
  </div>
</template>

<script>
  var fs = require('fs');
  import TitleBar from './CustomControl/TitleBar.vue'
  import {ServiceStatusInfo} from '../../main/AEConsoleBoard_pb';
  import {AEConsoleGatewayClient} from '../../main/AEConsoleGateway_grpc_web_pb';
  import ProgramButton from './CustomControl/ProgramButton.vue';

  const {ipcRenderer: ipc} = require('electron');
  var client = new AEConsoleGatewayClient('http://127.0.0.1:10002', null, null);
  var request = new ServiceStatusInfo();

  var filePath = 'C:\\Users\\123\\Desktop\\Config_Login.xml';

  export default {
    name: 'login-window-network',
    components: { TitleBar, ProgramButton },
    data() {
      return {
        deviceId: "202103220001",
        configFilePath : filePath,
        input_text: '',
      }
    },
    mounted() {
        let that = this;
        that.$nextTick(function(){
            fs.readFile(that.configFilePath, function (err, data) {
                if (err) {
                  alert(err);
                }
                that.input_text = data.toString();
            });
        });

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
      updateInfo: function()
      {
        let that = this;
        that.$nextTick(function(){
            fs.readFile(that.configFilePath, function (err, data) {
                if (err) {
                  alert(err);
                }
                that.input_text = data.toString();
            });
        });
      },
      editFileClicked:function() {
        var child_process = require('child_process');
        var osType = require('os').type();
        if (osType == 'Windows_NT')
        {
          child_process.execFileSync('notepad', [this.configFilePath]);
        }
        else if (osType == 'linux')
        {
          child_process.execFileSync('gedit', [this.configFilePath]);
        }
        this.updateInfo();
      },
      clickButton:function(){

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
      },
    }
  }
</script>



<style src="../../../static/css/wpf-style-layout.css"></style>
<style src="../../../static/css/common.css"></style>
<style type="text/css" scoped>
  #main-grid-login-network {
    grid-template-rows: 48px 2px 500px;
    width: 912px;
    height: 550px;
    background-image: url('../assets/background_login.png');
  }

  #title-grid-login {
    grid-row: 1 / span 1;
    grid-template-columns: auto 105px;
  }

  #separator-line-cross {
    width: 912px;
    height: 2px;
    background-color: whitesmoke;
    grid-row: 2 / span 1;
  }

  #client-grid-login {
    grid-row: 3 / span 1;
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
