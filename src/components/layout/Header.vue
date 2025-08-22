<template>
    <header class="header-container">
      <div class="left-section">
        <!-- Logo -->
        <div class="logo-wrapper">
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
        </div>
  
        <!-- Menu -->
        <nav class="header-menu">
          <router-link to="/dashboard" class="header-menu-item" active-class="selected">Dashboard</router-link>
          <router-link to="/documents" class="header-menu-item" active-class="selected">Documents</router-link>
          <router-link to="/reports" class="header-menu-item" active-class="selected">Reports</router-link>
          <router-link to="/settings" class="header-menu-item" active-class="selected">Settings</router-link>
          <router-link to="/help" class="header-menu-item" active-class="selected">Help</router-link>
        </nav>
      </div>
  
      <div class="right-section">
        <!-- Notification Bell -->
        <div class="notification">
          <img src="@/assets/bell.svg" alt="Notifications" class="bell-icon" />
          <span class="notification-badge"></span>
        </div>
  
        <!-- Avatar -->
        <div class="avatar">
          <img src="@/assets/avatar.jpg" alt="User Avatar" />
          <span class="badge"></span>
        </div>
      </div>
    </header>
  </template>
  
  <style scoped>
  .header-container {
    height: 64px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .left-section {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  
  .logo {
    width: 36px;
    height: 36px;
  }
  
  /* Menu */
  .header-menu {
    display: flex;
    gap: 16px;
  }
  .header-menu-item {
    padding: 0 12px;
    color: #565d6d;
    text-decoration: none;
  }
  .header-menu-item.selected {
    font-weight: 600;
    color: #4671b7;
  }
  
  /* Right section */
  .right-section {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  /* Notification bell */
  .notification {
    position: relative;
    cursor: pointer;
  }
  .bell-icon {
    width: 24px;
    height: 24px;
  }
  .notification-badge {
    position: absolute;
    top: -2px;
    right: -2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e53935; /* red */
    border: 1.5px solid #fff;
  }
  
  /* Avatar */
  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }
  .avatar img {
    width: 100%;
    height: 100%;
  }
  .avatar .badge {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #4caf50; /* green = online */
    border: 1.5px solid #fff;
  }
  </style>
  