<template>
    <div class="delivery">
        <div class="box"><img src="img/cards/box.png" alt="box"></div>
        <div class="container">
            <div class="info">
                <p>Сreate an account and get</p>
                <h3>Free delivery</h3>
                <p>FOR 60 DAYS</p>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    name:"Delivery",
}
</script>

<style lang = "scss" scoped>
 .delivery{
   width: 100%;
   height: 396px;
   background-color: #ffffff;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   background-repeat: no-repeat;
   background-position: center; 
    }
 .box{
   height: 246px;
   }  
 .container {
   width: 50%;
   height: 100%; 
   }
 .info {
   width: 382px;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center; 
   }
 .info p {
   margin: 0; 
   }
 .info p:first-of-type {
   font-family: 'Kanit', sans-serif;
   color: #595656;
   font-weight: 300;
   font-size: 20px; 
   }
 .info p:last-of-type {
   font-family: 'Kanit', sans-serif;
   color: #595656;
   font-weight: 400;
   font-size: 20px; 
   }
 .info h3 {
   margin: 0;
   font-family: 'Kanit', sans-serif;
   color: #C5A577;
   font-weight: 600;
   font-size: 60px;
   line-height: 60px; 
   }
 .info .button {
   text-align: center;
   display: block;
   width: 216px;
   height: 35px;
   line-height: 35px;
   cursor: pointer;
   background-color: #328EF8;
   margin-top: 20px;
   text-align: center; 
   }
 .info .button a {
   text-decoration: none;
   color: #ffffff;
   font-family: 'Poppins', sans-serif;
   font-size: 15px;
   font-weight: 400; 
   }
</style>