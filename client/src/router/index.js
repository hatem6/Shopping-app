import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About.vue";
import Checkout from "../components/Checkout.vue";
import Contact from "../components/Contact.vue";
import Products from "../components/Products.vue";
import Shop from "../components/Shop.vue";
const routes = [
  {
    path: "/",
    name: "products",
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
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
