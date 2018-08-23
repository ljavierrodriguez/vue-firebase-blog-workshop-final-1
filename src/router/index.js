import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import About from '@/components/About/About'
import Blog from '@/components/Blog/Blog'
import BlogDetail from '@/components/Blog/BlogDetail'
import Contact from '@/components/Contact/Contact'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/blog/:id/detail',
      name: 'BlogDetail',
      component: BlogDetail,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        requiresAuth: false
      }
    },
  ]
});

export default router;
