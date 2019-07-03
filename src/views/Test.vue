<template>
  <div class="test">
    <div v-if="dataList.length>0" >
    <div class="title">
      平均值: {{average}}
    </div>
    <div class="list" v-for="item in dataList" :key="item.id">
      <div class="item">ID： <span>{{item.id}}</span></div>
      <div class="item">编号： <span>{{item.data}}</span></div>
      <div class="item wfull">日期： <span>{{item.time}}</span></div>
    </div>
    <button @click="update">加载更多</button>
    </div>
    <div class="loading" v-else>
      拼命加载中...
    </div>
  </div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
    }
  },
  created () {
    this.init()
  },
  computed: {
    average () {
      return this.$store.getters.getAverage
    },
    dataList () {
      return this.$store.state.dataList
    }
  },
  methods: {
    init () {
      this.$store.dispatch('getDataCall')
    },
    update () {
      this.$store.commit('updateMockData')
    }
  }
}
</script>

<style scoped lang="less">

.test{
  .wfull{width: 100%;}
  width: 50%;
  margin: 0 auto;
  padding: 10px 20px;
  .title{font-weight: bold; font-size: 16px; margin-bottom: 20px;}
  .list{
    margin: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 1px solid;
    border-radius: 4px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1);
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
    .item{
      text-align: left;
      padding: 3px 20px;
      color:#999;
      font-weight: bold;
      span{color:#333; font-weight: normal;}
    }
  }
  button{
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #409eff;
    border: 1px solid #409eff;
    border-radius: 5px;
    padding: 10px;
    font-size: 15px;
    color: white;
    outline: none;
    &:hover{
      background-color: #49a6f3;
      border-color: #49a6f3;
    }
  }
  .loading{
    display: flex;
    justify-content:center;
    align-items:center;
    color: #999
  }
}

</style>
