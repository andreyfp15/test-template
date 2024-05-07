import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { usePrimeVue } from 'primevue/config'


export const useDarkModeStore = defineStore('darkMode', () => {
  const darkMode = useStorage('darkMode', ref(false))
  document.documentElement.classList.toggle('dark', darkMode.value)

  const PrimeVue = usePrimeVue();

  function toggleDarkMode() {
    darkMode.value = !darkMode.value
    togglePrimeVueTheme();
    document.documentElement.classList.toggle('dark', darkMode.value)
  }

  function togglePrimeVueTheme() {
    if(darkMode.value)
        PrimeVue.changeTheme('aura-light-amber','aura-dark-amber', 'theme',  () => {});
          else
        PrimeVue.changeTheme('aura-dark-amber','aura-light-amber', 'theme',  () => {});
  }
  return { darkMode, toggleDarkMode, togglePrimeVueTheme }
})
