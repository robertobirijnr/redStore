<template>
  <div>
  <div class="header">
    <div class="container">
      <navbar/>
      <hero-banner/>
    </div>
  </div>
  <featured-category/>
  <featured-products/>
  </div>
</template>

<script>
import FeaturedCategory from '../components/master/featured-category.vue'
import FeaturedProducts from '../components/master/featured-products.vue'
import HeroBanner from '../components/master/hero-banner.vue'
import Navbar from '../components/master/navbar.vue'
// @ is an alias to /src

export default {
  name: 'Home',

  components: {
    HeroBanner,
     Navbar,
    FeaturedCategory,
    FeaturedProducts
   }
}

</script>
