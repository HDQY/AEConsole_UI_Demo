<template>
  <div id="voltagePanel" class="stackPanel">
    <div class="stackPanel" style="width:170px; margin-top:5px;">
      <div class="wrapPanel" style="width:170px; height:30px;">
        <p ref="label_FmcName" style="width:170px; height:30px; line-height:30px; background:#A9685D;">{{FmcName}}</p>
      </div>
      <div class="wrapPanel" v-show="!IsVoltageFixed" style="width:170px; height:60px; background:#52473D; margin-top:2px;">
        <div class="radio" style="margin-top:14px; margin-left:7px;">
          <input type="radio" v-bind:id="id_01" v-bind:name="fmcId" value="0" v-model="voltageIndex"/>
          <label v-bind:for="id_01" style="text-align: center ;line-height:35px;">1.2</label>
        </div>
        <div class="radio" style="margin-top:14px; margin-left:1px;">
          <input type="radio" v-bind:id="id_02" v-bind:name="fmcId" value="1" v-model="voltageIndex"/>
          <label v-bind:for="id_02" style="text-align: center ;line-height:35px;">1.35</label>
        </div>
        <div class="radio" style="margin-top:14px; margin-left:1px;">
          <input type="radio" v-bind:id="id_03" v-bind:name="fmcId" value="2" v-model="voltageIndex"/>
          <label v-bind:for="id_03" style="text-align: center ;line-height:35px;">1.5</label>
        </div>
        <div class="radio" style="margin-top:14px; margin-left:1px;">
          <input type="radio" v-bind:id="id_04" v-bind:name="fmcId" value="3" v-model="voltageIndex"/>
          <label v-bind:for="id_04" style="text-align: center ;line-height:35px;">1.8</label>
        </div>
      </div>
      <div class="wrapPanel" v-show="IsVoltageFixed" style="width:170px; height:60px; background:#52473D; margin-top:2px;">
        <div class="radio" style="margin-top:14px; margin-left:1px; width:155px;">
          <input type="radio" v-bind:id="id_11" v-bind:name="fmcId" value="11" v-model="voltageIndex"/>
          <label v-bind:for="id_11" style="text-align:center; line-height:35px; width:155px; margin-left:7px; color:black; background:#C6B8A9; font-size:15px; font-weight:bold;">1.8</label>
        </div>
      </div>
      <div class="wrapPanel" v-show="!IsVoltageFixed" style="width:170px; height:30px; margin-top:2px;">
        <p style="width:120px; height:30px; line-height:30px; background:#806D63;">Auto Restore</p>
        <on-off-button :InitIsOn="true" style="margin-left:2px; width:48px;"/>
      </div>
      <div v-show="IsVoltageFixed" style="margin-top:2px;">
        <p style="width:170px; height:30px; line-height:30px; background:#806D63;">Fixed</p>
      </div>
    </div>
  </div> 
</template>

<script>
import OnOffButton from './OnOffButton.vue';
  export default {
    name: 'voltage-control',
    components: {OnOffButton  },
    props: ['fmcId','InitIsVoltageFixed','FmcName','FmcNameBackground'],
    computed:{
      id_01:function(){
        return this.fmcId + '_1.2V';},
      id_02:function(){
        return this.fmcId + '_1.35V';},
      id_03:function(){
        return this.fmcId + '_1.5V';},
      id_04:function(){
        return this.fmcId + '_1.8V';},
      id_11:function(){
        return this.fmcId + '_1.8V';},
    },
    mounted() {
      this.$refs.label_FmcName.style.background = this.FmcNameBackground;

      if (this.IsVoltageFixed)
      {
        
      }
    },
    methods: {
      clickButton:function(){
          alert(this.fmcId);
      }
    },
    data() {
      return {
        voltageIndex: 0,
        IsVoltageFixed: !!this.InitIsVoltageFixed,
      }
    },
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css" scoped>
  
  p{
    display: block;
    text-align: center;
  }

  #voltagePanel {
    width: 170px;
    height: 90px;
  }

  .radio {
    position: relative;
    display: inline-block;
  }

  .radio input {
    width: 35px;
    height: 35px;
    opacity: 0;
  }

  .radio label {
    position: absolute;
    left: 0;
    width: 35px;
    height: 35px;
    color: whitesmoke;
    background: #755D4C;
    font-size: 14px;
  }

  .radio input:checked+label{
    position: absolute;
    left: 0;
    width: 35px;
    height: 35px;
    color: Black;
    background: #C6B8A9;
    font-size: 15px;
    font-weight: bold;
  }

</style>