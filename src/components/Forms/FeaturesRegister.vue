<script lang="ts">

import type { Option } from '@/models/Option';
import { defineComponent, ref } from 'vue';
import DefaultCard from './DefaultCard.vue';
import ButtonApresentation from '@/components/Buttons/ButtonApresentation.vue';
import DropDown from './DropDownMenu.vue';
import InputForms from './InputFields/InputForms.vue';
import LabelFields from './Labels/LabelFields.vue'

export default defineComponent({
    components: {
        InputForms,
        DefaultCard,
        ButtonApresentation,
        DropDown,
        LabelFields
    },
    props: {
        products:{
          type: Array as () => Option[],
          required: true  
        } 
    },
    data() {
        return {
            selectedProduct: ref(),
            featureName: ''
        }
    },
    methods: {
        register() {
            console.log(this.selectedProduct)
        }
    }
});
</script>
<template>
    <form class="rounded-lg border  border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-full flex justify-start ">
        <DefaultCard class="w-full" disableHeader>
            <div class="p-6 grid grid-cols-2">
                <div class="flex justify-start gap-10">
                    <div>
                        <LabelFields label="Nome da funcionalidade" for-html="featureName" />
                        <InputForms id="featureName" type="text" placeholder="Digite seu nome" v-model="featureName" />
                    </div>
                    <div>
                        <LabelFields label="Produto" for-html="product"/>
                        <DropDown id="product" :options="products"/>
                    </div>
                </div>
                <div class="flex justify-end">
                    <ButtonApresentation label="+ Adicionar"/>
                </div>
            </div>
        </DefaultCard>
    </form>
</template>