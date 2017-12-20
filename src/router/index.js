import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/views/HelloWorld';

Vue.use(Router);

const router = new Router({
  mode: 'history', // 访问路径不带井号  需要使用 history模式，才能使用 scrollBehavior
  base: '/page/app',  // 配置单页应用的基路径
  routes: [
    {
      path: '/',
      name: 'list',
      component: resolve => require(['@/views/list'], resolve),  // 使用懒加载
      meta: {
        keepAlive: true  // true 表示需要使用缓存
      }
    },
    {
      path: '/list',
      name: 'list',
      component: resolve => require(['@/views/list'], resolve), // 使用懒加载
      meta: {
        keepAlive: true  // true 表示需要使用缓存  false表示不需要被缓存
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => require(['@/views/detail'], resolve) // 使用懒加载
    },
    {
      path: '/a',
      name: 'A',
      component: resolve => require(['@/views/a'], resolve),
      meta: {
        keepAlive: true  // true 表示需要使用缓存
      }
    },
    {
      path: '/b',
      name: 'B',
      component: resolve => require(['@/views/b'], resolve)
    },
    {
      path: '/c',
      name: 'C',
      component: resolve => require(['@/views/c'], resolve)
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // 保存到 meta 中，备用
    to.meta.savedPosition = savedPosition;
    if (savedPosition) {
      return { x: 0, y: 0 };
    }
    return {};
  }
});
export default router;
