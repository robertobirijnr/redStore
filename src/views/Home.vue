<template>
  <div>
  <div class="header">
    <div class="container">
      <navbar/>
      <hero-banner/>
    </div>
  </div>
  </div>
</template>

<script>
import HeroBanner from '../components/master/hero-banner.vue'
import Navbar from '../components/master/navbar.vue'
// @ is an alias to /src

export default {
  name: 'Home',

  components: {
    HeroBanner,
     Navbar
   }
}

</script>
