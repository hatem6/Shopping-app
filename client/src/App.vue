<template>
  <div class="">
    <Navbar></Navbar>
    <div class="container">
      <Categorie v-if="!isAboutRoute && !isContactRoute"></Categorie>
      <router-view></router-view>
    </div>
    <Footer></Footer>
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
    };
  },
  watch: {
    $route(to) {
      this.isAboutRoute = to.name === "about";
      this.isContactRoute = to.name === "contact"; // Check the route name
    },
  },
};
</script>

<style scoped></style>
