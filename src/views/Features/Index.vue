<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import TitlePageDefault from '@/components/Titles/TitlePageDefault.vue'

</script>

<script lang="ts">

import { FeatureService } from '@/services/FeaturesService';
import type { Feature } from '@/models/Feature';
import FeaturesRegister from '@/components/Forms/InputFields/FeaturesRegister.vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import { FilterMatchMode } from 'primevue/api';
import Dropdown from 'primevue/dropdown';

export default defineComponent({
  components: {},
  data() {
    return {
      pageTitle: ref('Funcionalidades'),
      features: [] as Feature[],
      loading: ref(true),
      products: ['WMS', 'CRM'],
      editingRows: [],
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        id: { value: null, matchMode: FilterMatchMode.EQUALS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        createdAt: { value: null, matchMode: FilterMatchMode.DATE_IS },
        product: { value: null, matchMode: FilterMatchMode.EQUALS }
      },
    }
  },
  mounted() {
    FeatureService.getAllFeatures().then((data: Feature[]) => {
      this.features = data;
    })

    this.loading = false;
  },
  methods: {
    deleteRow(props: any) {
      delete this.features[props.id]
      console.log("WOW")
    },
    onRowEditSave(){
      
    }
  }
});
</script>

<template>
  <DefaultLayout>

    <TitlePageDefault :pageTitle="pageTitle">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
        class="w-6 h-6 me-4 mt-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    </TitlePageDefault>

    <div class="bg-[#d1d1d1] w-full h-0.5 rounded-lg mb-3" />

    <FeaturesRegister :products="products"/>

    <div class="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-6 max-w-full overflow-x-auto">
                <DataTable v-model:editingRows="editingRows" v-model:filters="filters"  :value="features" stripedRows paginator
                  :rowsPerPageOptions="[5, 10, 20, 50]"
                  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                  currentPageReportTemplate="{first} to {last} of {totalRecords}" :rows="10" filterDisplay="row"
                  :loading="loading" :globalFilterFields="['id', 'name', 'product']" editMode="row" dataKey="id"
                  :pt="{ table: { style: 'min-width: 50rem' } }"
                  @row-edit-save="onRowEditSave">
                    <template #empty> Nenhuma funcionalidade foi encontrada. </template>
                    <template #loading> Carregando funcionalidades... </template>

                    <Column field="id" header="Código" style="width: 5%">
                      <template #body="{ data }">
                        {{ data.id }}
                      </template>
                    
                      <template #filter="{ filterModel, filterCallback }">
                        <InputText v-model="filterModel.value" type="number" @input="filterCallback()" class="font-normal p-2"
                          placeholder="ID"/>
                      </template>
                    </Column>
                    <Column field="name" header="Nome da Funcionalidade" style="width: 15%">
                      <template #editor="{ data, field }">
                        <InputText v-model="data[field]" class="p-2"/>
                      </template>
                    
                      <template #filter="{ filterModel, filterCallback }">
                        <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="font-normal p-2"
                          placeholder="Filtrar por nome" />
                      </template>
                    </Column>
                  
                    <Column field="product" header="Produto" style="width: 15%">
                      <template #editor="{ data, field }">
                                <Dropdown v-model="data[field]" :options="products" optionLabel="label" optionValue="value" placeholder="Selecione um produto">
                                  <template #option="slotProps">
                                    {{ slotProps.option }}
                                  </template>
                                </Dropdown>
                      </template>
                      <template #filter="{ filterModel, filterCallback }">
                        <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="products"
                          placeholder="Selecionar" class="p-column-filter" style="min-width: 10rem" :showClear="true">
                            <template #option="slotProps">
                              {{ slotProps.option }}
                            </template>
                        </Dropdown>
                      </template>

                    </Column>

                    <Column header="Ações" :rowEditor="true" style="width: 5%; min-width: 8rem" />
                </DataTable>
      </div>
  </DefaultLayout>
</template>
