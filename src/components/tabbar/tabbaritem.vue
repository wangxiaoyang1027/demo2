<template>
    <div class='tab_bar_item' @click="OnClick">
        <slot v-if='!isActive' name='itemimg'></slot>
        <slot v-else name='itemimgactive'></slot>
        <div :class="{active :isActive}">
            <slot name='itemtext'></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'tabbaritem',
    props:{path:String },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) >-1
            // return true
        }
    },
    methods:{
        OnClick(){
           this.$router.replace(this.path)   
        }
    }

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

.active{
    color:red;
}

</style>