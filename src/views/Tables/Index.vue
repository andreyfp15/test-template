<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import TitlePageDefault from '@/components/Titles/TitlePageDefault.vue'
</script>

<script lang="ts">
import { ref } from 'vue'

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';

import { CustomerService } from '@/assets/CustomerService';

export default {
    components: {
        DefaultLayout,
        TitlePageDefault,
        DataTable,
        Column,
        Tag,
        InputText,
        Dropdown,
        Calendar
    },
    data() {
        return {
            customers: [] as any[],
            loading: ref(true),
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                status: { value: null, matchMode: FilterMatchMode.EQUALS },
                date: { value: null, matchMode: FilterMatchMode.DATE_IS },
                verified: { value: null, matchMode: FilterMatchMode.EQUALS }
            },
            status: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
            pageTitle: ref('Tabelas')
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data: any) => {
            this.customers = this.getCustomers(data);
        });

        this.loading = false
    },
    methods: {
        getSeverity(status: string) {
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
        },
        formatDate(value: any) {
            return value.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        },
        getCustomers(data: any) {
            return [...(data || [])].map((d) => {
                d.date = new Date(d.date);

                return d;
            });
        }
    }
};
</script>

<template>
    <DefaultLayout>
        <TitlePageDefault :pageTitle="pageTitle" />
        <div class="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div class="max-w-full rounded-lg overflow-x-auto">

                <DataTable v-model:filters="filters" :value="customers" stripedRows paginator
                    :rowsPerPageOptions="[5, 10, 20, 50]"
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" :rows="10" filterDisplay="row"
                    :loading="loading" :globalFilterFields="['name', 'name','status']" editMode="row" dataKey="id"
                    :pt="{ table: { style: 'min-width: 50rem' } }">
                    <template #empty> Nenhum usuário foi encontrado. </template>
                    <template #loading> Carregando usuários... </template>

                    <Column field="name" header="Nome" style="width: 15%">
                        <template #body="{ data }">
                            {{ data.name }}
                        </template>

                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="font-normal p-2"
                                placeholder="Filtrar por nome" />
                        </template>
                    </Column>

                    <Column field="date" header="Data de Criação" filterField="date" dataType="date" style="width: 15%" >
                        <template #body="{ data }">
                            {{ formatDate(data.date) }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <Calendar v-model="filterModel.value" @input="filterCallback()" dateFormat="dd/mm/yy" placeholder="dd/mm/yyyy" mask="99/99/9999" showIcon iconDisplay="input" inputClass="p-2"  />
                        </template>
                    </Column>

                    <Column field="status" header="Status" :showFilterMenu="false" style="width: 15%">
                        <template #body="{ data }">
                            <Tag :value="data.status" :severity="getSeverity(data.status)" />
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="status"
                                placeholder="Select One" class="p-column-filter" style="min-width: 10rem"
                                :showClear="true">
                                <template #option="slotProps">
                                    <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                                </template>
                            </Dropdown>
                        </template>
                    </Column>

                    <Column header="Ações" :rowEditor="true" style="width: 5%; min-width: 8rem"></Column>
                </DataTable>

            </div>
        </div>
    </DefaultLayout>
</template>
