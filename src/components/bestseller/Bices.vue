<template>
<div class="bices">
     <div class="cards">
         <h1>Time is</h1>
         <p>Time out</p>
        <best-card />
        <best-card />
        <best-card />
  </div>
</div>
    
</template>

<script>
import BestCard from '@/components/bestseller/BestCard.vue';
export default {
    name:"Bices",
    components:BestCard,
}
</script>

<style lang = "scss" scoped>
 .cards{
    width: 1100px;
    display: flex;
    justify-content: space-between;
    margin: 50px auto;
    }
 .bices{
     width: 100%;
    height: 780px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column; 
    }
 
</style>