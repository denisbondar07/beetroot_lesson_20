<template>
  <div class="clothe">
      <div class="cards">
          
      <clothe-card />
      <clothe-card />
      <clothe-card />
      </div>
  </div>
</template>

<script>
import ClotheCard from '@/components/bestseller/ClotheCard.vue'
export default {
    name:"Clothing",
    components:ClotheCard,
}
</script>

<style lang="scss" scoped>
 .cards{
    width: 1100px;
    display: flex;
    justify-content: space-between;
    margin: 50px auto;
    }
 .clothe{
    width: 100%;
    height: 780px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column; 
    }
</style>