<template>
  <header class="border-b border-[var(--guardian-border)]">
    <!-- Top bar -->
    <div class="bg-[var(--guardian-blue)] text-white">
      <div class="max-w-[1300px] mx-auto px-4 py-3 flex justify-between items-center text-sm">
        <div class="flex gap-6">
          <a href="#" class="hover:text-[var(--guardian-yellow)] transition-colors duration-200 uppercase tracking-wider">Support Telex</a>
        </div>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-[var(--guardian-yellow)] transition-colors duration-200">Print subscriptions</a>
          <a href="#" class="hover:text-[var(--guardian-yellow)] transition-colors duration-200 flex items-center gap-2">
            <Search :size="18" />
            <span>Search</span>
          </a>
          <a href="#" class="hover:text-[var(--guardian-yellow)] transition-colors duration-200 flex items-center gap-2 border-l border-white/30 pl-6">
            <User :size="18" />
            <span>Sign in</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Logo Section - Enhanced -->
    <div class="border-b border-[var(--guardian-border)] bg-white">
      <div class="max-w-[1300px] mx-auto px-4 py-10 flex justify-between items-center">
        <!-- Tagline or Date -->
        <div class="text-sm text-[var(--guardian-grey)]">
          <div class="uppercase tracking-wider">Wednesday 3 December 2025</div>
        </div>
        
        <!-- Main Logo -->
        <h1>
          <a href="#" class="group block text-right">
            <div class="text-[var(--guardian-blue)] transition-all duration-300 group-hover:opacity-80" 
                 style="font-size: 5.5rem; font-weight: 900; letter-spacing: -0.05em; line-height: 0.82; font-family: Georgia, serif;">
              <div>The</div>
              <div>Telex</div>
            </div>
          </a>
        </h1>
        
        <!-- Support CTA -->
        <div>
          <a href="#" class="bg-[var(--guardian-yellow)] text-[var(--guardian-blue)] px-6 py-3 inline-block hover:bg-[var(--guardian-blue)] hover:text-white transition-all duration-200 uppercase tracking-wider" style="font-size: 0.75rem; font-weight: 700;">
            Support us
          </a>
        </div>
      </div>
    </div>

    <!-- Main navigation -->
    <div class="border-t-2 border-b-2 border-[var(--guardian-border)]">
      <nav class="max-w-[1300px] mx-auto px-4">
        <ul class="flex gap-8 py-3">
          <li v-for="item in mainNav" :key="item">
            <a href="#" class="text-lg hover:text-[var(--guardian-blue)] transition-colors duration-200 hover:border-b-4 hover:border-[var(--guardian-yellow)] pb-3 inline-block">
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
            <a href="#" class="hover:text-[var(--guardian-blue)] transition-all duration-200 text-[var(--guardian-grey)] hover:scale-105 inline-block">
              {{ item }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Search, User } from 'lucide-vue-next';

const mainNav = [
  'News', 'Opinion', 'Sport', 'Culture', 'Lifestyle'
];

const subNav = [
  'US', 'World', 'Environment', 'Soccer', 'Business', 
  'Tech', 'Science', 'Global development', 'Football', 
  'Climate crisis', 'Fashion', 'Food', 'Recipes', 'Travel', 'Health & fitness'
];
</script>
