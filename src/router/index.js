import { createRouter, createWebHistory } from 'vue-router';
import CheckoutView from '../views/CheckoutView.vue';
import ContactView from '../views/ContactView.vue';
import HomeView from '../views/HomeView.vue';
import ProductDetailsComponent from '../components/ProductDetailsComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductDetailsComponent,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
});

export default router;
