// UpdateReview.vue
<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  isUpdating: {
    type: Boolean,
    default: false
  },
  review: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close', 'confirm']);

const comment = ref(props.review?.comment);
const rating = ref(props.review?.rating);

// Inicializa los valores cuando el componente se monta
onMounted(() => {
  if (props.review) {
    comment.value = props.review.comment;
    rating.value = props.review.rating;
  }
});

// Observa los cambios en isOpen
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
  }
});

// Observa los cambios en la prop "review" y actualiza los valores locales
watch(
  () => props.review,
  (newReview) => {
    if (newReview) {
      comment.value = newReview.comment;
      rating.value = newReview.rating;
    }
  },
  { immediate: true }
);

const handleConfirm = () => {
  emit('confirm', {
    comment: comment.value,
    rating: rating.value
  });
};

const handleClose = () => {
  emit('close');
};
</script>

<template>
  <Transition
    enter-active-class="ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-secondaryBackground p-6 rounded-lg w-full max-w-md mx-4">
        <h3 class="text-lg font-medium mb-4">Editar Reseña</h3>
        <div class="mb-4">
          <label for="comment" class="block text-gray-300 font-medium mb-2">Comentario</label>
          <textarea
            id="comment"
            v-model="comment"
            class="bg-gray-700 rounded-md px-4 py-2 w-full"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="rating" class="block text-gray-300 font-medium mb-2">Calificación</label>
          <input
            id="rating"
            v-model="rating"
            type="number"
            min="1"
            max="10"
            class="bg-gray-700 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div class="flex gap-4 justify-end">
          <button
            @click="handleClose"
            :disabled="isUpdating"
            class="px-4 py-2 rounded hover:bg-gray-700/30 text-gray-300"
          >
            Cancelar
          </button>
          <button
            @click="handleConfirm"
            :disabled="isUpdating"
            class="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white"
          >
            {{ isUpdating ? 'Actualizando...' : 'Actualizar' }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
