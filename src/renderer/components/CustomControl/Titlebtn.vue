<template>
  <div class="title-btn" v-bind:style="style" v-on:click="click">
    <label class="forground-champagne" v-if="type === 'min'">—</label>
    <label class="forground-champagne" v-if="type === 'close'">X</label>
  </div>
</template>

<script>
    const {ipcRenderer: ipc} = require('electron');
    const style = {
        backgroundColor: 'transparent',
    };
    export default {
        name: 'Titlebtn',
        props: ['type','parentWindowName'],
        computed: {
            style: function () {
                return style[this.type];
            }
        },
        methods: {
            click: function () {
                ipc.send(this.type, this.parentWindowName);
            }
        }
    }
</script>

<style src="../../../../static/css/wpf-style-layout.css"></style>
<style src="../../../../static/css/common.css"></style>    
<style>

 .title-btn {
    width: 20px;
    height: 20px;
 }
</style>