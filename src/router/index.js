import Vue from 'vue'
import VueRouter from 'vue-router'

const Home1 =() =>import('../views/Home/home.vue')
const ZJ =() => import('../views/All/all.vue')

// 1. 安装插件
Vue.use(VueRouter)

const routes=[
    {
         path:'',
         redirect:'/home'
    } ,
    {
        path:'/home',
        component:Home1
    },
    {
        path:'/all',
        component:ZJ
    }
 ]

// 2. 创建路由对象
const router = new VueRouter({
    routes,
    
   
    mode:'history'
})

// 3.导出router
export default router

// 4. 到 main.js 
