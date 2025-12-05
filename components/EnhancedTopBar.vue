<template>
  <div class="bg-[var(--guardian-blue)] text-white">
    <div class="max-w-[1300px] mx-auto px-4 py-3.5 flex justify-between items-center">
      <div class="flex items-center gap-8">
        <a href="#" class="flex items-center gap-2 hover:!text-[#ffe500] transition-all duration-200 group" style="font-size: 0.8125rem;">
          <Newspaper :size="16" class="group-hover:scale-110 transition-transform" />
          <span>Print subscriptions</span>
        </a>
        <a href="#" class="flex items-center gap-1.5 hover:!text-[#ffe500] transition-all duration-200 group" style="font-size: 0.8125rem;">
          <Globe :size="16" class="group-hover:rotate-12 transition-transform" />
          <span>International edition</span>
          <ChevronDown :size="14" class="group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
      <div class="flex items-center gap-6">
        <a href="#" class="hover:!text-[#ffe500] transition-all duration-200 flex items-center gap-2 group" style="font-size: 0.8125rem;">
          <Search :size="17" class="group-hover:scale-110 transition-transform" />
          <span>Search</span>
        </a>
        <a href="#" class="hover:!text-[#ffe500] transition-all duration-200 flex items-center gap-2 border-l border-white/30 pl-6 group" style="font-size: 0.8125rem;">
          <User :size="17" class="group-hover:scale-110 transition-transform" />
          <span>Sign in</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search, User, Newspaper, Globe, ChevronDown } from 'lucide-vue-next';
</script>
