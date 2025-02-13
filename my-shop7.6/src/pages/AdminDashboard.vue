<template>
    <div class="admin-panel">
      <h1>Адміністративна панель</h1>
      <nav class="admin-nav">
        <router-link to="/admin/products">Керування продуктами</router-link>
        <router-link to="/admin/reviews">Керування відгуками</router-link>
      </nav>
      <router-view /> <!-- Тут завантажуються компоненти дочірніх маршрутів -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
  };
  </script>
  
  <style scoped>
  .admin-panel {
    padding: 20px;
  }
  
  .admin-nav {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .admin-nav a {
    text-decoration: none;
    color: #0056b3;
    font-weight: bold;
  }
  
  .admin-nav a:hover {
    text-decoration: underline;
  }
  </style>
  

  