<template>
  <div id="app">
    <header>
      <img src="/img/nav/logo (1).png" alt="img">
      <div class="nav">
     <navigation  />
      </div>
      <social-menu />
    </header>
       <router-view></router-view>
       <Footer />
       <footer-social />
    </div> 
</template>

<script>
import Navigation from './components/Navigation.vue';
import SocialMenu from '@/components/SocialMenu.vue';
import Config from "@/assets/js/config.json";
import Footer from '@/components/footer/Footer.vue';
import FooterSocial from '@/components/footer/FooterSocial.vue';


export default {
  name: 'app',
  props:{
    
  },
  components: {
    Navigation,
    SocialMenu,
    Footer,
    FooterSocial,
  },
  data(){
    return{
      menu: Config.mainMenu ,
    }
  }
}
</script>

<style lang="scss"  >
body{
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  overflow: hidden; 
  margin: 0;
  padding: 0; 
  font-family: 'Poppins', sans-serif;
}
header{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px; 
  background-color: #EFEFEF;
  overflow: hidden;
}
.nav{
  width: 400px;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
}
img{
  padding-top: 10px;
}

</style>
