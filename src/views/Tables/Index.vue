<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import TitlePageDefault from '@/components/Titles/TitlePageDefault.vue'
</script>

<script lang="ts">
import { ref } from 'vue'

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import { FilterMatchMode } from 'primevue/api';
import InputText from 'primevue/inputtext';

import { CustomerService } from '@/assets/CustomerService';

export default {
    components: {
        DefaultLayout,
        TitlePageDefault,
        DataTable,
        Column,
        Tag,
        InputText
    },
    data() {
        return {
            customers: null,
            loading: ref(true),
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                status: { value: null, matchMode: FilterMatchMode.EQUALS },
                verified: { value: null, matchMode: FilterMatchMode.EQUALS }
            },
            statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
            pageTitle: ref('Tabelas'),
            packages: ref([
                { name: 'Free Package', price: '$0.00', invoiceDate: '12/01/2024', status: 'Paid' },
                { name: 'Standard Package', price: '$59.00', invoiceDate: '12/01/2024', status: 'Paid' },
                { name: 'Business Package', price: '$99.00', invoiceDate: '12/01/2024', status: 'Unpaid' },
                { name: 'Standard Package', price: '$59.00', invoiceDate: '12/01/2024', status: 'Pending' }
            ])
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data: any) => (this.customers = data));
        this.loading = false
    },
    methods: {
        getSeverity(status : string) {
            switch (status) {
                case 'unqualified':
                    return 'danger';

                case 'qualified':
                    return 'success';

                case 'new':
                    return 'info';

                case 'negotiation':
                    return 'warning';

                case 'renewal':
                    return 'contrast';
            }
        }
    }
};
</script>

<template>
    <DefaultLayout>
        <TitlePageDefault :pageTitle="pageTitle" />
        <div class="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div class="max-w-full rounded-lg overflow-x-auto">

                <DataTable v-model:filters="filters" :value="customers" 
                stripedRows
                paginator :rows="10" 
                filterDisplay="row" :loading="loading" :globalFilterFields="['name', 'status']"
                editMode="row" dataKey="id" 
                :pt="{ table: { style: 'min-width: 50rem' } }">
                    <template #empty> Nenhum usuário foi encontrado. </template>
                    <template #loading> Carregando usuários... </template>    
                    <Column field="name" header="Nome" style="width: 20%">
                        <template #body="{ data }">
                            {{ data.name }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtrar por nome" />
                        </template>
                    </Column>
                    <Column field="status" header="Status" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="width: 20%" bodyStyle="text-align:center" header-style="text-align:center">
                        <template #body="{ data }">
                            <Tag :value="data.status" :severity="getSeverity(data.status)"/>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <!--TODO: Fazer o filtro de status aparecer-->>
                            <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One" class="p-column-filter" style="min-width: 12rem" :showClear="true">
                                <template #option="slotProps">
                                    <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
                </DataTable>
            
            </div>
        </div>
    </DefaultLayout>
</template>

