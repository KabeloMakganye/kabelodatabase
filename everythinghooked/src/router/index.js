import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import foot from '@/components/foot'
import orders from '@/components/orders'
import neworder from '@/components/neworder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'foot',
      component: foot
    },
    {
      path: '/orders',
      name: 'orders',
      component: orders
    },
    {
      path: '/neworder',
      name: 'neworder',
      component: neworder
    }
  ]
})
