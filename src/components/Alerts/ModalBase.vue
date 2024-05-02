<script lang="ts">
import '@/assets/css/modal-transition.css'
import ModalButton from '@/components/Buttons/ButtonModal.vue';

export default {
    components: {
        ModalButton
    },
    props: {
        message: {
            type: String,
            required: true
        },
        modalActive: {
            type: Boolean,
            defaut: false,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        borderColor: {
            type: String,
            required: true
        },
        backgroundColor: {
            type: String,
            required: true
        },
    },
    methods: {
        handleOkClick() {
            this.$emit('ok-click'); // Emitindo um evento quando o botão é clicado
        }
    }
};
</script>

<template>
    <Teleport to="body">
        <Transition name="modal-outer">
            <div v-show="modalActive" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40">

                <Transition name="modal-inner">
                    <div v-show="modalActive"
                        :class="`absolute fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center border-l-6 border-[${borderColor}] bg-[${backgroundColor}] px-7 py-8 shadow-md dark:bg-[#676767] md:p-9 max-w-[550px] max-h-[400px] overflow-y-auto break-words z-50`">

                        <div class="flex mr-15">
                            <div
                                :class="`mr-5 flex h-9 w-full max-w-[36px] min-w-[36px] items-center justify-center rounded-lg bg-[${borderColor}]`">
                                <!-- Uma imagem aqui seria bem vinda -->
                                <slot name="slot1" />
                            </div>
                            <div class="w-full">
                                <h5 class="mb-3 text-lg font-bold text-black dark:text-white">
                                    {{ title }}
                                </h5>

                                <p class="text-base leading-relaxed text-body dark:text-white">
                                    {{ message }}
                                </p>
                            </div>
                        </div>

                        <div class="w-full mt-10 flex justify-end">
                            <!-- Button -->
                            <modal-button :label="'OK'" :buttonColor="borderColor" @click-event="handleOkClick" />
                            <slot name="slot2" />
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>