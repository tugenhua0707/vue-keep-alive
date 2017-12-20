<template>
  <div class="hello">
    <h1>vue</h1>
    <h2>{{msg}}</h2>
    <router-link to="/b">跳转到b页面</router-link>
    <router-link to="/c">跳转到c页面</router-link>
  </div>
</template>

<script>
export default {
  name: 'helloworld',
  data () {
    return {
      msg: 'Welcome to A Page'
    };
  },
  methods: {
    ajaxRequest() {
      const obj = {
        'aa': 1
      };
      Promise.all([this.$store.dispatch('testUrl', obj)]).then((res) => {});
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      /*
       如果 to.meta.savedPosition === undefined 说明是刷新页面或可以叫第一次进入页面 需要刷新数据
       如果to.meta.keepAlive === false, 那么说明是需要请求的;
       此时需要刷新数据，获取新的列表内容。
       否则的话 什么都不做，直接使用 keep-alive中的缓存
       */
      if (to.meta.savedPosition === undefined) {
        vm.ajaxRequest();
      }
      if (!to.meta.keepAlive) {
        vm.ajaxRequest();
      }
    })
  }
};
</script>
