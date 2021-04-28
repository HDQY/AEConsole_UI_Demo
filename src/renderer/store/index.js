import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";
import global from "./global";

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules:{
    global,
  }
})
