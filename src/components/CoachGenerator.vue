<template>
  <div class="max-w-4xl w-full px-6">
    <!-- Title -->
    <h1
      class="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in"
    >
      🏆 Gerador de Coach
    </h1>

    <!-- Result Card -->
    <div v-if="coach" class="animate-slide-up">
      <!-- Original Phrases -->
      <div
        class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20 shadow-2xl"
      >
        <p
          class="text-white/70 text-sm font-semibold mb-4 uppercase tracking-wider"
        >
          Frases Originais
        </p>
        <div
          class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <div
            class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 flex-1 border border-purple-300/30 backdrop-blur"
          >
            <p class="text-white text-lg font-medium text-center">
              {{ originalBegin }} {{ originalBeginEnd }}
            </p>
          </div>
          <div class="text-3xl font-bold text-white/40">VS</div>
          <div
            class="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 flex-1 border border-blue-300/30 backdrop-blur"
          >
            <p class="text-white text-lg font-medium text-center">
              {{ originalEnd }} {{ originalEndEnd }}
            </p>
          </div>
        </div>
      </div>

      <!-- Generated Result -->
      <div
        class="bg-gradient-to-br from-yellow-400/90 to-orange-500/90 rounded-2xl p-8 shadow-2xl border-4 border-white/30 transform hover:scale-105 transition-transform duration-300"
      >
        <p
          class="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wider"
        >
          💡 Resultado
        </p>
        <p
          class="text-white text-2xl md:text-3xl font-bold text-center leading-relaxed"
        >
          {{ coach }}
        </p>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-else
      class="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 text-center"
    >
      <p class="text-white/50 text-lg">
        Clique no botão abaixo para gerar uma frase motivacional!
      </p>
    </div>

    <!-- Generate Button -->
    <div class="mt-10 text-center">
      <button
        @click="generate"
        class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg py-4 px-12 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-purple-500/50"
      >
        ✨ Gerar Coach
      </button>
    </div>
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
      originalBegin: "",
      originalBeginEnd: "",
      originalEnd: "",
      originalEndEnd: "",
    };
  },
  methods: {
    generate() {
      const size = coach.length;
      const { begin, end } = getRandomRange(size);

      // Store original phrases
      this.originalBegin = coach[begin].begin;
      this.originalBeginEnd = coach[begin].end;
      this.originalEnd = coach[end].begin;
      this.originalEndEnd = coach[end].end;

      // Generate combined phrase
      this.coach = `${coach[begin].begin} ${coach[end].end}`;
    },
  },
});
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out;
}
</style>
