<script lang="ts">
import { ref } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'

import AlertSuccess from '@/components/Alerts/AlertSuccess.vue';
import AlertError from '@/components/Alerts/AlertError.vue';
import ApresentationLayout from '@/layouts/ApresentationLayout.vue';
import PasswordField from '@/components/Forms/InputFields/PasswordField.vue';
import ButtonApresentation from '@/components/Buttons/ButtonApresentation.vue';

library.add(faEye, faEyeSlash, faUser)

export default {
    components: {
        FontAwesomeIcon,
        AlertSuccess,
        AlertError,
        PasswordField,
        ApresentationLayout,
        ButtonApresentation
    },
    data() {
        return {
            inputType: ref('password'),
            eyeIcon: ref('eye'),
            password: ref(''),

            modalSuccessActive: ref(false),
            modalErrorActive: ref(false),
            messageModalError: ref(''),
            messageModalSuccess: ref(''),

            email: ref(''),
            emailValid: ref(true),

            hardPassword: ref('123456'),
            hardEmail: ref('teste@smart01.com.br')
        };
    },
    methods: {
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

        validateEmail() {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailValid = regex.test(this.email);
        },

        updatePassword(newPassword: string) {
            this.password = newPassword;
        },

        forgotPassword() {
            const emailInput = this.$refs.email as HTMLInputElement;

            this.validateEmail();
            if (this.emailValid) {
                if (emailInput.value === this.hardEmail) {
                    this.$router.push('/passwordreset');
                } else {
                    this.messageModalError = 'E-mail não encontrado!';
                    this.toggleErrorModal();
                }
            }
        },

        login() {
            if (this.email === this.hardEmail && this.password === this.hardPassword)
                this.$router.push('/home');
            else {
                this.messageModalError = 'E-mail ou senha inválidos!';
                this.toggleErrorModal();
            }
        }
    }
};
</script>

<style>
input::-ms-reveal,
input::-ms-clear {
    display: none;
}
</style>

<!-- <template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img src="@/assets/images/logo/logo-login.png" alt="Logo" />
            </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        LOGIN</h1>

                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <div class="relative">
                                <input ref="email" type="email" v-model="email"
                                    class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white" />

                                <span class="absolute right-4 top-4">
                                    <font-awesome-icon :icon="['fas', 'user']" size="lg" style="color: #bebebe;" />
                                </span>
                                <label v-if="!emailValid"
                                    class=" block mb-2 text-sm font-small text-red dark:text-white">Email
                                    inválido</label>
                            </div>
                        </div>

                        <PasswordField id="password" label="Senha" @passwordChanged="updatePassword">
                            <div
                                class="text-left bottom-4 text-sm font-medium text-gray-900 dark:text-white mt-4 relative">
                                <a href="#" @click.prevent="forgotPassword" class="hover:text-blue-500">Esqueceu a
                                    senha?</a>
                            </div>
                        </PasswordField>

                        <div class="mb-5 mt-6">
                            <input type="button" value="Login" @click="login"
                                class="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90" />
                        </div>
                    </form>
                </div>
            </div>

            <AlertError :modal-active="modalErrorActive" @close-modal="toggleErrorModal"
                :error-message="messageModalError">
                <p class="text-base leading-relaxed text-body">
                    {{ messageModalError }}
                </p>
            </AlertError>

            <AlertSuccess :modal-active="modalSuccessActive" @close-modal="toggleSuccessModal"
                :success-message="messageModalSuccess">
                <p class="text-base leading-relaxed text-body">
                    {{ messageModalSuccess }}
                </p>
            </AlertSuccess>
        </div>
    </section>
</template> -->

<template>
    <ApresentationLayout card-title="LOGIN" :handle="login">
        <template v-slot:slot1>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <div class="relative">
                    <input ref="email" type="email" v-model="email"
                        class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white" />

                    <span class="absolute right-4 top-4">
                        <font-awesome-icon :icon="['fas', 'user']" size="lg" style="color: #bebebe;" />
                    </span>
                    <label v-if="!emailValid" class=" block mb-2 text-sm font-small text-red dark:text-white">Email
                        inválido</label>
                </div>
            </div>

            <PasswordField id="password" label="Nova Senha" @passwordChanged="updatePassword">
                <div class="text-left bottom-4 text-sm font-medium text-gray-900 dark:text-white mt-4 relative">
                    <a href="#" @click.prevent="forgotPassword" class="hover:text-blue-500">Esqueceu a
                        senha?</a>
                </div>
            </PasswordField>

            <ButtonApresentation label="Login" />
        </template>

        <template v-slot:slot2>
            <AlertSuccess :modal-active="modalSuccessActive" @close-modal="toggleSuccessModal"
                :success-message="messageModalSuccess">
                <p class="text-base leading-relaxed text-body">
                    {{ messageModalSuccess }}
                </p>
            </AlertSuccess>

            <AlertError :modal-active="modalErrorActive" @close-modal="toggleErrorModal"
                :error-message="messageModalError">
                <p class="text-base leading-relaxed text-body">
                    {{ messageModalError }}
                </p>
            </AlertError>
        </template>
    </ApresentationLayout>
</template>