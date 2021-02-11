<template>
  <div>
    <navbar/>
    <div class="products">
      <featured-products/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import FeaturedProducts from '../components/master/featured-products.vue'
import Footer from '../components/master/footer.vue'
import navbar from '../components/master/navbar.vue'
  export default {
  components: { navbar, FeaturedProducts,
    Footer },
    }
</script>

<style  scoped>

.products{
  padding-top: 110px;
}
</style>