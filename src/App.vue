<template>
  <div
    class="justify-center flex flex-col items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-800"
  >
    <CoachGenerator />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoachGenerator from "./components/CoachGenerator.vue";

export default defineComponent({
  name: "App",
  components: {
    CoachGenerator,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
