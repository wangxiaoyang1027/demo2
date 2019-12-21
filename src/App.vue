<template>
  <div >
    <router-view></router-view>
    <TabBar>
      <TabBarItem path='/home'>

        <img slot='itemimg'  src='./assets/img/tabbar/wm1.jpg'/>
        <img slot='itemimgactive' src='./assets/img/tabbar/Bears.jpg' />
        
           <div slot='itemtext'>首页</div>

      </TabBarItem>

      <TabBarItem path='/all'>
        <img slot='itemimg' src='./assets/img/tabbar/wm1.jpg'/>
        <img slot='itemimgactive' src='./assets/img/tabbar/Bears.jpg' />
        <div slot='itemtext'>购物车</div>
      </TabBarItem>

      <TabBarItem>
        <img  slot='itemimg' src='./assets/img/tabbar/wm1.jpg'/>
        <img  slot='itemimgactive' src='./assets/img/tabbar/Bears.jpg' />
        <div slot='itemtext'>全局</div>
      </TabBarItem>


    </TabBar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/tabbar.vue'
import TabBarItem from './components/tabbar/tabbaritem.vue'

// import './assets/css/base.css'

export default {
  name: 'app',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}

.activered{

  color:red;
}
</style>
