<template>
    <div class="menu">
        <div class="left">
            <a href="#">contact us</a>
            <a href="#">about us</a>
            <a href="#">privacy policy</a>
            <a href="#">terms conditions</a>
        </div>
        <div class="right">
            <a href="#">delivery</a>
            <a href="#">returns</a>
            <a href="#">sizing help</a>
            <a href="#">catalog</a>
        </div>
    </div>
    
</template>

<script>
export default {
    name:"Contacts",
}
</script>

<style lang = "scss" scoped>
 .menu {
    display: flex;
    width: 250px;
    height: 114px;
    justify-content: space-between; 
    }
 .menu a {
    text-decoration: none;
    color: #595656;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    text-transform: capitalize;
    font-weight: 300;
    margin-top: 8px; 
    }
 .menu .left {
    display: flex;
    flex-direction: column; 
    }   
 .menu .right {
    display: flex;
    flex-direction: column; 
    }
 .menu a:hover{
    color: #328EF8;
 }
</style>