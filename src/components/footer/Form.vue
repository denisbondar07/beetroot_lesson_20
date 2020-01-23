<template>
    <div class="form">
      <p>Subscribe</p>
      <p>to receive our latest offers and promotions</p>
      <input type="text" placeholder="email adress"> 
      <button>subscribe</button>
   </div>
</template>

<script>
export default {
    name:"form",
}
</script>

<style lang = "scss" scoped>
 .form {
    height: 100%;
    color: #595656;
    font-family: 'Poppins', sans-serif;
    font-size: 15px; 
    }
 .form p:nth-of-type(1) {
    font-weight: 500;
    margin: 20px 0 0 0; 
    }
 .form p:nth-of-type(2) {
    font-weight: 300;
    margin-top: 0; 
    }
 .form input {
    width: 240px;
    height: 40px;
    outline: none;
    color: #595656;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    padding: 0 15px; 
    }
 .form button {
    width: 141px;
    height: 45px;
    background-color: #328EF8;
    border: none;
    outline: none;
    padding: 0;
    margin-left: -5px;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer; 
    }
</style>