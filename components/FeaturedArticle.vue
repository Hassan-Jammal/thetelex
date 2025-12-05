<template>
  <article class="group cursor-pointer mb-8 border-b-2 border-[var(--guardian-yellow)] pb-8" @click="openModal">
    <div class="grid md:grid-cols-2 gap-8">
      <div class="overflow-hidden h-[500px] relative">
        <img 
          :src="image" 
          :alt="title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div class="flex flex-col justify-center space-y-5">
        <div class="flex items-center gap-3">
          <span class="text-sm uppercase tracking-widest text-[var(--guardian-blue)] border-l-2 border-[var(--guardian-yellow)] pl-3">
            {{ category }}
          </span>
          <span class="text-xs text-[var(--guardian-grey)]">{{ time }}</span>
        </div>
        
        <h2 class="text-5xl leading-tight group-hover:text-[var(--guardian-blue)] transition-colors duration-200 pb-[10px]">
          <a href="#">{{ title }}</a>
        </h2>
        
        <p class="text-xl text-[var(--guardian-grey)] leading-relaxed">
          {{ excerpt }}
        </p>
        
        <div class="pt-2">
          <a href="#" class="inline-flex items-center gap-2 text-[var(--guardian-blue)] hover:gap-3 transition-all duration-200">
            <span>Read more</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  image: string;
  category: string;
  excerpt: string;
  time: string;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: 'open-modal'): void;
}>();

const openModal = () => {
  emit('open-modal');
};
</script>