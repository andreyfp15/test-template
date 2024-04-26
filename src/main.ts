import './assets/css/satoshi.css'
import './assets/css/style.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'flatpickr/dist/flatpickr.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'

import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(PrimeVue, {
    locale: {
        startsWith: 'Começa por',
        contains: 'Contém',
        notContains: 'Não contém',
        endsWith: 'Termina por',
        equals: 'Igual a',
        notEquals: 'Diferente de',
        noFilter: 'Sem filtro',
        dateIs: 'Data é',
        dateBefore: 'Antes de',
        dateAfter: 'Depois de',
        dateIsNot: 'Data não é'
    }
});

app.mount('#app')
