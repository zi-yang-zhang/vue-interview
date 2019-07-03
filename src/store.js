import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    getMockData (state, obj) {
      if (obj) {
        state.dataList = obj
      }
    },
    updateMockData (state) {
      let obj = state.dataList
      let random = obj.length + Math.floor(Math.random() * 100 + 1)
      mockGenerator(obj.length, random).then((obj) => {
        state.dataList = state.dataList.concat(obj)
      })
    }
  },
  getters: {
    getAverage: state => {
      let result = 0
      let obj = state.dataList
      if (obj.length > 0) {
        let count = obj.reduce((pre, cur) => {
          return pre + cur.data
        }, 0)
        result = (count / obj.length).toFixed(2)
      }
      return result
    },
    getData: state => state.dataList
  },
  actions: {
    getDataCall: context => {
      // TODO
      mockGenerator().then(dataList => {
        context.commit('getMockData', dataList)
      }).catch(err => {
        console.log(err)
      })
    }
  }
})
