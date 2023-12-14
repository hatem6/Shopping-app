import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Products from "../components/Products.vue";
const routes = [
  {
    path: "/",
    component: Products,
  },
  {
    path: "/about/:productName/:productPrice/:productUrl",
    name: "about",
    component: About,
    props: true, // This allows route params to be passed as component props
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },

  // Other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
