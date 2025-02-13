<template>
  <div id="app">
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
