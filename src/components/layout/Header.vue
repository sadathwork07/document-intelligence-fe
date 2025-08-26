<template>
  <header class="header-container">
    <div class="left-section">
      <!-- Logo -->
      <div class="logo-wrapper">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </div>
    </div>

    <div class="right-section">
      <!-- Avatar -->
      <!-- <div class="avatar">
        <img src="@/assets/avatar.jpg" alt="User Avatar" />
        <span class="badge"></span>
      </div> -->

      <!-- User Name -->
      <!-- <span class="username">Sadath</span> -->
      <button type="button" class="button" @click="handleLogout">Logout</button>
      <!-- Notification Bell -->
      <!-- <div class="notification">
        <img src="@/assets/bell.svg" alt="Notifications" class="bell-icon" />
        <span class="notification-badge"></span>
      </div> -->
    </div>
  </header>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const handleLogout = async () => {
  await auth.logout()
  router.push('/login')
}
</script>

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
  position: absolute;
  top: 16px;
  left: 1152px;
  width: 40px;
  height: 40px;
  background: #f4f7e6ff;
  opacity: 1;
  overflow: hidden;
  border-radius: 20px;
}
.avatar img {
  width: 40px;
  height: 40px;
}
.avatar .badge {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}
.avatar.active .badge {
  background: #000000ff; /* transparent */
  opacity: 0;
  border-width: 1.5px;
  border-color: #ffffffff;
}
.avatar.inactive .badge {
  background: #000000ff; /* transparent */
  opacity: 0;
  border-width: 1.5px;
  border-color: #ffffffff;
}
.avatar.idle .badge {
  background: #000000ff; /* transparent */
  opacity: 0;
  border-width: 1.5px;
  border-color: #ffffffff;
}
.avatar.do_not_disturb .badge {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 10px;
  color: #ffffffff; /* white */
  background: #000000ff; /* transparent */
  opacity: 0;
  border-width: 1.5px;
  border-color: #ffffffff;
}
.username {
  position: absolute;
  top: 27px;
  left: 1200px;
  font-family: Lato;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #171a1fff; /* neutral-900 */
}

/* Button */
.button {
  position: absolute;
  top: 16px;
  left: 1301px;
  width: 74.671875px;
  height: 40px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Lato;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: #565d6dff; /* neutral-600 */
  background: #00000000; /* transparent */
  opacity: 1;
  border: none;
  border-radius: 3px;
}
/* Hover */
.button:hover {
  color: #565d6dff; /* neutral-600 */
  background: #00000000; /* black */
}
/* Pressed */
.button:hover:active {
  color: #565d6dff; /* neutral-600 */
  background: #00000000; /* black */
}
/* Disabled */
.button:disabled {
  opacity: 0.4;
}

/* Profile container */

.profile-container {
  position: absolute;
  top: 0px;
  left: 18000px;
  width: 152px;
  height: 40px;
  background: #ffffffff; /* white */
  border-radius: 6px;
}
</style>
