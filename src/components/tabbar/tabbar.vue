<template>
<div id='tabbar'>
    <slot></slot>
   

    <!-- <div class='tab_bar_item'><img src='../../assets/img/tabbar/wm1.jpg' />
    <div>我的</div>
        
    </div>
    <div class='tab_bar_item'>
         <img src='../../assets/img/tabbar/wm1.jpg' />
         <div>购物车</div>
    </div>
    <div class="tab_bar_item">
         <img src='../../assets/img/tabbar/wm1.jpg' />
         <div>item3</div>
    </div>
    <div class="tab_bar_item">
         <img src='../../assets/img/tabbar/wm1.jpg' />
         <div>item4</div>
    </div> -->
</div>
</template>

<script>
export default {
    name:'tab_bar'
}
</script>

<style scoped>

#tabbar{
    position: fixed;
    display: flex;
    background-color: #f6f6f6;
    left:0px;
    right:0px;
    bottom:0px;
}



</style>
