<template>
  <div>
    <Navbar/>
    <About/>
    <Service/>
    <Folio/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './Navbar';
import About from './About';
import Service from './Service';
import Folio from './Folio';
import Contact from './Contact';
import Footer from './Footer';
export default {
  name: 'Page',
  props: {
    msg: String,
  },
  components: {
    Navbar,
    About,
    Service,
    Folio,
    Contact,
    Footer,
  }
};
</script>

<style scoped>

</style>
