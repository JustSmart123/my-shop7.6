<template>
  <div class="admin-panel">
    <!-- Горизонтальна панель навігації -->
    <nav class="admin-nav">
      <router-link to="/admin/products" active-class="active-link">Каталог товарів</router-link>
      <router-link to="/admin/reviews" active-class="active-link">Відгуки</router-link>
    </nav>

    <!-- Контент адміністративної панелі -->
    <main class="admin-content">
      <router-view /> <!-- Динамічне завантаження сторінок -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
};
</script>

<style scoped>
/* Основний контейнер */
.admin-panel {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f4f4f9;
}

/* Горизонтальне меню */
.admin-nav {
  display: flex;
  justify-content: right;
  gap: 50px;
  padding: 15px 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Стилі для посилань */
.admin-nav a {
  color: rgb(0, 0, 0);
  font-size: 16px;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
}

/* Ефект при наведенні */
.admin-nav a:hover {
  transform: scale(1.05);
}

/* Активна сторінка */
.active-link {
  background:  white;
  font-weight: bold;
}

/* Основний контент */
.admin-content {
  padding: 20px;
  margin: 20px;
}
</style>
