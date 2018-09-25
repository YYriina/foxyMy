<template>
    <div id="services">
    <div class="container">
      <div class="section-title text-center">
            <h3>Clips</h3>
            <h2>TRAP ART INTRO</h2>
        </div>
        <CarouselLarge :slideNumber="getScreenSize"/>
    </div>
  </div>
</template>

<script>
import CarouselLarge from './Carousel/CarouselLarge';

export default {
    name : 'Service',
    components:{
      CarouselLarge,
    },
    computed:{
      getScreenSize:()=>{
        if (screen.width<400){
          return parseInt(1)
        }else if(screen.width < 800 && screen.width>400){
          return parseInt(2)
        }else if(screen.width>800){
          return parseInt(3)
        }
      }
    },
}
</script>

<style>

</style>
