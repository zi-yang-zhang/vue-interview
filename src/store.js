import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    initDataList (state, dataList) {
      state.dataList = dataList
    },
    getMoreDataList (state) {
      mockGenerator(state.dataList.length, state.dataList.length + 20).then(function (dataList) {
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
    getDataCall (context) {
      // TODO
      mockGenerator().then(function (dataList) {
        context.commit('initDataList', dataList)
      })
    }
  }
})
