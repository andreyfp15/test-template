<script setup lang="ts">
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

      <main>
        <div class="mx-auto max-w-screen-2xl p-2 md:p-4 2xl:p-6">
          <slot></slot>
        </div>
      </main>

    </div>
  </div>
</template>
