<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="navbar-brand">
        <router-link to="/"
          ><img
            src="../assets/offline.png"
            alt="Your Brand"
            style="height: 50px"
        /></router-link>
      </div>
      <button
        class="navbar-toggler"
        style="border: none; outline: none !important"
        type="button"
        @click="toggleLinks"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
      <div
        :class="{ show: showLinks }"
        class="collapse navbar-collapse justify-content-center"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
      <div
        :class="{ show: showLinks }"
        class="collapse navbar-collapse justify-content-end"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                />
              </svg>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                />
              </svg>
              <span class="badge badge-danger">{{ panier }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { eventBus } from "./eventBus";
export default {
  data() {
    return {
      showLinks: false,
      panier: 0,
    };
  },
  methods: {
    toggleLinks() {
      this.showLinks = !this.showLinks;
    },
  },
  mounted() {
    eventBus.on("dataToNavbar", (data) => {
      this.receivedData = data;
      this.panier += this.receivedData.count;
    });
  },
};
</script>

<style scoped>
.navbar-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Adjust styles for small screens */
@media (max-width: 991.98px) {
  .collapse.show.navbar-collapse {
    display: flex !important;
    flex-direction: column; /* Display items in a column */
    align-items: center; /* Center items horizontally */
    gap: 20px; /* Adjust spacing between items */
  }
}
.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 72%;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 10px;
  position: relative;
  top: -10px;
}

.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

.badge-danger {
  color: #fff;
  background-color: #dc3545;
}
</style>
