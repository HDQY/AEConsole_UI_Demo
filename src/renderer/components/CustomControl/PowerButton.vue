<template>
<div style="width:100px; height:42px; ">
  <div ref="border_01" v-on:click="clickButton" style="position:relative; width:100px; height:42px; border-radius:21px; background:#FAECD9;" >
    <p ref="label_01" class="label_Init">Enable</p>
    <img ref="ellipse_01" class="ellipse_Init" />
  </div>
</div> 
</template>

<script>
  export default {
    name: 'power-button',
    components: {  },
    props: ['InitIsPowerOn'],
    data() {
      return {
        IsPowerOn: !!this.InitIsPowerOn,
      }
    },
    mounted() {
      this.IsPowerOn = !this.IsPowerOn;
      this.clickButton();
    },
    methods: {
      clickButton:function()
      {
        this.IsPowerOn = !this.IsPowerOn;
        
        var border_01 = this.$refs.border_01;
        var label_01 = this.$refs.label_01;
        var ellipse_01 = this.$refs.ellipse_01;

        if (this.IsPowerOn == true)
        {
          label_01.innerText = "ON";
          label_01.classList.remove('label_Off');
          label_01.classList.add('label_On');
          
          ellipse_01.classList.remove('ellipse_Off');
          ellipse_01.classList.add('ellipse_On');
        }
        else if (this.IsPowerOn == false)
        {
          label_01.innerText = "OFF";
          label_01.classList.remove('label_On');
          label_01.classList.add('label_Off');

          ellipse_01.classList.remove('ellipse_On');
          ellipse_01.classList.add('ellipse_Off');
        }
      }
    }
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css" scoped>
  
  .label_Init{
    position: absolute;
    text-align: center;
    left: 0;
    width: 62px;
    height: 42px;
    line-height: 42px;
    color: #3B3838;
  }

  .label_On{
    animation-name: label_Animation_On;
    animation-duration: 0.33s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .label_Off{
    animation-name: label_Animation_Off;
    animation-duration: 0.33s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .ellipse_Init{
    position: absolute;
    width: 38px;
    height: 42px;
    left: 62px;
    border-radius:25px;
    content:url("../../assets/power_on.png");
  }

  .ellipse_On{
    content:url("../../assets/power_on.png");
    animation-name: ellipse_Animation_On;
    animation-duration: 0.33s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .ellipse_Off{
    content:url("../../assets/power_off.png");
    animation-name: ellipse_Animation_Off;
    animation-duration: 0.33s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  @keyframes label_Animation_On
  {
    0%   {left:36px;}
    100% {left:0px;}
  }

  @keyframes label_Animation_Off
  {
    0%   {left:0px;}
    100% {left:36px;}
  }

  @keyframes ellipse_Animation_On
  {
    0%   {left:0px;}
    100% {left:62px;}
  }

  @keyframes ellipse_Animation_Off
  {
    0%   {left:62px;}
    100% {left:0px;}
  }
</style>