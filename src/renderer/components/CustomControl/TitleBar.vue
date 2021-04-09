<template>
  <div id="custom-title">
    <Titlebtn type="min"></Titlebtn>
    <Titlebtn type="close" v-bind:parentWindowName="parentWindowName" style="margin-left:30px;">X</Titlebtn>
  </div>
</template>

<script>
  import Titlebtn from './Titlebtn.vue'

  export default {
  components: { Titlebtn },
    name: 'CustomTitle',
    props: ['parentWindowName'],
    methods: {
    },
  }
</script>
    
<style>
  #custom-title {
    width: 100px;
    height: 50px;
    line-height: 50px;
    display: flex;
  }
</style>