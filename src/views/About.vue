<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goHome()">Home</button>
    <router-link tag="button" to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  methods:{
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>