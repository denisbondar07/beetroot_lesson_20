<template>
<div class="categories">
    <div class="content">
    <h2>Popular categories</h2>
   <div> <img src="img/main/categories/Line 14.png" alt="img"></div>
    </div>
    <div class="cards">
        <big-card />
        <small-cards />
    </div>
</div>
</template>

<script>
import BigCard from '@/components/cardsCategories/BigCard.vue'; 
import SmallCards from '@/components/cardsCategories/SmallCards.vue';
export default {
    components:{
        BigCard,
        SmallCards,
    }
}
</script>

<style lang = "scss" scoped>
    .categories{
        margin: 0;
        padding: 0;
        background-color:#E5E5E5;
        overflow: hidden;
        height: 1000px;
        padding-top: 40px;
    }
    .content{
        text-align: center;
    }
    h2{
        color:#328EF8;
        padding-right: 20px;
        font-family: 'Poppins', sans-serif;
    }
    img{
        margin-top: 35px;  
    }
    .cards{
        display: flex;
        width: 1300px;
        margin:0 auto;
    }

</style>