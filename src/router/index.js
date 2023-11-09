import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/travel/', name: 'ImportApp', component: () => import('../components/ImportApp.vue') },
    { path: '/travel/addFormy/', name: 'form', component: () => import('../components/formularioDeRegistro/AddForm.vue') },
    { path: '/travel/logIn/', name: 'logIn', component: () => import('../components/InfoClientes/LogIn.vue') },
    { path: '/travel/infoTable/', name: 'infoTable', component: () => import('../components/InfoClientes/InforTable.vue') },
  ]
});

export default router