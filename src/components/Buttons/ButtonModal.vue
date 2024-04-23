<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    buttonColor: {
      type: String,
      default: '#34D399'
    }
  },
  emits: ['click-event']
};
</script>

<template>
  <input type="button" 
         :value="label"
         @click="$emit('click-event')" 
         :class="`cursor-pointer rounded-lg border-[${buttonColor}] bg-[${buttonColor}] p-4 font-medium text-white transition hover:bg-opacity-50`" />
</template>