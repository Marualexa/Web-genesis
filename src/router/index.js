import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/Web-genesis/', name: 'ImportApp', component: () => import('../components/ImportApp.vue') },
    { path: '/Web-genesis/addFormy/', name: 'form', component: () => import('../components/formularioDeRegistro/AddForm.vue') },
    { path: '/Web-genesis/logIn/', name: 'logIn', component: () => import('../components/InfoClientes/LogIn.vue') },
    { path: '/Web-genesis/infoTable/', name: 'infoTable', component: () => import('../components/InfoClientes/InforTable.vue') },
  ]
});

export default router