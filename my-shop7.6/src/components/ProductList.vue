<template>
    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue';
  
  export default {
components: {
ProductCard,
},
data() {
return {
products: [
{
name: "Смартфон Samsung Galaxy S23",
price: 35000,
image: "https://img.freepik.com/free-photo/white-cell-phone-box-background_58702-4721.jpg"
},
{
name: "Ноутбук Apple MacBook Air M2",
price: 58000,
image: "https://img.freepik.com/free-photo/workplace-with-laptop-stand-near-eyeglasses_23-2148040478.jpg"
},
{
name: "Бездротові навушники Sony",
price: 7800,
image: "https://img.freepik.com/free-photo/closeup-shot-white-wireless-headphones-with-their-case-white-background_181624-31412.jpg"
},
{
name: "Механічна клавіатура HyperX",
price: 4500,
image: "https://img.freepik.com/free-photo/top-view-keyboard-mouse-arrangement_23-2149386333.jpg"
},
{
name: "Смарт-годинник Apple Watch Series 9",
price: 17000,
image: "https://img.freepik.com/free-photo/modern-sport-adult-hand-lifestyle_1127-2745.jpg"
},
{
name: "Портативна колонка JBL Series 1",
price: 5200,
image: "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722602.jpg"
},
{
name: "Телевізор Samsung 4K QLED",
price: 28000,
image: "https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg"
},
{
name: "Фітнес-браслет Xiaomi Mi Band 7",
price: 1800,
image: "https://img.freepik.com/free-photo/futuristic-virtual-reality-headset-illuminates-dark-studio-shot-generated-by-ai_188544-13298.jpg"
}
],
};
},
};
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  </style>
  