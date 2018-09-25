<template>
  <div id="about" class="paddsection">
    <div class="container">
      <div class="section-title text-center">
            <h3>Mixtape</h3>
        </div>
      <div class="row justify-content-between">
        <!--<div class="col-lg-12">
              <img src="../assets/images/face.jpg"   alt="me">
              <img src="../assets/images/tl.jpg" width="500px" height="500px" alt="me">
        </div>-->
        <div class="col-lg-12">
          <div class="about-descr">
            <!--<p class="p-heading"><Countdown deadline="September 11, 2018"></Countdown></p>
            <p class="separator">Sortie de la mixtape...</p>
            <a href="../assets/presse.pdf">clique</a>-->
            <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/600709812&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </div>
          <a href="../assets/presse.pdf" ><img src='../assets/images/dp.png' class="ssmix" /></a>
          <a href="../assets/TAI.zip"  ><img src='../assets/images/cd.png' class="ssmix" height="80px" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
  name : "About",
  components: { Countdown }
}
</script>

<style>
  p.text {
    display : none
  }
  
</style>


