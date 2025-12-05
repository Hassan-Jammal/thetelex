<template>
  <Transition name="modal">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      @click.self="closeModal"
    >
      <div 
        class="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        @click.stop
      >
        <!-- Close button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-[var(--guardian-blue)]"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Modal content -->
        <div class="p-0">
          <!-- Hero image -->
          <div v-if="article.image" class="w-full h-[400px] overflow-hidden">
            <img 
              :src="article.image" 
              :alt="article.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Article content -->
          <div class="p-8 md:p-12">
            <!-- Category and time -->
            <div class="flex items-center gap-3 mb-6">
              <span class="text-sm uppercase tracking-widest text-[var(--guardian-blue)] border-l-2 border-[var(--guardian-yellow)] pl-3">
                {{ article.category }}
              </span>
              <span class="text-xs text-[var(--guardian-grey)]">{{ article.time }}</span>
            </div>

            <!-- Title -->
            <h2 class="text-4xl md:text-5xl leading-tight mb-6 pb-[10px]">
              {{ article.title }}
            </h2>

            <!-- Excerpt -->
            <p class="text-xl text-[var(--guardian-grey)] leading-relaxed mb-8">
              {{ article.excerpt }}
            </p>

            <!-- Full article content -->
            <div class="prose prose-lg max-w-none space-y-6 text-[var(--guardian-text)]">
              <p class="leading-relaxed">
                In an unprecedented move, world leaders from over 150 countries have gathered for an emergency summit 
                focused on accelerating climate action. The summit comes as new scientific data reveals that global 
                temperatures are rising faster than previously predicted, with severe weather events becoming 
                increasingly common across all continents.
              </p>

              <p class="leading-relaxed">
                The emergency meeting, hosted at the United Nations headquarters, brings together heads of state, 
                environmental experts, and industry leaders to discuss immediate action plans. Key topics include 
                reducing carbon emissions, transitioning to renewable energy sources, and providing financial support 
                to nations most affected by climate change.
              </p>

              <p class="leading-relaxed">
                "This is a defining moment for humanity," said UN Secretary-General António Guterres in his opening 
                remarks. "We are facing a climate emergency that threatens the very existence of our planet as we 
                know it. The time for half-measures and empty promises is over."
              </p>

              <p class="leading-relaxed">
                Major economies have pledged to increase their climate financing commitments, with several countries 
                announcing new targets for achieving net-zero emissions. However, environmental activists argue that 
                more ambitious and immediate action is needed to prevent catastrophic climate change.
              </p>
            </div>

            <!-- Action buttons -->
            <div class="flex flex-wrap gap-4 mt-10 pt-8 border-t border-[var(--guardian-border)]">
              <button
                @click="closeModal"
                class="px-8 py-3 bg-[var(--guardian-blue)] text-white hover:bg-[var(--guardian-light-blue)] transition-colors duration-200"
              >
                Close
              </button>
              <a
                href="/article"
                class="px-8 py-3 border-2 border-[var(--guardian-blue)] text-[var(--guardian-blue)] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors duration-200"
              >
                Read Full Article
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

interface Article {
  title: string;
  image: string;
  category: string;
  excerpt: string;
  time: string;
}

interface Props {
  isOpen: boolean;
  article: Article;
}

interface Emits {
  (e: 'close'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const closeModal = () => {
  emit('close');
};

// Close modal on Escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.isOpen) {
      closeModal();
    }
  };
  window.addEventListener('keydown', handleEscape);
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape);
  });
});
</script>

<style scoped>
/* Modal transition animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white {
  transform: scale(0.9);
}

.modal-leave-to .bg-white {
  transform: scale(0.9);
}

/* Prevent body scroll when modal is open */
body:has(.modal-enter-active) {
  overflow: hidden;
}
</style>