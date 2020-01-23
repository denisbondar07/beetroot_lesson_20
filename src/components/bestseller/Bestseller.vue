<template>
    <div class="bestsellers">
       <component :is="component"></component>
        <!-- <div class="content">
            <h2>Bestsellers</h2>
               <div> <img src="img/main/categories/Line 14.png" alt="img"></div>
        </div>-->
        <div class="buttons">
            <button @click="component='Bices' ">Bicycles</button>
            <button @click="component='Clothing'">Clothing</button>
        </div> 
           
           <!-- <component :is="component"></component> -->
       
    </div>
</template>

<script>
import Bices from '@/components/bestseller/Bices.vue';
import Clothing from '@/components/bestseller/Clothing.vue';

export default {
    name:"Bestseller",
    components:{
        Bices,
        Clothing,
       
    },
    data(){
       return{
           component:'Bices',
       }
    },
    methods:{
       
    }
}
</script>

<style lang = "scss" scoped>
 /* .slide-fade-enter-active{
     transition: all .3s ease;
    }
 .slide-fade-leave-active{
     transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
 .slide-fade-enter, .slide-fade-leave-to{
     transform: translateX(10px);
     opacity: 0;
    } */
 .bestsellers {
    width: 100%;
    height: 780px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column; 
    }
 .buttons{
     text-align: center;
     margin-top: 20px;
    }
 button{
     background-color:#328EF8;
     color:#fff;
    }
 .content{
    text-align: center;
    margin-top: 30px;
    }
 h2{
    color:#328EF8;
    padding-right: 20px;
    font-family: 'Poppins', sans-serif;
    }
 /* .cards{
    width: 1100px;
    display: flex;
    justify-content: space-between;
    margin: 50px auto;
    } */
</style>