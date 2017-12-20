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
    to.meta.keepAlive = true; // 让A缓存，不请求数据
    next(); // 跳转到A页面
  }
};
</script>
