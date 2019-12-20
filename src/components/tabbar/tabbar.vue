<template>
<div id='tabbar'>
    <slot></slot>
   

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
