// DeleteModal.vue
<script setup>
defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    isDeleting: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['close', 'confirm'])

const handleConfirm = () => {
    emit('confirm')
}

const handleClose = () => {
    emit('close')
}
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
                <h3 class="text-lg font-medium mb-4 text-white">
                    ¿Estás seguro de eliminar esta reseña?
                </h3>
                <p class="text-gray-300 mb-6">
                    Esta acción no se puede deshacer.
                </p>
                <div class="flex gap-4 justify-end">
                    <button 
                        @click="handleClose"
                        :disabled="isDeleting"
                        class="px-4 py-2 rounded hover:bg-gray-700/30 text-gray-300"
                    >
                        Cancelar
                    </button>
                    <button 
                        @click="handleConfirm"
                        :disabled="isDeleting"
                        class="px-4 py-2 bg-red-600 rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                    >
                        {{ isDeleting ? 'Eliminando...' : 'Eliminar' }}
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>