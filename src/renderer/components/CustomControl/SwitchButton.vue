<template>
<div style="width:100px; height:42px; ">
  <div ref="border_01" v-on:click="clickButton" style="position:relative; width:100px; height:42px; border-radius:21px; background:#ECDECC;" >
    <p ref="label_01" class="label_Init">Enable</p>
    <div ref="ellipse_01" class="ellipse_Init"></div>
  </div>
</div> 
</template>

<script>
  export default {
    name: 'switch-button',
    components: {  },
    props: ['InitIsSwitchOn'],
    data() {
      return {
        IsSwitchOn: !!this.InitIsSwitchOn,
      }
    },
    mounted() {
      this.IsSwitchOn = !this.IsSwitchOn;
      this.clickButton();
    },
    methods: {
      clickButton:function()
      {
        this.IsSwitchOn = !this.IsSwitchOn;
        
        var border_01 = this.$refs.border_01;
        var label_01 = this.$refs.label_01;
        var ellipse_01 = this.$refs.ellipse_01;

        if (this.IsSwitchOn == true)
        {
          border_01.style.background = "#FAECD9";

          label_01.innerText = "Enable";
          label_01.classList.remove('label_Disable');
          label_01.classList.add('label_Enable');
          
          ellipse_01.classList.remove('ellipse_Disable');
          ellipse_01.classList.add('ellipse_Enable');
        }
        else if (this.IsSwitchOn == false)
        {
          border_01.style.background = "#97867A";

          label_01.innerText = "Disable";
          label_01.classList.remove('label_Enable');
          label_01.classList.add('label_Disable');

          ellipse_01.classList.remove('ellipse_Enable');
          ellipse_01.classList.add('ellipse_Disable');
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

  .label_Enable{
    color: #3B3838;
    animation-name: label_Animation_Enable;
    animation-duration: 0.33s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .label_Disable{
    color: whitesmoke;
    animation-name: label_Animation_Disable;
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
    background: #97867A;
  }

  .ellipse_Enable{
    background: #97867A;
    animation-name: ellipse_Animation_Enable;
    animation-duration: 0.33s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .ellipse_Disable{
    background: #FAECD9;
    animation-name: ellipse_Animation_Disable;
    animation-duration: 0.33s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  @keyframes label_Animation_Enable
  {
    0%   {left:36px;}
    100% {left:0px;}
  }

  @keyframes label_Animation_Disable
  {
    0%   {left:0px;}
    100% {left:36px;}
  }

  @keyframes ellipse_Animation_Enable
  {
    0%   {left:0px;}
    100% {left:62px;}
  }

  @keyframes ellipse_Animation_Disable
  {
    0%   {left:62px;}
    100% {left:0px;}
  }
</style>