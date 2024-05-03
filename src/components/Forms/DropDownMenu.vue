<script lang="ts">
import type { Option } from '@/models/Option';

export default {
    props: {
        options:{
            type: Array as () => Option[],
            required: true
        }
    },
    data() {
        return{
            selectedOption: null
        }
    },
    
};
</script>
<template>
    <select class="p-2 rounded-md bg-white shadow-1 dark:bg-black" :v-model="selectedOption">
        <option v-for="option in options" :key="option.key" :value="option.value">{{ option.value }}</option>
    </select>
</template>