<template>
  <div class="list">
    <h1>{{msg}}</h1>
    <router-link to="/list">返回列表页</router-link>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  created() {
    this.ajaxRequest();
  },
  methods: {
    ajaxRequest() {
      const obj = {
        'aa': 1
      };
      Promise.all([this.$store.dispatch('withdary', obj)]).then((res) => {
        console.log(res);
      });
    }
  }
};
</script>
