<template>
  <div id="outputClockPanel">
    <div ref="border_01" v-on:click="clickButton" style="z-index:1; position:absolute; width:100px; height:42px; top:14px; border-radius:21px; background:#ECDECC;" >
      <p ref="label_01" class="label_Init">Enable</p>
      <div ref="ellipse_01" class="ellipse_Init"></div>
    </div>
    <div ref='rectangle_01' style="position:absolute; left:82px; top:16px; width:308px; height:38px; background:rgba(162,144,132,0.5); "/>
    <input ref="textBox_01" class="Align-Content-Center" value="0.0" v-model="inputVal"
        style="position:absolute; margin-top:16px; margin-left:138px; width:100px; height:38px; text-align:center; border-radius:8px; color:#3B3838; background:#ECDECC;">
    <input ref="textBox_02" class="Align-Content-Center" value="" 
        style="position:absolute; margin-top:16px; margin-left:138px; width:100px; height:38px; text-align:center; border-radius:8px; color:#3B3838; background:#97867A;">
    <p ref="label_02" class="label2_Init" >OK</p>
    <div ref="polygon_01" class="wrapPanel" style="position:absolute; left:390px; top:10px;">
      <div style="width:10px; height:38px; top:6px; background:#FAECD9;"/>
      <div class="custom-triangle" />
    </div>
    <div id="label_PromptMsg" class="stackPanel">
      <p ref="label_OutputClock1_Top" style="height:15px; margin-top:6px; fontsize:11px; color:lightGray;">FPGA</p>
      <p ref="label_OutputClock1_Bottom" style="height:15px; margin-top:6px; fontsize:12px; color:whiteSmoke;">HP63__GC01</p>
      <p ref="label_OutputClock1_Bottom2" style="height:15px; margin-top:1px; fontsize:11px; color:lightGray;">CA27/CA26</p>
    </div>
  </div> 
</template>

<script>
  export default {
    name: 'output-clock-control',
    components: {  },
    props: ['InitIsMyEnabled', 'value', 'PromptMsg_Top', 'PromptMsg_Bottom', 'PromptMsg_Bottom2'],
    data() {
      return {
        IsMyEnabled: !!this.InitIsMyEnabled,
        inputVal: this.value,
        timeout: null,
        IsOutOfRange: false,
      }
    },
    watch: {
      inputVal(curVal, oldVal) {
        // 实现input连续输入，只发一次请求
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          var outputClock = parseFloat(curVal);
          if ((outputClock >= 0.0001 && outputClock <= 1028) || (outputClock >= 0.0001 && outputClock <= 250))
          {
            this.$refs.label_02.innerText = "OK";
            this.$refs.label_02.style.color = "#A9C175";
            this.IsOutOfRange = false;
          }
          else
          {
            this.$refs.label_02.innerText = "Out of Range";
            this.$refs.label_02.style.color = "#ED754D";
            this.IsOutOfRange = true;
          }
          this.value = outputClock;
        }, 200);
      }
    },
    mounted() {
      
      this.$refs.textBox_01.value = this.value;
      this.$refs.label_OutputClock1_Top.innerText = this.PromptMsg_Top;
      this.$refs.label_OutputClock1_Bottom.innerText = this.PromptMsg_Bottom;
      this.$refs.label_OutputClock1_Bottom2.innerText = this.PromptMsg_Bottom2;

      this.IsMyEnabled = !this.IsMyEnabled;
      this.clickButton();
    },
    methods: {
      clickButton:function()
      {
        this.IsMyEnabled = !this.IsMyEnabled;
        
        var border_01 = this.$refs.border_01;
        var label_01 = this.$refs.label_01;
        var ellipse_01 = this.$refs.ellipse_01;
        var textBox_01 = this.$refs.textBox_01;
        var textBox_02 = this.$refs.textBox_02;
        var rectangle_01 = this.$refs.rectangle_01;
        var label_02 = this.$refs.label_02;
        var polygon_01 = this.$refs.polygon_01;

        if (this.IsMyEnabled == true)
        {
          border_01.style.background = "#FAECD9";

          label_01.innerText = "Enable";
          label_01.classList.remove('label_Disable');
          label_01.classList.add('label_Enable');
          
          ellipse_01.classList.remove('ellipse_Disable');
          ellipse_01.classList.add('ellipse_Enable');

          textBox_01.classList.remove('display-none');
          textBox_02.classList.add('display-none');

          rectangle_01.classList.remove('display-none');
          rectangle_01.classList.remove('rectangle_Disable');
          rectangle_01.classList.add('rectangle_Enable');

          label_02.classList.remove('display-none');
          label_02.classList.add('label2_Enable');

          polygon_01.classList.remove('display-none');
          polygon_01.classList.add('polygon_Enable');
        }
        else if (this.IsMyEnabled == false)
        {
          border_01.style.background = "#97867A";

          label_01.innerText = "Disable";
          label_01.classList.remove('label_Enable');
          label_01.classList.add('label_Disable');

          ellipse_01.classList.remove('ellipse_Enable');
          ellipse_01.classList.add('ellipse_Disable');

          textBox_01.classList.add('display-none');
          textBox_02.classList.remove('display-none');

          rectangle_01.classList.add('display-none');
          rectangle_01.classList.remove('rectangle_Enable');
          rectangle_01.classList.add('rectangle_Disable');

          label_02.classList.add('display-none');
          label_02.classList.remove('label2_Enable');

          polygon_01.classList.remove('polygon_Enable');
          polygon_01.classList.add('display-none');
        }
      }
    }
  }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>
<style type="text/css" scoped>
  
  p{
    display: block;
    text-align: center;
  }

  #outputClockPanel {
    width: 530px;
    height: 70px;
  }

  #label_PromptMsg {
    position: absolute;
    width: 90px;
    height: 66px;
    left: 432px;
    top: 2px;
    background-image: url('../../assets/background_hardware.png');
  }

  .custom-triangle
  {
    width:0;
    height:0;
    border-top:26px solid transparent;
    border-bottom:26px solid transparent;
    border-left:15px solid #FAECD9;
  }

  .display-none{
    display:none; 
  }

  .label_Init{
    position: absolute;
    z-index: 1;
    text-align: center;
    left: 0;
    width: 62px;
    height: 42px;
    line-height: 42px;
    color: #3B3838;
  }

  .label2_Init{
    position: absolute;
    z-index: 1;
    text-align: center;
    top:16px;
    left: 280px;
    width: 20px;
    height: 38px;
    line-height: 40px;
    font-size:12px; 
    color:#A9C175;
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
    z-index: 1;
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

  .rectangle_Enable{
    animation-name: rectangle_Animation_Enable;
    animation-duration: 0.33s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .rectangle_Disable{
    animation-name: rectangle_Animation_Disable;
    animation-duration: 0.33s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .label2_Enable{
    animation-name: label2_Animation_Enable;
    animation-duration: 0.33s;
	  animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .polygon_Enable{
    animation-name: polygon_Animation_Enable;
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

  @keyframes rectangle_Animation_Enable
  {
    0%   {width:0px;}
    100% {width:308px;}
  }

  @keyframes rectangle_Animation_Disable
  {
    0%   {width:308px;}
    100% {width:0px;}
  }

  @keyframes label2_Animation_Enable
  {
    0%   {opacity:0.0;}
    100% {opacity:1.0;}
  }

  @keyframes polygon_Animation_Enable
  {
    0%   {left:101px;}
    100% {left:390px;}
  }
</style>