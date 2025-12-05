<template>
  <article class="group cursor-pointer">
    <div v-if="showImage && image" class="mb-3 overflow-hidden relative">
      <img 
        :src="image" 
        :alt="title"
        class="w-full aspect-[5/3] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <div class="space-y-2">
      <div v-if="category" class="flex items-center gap-3">
        <span class="text-sm uppercase tracking-widest text-[var(--guardian-blue)] border-l-2 border-[var(--guardian-yellow)] pl-3">
          {{ category }}
        </span>
        <span v-if="time" class="text-xs text-[var(--guardian-grey)]">
          {{ time }}
        </span>
      </div>
      
      <h3 :class="[
        'pb-[10px]',
        size === 'large' ? 'text-2xl' : size === 'medium' ? 'text-xl' : 'text-base'
      ]">
        <a href="#">{{ title }}</a>
      </h3>
      
      <p v-if="excerpt" class="text-[var(--guardian-grey)] line-clamp-3 leading-relaxed">
        {{ excerpt }}
      </p>
      
      <div v-if="excerpt" class="pt-1">
        <a href="#" class="inline-flex items-center gap-2 text-sm text-[var(--guardian-blue)]">
          <span>Read more</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  image?: string;
  category?: string;
  time?: string;
  excerpt?: string;
  size?: 'small' | 'medium' | 'large';
  showImage?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: 'medium',
  showImage: true
});
</script>
