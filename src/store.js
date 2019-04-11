import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    dataList:[]
  },
  mutations:{
    init(state) {
      state.dataList = []
    },
    update(state,arr) {
      state.dataList = arr
    }
  },
  getters:{
    getAverage:state => {
      console.log(state.dataList);
      var average = 0;
      for (let i = 0; i < state.dataList.length; i++) {
        average = average + state.dataList[i].data
      }
      if (state.dataList.length) {
        average = average / state.dataList.length
      }
      return average.toFixed(2);
    },
    getData:state => {
    }
  },
  actions:{
    getDataCall(context) {
      mockGenerator()
    }
  }
})
