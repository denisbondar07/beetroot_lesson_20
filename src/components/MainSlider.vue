<template>
<div class="mainSlider">
   <transition-group name="fade" tag="div">
     <div v-for="i in [currentIndex]" :key="i">
       <img :src="currentImg"/>
     </div>
   </transition-group>
   <div class="arrows">
   <a class="prev" @click="prev" href="#"><i class="fas fa-arrow-left"></i> </a>
   <a class="next" @click="next" href="#"><i class="fas fa-arrow-right"></i> </a>
   </div>
    </div>
</template>

<script>
export default {
  name:"Slider",
  data(){
    return{
      images:[
         "img/main/slider/hd_bg.jpg",
         "img/main/slider/hd_bg_2.png",
        "img/main/slider/hd_bg_3.png",
      ],
      timer:null,
      currentIndex:0
    };
  },
  mounted:function(){
    this.startSlide();
  },
  methods:{
    startSlide:function(){
      this.timer = setInterval(this.next, 100000);
    },
    next:function(){
      this.currentIndex +=1;
    },
    prev:function(){
      this.currentIndex -=1;
    }
  },
  computed:{
    currentImg:function(){
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style lang = "scss" scoped>
  .mainSlider{
    overflow: hidden;
    background-color:#E5E5E5;
  }
  .fade-enter,
  .fade-leave-to{
    /* visibility: hidden; */
    width: 100%;
    opacity: 0;
  }
  img{
     height: 680px;
     margin: 0;
     padding: 0;
  }
  .prev, .next{
    cursor: pointer;
    position: absolute;
    top:40%;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.9s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
  }
  .next{
    right: 0;
  }
  .prev{
    left:0;
  }
  .prev:hover, .next:hover{
    background-color: rgba(0,0,0,0.9);
  }
</style>