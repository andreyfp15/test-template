<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: ''
    },
    route: {
      type: String,
      default: ''
    },
    customClasses: {
      type: String,
      default: ''
    },
    handleClick: Function
  }
};
</script>

<template>
  <button
    :to="{ path: route }"
    class="py-4 px-4 text-center font-medium text-sm hover:bg-opacity-90"
    :class="customClasses"
    @click="handleClick ? handleClick() : $router.push({ path: route })"
  >
    <slot></slot>
    {{ label }}
  </button>
</template>
