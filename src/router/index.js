import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login/index'),
  },
  {
    path: '/index',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Admin/index'),
    meta: {
      title: 'OurBlog后台'
    },
    children: [
      {
        path: '/cate',
        name: '分类管理',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Cate/index'),
        meta: {
          title: '分类管理'
        },
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  /*路由发生变化修改页面title*/
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});
export default router
