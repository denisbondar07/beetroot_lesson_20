<template>
    <div class="big_card">
        <div class="blu_line">
            <p>Bicycles</p>
        </div>
        <img src="/img/cards/bicycle_PNG.png" alt="bicycle">
    </div>
</template>

<script>
export default {
    name:"BigCard",
}
</script>

<style lang= "scss" scoped>
    .big_card{
        /* background:url(/img/cards/ram.png) no-repeat center top / cover; */
        width: 569px;
        height: 600px;
        margin-right: 50px;
    }
    .blu_line{
        background: url(/img/cards/line.png) no-repeat center top / cover;
        height: 80px;
        margin-top: 80px;
        text-align: right;
    }
    p{
        font-size: 18px;
        color: #fff;
        padding-top: 25px;
        padding-right: 25px;
        font-family: 'Poppins', sans-serif;
    }
    img{
        width: 602px;
        height: 520px;
        margin-left: 0;
    }
    .big_card:hover{
        opacity: 0.8;
        cursor:pointer;
    .blu_line{
        height: 100px;
        transition: 1s ease;
    p{
        font-size: 40px;
        transition: 1s ease;
        }
      }
    }
  
    
   
</style>