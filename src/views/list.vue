<template>
  <div class="hello">
    <h1>vue</h1>
    <h2>{{msg}}</h2>
    <router-link to="/detail">跳转到detail页</router-link>
  </div>
</template>

<script>
export default {
  name: 'helloworld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  methods: {
    ajaxRequest() {
      const obj = {
        'aa': 1
      };
      Promise.all([this.$store.dispatch('testUrl', obj)]).then((res) => {
        console.log(res);
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      /*
       如果 to.meta.savedPosition === undefined 说明是刷新页面或可以叫第一次进入页面 需要刷新数据
       如果savedPosition === null, 那么说明是点击了导航链接;
       此时需要刷新数据，获取新的列表内容。
       否则的话 什么都不做，直接使用 keep-alive中的缓存
       */
      if (to.meta.savedPosition === undefined) {
        vm.ajaxRequest();
      }
      if (to.meta.savedPosition === null) {
        vm.ajaxRequest();
      }
    })
  }
};
</script>
