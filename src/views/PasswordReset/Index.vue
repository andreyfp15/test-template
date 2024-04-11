<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import AlertSuccess from '@/components/Alerts/AlertSuccess.vue';
import AlertError from '@/components/Alerts/AlertError.vue';

library.add(faEye, faEyeSlash, faUser)
</script>

<script lang="ts">
export default {
    components: {
        FontAwesomeIcon,
        AlertSuccess,
        AlertError
    },
    data() {
        return {
            inputPassword: "password",
            inputConfirmPassword: "password",
            eyeIconPassword: ref('eye'),
            eyeIconConfirmPassword: ref('eye'),

            modalSuccessActive: ref(false),
            modalErrorActive: ref(false),
            messageModalError: ref(''),
            messageModalSuccess: ref(''),

            password: ref(''),
            confirmPassword: ref('')
        };
    },
    methods: {
        togglePasswordVisibility() {
            this.inputPassword = this.inputPassword === 'password' ? 'text' : 'password';
            this.eyeIconPassword = this.inputPassword === 'password' ? 'eye' : 'eye-slash';
        },

        toggleConfirmPasswordVisibility() {
            this.inputConfirmPassword = this.inputConfirmPassword === 'password' ? 'text' : 'password';
            this.eyeIconConfirmPassword = this.inputConfirmPassword === 'password' ? 'eye' : 'eye-slash';
        },

        toggleSuccessModal() {
            this.modalSuccessActive = !this.modalSuccessActive;
        },

        toggleErrorModal() {
            this.modalErrorActive = !this.modalErrorActive;
        },

        passwordReset() {
            const password = (this.$refs.password as HTMLInputElement).value.trim();
            const confirmPassword = (this.$refs.confirmPassword as HTMLInputElement).value.trim();

            if (password !== '' && confirmPassword !== '') {
                if (password === confirmPassword) {
                    this.messageModalSuccess = 'Senha alterada com sucesso. \n Agora você já pode voltar para o login.';
                    this.toggleSuccessModal();
                } else {
                    this.messageModalError = 'As senhas não correspondem!';
                    this.toggleErrorModal();
                }
            } else {
                this.messageModalError = 'É necessário que os campos sejam preenchidos!';
                this.toggleErrorModal();
            }
        }
    }
};
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img src="@/assets/images/logo/logo-login.png" alt="Logo" />
            </a>

            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bem-vindo(a) de volta! 👋🏼
            </label>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Altere sua senha
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nova Senha</label>

                            <div class="relative">
                                <input ref="password" id="password" :type="inputPassword"
                                    class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white" />
                                <button @click.prevent="togglePasswordVisibility"
                                    class="absolute right-4 top-4 cursor-pointer">
                                    <font-awesome-icon :icon="eyeIconPassword" size="lg" style="color: #bebebe;" />
                                </button>
                            </div>
                        </div>

                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar
                                Senha</label>

                            <div class="relative">
                                <input ref="confirmPassword" id="password" :type="inputConfirmPassword"
                                    class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white" />
                                <button @click.prevent="toggleConfirmPasswordVisibility"
                                    class="absolute right-4 top-4 cursor-pointer">
                                    <font-awesome-icon :icon="eyeIconConfirmPassword" size="lg"
                                        style="color: #bebebe;" />
                                </button>
                            </div>
                        </div>

                        <div class="mb-5 mt-6">
                            <input type="button" value="Alterar Senha" @click="passwordReset"
                                class="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90" />
                        </div>
                        <div class="">
                            <router-link :to="{ path: '/' }">
                                <input type="button" value="Voltar ao login"
                                    class="w-full cursor-pointer rounded-lg p-4 font-medium text-primary transition hover:bg-opacity-90" />
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>

            <AlertSuccess :modal-active="modalSuccessActive" @close-modal="toggleSuccessModal"
                :success-message="messageModalSuccess">
                <h5 class="mb-3 text-lg font-bold text-black dark:text-[#34D399]">
                    Sucesso
                </h5>
                <p class="text-base leading-relaxed text-body">
                    {{ messageModalSuccess }}
                </p>
            </AlertSuccess>

            <AlertError :modal-active="modalErrorActive" @close-modal="toggleErrorModal"
                :error-message="messageModalError">
                <h5 class="mb-3 text-lg font-bold text-black dark:text-[#34D399]">
                    Erro
                </h5>
                <p class="text-base leading-relaxed text-body">
                    {{ messageModalError }}
                </p>
            </AlertError>
        </div>
    </section>
</template>