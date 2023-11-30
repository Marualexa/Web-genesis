import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'ImportApp', component: () => import('../components/ImportApp.vue') },
    { path: '/add-form', name: 'form', component: () => import('../components/formularioDeRegistro/AddForm.vue') },
    { path: '/log-in', name: 'logIn', component: () => import('../components/InfoClientes/LogIn.vue') },
    { path: '/info-table', name: 'infoTable', component: () => import('../components/InfoClientes/InforTable.vue') },
  ]
});



export default router