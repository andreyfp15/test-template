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
            selectedOption: this.options[0].value
        }
    },
    methods:{
        updateValue(event?: any) {
            this.$emit("update:modelValue", event.target.value);
        }
    },
    mounted(){
        this.$emit("update:modelValue", this.options[0].value);
    }
};
</script>   
<template>
    <select @input="updateValue" class="p-2 rounded-md bg-white shadow-1 dark:bg-black" :v-model="selectedOption">
        <option v-for="option in options" :key="option.key" :value="option.value">{{ option.value }}</option>
    </select>
</template>