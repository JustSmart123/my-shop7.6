import { createRouter, createWebHistory } from 'vue-router';
// import App from './App.vue'; 
import AdminDashboard from './pages/AdminDashboard.vue';
import ManageProducts from './pages/ManageProducts.vue';
import ManageReviews from './pages/ManageReviews.vue';

const routes = [
    {
      path: '/',
      component: () => import('./App.vue'), // Головна сторінка
    },
    {
      path: '/admin',
      component: AdminDashboard, // Адмін-панель
      children: [
        {
          path: 'products',
          component: ManageProducts, // Керування продуктами
        },
        {
          path: 'reviews',
          component: ManageReviews, // Керування відгуками
        },
      ],
    },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
