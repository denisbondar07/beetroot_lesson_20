<template>
  <div class="footer">
    <div class="container">
        <img src="/img/nav/logo (1).png" alt="img">
        <!-- <a href="#" class="logo"></a> -->
            <div class="contacts">
            <p>Work schedule:</p>
            <p>Mon-Fri 9:00-20:00<br>Sat-Sun 10:00-18:00</p>
            <p>+38000 000 00 00</p>
            </div>
            <Form />
            <Contacts />
       </div> 
  </div>
</template>

<script>
import Form from '@/components/footer/Form.vue';
import Contacts from '@/components/footer/Contacts.vue';
export default {
    name:"Footer",
    components:{
        Form,
        Contacts,
    },
}
</script>

<style lang = "scss" scoped>
 .footer {
    width: 100%;
    height: 145px;
    background-color: #E5E5E5;
    display: flex;
    justify-content: center; 
    }
 .footer .container {
    max-width: 1087px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    }
 .contact{
    height: 200px;
    }
 
</style>