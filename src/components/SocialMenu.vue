<template>
<div class="social_menu">
     <a v-for="(menuItem, index) in Config.socialMenu"
      :key="index" :href="menuItem.url">
      <i :class="['fab', menuItem.iconClassName]"></i>
    </a></div>    
</template>
<script>
import Config from "@/assets/js/config.json";
export default {
    name:"SocialMenu",
    data(){
        return{
            Config,
        }
    }
}
</script>

<style lang="scss" scoped>
    .social_menu{
        width: 300px;
        height: 80px;
        background-color:#328EF8; 
    }
    i{
        font-size: 28px;
        color: #fff;
        padding-top: 25px;
        margin-left: 30px;
    }
    i:hover{
        font-size: 30px;
        color:antiquewhite;
    }
</style>

