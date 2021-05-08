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
      <div style="margin-left:75px; margin-top:0px; width:720px; height:315px; background:#ECDECC;overflow-y:auto ">
        <table cellSpacing="3s" cellPadding="3" height="130">
          <thead>
          <tr>
            <th class="hedertr">板卡名</th>
            <th class="hedertr">板卡IP</th>
            <th class="hedertr">端口号</th>
            <th class="hedertr">连接状态</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in this.tableData">
            <th class="bodytd">{{ item.boardName }}</th>
            <th class="bodytd">{{ item.boardIp }}</th>
            <th class="bodytd">{{ item.portId }}</th>
            <th v-if="item.linkStatus =='success'" class="bodytdsuccess">{{ item.linkStatus }}</th>
            <th v-else-if="item.linkStatus =='failed'" class="bodytdfailed">{{ item.linkStatus }}</th>
            <th v-else class="bodytd">{{ item.linkStatus }}</th>
          </tr>
          </tbody>
        </table>
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
  import {ResultCode} from '../../main/AEConsoleBoard_pb';
  import {DeviceIdInfo} from '../../main/AEConsoleGateway_pb';
  import {AEConsoleGatewayClient} from '../../main/AEConsoleGateway_grpc_web_pb';
  import ProgramButton from './CustomControl/ProgramButton.vue';

  const {ipcRenderer: ipc} = require('electron');
  var client = new AEConsoleGatewayClient();
  var request = new DeviceIdInfo();

  var filePath = 'C:\\Users\\123\\Desktop\\Config_Login.xml';

  export default {
    name: 'login-window-network',
    components: { TitleBar, ProgramButton },
    data() {
      return {
        type: true,
        core: '',
        base: '',
        configFilePath: filePath,
        deviceId: "",
        fpgaId: "fpga1",
        tableData: [{
          boardName: 'IC-TEST-SOLO-0001',
          boardIp: '127.0.0.1',
          portId: '10001',
          linkStatus: ''
        },]
      }
    },
    mounted() {
      this.updateInfo();

      //导入child_process模块的exec函数
      var child_process = require('child_process');
      const child = child_process.execFile('./AEConsole-GatewayService', function (error, stdout, stderr) {
        if (error !== null) {
        }
      });

      var pid_GatewayService = child.pid;
      ipc.send('setpid_GatewayService', pid_GatewayService);

      this.deviceId = this.$store.getters.deviceId;
    },
    methods: {
      updateInfo: function () {
        let that = this;
        that.$nextTick(function () {
          fs.readFile(that.configFilePath, function (err, data) {
            if (err) {
              alert(err);
            }
            else
            {
              var input_text = data.toString();
              let arr = input_text.split('<board')
              let list = [];
              for (var i = 1; i < arr.length; i++) {
                let obj = {};
                var a = arr[i].split(/[<>]/);//分割<或>
                obj.boardName = a[0].split('"')[1];
                obj.boardIp = a[3];
                obj.portId = a[7];
                list.push(obj);
              }
              that.tableData = list;
            }
          });
        });
      },
      editFileClicked: function () {
        var child_process = require('child_process');
        var osType = require('os').type();
        if (osType == 'Windows_NT') {
          child_process.execFileSync('notepad', [this.configFilePath]);
        } else if (osType == 'linux') {
          child_process.execFileSync('gedit', [this.configFilePath]);
        }
        this.updateInfo();
      },
      getBoardType(val, val2) {
        this.type=true
        this.$set(this.tableData[val2], 'linkStatus', 'connecting')
        return new Promise((resolve, reject) => {
          request.setDeviceid(val);
          client.getBoardType(request, {}, (err, response) => {
            if (err) {
              this.type = false
              this.$set(this.tableData[val2], 'linkStatus', 'failed')
              alert(`Unexpected error for getBoardType: code = ${err.code}` +
                  `, message = "${err.message}"`);
              reject(err)
            } else {
              this.core = coreboardtype(response.getCoreboardtype());
              this.base = baseboardtype(response.getBaseboardtype());
              if (response.getResultcode() === 0) {
                this.$set(this.tableData[val2], 'linkStatus', 'success')
                resolve(response.getResultcode())
              } else {
                this.type = false
                this.$set(this.tableData[val2], 'linkStatus', 'failed')
                resolve(response.getResultcode())
              }
            }
          });
        })
      },

      async clickButton() {
         request.setDeviceid(this.deviceId);
          client.getBoardType(request, {}, (err, response) => {
            if (err) {
              alert(`Unexpected error for getBoardType: code = ${err.code}` +
                  `, message = "${err.message}"`);
              reject(err)
            } 
            else 
            {
              //
            }
          });

         this.$router.push({
            name: 'main-window-vu440-quad',
            params: {data: this.tableData}
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
  .hedertr {
    padding-top: 1rem;
    padding-left: 3rem;
    color: #7A5D4B;
    width: 12rem;
    height: 3rem;
    text-align: left;
  }

  .bodytd {
    padding-left: 3rem;
    color: #7A5D4B;
    background: #ECDECC;
    width: 12rem;
    height: 2rem;
    text-align: left;
  }

  .bodytdsuccess {
    padding-left: 3rem;
    color: #93B76A;
    background: #ECDECC;
    width: 12rem;
    height: 2rem;
    text-align: left;
  }

  .bodytdfailed {
    padding-left: 3rem;
    color: #ED9058;
    background: #ECDECC;
    width: 12rem;
    height: 2rem;
    text-align: left;
  }
</style>
