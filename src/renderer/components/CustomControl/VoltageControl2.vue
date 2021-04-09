<template>
  <div id="voltagePanel" class="stackPanel">
    <div class="stackPanel" style="width:130px; margin-top:5px;">
      <div class="wrapPanel" style="width:130px; height:30px;">
        <p style="width:82px; height:30px; line-height:30px; background:#A9685D;">{{fmcId}}</p>
        <p style="width:48px; height:30px; line-height:30px; background:#8FB752;">ON</p>
      </div>
      <div class="wrapPanel" style="width:130px; height:60px; background:#52473D">
        <div class="radio" style="margin-top:14px; margin-left:7px;">
          <input type="radio" v-bind:id="id_01" v-bind:name="fmcId" value="0" v-model="voltageIndex"/>
          <label v-bind:for="id_01" style="text-align: center ;line-height:35px;">1.2</label>
        </div>
        <div class="radio" style="margin-top:14px; margin-left:2px;">
          <input type="radio" v-bind:id="id_02" v-bind:name="fmcId" value="1" v-model="voltageIndex"/>
          <label v-bind:for="id_02" style="text-align: center ;line-height:35px;">1.5</label>
        </div>
        <div class="radio" style="margin-top:14px; margin-left:2px;">
          <input type="radio" v-bind:id="id_03" v-bind:name="fmcId" value="2" v-model="voltageIndex"/>
          <label v-bind:for="id_03" style="text-align: center ;line-height:35px;">1.8</label>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
  export default {
    name: 'voltage-control2',
    components: {  },
    props: ['fmcId'],
    computed:{
      id_01:function(){
        return this.fmcId + '_1.2V';},
      id_02:function(){
        return this.fmcId + '_1.5V';},
      id_03:function(){
        return this.fmcId + '_1.8V';},
    },
    methods: {
      clickButton:function(){
          alert(this.fmcId);
      }
    },
    data() {
      return {
        voltageIndex: 0,
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
    width: 130px;
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