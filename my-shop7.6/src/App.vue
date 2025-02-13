<template>
  <div id="app">
    <nav>
    <router-link to="/">Головна</router-link>
    <router-link to="/admin">Про нас</router-link>
  </nav>
  <router-view></router-view>
    <HeaderComponent />
    <ProductList />
    <ReviewsComponent />
    <FooterComponent />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ReviewsComponent from './components/ReviewsComponent.vue';

export default {
  components: {
    HeaderComponent,
    ProductList,
    FooterComponent,
    ReviewsComponent,

  },
};
</script>
