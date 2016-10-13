<template>
  <div class="hello container">
    <nav-header :_title="mytitle" :left="false"></nav-header> 
    
     <div class="mui-content">
       <router-link to="order">order</router-link>
       <transition name="fade">
          <router-view  keep-alive></router-view>
       </transition>  
     </div>
     <nav-footer></nav-footer>
  </div>
</template>

<script>
import navHeader from 'components/navHeader'
import navFooter from 'components/navFooter'
export default {
  components:{
    navHeader,navFooter
  },
  data () {
    return {
      mytitle:"生活小工具"
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.mui-content{background: #efeff4;}
</style>
