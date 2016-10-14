<template>
  <div class="hello container">
      <p><router-link to="add">添加银行卡</router-link></p>
      <p><router-link to="card">我的银行卡</router-link></p>
      <p><router-link to="form">表单</router-link></p>
      <p><router-link to="order">订单列表</router-link></p>
      <p><router-link to="order/1">订单详情</router-link></p>
      <p><router-link to="repay">还款详情</router-link></p>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{font-size:20px;color:orange;margin:30px;}
</style>
