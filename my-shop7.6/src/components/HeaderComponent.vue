<template>
    <header class="header">
      <div class="logo">
        MY<span>SHOP</span>
      </div>
      <nav class="nav">
        <ul>
          <li><a href="#">Головна</a></li>
          <li><a href="#">Каталог</a></li>
          <li><a href="#">Про нас</a></li>
          <li><a href="#">Контакти</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10%;
    background-color: #f8f9fa;
    border-bottom: 1px solid #ddd;
    margin-bottom:30px;
  }
  
  .logo{
    max-height: 50px;
    font-weight:bold;
    font-size:2em;
  }
  span{
    color:#0056b3;
  }
  
ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
li {
    margin: 0 15px;
  }
  
a {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }
  
a:hover {
    text-decoration: underline;
    color: #0056b3;
  }
  </style>
  