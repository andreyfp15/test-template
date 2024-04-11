<script setup lang="ts">
import '@/assets/css/modal-transition.css'
import ModalButton from '@/components/Buttons/ButtonModal.vue';

defineEmits(["close-modal"]);
</script>

<script lang="ts">
export default {
  components:{
    ModalButton
  },
  props: {
    successMessage: {
      type: String,
      required: true
    },
    modalActive: {
      type: Boolean,
      defaut: false
    }
  }
};
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-show="modalActive" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40">

      <Transition name="modal-inner">
        <div v-show="modalActive"
            class="absolute fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center border-l-6 border-[#34D399] bg-[#DDEFEB] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9 rounded-lg w-[500px] h-[500px] z-50">
            <div class="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399]">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
                fill="white" stroke="white"></path>
            </svg>
          </div>
          <div class="w-full">
            <slot />

            <div class="w-full flex justify-end mt-4 mb-4">
              <div class="mt-60 self-end">
                <modal-button :label="'Ok'" :buttonColor="'#34D399'" @click-event="$emit('close-modal')" />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    </Transition>
  </Teleport>
</template>

border-[#34D399] bg-[#DDEFEB]