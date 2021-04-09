<template>
<div style="width:48px; height:30px; ">
  <div v-on:click="clickButton">
    <p v-show="IsOn" class="label_On">ON</p>
    <p v-show="!IsOn" class="label_Off">OFF</p>
  </div>
</div> 
</template>

<script>
  export default {
    name: 'on-off-button',
    components: {  },
    props: ['InitIsOn'],
    data() {
      return {
        IsOn: !!this.InitIsOn,
      }
    },
    methods: {
      clickButton:function()
      {
        //this.IsOn = !this.IsOn;
      }
    }
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css" scoped>
  
  .label_On{
    width:48px;
    height:30px; 
    line-height:30px;
    text-align: center; 
    background:#8FB752;
  }

  .label_Off{
    width:48px;
    height:30px; 
    line-height:30px;
    text-align: center; 
    background:#88827E;
  }
</style>