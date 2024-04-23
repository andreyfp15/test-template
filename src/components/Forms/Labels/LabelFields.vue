<script lang="ts">
    export default {
        props: {
            label: {
                type: String,
                required: true
            },
            forHtml: {
                type: String,
                required: true
            }
        }
    }
</script>

<template>
    <label :for="forHtml" class="mb-1 block text-sm font-medium text-black dark:text-white">
        {{ label }}
    </label>
</template>