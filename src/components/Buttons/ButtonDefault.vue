<script setup lang="ts">
const props = defineProps(['label', 'route', 'customClasses'])
</script>

<template>
  <router-link
    :to="{ path: props.route }"
    class="py-4 px-4 text-center font-medium text-sm hover:bg-opacity-90"
    :class="props.customClasses"
  >
    <slot></slot>
    {{ props.label }}
  </router-link>
</template>
