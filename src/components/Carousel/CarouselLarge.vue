<template>
    <div>
        <Carousel autoplay :perPage="slideNumber" c loop class="services-carousel owl-theme">
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/wd9TwS1FoGs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/eJZVrTb3340" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/F8g4GF-wp0o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/rfsgTjkkUvY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/y533yDtG5SU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
          <iframe width="299" height="210" src="https://www.youtube.com/embed/AKsIilIXn5U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/vEhv3a3UO8M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
             <Slide class="services-block">
          <iframe width="299" height="210" src="https://www.youtube.com/embed/m1S2xpL28XU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
        </Carousel>
        <div class="section-title text-center">
            <h3>Album</h3>
            <h2>COLORS</h2>
        </div>
        <Carousel autoplay :perPage="slideNumber" loop class="services-carousel owl-theme">
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/JDVxEzux39E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/0odlMVzSEKY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/C2PBAF54zmA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/pFSf-ymZt2M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/bKuLnbAN-kk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
          <iframe width="299" height="210" src="https://www.youtube.com/embed/CTo8d7DpNx4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
        </Carousel>
        <div class="section-title text-center">
            <h2>SINGLES</h2>
        </div>
        <Carousel autoplay :perPage="slideNumber" loop class="services-carousel owl-theme">
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/oz6GNq1UXnE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/bSZbMrOtZOE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/FO_KW4xF76M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/jm0v7xw0qUk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
            <iframe width="299" height="210" src="https://www.youtube.com/embed/J_X4uMlqa3Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
          <Slide class="services-block">
          <iframe width="299" height="210" src="https://www.youtube.com/embed/PUGikj1PBuA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Slide>
        </Carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name:'CarouselLarge',
  components:{
    Carousel,
    Slide
  },
  props: {
    slideNumber: Number,
  },
}
</script>

<style>

</style>
