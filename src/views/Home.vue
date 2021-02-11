<template>
  <div>
  <div class="header">
    <div class="container">
      <navbar/>
      <hero-banner/>
    </div>
  </div>
  
  <featured-category/>
  <latest-product/>
  <featured-products/>
  <brands/>
  <Footer/>
  </div>
</template>

<script>
import Brands from '../components/master/brands.vue'
import FeaturedCategory from '../components/master/featured-category.vue'
import FeaturedProducts from '../components/master/featured-products.vue'
import Footer from '../components/master/footer.vue'
import HeroBanner from '../components/master/hero-banner.vue'
import LatestProduct from '../components/master/latest-product.vue'
import Navbar from '../components/master/navbar.vue'
// @ is an alias to /src

export default {
  name: 'Home',

  components: {
    HeroBanner,
     Navbar,
    FeaturedCategory,
    FeaturedProducts,
    Brands,
    Footer,
    LatestProduct
   }
}

</script>
