import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { usePrimeVue } from 'primevue/config'

export const useDarkModeStore = defineStore('darkMode', () => {
  const darkMode = useStorage('darkMode', ref(false))
  document.documentElement.classList.toggle('dark', darkMode.value)

  const PrimeVue = usePrimeVue()

  function toggleDarkMode() {
    if(darkMode.value)
      PrimeVue.changeTheme('aura-dark-amber','aura-light-amber', 'theme',  () => {});
    else
      PrimeVue.changeTheme('aura-light-amber','aura-dark-amber', 'theme',  () => {});
    
    darkMode.value = !darkMode.value
    document.documentElement.classList.toggle('dark', darkMode.value)
  }

  return { darkMode, toggleDarkMode }
})
