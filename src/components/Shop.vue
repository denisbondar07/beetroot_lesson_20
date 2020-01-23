<template>
    <div class="sale">
        <div class="content">
            <h2>Sale</h2>
                <div> <img src="img/main/categories/Line 14.png" alt="img"></div>
            </div>
            <div class="cards">
                <sale-card />
                <sale-card />
                <sale-card />
             </div>
         </div>
</template>

<script>
import SaleCard from '@/components/Saleblocks/SaleCard.vue'
export default {
    name:"Sale",
    components:{
        SaleCard,
    },
}
</script>

<style lang = "scss" scoped>
    .content{
        text-align: center;
    }
    h2{
        color:#328EF8;
        padding-right: 20px;
        font-family: 'Poppins', sans-serif;
    }
    .sale{
        height: 680px;
    }
    .cards{
        width: 1200px;
        display: flex;
        justify-content: space-between;
        margin: 50px auto;
    }

</style>