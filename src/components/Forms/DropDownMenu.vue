<script lang="ts">
import type { Option } from '@/models/Option';

export default {
    props: {
        options:{
            type: Array as () => Option[],
            required: true
        },
        selectedOption: {
            type: Object as () => Option | undefined
        }
    } 
};
</script>
<template>
    <select class="w-full p-2 outline-none border-stroke rounded-md border-[1.5px] bg-white shadow-1 dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" :v-model="selectedOption">
        <option v-for="option in options" :key="option.key" :value="option.value">{{ option.value }}</option>
    </select>
</template>