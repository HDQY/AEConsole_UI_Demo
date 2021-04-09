import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-window',
      component: require('@/components/LoginWindow_Network').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/MainWindow',
      name: 'main-window-vu440-quad',
      component: require('@/components/VU440_Quad/MainWindow').default
    },
    {
      path: '/MainWindow',
      name: 'main-window-vu19p-solo',
      component: require('@/components/VU19P_Solo/MainWindow').default
    },
    {
      path: '/PllManualSelect',
      name: 'pll-manual-select',
      component: require('@/components/CustomControl/PllManualSelectWindow').default
    },
  ]
})
