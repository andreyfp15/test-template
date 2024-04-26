<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import TitlePageDefault from '@/components/Titles/TitlePageDefault.vue'
</script>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'

import { validateEmail } from '@/modules/GenericFunctions'

import ButtonDefault from '@/components/Buttons/ButtonDefault.vue'
import CheckboxOne from '@/components/Forms/Checkboxes/CheckboxOne.vue'
import LabelFields from '@/components/Forms/Labels/LabelFields.vue'
import LabelInformation from '@/components/Forms/Labels/LabelInformation.vue'
import InputForms from '@/components/Forms/InputFields/InputForms.vue'
import ButtonApresentation from '@/components/Buttons/ButtonApresentation.vue'
import ScreenForms from '@/layouts/ScreenForms.vue'
import ModalBase from '@/components/Alerts/ModalBase.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faArrowLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';

import { CustomerService } from '@/assets/CustomerService';

library.add(faPlus, faArrowLeft, faEye, faEyeSlash)

export default defineComponent({
  components: {

  },
  data() {
    const usersField = reactive({
      name: ref(''),
      email: ref(''),
      password: ref(''),

      temporaryPassword: ref(false),

      includeClients: ref(false),
      editClients: ref(false),
      deleteClients: ref(false),

      includeUsers: ref(false),
      editUsers: ref(false),
      deleteUsers: ref(false),

      includeLicenses: ref(false),
      editLicenses: ref(false),
      deleteLicenses: ref(false),

      includeFunctionalities: ref(false),
      editFunctionalities: ref(false),
      deleteFunctionalities: ref(false),

      includePlans: ref(false),
      editPlans: ref(false),
      deletePlans: ref(false),

      includeLogs: ref(false),
      editLogs: ref(false),
      deleteLogs: ref(false),

      confidentialInformation: ref(false)
    })

    return {
      pageTitle: ref('Usuários'),

      queryUsers: ref(true),

      inputType: ref('password'),
      eyeIcon: ref('eye'),

      emailValid: ref(true),

      modalSuccessActive: ref(false),
      modalErrorActive: ref(false),
      messageModalError: ref(''),
      messageModalSuccess: ref(''),

      ...toRefs(usersField),

      users: [] as any[],
      selectedUser: null as any,
      loading: ref(true),
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        id: { value: null, matchMode: FilterMatchMode.EQUALS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        date: { value: null, matchMode: FilterMatchMode.DATE_IS },
        status: { value: null, matchMode: FilterMatchMode.EQUALS }
      },
      status: ['Ativo', 'Inativo'],

      editing: ref(false)
    }
  },
  mounted() {
    this.getDataMedium().then((data: any) => {
      this.users = this.getUsers(data);
    });

    this.loading = false;
  },
  methods: {
    changeScreen() {
      if (this.queryUsers === false)
        this.queryUsers = true
      else
        this.queryUsers = false
    },

    resetFields() {
      this.name = ''
      this.email = ''
      this.password = ''

      this.temporaryPassword = false

      this.includeClients = false
      this.editClients = false
      this.deleteClients = false

      this.includeUsers = false
      this.editUsers = false
      this.deleteUsers = false

      this.includeLicenses = false
      this.editLicenses = false
      this.deleteLicenses = false

      this.includeFunctionalities = false
      this.editFunctionalities = false
      this.deleteFunctionalities = false

      this.includePlans = false
      this.editPlans = false
      this.deletePlans = false

      this.includeLogs = false
      this.editLogs = false
      this.deleteLogs = false

      this.confidentialInformation = false
    },

    backToQueryUser() {
      this.changeScreen();

      this.resetFields();

      this.editing = false;
    },

    togglePasswordVisibility() {
      this.inputType = this.inputType === 'password' ? 'text' : 'password';
      this.eyeIcon = this.inputType === 'password' ? 'eye' : 'eye-slash';
    },

    toggleSuccessModal() {
      this.modalSuccessActive = !this.modalSuccessActive;
    },

    toggleErrorModal() {
      this.modalErrorActive = !this.modalErrorActive;
    },

    saveUsers() {
      this.emailValid = validateEmail(this.email);

      if (this.emailValid) {
        if ((this.name !== '' && this.name !== null) &&
          (this.password !== '' && this.password !== null)) {
          // if (this.temporaryPassword === true) {
          this.resetFields();

          this.messageModalSuccess = 'Cadastro realizado com sucesso.';
          this.toggleSuccessModal();

          this.changeScreen();
          // } else {
          //   this.messageModalError = 'temporaryPassword';
          //   this.toggleErrorModal();
          // }
        } else {
          this.messageModalError = 'É necessário que os campos estejam preenchidos!';
          this.toggleErrorModal();
        }
      }
    },

    getSeverity(status: string) {
      switch (status) {
        case 'Inativo':
          return 'danger';

        case 'Ativo':
          return 'success';
      }
    },

    formatDate(value: any) {
      return value.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    },

    getUsers(data: any) {
      return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
      });
    },

    getData() {
      return [
        { id: 1, name: 'Allan Lima', date: '2024-04-24', status: 'Ativo', email: 'allan.santos@smart01.com.br', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
        { id: 2, name: 'Luana Mandzirosche', date: '2024-04-23', status: 'Ativo', email: 'luana@smart01.com.br', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
        { id: 3, name: 'Arthur Brites', date: '2024-04-22', status: 'Inativo', email: 'arthur@smart01.com.br', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
        { id: 4, name: 'Giuliano Costa', date: '2024-04-21', status: 'Inativo', email: 'giuliano@smart01.com.br', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
        { id: 5, name: 'Andrey', date: '2024-04-20', status: 'Ativo', email: 'Andrey@smart01.com.br', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
        { id: 6, name: 'Alvanir', date: '2024-04-19', status: 'Ativo', email: 'Alvanir@smart01.com.br', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
        { id: 7, name: 'Lislaine', date: '2024-04-18', status: 'Inativo', email: 'Lislaine@smart01.com.br', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
        { id: 8, name: 'Matheus', date: '2024-04-17', status: 'Inativo', email: 'Matheus@smart01.com.br', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
        { id: 9, name: 'Luiz', date: '2024-04-16', status: 'Ativo', email: 'Luiz@smart01.com.br', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
        { id: 10, name: 'Miguel', date: '2024-04-17', status: 'Ativo', email: 'Miguel@smart01.com.br', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
      ]
    },

    getDataMedium() {
      return Promise.resolve(this.getData().slice(0, 10));
    },

    fillFields() {
      this.editing = true;

      this.name = this.selectedUser.name;
      this.email = this.selectedUser.email;

      this.temporaryPassword = this.selectedUser.temporaryPassword;

      this.includeClients = this.selectedUser.includeClients;
      this.editClients = this.selectedUser.editClients;
      this.deleteClients = this.selectedUser.deleteClients;

      this.includeUsers = this.selectedUser.includeUsers;
      this.editUsers = this.selectedUser.editUsers;
      this.deleteUsers = this.selectedUser.deleteUsers;

      this.includeLicenses = this.selectedUser.includeLicenses;
      this.editLicenses = this.selectedUser.editLicenses;
      this.deleteLicenses = this.selectedUser.deleteLicenses;

      this.includeFunctionalities = this.selectedUser.includeFunctionalities;
      this.editFunctionalities = this.selectedUser.editFunctionalities;
      this.deleteFunctionalities = this.selectedUser.deleteFunctionalities;

      this.includePlans = this.selectedUser.includePlans;
      this.editPlans = this.selectedUser.editPlans;
      this.deletePlans = this.selectedUser.deletePlans;

      this.includeLogs = this.selectedUser.includeLogs;
      this.editLogs = this.selectedUser.editLogs;
      this.deleteLogs = this.selectedUser.deleteLogs;

      this.confidentialInformation = this.selectedUser.confidentialInformation;
    },

    onEditing(event: any) {
      this.editing = true;

      this.selectedUser = this.users.filter((u) => u.id === event.data.id)[0];

      this.fillFields();

      this.changeScreen();
    }
  }
});
</script>

<template>
  <DefaultLayout>

    <TitlePageDefault :pageTitle="pageTitle">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
        class="w-6 h-6 me-4 mt-1">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    </TitlePageDefault>

    <div class="bg-[#d1d1d1] w-full h-0.5 rounded-lg mb-3" />

    <div v-if="queryUsers" class="flex justify-end mt-6">
      <ButtonDefault class="flex bg-primary text-white rounded-lg" :handle-click="changeScreen">
        <div class="mr-2">
          <font-awesome-icon :icon="['fas', 'plus']" size="sm" style="color: #FFFFFF;" />
        </div>
        Cadastrar Usuário
      </ButtonDefault>
    </div>

    <div v-if="queryUsers"
      class="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-6">
      <div class="max-w-full rounded-lg overflow-x-auto">

        <DataTable v-model:filters="filters" :value="users" stripedRows paginator @row-edit-init="onEditing"
          :rowsPerPageOptions="[5, 10, 20, 50]"
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} to {last} of {totalRecords}" :rows="10" filterDisplay="row"
          :loading="loading" :globalFilterFields="['name', 'date', 'status']" editMode="row" dataKey="id"
          :pt="{ table: { style: 'min-width: 50rem' } }">
          <template #empty> Nenhum usuário foi encontrado. </template>
          <template #loading> Carregando usuários... </template>

          <Column field="id" header="Código" style="width: 5%">
            <template #body="{ data }">
              {{ data.id }}
            </template>

            <template #filter="{ filterModel, filterCallback }">
              <InputText v-model="filterModel.value" type="number" @input="filterCallback()" class="font-normal p-2"
                placeholder="ID" />
            </template>
          </Column>

          <Column field="name" header="Nome" style="width: 15%">
            <template #body="{ data }">
              {{ data.name }}
            </template>

            <template #filter="{ filterModel, filterCallback }">
              <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="font-normal p-2"
                placeholder="Filtrar por nome" />
            </template>
          </Column>

          <Column field="date" header="Data de Criação" filterField="date" dataType="date" style="width: 15%">
            <template #body="{ data }">
              {{ formatDate(data.date) }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
              <Calendar v-model="filterModel.value" @input="filterCallback()" dateFormat="dd/mm/yy"
                placeholder="dd/mm/yyyy" mask="99/99/9999" showIcon iconDisplay="input" inputClass="p-2" />
            </template>
          </Column>

          <Column field="status" header="Status" :showFilterMenu="false" style="width: 15%">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="getSeverity(data.status)" />
            </template>
            <template #filter="{ filterModel, filterCallback }">
              <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="status"
                placeholder="Selecionar" class="p-column-filter" style="min-width: 10rem" :showClear="true">
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

    <div v-if="!queryUsers" class="flex justify-start mt-6">
      <ButtonDefault class="flex bg-primary text-white rounded-lg" :handle-click="backToQueryUser">
        <div class="mr-2">
          <font-awesome-icon :icon="['fas', 'arrow-left']" size="sm" style="color: #FFFFFF;" />
        </div>
        Voltar
      </ButtonDefault>
    </div>

    <ScreenForms v-if="!queryUsers" :handle="saveUsers">
      <div class="flex flex-col gap-9">
        <DefaultCard cardTitle="Informações da Conta">
          <div class="flex flex-col gap-5.5 p-6.5">

            <div>
              <LabelFields label="Nome" for-html="name" />
              <InputForms id="name" type="text" placeholder="Digite seu nome" v-model="name" />
            </div>

            <div>
              <LabelFields label="E-mail" for-html="email"></LabelFields>
              <InputForms id="email" type="text" placeholder="Digite seu email" v-model="email" />
              <LabelInformation v-if="!emailValid" label="Email inválido!" color="text-red" />
            </div>

            <div v-if="!editing">
              <LabelFields label="Senha" for-html="password"></LabelFields>
              <div class="relative">
                <InputForms id="password" :type="inputType" placeholder="Digite uma senha" v-model="password">
                  <button @click.prevent="togglePasswordVisibility" class="absolute right-3 mt-2.5 cursor-pointer">
                    <font-awesome-icon :icon="eyeIcon" size="lg" style="color: #bebebe;" />
                  </button>
                </InputForms>

              </div>

              <div v-if="!editing" class="ml-2 mt-2">
                <CheckboxOne :readonly="false" v-model="temporaryPassword" id="temporaryPassword"
                  label="Redefinir senha no próximo acesso" />
              </div>

            </div>

          </div>
        </DefaultCard>
      </div>

      <div class="flex flex-col gap-9">
        <DefaultCard cardTitle="Permissões de Usuário">
          <div class="flex gap-5 p-6 grid grid-cols-4 ">
            <label />
            <LabelFields label="Inclusão" for-html="include" />
            <LabelFields label="Edição" for-html="edit" />
            <LabelFields label="Exclusão" for-html="delete" />

            <LabelFields label="Clientes" for-html="clients" />
            <CheckboxOne :readonly="false" v-model="includeClients" id="includeClients" label="" class="ml-4" />
            <CheckboxOne :readonly="false" v-model="editClients" id="editClients" label="" class="ml-4" />
            <CheckboxOne :readonly="true" v-model="deleteClients" id="deleteClients" label="" class="ml-4" />

            <LabelFields label="Usuários" for-html="users"></LabelFields>
            <CheckboxOne :readonly="false" v-model="includeUsers" id="includeUsers" label="" class="ml-4" />
            <CheckboxOne :readonly="false" v-model="editUsers" id="editUsers" label="" class="ml-4" />
            <CheckboxOne :readonly="true" v-model="deleteUsers" id="deleteUsers" label="" class="ml-4" />

            <LabelFields label="Licenças" for-html="licenses"></LabelFields>
            <CheckboxOne :readonly="false" v-model="includeLicenses" id="includeLicenses" label="" class="ml-4" />
            <CheckboxOne :readonly="false" v-model="editLicenses" id="editLicenses" label="" class="ml-4" />
            <CheckboxOne :readonly="false" v-model="deleteLicenses" id="deleteLicenses" label="" class="ml-4" />

            <LabelFields label="Funcionalidades" for-html="functionalities"></LabelFields>
            <CheckboxOne :readonly="false" v-model="includeFunctionalities" id="includeFunctionalities" label=""
              class="ml-4" />
            <CheckboxOne :readonly="false" v-model="editFunctionalities" id="editFunctionalities" label=""
              class="ml-4" />
            <CheckboxOne :readonly="false" v-model="deleteFunctionalities" id="deleteFunctionalities" label=""
              class="ml-4" />

            <LabelFields label="Planos" for-html="plans"></LabelFields>
            <CheckboxOne :readonly="false" v-model="includePlans" id="includePlans" label="" class="ml-4" />
            <CheckboxOne :readonly="false" v-model="editPlans" id="editPlans" label="" class="ml-4" />
            <CheckboxOne :readonly="false" v-model="deletePlans" id="deletePlans" label="" class="ml-4" />

            <LabelFields label="Logs" for-html="logs"></LabelFields>
            <CheckboxOne :readonly="false" v-model="includeLogs" id="includeLogs" label="" class="ml-4" />
            <CheckboxOne :readonly="false" v-model="editLogs" id="editLogs" label="" class="ml-4" />
            <CheckboxOne :readonly="true" v-model="deleteLogs" id="deleteLogs" label="" class="ml-4" />
          </div>

          <div class="p-6">
            <CheckboxOne :readonly="false" v-model="confidentialInformation" id="confidentialInformation"
              label="Informações Confidênciais" />
          </div>
        </DefaultCard>
        <div class="flex justify-end">
          <ButtonApresentation label="Salvar" />
        </div>
      </div>
    </ScreenForms>

    <ModalBase :message="messageModalSuccess" :modal-active="modalSuccessActive" title="Sucesso" border-color="#34D399"
      background-color="#DDEFEB" @close-modal="toggleSuccessModal">
      <template v-slot:slot1>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
            fill="white" stroke="white"></path>
        </svg>
      </template>
    </ModalBase>

    <ModalBase :message="messageModalError" :modal-active="modalErrorActive" title="Erro" border-color="#F87171"
      background-color="#F2E1E5" @close-modal="toggleErrorModal">
      <template v-slot:slot1>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
            fill="#ffffff" stroke="#ffffff"></path>
        </svg>
      </template>
    </ModalBase>
  </DefaultLayout>
</template>