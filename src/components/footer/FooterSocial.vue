<template>
    <div class="footer_social">
    <div class="container">
         <div class="dev">Development and support by MIMIMI studio ©2019</div>
         <div class="social">
               <p>find us on</p>
               <div class="icons"> <a v-for="(menuItem, index) in Config.footerSocial"
      :key="index" :href="menuItem.url">
      <i :class="['fab', menuItem.iconClassName]"></i>
    </a></div>
         </div>
    </div>
    </div>    
</template>

<script>
import Config from "@/assets/js/config.json";
export default {
    name:"FooterSocial",
    data(){
        return{
            Config,
        }
    }
}
</script>

<style lang = "scss" scoped>
 .footer_social{
    height: 48px;
    width: 100%;
    display: flex;
    justify-content: center;
    }
 .container {
    max-width: 1087px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    }
 .dev {
    color: #595656;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400; 
    }
 .social {
    width: 181px;
    height: 20px;
    display: flex; 
    }
 .social p {
    color: #328EF8;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    margin: 0;
    margin-right: 40px;
    line-height: 20px; 
    }
 .social .icons {
    width: 80px;
    display: flex;
    justify-content: space-between; 
    }
 .social .icons a {
    display: block;
    width: 20px;
    height: 20px; 
    }
 .social .icons a:nth-of-type(1) {
    color:red;
    }
 .social .icons a:nth-of-type(2) {
    color:rgb(50, 88, 156);
    }
 .social .icons a:nth-of-type(3) {
    color:rgb(182, 74, 141);
    }    
</style>