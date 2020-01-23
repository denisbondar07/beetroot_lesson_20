<template>
     <nav>
        <div><router-link  to="/" active-class="active" exact>Home</router-link></div>
        <div><router-link  to="/categories" active-class="active">Clothing</router-link></div>
        <div><router-link tag="a" :to="{ name: 'shop' }" active-class="active">Shop</router-link></div>
        <div><a href="url">CONTACT</a></div>
     </nav>
</template>

<script>
export default {
  name:"Navigation",
  components:{
    
  },
  props:{
    url: {
      type: String,
      default: ""
    },
    title:{
      type:String,
    },
      
  },
  data(){
    return{
    
    }
  }
}
</script>

<style lang="scss" scoped>
  body{
    margin: 0;
    padding: 0;
  }
  nav a {
    color: black;
    text-decoration: none;
    display: block; 
    padding-top: 30px;
    font-weight: bold;
    font-size: 18px;
  }
  nav div{
    margin-left: 60px;
  }
  nav div:hover{
    a{
    color:#fff;
    }
    background:#328EF8;
  }
  nav{
   display: flex;
  }
  
</style>