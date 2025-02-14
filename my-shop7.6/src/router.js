import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from './pages/AdminDashboard.vue';
import ManageProducts from './pages/ManageProducts.vue';
import ManageReviews from './pages/ManageReviews.vue';

const routes = [
  {
    path: '/',
    component: AdminDashboard, // Використовуємо AdminDashboard як головний компонент
    children: [
      { path: '', component: ManageProducts }, // Домашня сторінка рендерить ManageProducts
      { path: 'reviews', component: ManageReviews }, // Відгуки
    ],
  },
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      { path: 'products', component: ManageProducts },
      { path: 'reviews', component: ManageReviews },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/my-shop7.6/'), // Вказуємо базовий шлях для GitHub Pages
  routes,
});

export default router;

