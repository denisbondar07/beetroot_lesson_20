<template>
    <div class="products">
        <div class="product-card">
             <div class="product-container">
                 <img src="img/salecards/head.png" alt="bike">
                 <div class="rating">
                     <img src="img/bestsellers/rating.png" alt="">
                     <a href="#">85 reviews</a>
                 </div>
                 <h3>Giro Montara</h3>
                 <p>MIPS Bike Helmet - Women's</p>
                 <p>Sleek and safe, the Giro Montara MIPS Bike Helmet offers impressive protection 
                     and style on trail. Its burly in-mold construction, Roll Cage™ reinforcement, 
                     and MIPS technology assure a lightweight yet extremely secure helmet that you'll 
                     hardly feel.</p>
                 <div class="actions">
                     <div class="price">85 $</div>
                     <button class="wish"><i class="far fa-heart" ></i></button>
                     <button class="bag"><i class="fas fa-shopping-cart"></i></button>
                 </div>
             </div>
         </div>
    </div>
</template>

<script>
export default {
    name:"BestCard",
}
</script>

<style lang = "scss" scoped>
 i{
    font-size: 28px;
    color: #fff;
    }
 i:hover{
    font-size: 30px;
    color:antiquewhite;
    }
 .products {
    height: 502px;
    width: 100%;
    display: flex;
    justify-content: space-between; 
    }
 .product-card {
    width: 333px;
    height: 100%;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative; 
    }
 .product-card:hover {
    height: 582px; 
    opacity: 0.8;
    cursor:pointer;
    }
    .bestsellers .product-card:hover p:nth-of-type(2) {
    display: block; 
    }
 .product-card .product-container {
    width: 298px;
    height: 467px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    }
 .product-card img {
    object-fit: contain;
    height: 250px;
    }
 .product-card .rating {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px; 
    }
 .product-card .rating a {
    text-decoration: none;
    color: #928D8D;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 200; 
    }
.product-card h3 {
    margin: 0;
    color: #595656;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px; 
    }
 .product-card p:first-of-type {
    margin: 0;
    color: #595656;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    }
 .product-card p:nth-of-type(2) {
    margin: 0;
    color: #595656;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    display: none;
    line-height: 16px; 
    }
 .product-card .actions {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    padding-top: 16px; 
    }
 .product-card .actions .price {
    height: 100%;
    width: 76px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    left: 0px;
    font-family: 'Poppins', sans-serif;
    color: #595656;
    font-size: 23px;
    font-weight: 600; 
    }
 .product-card .actions button {
    width: 50px;
    height: 50px;
    margin-left: 15px;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent; 
    }
 .product-card .actions button:hover {
    cursor: pointer; 
    }
 .product-card .actions button:first-of-type {
    background-color: #328EF8;
    background-repeat: no-repeat;
    background-position: center; 
    }
 .product-card .actions button:last-of-type {
    background-color: #EA4335;
    background-repeat: no-repeat;
    background-position: center; 
    }
 .bestsellers .button {
    text-align: center;
    display: block;
    width: 200px;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    background-color: #328EF8;
    margin-top: 30px;
    text-align: center; 
    }
 .bestsellers .button a {
    text-decoration: none;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 400; 
    }
</style>