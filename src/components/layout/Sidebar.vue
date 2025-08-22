<template>
    <aside class="sidebar-container">
      <nav class="sidebar-menu">
        <router-link to="/dashboard" class="sidebar-menu-item" active-class="selected">
          <img src="@/assets/home.svg" alt="Dashboard" class="icon" />
          Dashboard
        </router-link>
  
        <router-link to="/documents" class="sidebar-menu-item" active-class="selected">
          <img src="@/assets/upload.svg" alt="Upload Document" class="icon" />
          Upload Document
        </router-link>
  
        <router-link to="/reports" class="sidebar-menu-item" active-class="selected">
          <img src="@/assets/search.svg" alt="Search & Retrieve" class="icon" />
          Search & Retrieve
        </router-link>
  
        <router-link to="/settings" class="sidebar-menu-item" active-class="selected">
          <img src="@/assets/folder.svg" alt="Documents" class="icon" />
          Documents
        </router-link>
  
        <router-link to="/help" class="sidebar-menu-item" active-class="selected">
          <img src="@/assets/settings.svg" alt="User Settings" class="icon" />
          User Settings
        </router-link>
      </nav>
    </aside>
  </template>
  
  <style scoped>
  /* Sidebar container */
  .sidebar-container {
    position: relative;
    width: 254px;
    min-height: 100vh;
    background: #fff;
    border-right: 1px solid #e5e7eb;
  }
  
  /* Sidebar Menu */
  .sidebar-menu {
    margin-top: 8px;
    margin-left: 8px;
    width: 238px;
    display: flex;
    flex-direction: column;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }
  
  /* Sidebar Menu Item */
  .sidebar-menu-item {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: left;
    color: #565d6d;
    background: transparent;
    border-radius: 6px;
    gap: 8px;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    transition: background 0.2s ease-in-out;
  }
  
  /* Hover effect */
  .sidebar-menu-item:hover {
    background: #f3f4f6;
    color: #1e2128;
  }
  
  /* Selected item */
  .sidebar-menu-item.selected {
    font-weight: 700;
    color: #4671b7;
    background: #c8d5ea;
  }
  
  /* Icons */
  .sidebar-menu img.icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
  </style>
  