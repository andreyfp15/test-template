<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import TitlePageDefault from '@/components/Titles/TitlePageDefault.vue'
</script>

<script lang="ts">
import { ref } from 'vue'
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue'
import CheckboxFive from '@/components/Forms/Checkboxes/CheckboxFive.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faArrowLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus, faArrowLeft, faEye, faEyeSlash)

export default {
  data() {
    return {
      pageTitle: ref('Usuários'),

      queryUsers: ref(false),

      inputType: ref('password'),
      eyeIcon: ref('eye')
    }
  },
  methods: {
    changeScreen() {
      if (this.queryUsers === false)
        this.queryUsers = true
      else
        this.queryUsers = false
    },
    togglePasswordVisibility() {
      this.inputType = this.inputType === 'password' ? 'text' : 'password';
      this.eyeIcon = this.inputType === 'password' ? 'eye' : 'eye-slash';
    }
  }
}
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

    <div v-if="!queryUsers" class="flex justify-end mt-6">
      <ButtonDefault class="flex bg-primary text-white rounded-lg" :handle-click="changeScreen">
        <div class="mr-2">
          <font-awesome-icon :icon="['fas', 'plus']" size="sm" style="color: #FFFFFF;" />
        </div>
        Cadastrar Usuário
      </ButtonDefault>
    </div>

    <div v-if="queryUsers" class="flex justify-start mt-6">
      <ButtonDefault class="flex bg-primary text-white rounded-lg" :handle-click="changeScreen">
        <div class="mr-2">
          <font-awesome-icon :icon="['fas', 'arrow-left']" size="sm" style="color: #FFFFFF;" />
        </div>
        Voltar
      </ButtonDefault>
    </div>

    <div class="mt-7 grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div class="flex flex-col gap-9">
        <DefaultCard cardTitle="Informações da Conta">
          <div class="flex flex-col gap-5.5 p-6.5">
            <div>
              <label for="nome" class="mb-1 block text-sm font-medium text-black dark:text-white">
                Nome
              </label>
              <input type="text" placeholder="Escolha um nome"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-2 px-3 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
            </div>

            <div>
              <label for="email" class="mb-1 block text-sm font-medium text-black dark:text-white">
                E-mail
              </label>
              <input type="text" placeholder="Escolha um e-mail"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-2 px-3 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
            </div>

            <div>
              <label for="password" class="mb-1 block text-sm font-medium text-black dark:text-white">
                Senha
              </label>
              <div class="relative">
                <input id="pasword" :type="inputType" placeholder="Escolha uma senha"
                  class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-2 px-3 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
                <button @click.prevent="togglePasswordVisibility" class="absolute right-3 mt-2.5 cursor-pointer">
                  <font-awesome-icon :icon="eyeIcon" size="lg" style="color: #bebebe;" />
                </button>
              </div>
              <div class="ml-2 mt-2">
              <CheckboxFive id="temporaryPassword" value="Temporária" />
            </div>
          </div>
      </div>
      </DefaultCard>
    </div>

    <div class="flex flex-col gap-9">
      <DefaultCard cardTitle="Permissões de Usuário">
        <div class="flex flex-col gap-5.5 p-6.5">
          <CheckboxFive id="teste" value="Temporária" />
        </div>
      </DefaultCard>
    </div>
    </div>

  </DefaultLayout>
</template>
