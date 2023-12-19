<template>
  <div class="">
    <Navbar></Navbar>
    <br /><br /><br />
    <div class="container">
      <Categorie
        v-if="
          !isAboutRoute && !isContactRoute && !isShopRoute && !isCheckoutRoute
        "
      ></Categorie>
      <router-view class="components"></router-view>
    </div>
    <br /><br /><br />
    <Footer class="footer"> </Footer>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Categorie from "./components/Categorie.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Categorie,
    Footer,
  },
  data() {
    return {
      isAboutRoute: false,
      isContactRoute: false,
      isShopRoute: false,
      isCheckoutRoute: false,
    };
  },
  watch: {
    $route(to) {
      this.isAboutRoute = to.name === "about";
      this.isContactRoute = to.name === "contact"; // Check the route name
      this.isShopRoute = to.name === "shop";
      this.isCheckoutRoute = to.name === "checkout";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

@media screen and (max-width: 768px) {
  .container {
    display: block;
  }
}
</style>
