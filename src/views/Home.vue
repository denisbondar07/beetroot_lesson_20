<template>
    <div class="main">
        <main-slider />
        <categories />
         <brand-slide />
        <sale />
        <bestseller />
        <delivery />
    </div>
</template>

<script>
import mainSlider from '@/components/MainSlider.vue';
import Categories from '@/components/Categories.vue';
import Sale from '@/components/Saleblocks/Sale.vue';
import Bestseller from '@/components/bestseller/Bestseller.vue';
import Delivery from '@/components/Delivery.vue';


export default {
    name:"Home",
    components:{
    mainSlider,
    Categories,
    Sale,
    Bestseller,
    Delivery,
    }
}
</script>