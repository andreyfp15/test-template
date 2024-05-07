<script lang="ts">
import { ref } from 'vue'

export default {
  data() {
    return {
      checkboxToggle: ref(false)
    }
  },
  props: {
    value: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div>
    <label :for="id" class="flex cursor-pointer select-none items-center">
      <div class="relative">
        <input type="checkbox" :id="id" class="sr-only" @change="checkboxToggle = !checkboxToggle" />
        <div :class="checkboxToggle && '!border-4 border-primary'"
          class="box mr-4 flex h-5 w-5 items-center justify-center rounded-full border">
          <span class="h-2.5 w-2.5 rounded-full bg-white dark:bg-transparent"> </span>
        </div>
      </div>
      {{ value }}
    </label>
  </div>
</template>
