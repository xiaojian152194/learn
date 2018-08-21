/*
路由器对象模块
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

//声明使用插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      // name: 'HelloWorld',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      // name: 'HelloWorld',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      // name: 'HelloWorld',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      // name: 'HelloWorld',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      // name: 'HelloWorld',
      component: Login
    },
    {
      path: '/',
      redirect: '/home',
    }
  ]
})
