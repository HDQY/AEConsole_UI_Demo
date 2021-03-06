const global={
    namespaced:true,
    state: {
        deviceId: 'IC-TEST-DUAL-0003',
    },
    mutations: {
        DEVICEID(state, val) {
            state.deviceId = val
        }
    },
    actions:{
        ACDEVICEID(context, val) {
            context.commit('DEVICEID',val)
        }
    }
}
export default global