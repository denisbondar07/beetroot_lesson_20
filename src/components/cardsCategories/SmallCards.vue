<template>
    <div class="small_cards">
        <div class="block_1">
            <div class="card">
                <div class="blue_line">
                    <p>Clothing</p>
                </div>
                    <img id="card_wear" src="img/cards/clothe.png" alt="bicycle">
                </div>
               <div class="card">
                    <div class="blue_line">
                        <p>Main</p>
                    </div>
                    <img id="card_wear" src="img/cards/detail.png" alt="bicycle">
                </div>
        </div>
        <div class="block_2">
            <div class="card">
                <div class="blue_line">
                    <p>Components</p>
                </div>
                    <img id="card_wear" src="img/cards/detail.2.png" alt="bicycle">
                </div>
                <div class="card">
                <div class="blue_line">
                    <p>Accessories</p>
                </div>
                    <img id="card_wear" src="img/cards/detail.3.png" alt="bicycle">
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"SmallCards"
}
</script>

<style lang= "scss" scoped>
    .card{
        height: 250px;
        width: 275px; 
        margin-right: 50px; 
    }
    .blue_line{
        background: url(/img/cards/line.png) no-repeat center top / cover;
        height: 65px;
        margin-top: 80px;
    }
    p{
        font-size: 18px;
        color: #fff;
        padding-top: 25px;
        padding-right: 15px;
        text-align: right
    }
    .small_cards{
        display: flex;
    }
    .card:hover{
        opacity: 0.8;
        cursor:pointer;
    .blue_line{
        height: 80px;
        transition: 1s ease;
    p{
        font-size: 34px;
        transition: 1s ease;
             }
        }
    }

</style>