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
    <label for="checkboxLabelOne" class="flex cursor-pointer select-none items-center">
      <div class="relative">
        <input type="checkbox" :id="id" class="sr-only" @change="checkboxToggle = !checkboxToggle" />
        <div :class="checkboxToggle && 'border-primary bg-gray dark:bg-transparent'"
          class="mr-2.5 flex h-5 w-5 items-center justify-center rounded border">
          <span :class="checkboxToggle && 'bg-primary'" class="h-2.5 w-2.5 rounded-sm"></span>
        </div>
      </div>
      {{ value }}
    </label>
  </div>
</template>
