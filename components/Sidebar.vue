<template>
  <aside class="space-y-8">
    <!-- Most viewed -->
    <div class="border-t-2 border-[var(--guardian-blue)] pt-6">
      <h3 class="text-2xl mb-6 pb-[10px] uppercase tracking-wider">Most viewed</h3>
      <ol class="space-y-4">
        <li v-for="(item, index) in mostViewed" :key="index" class="group flex gap-4 pb-4 border-b border-[var(--guardian-border)] last:border-b-0 hover:border-[var(--guardian-yellow)] transition-colors duration-200">
          <span :class="[
            'text-3xl flex-shrink-0 transition-colors duration-200',
            index < 3 ? 'text-[var(--guardian-blue)]' : 'text-[var(--guardian-grey)]',
            'group-hover:text-[var(--guardian-yellow)]'
          ]">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <a href="#" class="hover:text-[var(--guardian-blue)] transition-colors duration-200 flex-1">
            {{ item }}
          </a>
        </li>
      </ol>
    </div>

    <!-- Support banner -->
    <div class="bg-[var(--guardian-yellow)] p-8 border-l-2 border-[var(--guardian-blue)] shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 class="text-2xl mb-4 pb-[10px] uppercase tracking-wider">Support The Telex</h3>
      <p class="mb-6 text-base leading-relaxed">
        Available for everyone, funded by readers
      </p>
      <button class="bg-[var(--guardian-blue)] text-white px-8 py-4 w-full hover:bg-opacity-90 transition-all duration-200 uppercase tracking-wider hover:scale-105 transform mt-[20px]">
        Support us
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
const mostViewed = [
  "Trump faces new legal challenges as trial date approaches",
  "Climate scientists warn of accelerating ice melt in Antarctica",
  "Premier League: Arsenal defeat Manchester City in thriller",
  "New study reveals surprising health benefits of coffee",
  "Tech giants face increased scrutiny over AI development",
  "Global markets react to central bank policy changes",
  "Breakthrough in renewable energy storage technology",
  "Major archaeological discovery rewrites ancient history",
  "International tensions rise over disputed territory",
  "Award-winning film sparks cultural conversation"
];
</script>
