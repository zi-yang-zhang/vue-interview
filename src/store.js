import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
import { counting, toFixedDemical } from './util/tools'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    initDataList (state, dataList) {
      state.dataList = dataList
    },
    appendData (state, data) {
      let mid = []
      for (let val of data) {
        mid.push({
          id: state.dataList.length + mid.length,
          time: new Date(),
          data: val
        })
      }
      state.dataList = state.dataList.concat(mid)
    }
  },
  getters: {
    getAverage: state => {
      return toFixedDemical(
        counting(state.dataList, 'data') / (state.dataList.length !== 0 ? state.dataList.length : 1)
      )
    },
    getData: state => state.dataList
  },
  actions: {
    getDataCall (context) {
      return mockGenerator().then(function (value) {
        context.commit('initDataList', value)
      })
    }
  }
})
