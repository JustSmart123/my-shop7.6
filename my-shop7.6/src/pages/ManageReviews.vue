<template>
    <div>
      <HeaderComponent />
      <h1>Керування відгуками</h1>
      <ReviewsComponent />
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/HeaderComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  import ReviewsComponent from '../components/ReviewsComponent.vue';
  
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      ReviewsComponent,
    },
  };
  </script>
  
  