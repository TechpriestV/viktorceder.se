import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Academic from '@/components/Academic'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },{
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  ],
})
