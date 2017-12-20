<template>
  <div class="list">
    <h1>{{msg}}</h1>
    <router-link to="/a">返回a页面</router-link>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: 'Welcome to B Page'
    };
  },
  created() {},
  methods: {
  },
  beforeRouteLeave(to, from, next) {
    // 设置下一个路由meta
    to.meta.keepAlive = false; // 让A不缓存，重新请求数据
    console.log(to)
    next(); // 跳转到A页面
  }
};
</script>
