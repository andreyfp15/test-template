<script lang="ts">

import Dropdown from 'primevue/dropdown';
import InputGroup from '../InputGroup.vue';
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue';

export default {
    components:{
        Dropdown,
        InputGroup,
        ButtonDefault
    },
    props:{
        products: Array
    },
    data(){
        return {
        }
    },
    methods:{
        register(){
        }
    }
}
</script>
<template>
        <form class="w-full">
            <div class="p-5 justify-start flex gap-3 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <InputGroup label="Nome da funcionalidade" type="text" placeholder="Insira o nome da funcionalidade"
                customClasses="w-full xl:w-1/4" />
                <div class="">
                    <label class="mb-1 block text-black dark:text-white">Produtos</label>
                    <Dropdown :options="products"></Dropdown>
                </div>
                <ButtonDefault customClasses="flex-end bg-primary text-white rounded-lg" :handle-click="register">
                    Cadastrar Funcionalidade
                </ButtonDefault>
            </div>
        </form>
</template>