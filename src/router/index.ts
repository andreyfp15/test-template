import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/Index.vue'
import Home from '@/views/Home/Index.vue'
import Clients from '@/views/Clients/Index.vue'
import Users from '@/views/Users/Index.vue'
import Features from '@/views/Features/Index.vue'
import Plans from '@/views/Plans/Index.vue'
import Forms from '@/views/Forms/Index.vue'
import Tables from '@/views/Tables/Index.vue'
import PasswordReset from '@/views/PasswordReset/Index.vue'
import UserRegister from '@/views/Users/UserRegister.vue'
import PlanRegister from '@/views/Plans/PlanRegister.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login'
    },
  },
  {
    path: '/passwordreset',
    name: 'passwordreset',
    component: PasswordReset,
    meta: {
      title: 'Redefinir Senha'
    },
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home'
    },
  },
  {
    path: '/clients',
    name: 'client',
    component: Clients,
    meta: {
      title: 'Clientes'
    },
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
      title: 'Usuários'
    },
  },
  {
    path: '/users/register/:id?',
    name: 'usersregister',
    component: UserRegister,
    meta: {
      title: 'Cadastro de Usuários'
    },
  },
  {
    path: '/features',
    name: 'features',
    component: Features,
    meta: {
      title: 'Funcionalidades'
    },
  },
  {
    path: '/plans',
    name: 'plans',
    component: Plans,
    meta: {
      title: 'Planos'
    },
  },
  {
    path: '/plans/register/:id?',
    name: 'plansregister',
    component: PlanRegister,
    meta: {
      title: 'Planos'
    },
  },
  {
    path: '/forms',
    name: 'forms',
    component: Forms,
    meta: {
      title: 'Formulários'
    },
  },
  {
    path: '/tables',
    name: 'tables',
    component: Tables,
    meta: {
      title: 'Tabelas'
    },
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `Template | ${to.meta.title} | SmartOne`
  next()
})

export default router


















// const routes = [
//   {
//     path: '/',
//     name: 'eCommerce',
//     component: ECommerceView,
//     meta: {
//       title: 'eCommerce Dashboard'
//     }
//   },
//   {
//     path: '/calendar',
//     name: 'calendar',
//     component: CalendarView,
//     meta: {
//       title: 'Calendar'
//     }
//   },
//   {
//     path: '/profile',
//     name: 'profile',
//     component: ProfileView,
//     meta: {
//       title: 'Profile'
//     }
//   },
//   {
//     path: '/forms/form-elements',
//     name: 'formElements',
//     component: FormElementsView,
//     meta: {
//       title: 'Form Elements'
//     }
//   },
//   {
//     path: '/forms/form-layout',
//     name: 'formLayout',
//     component: FormLayoutView,
//     meta: {
//       title: 'Form Layout'
//     }
//   },
//   {
//     path: '/tables',
//     name: 'tables',
//     component: TablesView,
//     meta: {
//       title: 'Tables'
//     }
//   },
//   {
//     path: '/pages/settings',
//     name: 'settings',
//     component: SettingsView,
//     meta: {
//       title: 'Settings'
//     }
//   },
//   {
//     path: '/charts/basic-chart',
//     name: 'basicChart',
//     component: BasicChartView,
//     meta: {
//       title: 'Basic Chart'
//     }
//   },
//   {
//     path: '/ui-elements/alerts',
//     name: 'alerts',
//     component: AlertsView,
//     meta: {
//       title: 'Alerts'
//     }
//   },
//   {
//     path: '/ui-elements/buttons',
//     name: 'buttons',
//     component: ButtonsView,
//     meta: {
//       title: 'Buttons'
//     }
//   },
//   {
//     path: '/auth/signin',
//     name: 'signin',
//     component: SigninView,
//     meta: {
//       title: 'Signin'
//     }
//   },
//   {
//     path: '/auth/signup',
//     name: 'signup',
//     component: SignupView,
//     meta: {
//       title: 'Signup'
//     }
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//     return savedPosition || { left: 0, top: 0 }
//   }
// })

// router.beforeEach((to, from, next) => {
//   document.title = `Template | ${to.meta.title} | SmartOne`
//   next()
// })

// export default router
