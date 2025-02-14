<template>
  <div>
    <nav>
      <router-link to="/admin/products" active-class="active-link">Головна</router-link>
      <router-link to="/admin/reviews" active-class="active-link">Відгуки</router-link>
    </nav>

    <!-- Контент адміністративної панелі -->
    <main>
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

div {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f4f4f9;
}

nav {
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
a {
  color: rgb(0, 0, 0);
  font-size: 16px;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
}
a:hover {
  transform: scale(1.05);
}

/* Активна сторінка */
.active-link {
  background:  white;
  font-weight: bold;
}
main {
  padding: 20px;
  margin: 20px;
}
</style>
