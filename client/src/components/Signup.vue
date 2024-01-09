<template>
  <main class="w-full h-screen flex flex-col items-center justify-center px-4">
    <div class="max-w-sm w-full text-gray-600 space-y-4">
      <div class="text-center pb-8 flex items-center justify-center">
        <div ref="lottieContainer"></div>
      </div>
      <form
        onSubmit="event.preventDefault()"
        class="space-y-0 grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <div class="">
          <label class="font-medium"> Fall name </label>
          <input
            type="email"
            required
            class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label class="font-medium"> adress </label>
          <input
            type="password"
            required
            class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div class="lg:col-span-2">
          <label class="font-medium"> Phone Number</label>
          <input
            type="email"
            required
            class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div class="lg:col-span-2">
          <label class="font-medium"> Email</label>
          <input
            type="email"
            required
            class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>

        <div class="lg:col-span-2">
          <label class="font-medium"> Password </label>
          <input
            type="password"
            required
            class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>

        <button
          class="w-full px-4 py-2 text-white font-medium bg-gray-950 hover:bg-gray-800 active:bg-gray-800 rounded-lg duration-150 lg:col-span-2"
        >
          Create
        </button>
      </form>
    </div>
  </main>
</template>
<script>
import { Lottie } from "lottie-web";

import animationData from "../assets/animation/second.json";
export default {
  mounted() {
    this.initializeLottie();
  },
  methods: {
    initializeLottie() {
      if (typeof Lottie === "undefined") {
        // If Lottie is undefined, attempt to load it
        import("lottie-web")
          .then(({ default: lottie }) => {
            this.loadAnimationWithData(lottie, animationData);
          })
          .catch((error) => {
            console.error("Error loading Lottie:", error);
          });
      } else {
        this.loadAnimationWithData(Lottie, animationData);
      }
    },
    loadAnimationWithData(lottieInstance, animationData) {
      const container = this.$refs.lottieContainer;
      if (!container || !lottieInstance || !animationData) return;

      lottieInstance.loadAnimation({
        container: container,
        renderer: "svg", // Choose the renderer you want (svg, canvas, html)
        loop: true,
        autoplay: true,
        animationData: animationData, // Your loaded animation data
      });
    },
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
