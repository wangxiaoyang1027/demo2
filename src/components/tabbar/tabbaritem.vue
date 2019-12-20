<template>
    <div class='tab_bar_item'>
        <slot name='itemimg'></slot>
        <slot name='itemimgactive'></slot>
        <slot name='itemtext'></slot>
    </div>
</template>

<script>
export default {
    name:'tabbaritem'
}
</script>

<style scoped>
.tab_bar_item{
    flex:1;
    text-align: center;
    height: 49px;
}

.tab_bar_item img{
    height:24px;
    width:24px;
}

</style>