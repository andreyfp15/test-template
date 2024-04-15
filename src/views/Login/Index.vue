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