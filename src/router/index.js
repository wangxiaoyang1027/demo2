import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =() =>import('../views/Home/home.vue')
const All =() => import('../views/All/all.vue')

// 1. 安装插件
Vue.use(VueRouter)

// 2. 创建路由对象
const router = new VueRouter({
    routers:[
       {
        path:'',
        redirect:'/home'
       } ,
       {
           path:'/home',
           component:Home
       },
       {
           path:'/all',
           component:All
       }
    ]
})

// 3.导出router
export default router

// 4. 到 main.js 
