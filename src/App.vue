<template>
  <div id="app">
    <!-- 设置路由组件的视图位置 -->
    <router-view/>
    <!-- 放置非路由组件 -->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import axios from 'axios'
// 先在App.vue中引入封装的接口函数
import {reqCategorys} from './api'

export default {
  name: 'App',
  components: {
    FooterGuide,     
  },
  mounted(){
    this.$store.dispatch('getAddress')
  },
  /* mounted(){
    axios.get('http://localhost:8080/api/index_category').then(
      response => {
        console.log('请求成功了',response.data) //response为响应对象，里面的data才是响应的数据
      },
      error => {
        console.log('请求失败了',error.message) //message失败原因
      }
    )
  }, */
  async mounted () {
    const result = await reqCategorys()
    // console.log(result)
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // 整个应用组件的样式
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
