<template>
  <div class="test">
    <div>
      平均值: {{average}}
    </div>
    <button @click="update">加载更多</button>
    <div class="list" v-for="item in dataList" :key="item.id">
      <div class="item">
        <div>{{item.id}} ,</div>
        <div> {{item.data}}</div>
      </div>
      <div>{{item.time}}</div>
    </div>
  </div>
</template>
<script>
  import getList from '../mock.js'
  import {mapActions,mapState,mapGetters} from 'vuex'
  export default {
    name:'test',
    data() {
      return {
        // dataList:this.$store.getters.getData,
        // average:this.$store.getters.getAverage
      }
    },
    computed:{
      dataList() {
        return this.$store.state.dataList
      },
      average() {
        return this.$store.getters.getAverage
      }
    },
    created() {
      this.$store.commit('init')
      this.update();
    },
    methods:{
      update() {
        var long = this.dataList.length;
        var num = long + 20;
        getList(long,num).then((aaa) => {
          console.log(aaa);
          var newArr = this.dataList.concat(aaa)
          this.$store.commit('update',newArr)
        });
      }
    }
  }
</script>
<style scoped lang="less">
  .test{
    .list{
      display:flex;
      flex-direction:column;
      .item{
        display:flex;
        flex-direction:row;
        justify-content:center;
      }
    }
    button{
      margin-top:10px;
      margin-bottom:10px;
      background-color:blue;
      padding:10px;
      font-size:15px;
      color:white;
      width:100%;
    }
  }
</style>
