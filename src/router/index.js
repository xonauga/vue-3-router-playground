import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AppbarView from '../views/AppbarView.vue';
import InvoiceAppbarView from '../views/invoice/AppbarView.vue';
import InvoiceSearchView from '../views/invoice/SearchView.vue';
import InvoiceOverviewView from '../views/invoice/OverviewView.vue';
import InvoiceBomView from '../views/invoice/BomView.vue';
import AuctionAppbarView from '../views/auction/AppbarView.vue';
import AuctionSearchView from '../views/auction/SearchView.vue';
import AuctionOverviewView from '../views/auction/OverviewView.vue';
import AuctionItemView from '../views/auction/ItemView.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      appbar: AppbarView,
    },
  },
  {
    path: '/invoice',
    name: 'invoice',
    components: {
      appbar: InvoiceAppbarView,
      default: () =>
        import(
          /* webpackChunkName: "invoice" */ '../views/invoice/InvoiceView.vue'
        ),
    },
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
    path: '/auction',
    name: 'auction',
    components: {
      appbar: AuctionAppbarView,
      default: () =>
        import(
          /* webpackChunkName: "invoice" */ '../views/auction/AuctionView.vue'
        ),
    },
    children: [
      {
        path: '',
        name: 'auction-search',
        component: AuctionSearchView,
      },
      {
        path: ':id',
        name: 'auction-overview',
        component: AuctionOverviewView,
        props: true,
      },
      {
        path: ':id/:item',
        name: 'auction-item',
        component: AuctionItemView,
        props: true,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    components: {
      default: () =>
        import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
    },
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
  if (!loggedIn) {
    console.log(' >> login ');
    return { name: 'login' };
  } else {
    return true;
  }
});

export default router;
