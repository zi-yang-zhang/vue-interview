import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    // 设置全局参数
    setState(state,  val ) {
      if (typeof val != 'undefined') {
        state.dataList = val;
      }
    },
    getDataList (state) {
      mockGenerator(state.dataList.length, state.dataList.length + 20).then((dataList) =>{
        state.dataList = state.dataList.concat(dataList)
      })
    }
  },
  getters: {
    getAverage: state => {
      let total = 0
      state.dataList.map((item) => {
        total += item.data
      })
      return (total / state.dataList.length).toFixed(2)
    },
   
    getData: state => state.dataList
  },
  actions: {
    getDataCall: context => {
      // TODO
      mockGenerator().then(function (dataList) {
        context.commit('setState', dataList)
      })
    }
  }
})
