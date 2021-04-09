<template>
<div style="width:52px; height:52px; ">
  <img ref="ellipse_01" class="ellipse_Init" v-on:click="clickButton"/>
</div> 
</template>

<script>
  export default {
    name: 'reset-button',
    components: {  },
    props: ['InitIsEnableOn'],
    data() {
      return {
        IsEnableOn: !!this.InitIsEnableOn,
        flag: true,
      }
    },
    mounted() {
      var ellipse_01 = this.$refs.ellipse_01;

      if (this.IsEnableOn == true)
      {
        ellipse_01.classList.remove('ellipse_Disable');
        ellipse_01.classList.add('ellipse_Enable');
      }
      else if (this.IsEnableOn == false)
      {
        ellipse_01.classList.remove('ellipse_Enable');
        ellipse_01.classList.add('ellipse_Disable');
      }
    },
    methods: {
      clickButton:function()
      {
        this.IsEnableOn = !this.IsEnableOn;

        var ellipse_01 = this.$refs.ellipse_01;

        if (this.flag)
        {
          ellipse_01.classList.remove('ellipse_Click1');
          ellipse_01.classList.add('ellipse_Click2');
        }
        else
        {
          ellipse_01.classList.remove('ellipse_Click2');
          ellipse_01.classList.add('ellipse_Click1');
        }
        this.flag = !this.flag;
      }
    }
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css" scoped>
  

  .ellipse_Init{
    position: absolute;
    width: 40px;
    height: 40px;
    content:url("../../assets/reset.png");
  }

  .ellipse_Enable{
    content:url("../../assets/reset.png");
  }

  .ellipse_Disable{
    content:url("../../assets/reset_disable.png");
  }

  .ellipse_Click1{
    animation-name: ellipse_Animation_Click1;
    animation-duration: 0.5s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .ellipse_Click2{
    animation-name: ellipse_Animation_Click2;
    animation-duration: 0.5s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  @keyframes ellipse_Animation_Click1
  {
    0%   {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
  }

  @keyframes ellipse_Animation_Click2
  {
    0%   {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
  }
</style>