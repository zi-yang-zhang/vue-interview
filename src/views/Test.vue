<template>
  <div class="test">
    <div>
      平均值: {{getAverage}}
    </div>
    <button @click="update">加载更多</button>
    <div id="container">
      <div class="list" v-for="item in getData" :key="item.id">
        <div>id: {{item.id}}</div>
        <div>data: {{item.data}}</div>
        <div>time: {{format(item.time)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { toTimeFormat, randomNumber } from '../util/tools'

export default {
  name: 'test',
  computed: {
    ...mapGetters([
      'getAverage',
      'getData'
    ])
  },
  methods: {
    ...mapMutations([
      'appendData'
    ]),
    ...mapActions([
      'getDataCall'
    ]),

    format (date) {
      return toTimeFormat(date)
    },

    update () {
      let num = randomNumber()
      let items = [];
      for(let i =0 ; i< num ; i++){
        items.push(randomNumber())
      }
      this.appendData(items)
      this.scrollToBottom()
    },

    scrollToBottom (id = 'container') {
      this.$nextTick(() => {
        var div = document.getElementById(id)
        div.scrollTop = div.scrollHeight
      })
    }
  },
  created () {
    var _vm = this;
    this.getDataCall().then(function(){
      _vm.scrollToBottom();
    })
  }
}
</script>

<style scoped lang="less">

.test{

  display:flex;
  flex-direction: column;
  align-content: round;
  padding-left: 10%;
  padding-right: 10%;

  #container{
    width: 100%;
    height: 500px;
    overflow-y: scroll;
    border-radius: 3px;
    border: 1px solid #444;
    padding-top: 10px;
    padding-bottom: 10px;

    &::-webkit-scrollbar
    {
      width: 5px;
      background-color:#999;
    }

    &::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #999;
    }

    &::-webkit-scrollbar-thumb
    {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color:#fff;
    }
  }

  .list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: round;
    justify-content: space-around;
    border: 1px solid #666;
    border-radius: 10px;
    margin: 10%;
    margin-top: 5px;
    margin-bottom: 0px;
    padding: 5px;

    div {
      flex: 0 1 50%;
    }

    :nth-child(3){
      flex: 0 1 100%;
    }
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
