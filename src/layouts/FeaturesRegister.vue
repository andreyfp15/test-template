<script lang="ts">

import type { Option } from '@/models/Option';
import { defineComponent, ref } from 'vue';
import DefaultCard from '@/components/Forms/DefaultCard.vue';
import ButtonApresentation from '@/components/Buttons/ButtonApresentation.vue';
import DropDownMenu from '@/components/Forms/DropDownMenu.vue';
import InputForms from '@/components/Forms/InputFields/InputForms.vue';
import LabelFields from '@/components/Forms/Labels/LabelFields.vue';

export default defineComponent({
    components: {
        InputForms,
        DefaultCard,
        ButtonApresentation,
        DropDownMenu,
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
            selectedProduct: ref(''),
            featureName: ref('')
        }
    },
    methods: {
        register() {
            console.log(this.featureName, this.selectedProduct);
        }
    }
});
</script>
<template>
    <form :on-submit="register" class="rounded-lg border  border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-full flex justify-start">
        <DefaultCard class="w-full" disableHeader>
            <div class="p-6 grid grid-cols-2">
                <div class="flex justify-start gap-10">
                    <div>
                        <LabelFields label="Nome da funcionalidade" for-html="featureName" />
                        <InputForms id="featureName" type="text" placeholder="Digite seu nome" v-model="featureName" />
                    </div>
                    <div>
                        <LabelFields label="Produto" for-html="product"/>
                        <DropDownMenu id="product" :options="products"/>
                    </div>
                </div>
                <div class="flex justify-end">
                    <ButtonApresentation label="+ Adicionar"/>
                </div>
            </div>
        </DefaultCard>
    </form>
</template>