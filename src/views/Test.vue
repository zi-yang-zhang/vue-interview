<template>
  <div class="test">
    <div>
      平均值: {{average}}
    </div>
    <div class="list" v-for="item in dataList" :key="item.id">
      <div>id:{{item.id}}, data:{{item.data}}</div>
      <div>{{item.time}}</div>
    </div>
    <button @click="update">加载更多</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  created () {
    this.$store.dispatch('getDataCall')
  },
  data () {
    return {
    }
  },
  computed: {
    dataList () {
      return this.$store.state.dataList
    },
    average () {
      return this.$store.getters.getAverage
    }
  },
  methods: {

    update () {
      this.$store.commit('getMoreDataList')
    }
  }
}
</script>

<style scoped lang="less">

.test{

  .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    div {
      flex: 1;
      height: 25px;
      line-height: 25px;
    }
  }

  & > .list:nth-child(odd) {
    background-color: #efefef;
  }
  button{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
}

</style>
