<template>
  <div>
    <div class="bg-white border-l-4 p-4 m-5" role="alert" v-if="coach">
      <p v-text="coach" class="text-black" />
    </div>
    <button
      @click="generate"
      class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Gerar coach
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import coach from "../coachs.json";
import { getRandomRange } from "../util";

export default defineComponent({
  name: "CoachGenerator",
  data() {
    return {
      coach: "",
    };
  },
  methods: {
    generate() {
      const size = coach.length;
      const { begin, end } = getRandomRange(size);
      this.coach = `${coach[begin].begin} ${coach[end].end}`;
    },
  },
});
</script>
