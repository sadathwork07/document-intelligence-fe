<template>
    <div class="layout">
      <Header class="header" />
  
      <div class="main">
        <Sidebar class="sidebar" />
  
        <div class="content">
          <router-view />
        </div>
      </div>
  
      <Footer class="footer" />
    </div>
  </template>
  
  <script setup>
  import Header from "./Header.vue";
  import Sidebar from "./Sidebar.vue";
  import Footer from "./Footer.vue";
  </script>
  
  <style scoped>
  /* Make the layout take full screen height */
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden; /* prevent body scroll */
  }
  
  /* Header + Footer fixed */
  .header {
    height: 64px;
    flex-shrink: 0;
  }
  .footer {
    height: 52px;
    flex-shrink: 0;
  }
  
  /* Middle part (Sidebar + Content) */
  .main {
    flex: 1;
    display: flex;
    overflow: hidden; /* stop extra scrollbars */
  }
  
  /* Sidebar fixed */
  .sidebar {
    width: 254px;
    flex-shrink: 0;
    border-right: 1px solid #e5e7eb;
    overflow: hidden; /* stop it from scrolling separately */
  }
  
  /* Only this part scrolls */
  .content {
    flex: 1;
    overflow-y: auto; /* scroll only here */
    padding: 24px;
    background: #f9fafb;
  }
  </style>
  