<template>
<div id='tabbar'>
    <div class='tab_bar_item'>我的</div>
    <div class='tab_bar_item'>购物车</div>
    <div class="tab_bar_item">item3</div>
    <div class="tab_bar_item">item4</div>
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


.tab_bar_item{
    flex:1;
    text-align: center;
    height: 49px;
}

</style>
