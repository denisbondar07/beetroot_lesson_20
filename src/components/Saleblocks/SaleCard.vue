<template>
    <div class="product-card">
        <div class="product-container">
        <div class="sale-board">
             <span>-20%</span>
             <span>SALE</span>
         </div>
         <img src="img/salecards/bike2.png" alt="bike">
         <div class="rating">
             <a href="#">10 reviews</a>
         </div>
         <h3>Santa Cruz Bicycles</h3>
         <p>Stigmata CC Force AXS 650</p>
         <p>Complete Bike 2019</p>
         <p>The Santa Cruz Bicycles Tallboy Complete Mountain Bike doesn't care 
             if you call it a trail bike, an XC racer, or just a good old mountain bike.</p>
         <div class="actions">
             <div class="price">
                 <div>3250 $</div>
                 <div>2999 $</div>
             </div>
             <button class="wish"><i class="far fa-heart" ></i></button>
             <button class="bag"><i class="fas fa-shopping-cart"></i></button>
         </div><i class="fas fa-shopping-cart"></i>
     </div>
    </div>
</template>

<script>
export default {
    name:"SaleCard",
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
     .product-card:hover p:nth-of-type(3) {
      display: block; 
        }
     .product-card .product-container {
      width: 298px;
      height: 467px;
      display: flex;
      flex-direction: column;
      justify-content: center; 
      }
     .product-card .sale-board {
      width: 333px;
      height: 45px;
      background-color: #328EF8;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top: 0px;
      left: 0px; 
      }
     .product-card .sale-board span:first-of-type {
      margin-left: 17px;
      color: #ffffff;
      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      font-weight: 600; 
      }
     .product-card .sale-board span:last-of-type {
      margin-right: 17px;
      color: #ffffff;
      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      font-weight: 600; 
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
      font-size: 16px;
      font-weight: 300;
      line-height: 20px; 
      }
     .product-card p:nth-of-type(3) {
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
      }
     .product-card .actions .price div {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 600; 
      }
     .product-card .actions .price div:first-of-type {
      color: #595656;
      font-size: 15px;
      text-decoration: line-through; 
      }
     .product-card .actions .price div:last-of-type {
      color: #EA4335;
      font-size: 23px; 
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
       /* background-image: url(../img/sale/vector2.png); */
       background-repeat: no-repeat;
       background-position: center; 
       }
     .sale .product-card .actions button:last-of-type {
       background-color: #EA4335;
       /* background-image: url(../img/sale/vector1.png); */
       background-repeat: no-repeat;
       background-position: center; 
       }
     .button {
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
     .sale .button a {
      text-decoration: none;
      color: #ffffff;
      font-family: 'Poppins', sans-serif;
      font-size: 15px;
      font-weight: 400; 
     }
</style>