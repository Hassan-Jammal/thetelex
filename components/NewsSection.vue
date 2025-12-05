<template>
  <section :class="['py-8', showBorder ? 'border-t-2 border-[var(--guardian-border)]' : '']">
    <h2 class="text-3xl pb-4 mb-6 group cursor-pointer">
      <a href="#" class="hover:text-[var(--guardian-blue)] transition-colors duration-200 inline-flex items-center gap-2 hover:gap-3">
        {{ title }}
        <span class="text-xl">→</span>
      </a>
    </h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  showBorder?: boolean;
}

withDefaults(defineProps<Props>(), {
  showBorder: true
});
</script>
