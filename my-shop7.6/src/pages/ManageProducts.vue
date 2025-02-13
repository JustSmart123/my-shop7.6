<template>
    <div>
      <HeaderComponent />
      <h1>Керування продуктами</h1>
      <ProductList />
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/HeaderComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  import ProductList from '../components/ProductList.vue';
  
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      ProductList,
    },
  };
  </script>
  
  