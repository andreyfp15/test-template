<!-- <script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import TitlePageDefault from '@/components/Titles/TitlePageDefault.vue'
</script>

<script lang="ts">
import { ref } from 'vue'

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';

import { ProductService } from '@/assets/ProductService.js';

export default {
    components: {
        DefaultLayout,
        TitlePageDefault,
        DataTable,
        Column
    },
    data() {
        return {
            products: ref(),
            editingRows: [],
            statuses: [
                { label: 'In Stock', value: 'INSTOCK' },
                { label: 'Low Stock', value: 'LOWSTOCK' },
                { label: 'Out of Stock', value: 'OUTOFSTOCK' }
            ],
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
        ProductService.getProductsMini().then((data: any) => (this.products = data));
    },
    methods: {
        onRowEditSave(event: any) {
            let { newData, index } = event;

            this.products[index] = newData;
        },
        getStatusLabel(status: any) {
            switch (status) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        },
        formatCurrency(value: any) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        }
    }
};
</script>

<template>
    <DefaultLayout>
        <TitlePageDefault :pageTitle="pageTitle" />

        <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div class="max-w-full overflow-x-auto">

                <template>
                    <div class="card p-fluid">
                        <DataTable v-model:editingRows="editingRows" :value="products" editMode="row" dataKey="id"
                            @row-edit-save="onRowEditSave" :pt="{
                                table: { style: 'min-width: 50rem' }
                            }">
                            <Column field="code" header="Code" style="width: 20%">
                                <template #editor="{ data, field }">
                                    <InputText v-model="data[field]" />
                                </template>
                            </Column>
                            <Column field="name" header="Name" style="width: 20%">
                                <template #editor="{ data, field }">
                                    <InputText v-model="data[field]" />
                                </template>
                            </Column>
                            <Column field="inventoryStatus" header="Status" style="width: 20%">
                                <template #editor="{ data, field }">
                                    <Dropdown v-model="data[field]" :options="statuses" optionLabel="label"
                                        optionValue="value" placeholder="Select a Status">
                                        <template #option="slotProps">
                                            <Tag :value="slotProps.option.value"
                                                :severity="getStatusLabel(slotProps.option.value)" />
                                        </template>
                                    </Dropdown>
                                </template>
                                <template #body="slotProps">
                                    <Tag :value="slotProps.data.inventoryStatus"
                                        :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
                                </template>
                            </Column>
                            <Column field="price" header="Price" style="width: 20%">
                                <template #body="{ data, field }">
                                    {{ formatCurrency(data[field]) }}
                                </template>
                                <template #editor="{ data, field }">
                                    <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" />
                                </template>
                            </Column>
                            <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center">
                            </Column>
                        </DataTable>
                    </div>
                </template>

                
            </div>
        </div>
    </DefaultLayout>
</template> -->
<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import TitlePageDefault from '@/components/Titles/TitlePageDefault.vue'

const pageTitle = ref('Tabelas')

const packages = ref([
    { name: 'Free Package', price: '$0.00', invoiceDate: '12/01/2024', status: 'Paid' },
    { name: 'Standard Package', price: '$59.00', invoiceDate: '12/01/2024', status: 'Paid' },
    { name: 'Business Package', price: '$99.00', invoiceDate: '12/01/2024', status: 'Unpaid' },
    { name: 'Standard Package', price: '$59.00', invoiceDate: '12/01/2024', status: 'Pending' }
])

</script>

<template>
    <DefaultLayout>

        <TitlePageDefault :pageTitle="pageTitle" />

        <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div class="max-w-full overflow-x-auto">
                <table class="w-full table-auto">
                    <thead>
                        <tr class="bg-gray-2 text-left dark:bg-meta-4 border-b border-zinc-200 dark:border-zinc-600">
                            <th class="min-w-[30px]  py-2 px-2 pl-6 font-medium text-black dark:text-white">#</th>
                            <th class="min-w-[220px] py-2 px-2 pl-6 font-medium text-black dark:text-white">Nome</th>
                            <th class="min-w-[150px] py-2 px-2 pl-6 font-medium text-black dark:text-white">Data</th>
                            <th class="min-w-[120px] py-2 px-2 pl-6 font-medium text-black dark:text-white">Status</th>
                            <th class="py-2 px-2 pl-6 font-medium text-black dark:text-white">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in packages" :key="index"
                            class="border-b border-zinc-300 dark:border-zinc-600">
                            <td class="py-2 px-2 pl-6">
                                <p class="text-black dark:text-white">{{ index + 1 }}</p>
                            </td>
                            <td class="py-2 px-2 pl-6">
                                <p class="text-black dark:text-white">{{ item.name }}</p>
                            </td>
                            <td class="py-2 px-2 pl-6">
                                <p class="text-black dark:text-white">{{ item.invoiceDate }}</p>
                            </td>
                            <td class="py-2 px-2 pl-6">
                                <p class="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium" :class="{
                                    'bg-warning text-warning': item.status === 'Pending',
                                    'bg-danger text-danger': item.status === 'Unpaid',
                                    'bg-success text-success': item.status === 'Paid'
                                }">
                                    {{ item.status }}
                                </p>
                            </td>
                            <td class="py-2 px-2 pl-6">
                                <div class="flex items-center space-x-3.5">
                                    <button class="hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </button>
                                    <button class="hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </DefaultLayout>
</template>