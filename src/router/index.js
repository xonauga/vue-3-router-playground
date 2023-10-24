import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import InvoiceSearchView from '../views/invoice/InvoiceSearchView.vue';
import InvoiceOverviewView from '../views/invoice/InvoiceOverviewView.vue';
import InvoiceBomView from '../views/invoice/InvoiceBomView.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: () =>
      import(
        /* webpackChunkName: "invoice" */ '../views/invoice/InvoiceView.vue'
      ),
    children: [
      {
        path: '',
        name: 'invoice-search',
        component: InvoiceSearchView,
      },
      {
        path: ':id',
        name: 'invoice-overview',
        component: InvoiceOverviewView,
        props: true,
      },
      {
        path: ':id/bom',
        name: 'invoice-bom',
        component: InvoiceBomView,
        props: true,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  console.log(
    'Router Navigation Guard beforeEach',
    'from:',
    `${from.path} (${from.name})`,
    'to:',
    `${to.path} (${to.name})`
  );

  if (['home', 'login'].includes(to.name)) {
    return true;
  }

  const loggedIn = store.state.loggedIn;
  console.log('loggedIn', loggedIn);
  if (!loggedIn) {
    return { name: 'login' };
  } else {
    return true;
  }
});

export default router;
