<template>
  <header class="border-b border-[var(--guardian-border)]">
    <EnhancedTopBar />

    <!-- Logo - Simple left aligned -->
    <div class="max-w-[1300px] mx-auto px-4 py-3 flex justify-start">
      <h1>
        <a href="/" class="group block text-left">
          <div class="text-[var(--guardian-blue)] transition-opacity duration-300 group-hover:opacity-70" 
               style="font-size: 4.5rem; font-weight: 900; letter-spacing: -0.04em; line-height: 0.85; font-family: Georgia, serif;">
            <div>The</div>
            <div>Telex</div>
          </div>
        </a>
      </h1>
    </div>

    <!-- Main navigation -->
    <div class="border-t-2 border-b-2 border-[var(--guardian-border)]">
      <nav class="max-w-[1300px] mx-auto px-4">
        <ul class="flex gap-8 py-2">
          <li v-for="item in mainNav" :key="item">
            <a href="#" class="text-lg hover:text-[var(--guardian-blue)] transition-colors duration-200 border-b-4 border-transparent hover:border-[var(--guardian-yellow)] py-2 inline-block">
              {{ item }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Sub navigation -->
    <div class="bg-[#F6F6F6]">
      <nav class="max-w-[1300px] mx-auto px-4">
        <ul class="flex gap-6 py-3 text-sm overflow-x-auto whitespace-nowrap">
          <li v-for="item in subNav" :key="item">
            <a href="#" class="hover:text-[var(--guardian-blue)] transition-colors duration-200 text-[var(--guardian-grey)] inline-block">
              {{ item }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const mainNav = [
  'News', 'Opinion', 'Sport', 'Culture', 'Lifestyle'
];

const subNav = [
  'US', 'World', 'Environment', 'Soccer', 'Business', 
  'Tech', 'Science', 'Global development', 'Football', 
  'Climate crisis', 'Fashion', 'Food', 'Recipes', 'Travel', 'Health & fitness'
];
</script>
