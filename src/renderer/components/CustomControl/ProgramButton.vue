<template>
<div style="width:660px; height:50px;">
  <div style="position:relative; width:660px; height:50px; background:#282328;">
    <p ref="label_01" class="label_Init">Program</p>
  </div>
</div> 
</template>

<script>
  export default {
    name: 'program-button',
    components: {  },
    props: ['ButtonText'],
    data() {
      return {
        IsPrograming: false,
        timer: '',
        dotCount: 0,
      }
    },
    computed:{
      programButtonText:function(){
        return this.ButtonText;},
    },
    watch: {
      IsPrograming: function(newVal, oldVal) {
        var label_01 = this.$refs.label_01;
        if (this.IsPrograming)
        {
          //label_01.innerText = this.ButtonText + "...";
          label_01.classList.add('label_ClickAnimation');
          this.timer = setInterval(this.clickAnimation, 1000);
        }
        else
        {
          label_01.innerText = this.ButtonText;
          label_01.classList.remove('label_ClickAnimation');
          clearInterval(this.timer);
        }
      }
    },
    mounted() {
      this.$refs.label_01.innerText = this.ButtonText;
    },
    methods: {
      clickButton:function()
      {
        //
      },
      clickAnimation:function()
      {
        var str = "";
        for(var i = 0; i < this.dotCount; i++)
        {
           str += ".";
        }
        this.$refs.label_01.innerText = this.ButtonText + str;

        this.dotCount = (this.dotCount >= 3) ? 1: (this.dotCount + 1);
      },
    }
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css" scoped>
  
  .label_Init{
    position: absolute;
    text-align: center;
    left: 310px;
    height: 50px;
    line-height: 50px;
    font-size: 21px;
    color: whitesmoke;
  }

  .label_ClickAnimation{
    animation-name: label_Animation_Click;
    animation-duration: 3.0s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  @keyframes label_Animation_Click
  {
    0% {left:310px;}
    6.6%  {left:595px;}
    20.0% {left:0px;}
    46.6% {left:595px;}
    73.3% {left:0px;}
    100%  {left:310px;}
  }

  @keyframes label_Animation_Click2
  {
    0% {left:0px;}
    6.6%  {left:285px;}
    20.0% {left:-285px;}
    46.6% {left:285px;}
    73.3% {left:-285px;}
    100%  {left:0px;}
  }
</style>