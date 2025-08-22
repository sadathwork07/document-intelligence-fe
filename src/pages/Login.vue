<template>
    <div class="page-wrapper">
      <div class="container">
        <!-- Logo -->
        <div class="logo-wrapper">
          <img src="@/assets/logo.png" alt="DocuMind Logo" class="image" />
        </div>
  
        <h2 class="title">Login to DocuMind AI</h2>
        <p class="text">
          Access your account to continue with powerful document intelligence.
        </p>
  
        <!-- Email -->
        <div class="textbox">
          <label class="label" for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
  
        <!-- Password -->
        <div class="textbox">
          <label class="label" for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
  
        <!-- Remember + Forgot Row -->
        <div class="options-row">
          <!-- Remember Me Checkbox -->
          <div class="checkbox">
            <label for="remember">
              <input type="checkbox" id="remember" />
              <div class="outer-square">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20">
                  <path d="M7.629 14.566l-4.243-4.243 1.414-1.414L7.63 11.738l7.071-7.071 1.414 1.414z"/>
                </svg>
              </div>
              <span class="checkbox-text">Remember Me</span>
            </label>
          </div>
  
          <!-- Forgot Password -->
          <router-link to="/forgot-password" class="forgot-link">Forgot password?</router-link>
        </div>
  
        <!-- Button -->
        <button type="submit" class="btn">Login</button>
  
        <!-- No account yet -->
        <p class="account-text">
          Don’t have an account?
          <router-link to="/signup" class="login-link">Sign Up</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  // no logic yet
  </script>
  
  <style scoped>
  /* Page Centering */
  .page-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f9fafb;
    padding: 16px;
    box-sizing: border-box;
  }
  
  .container {
    width: 100%;
    max-width: 420px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 6px rgba(23, 26, 31, 0.08);
    padding: 32px 24px;
    text-align: center;
    box-sizing: border-box;
  }
  
  .logo-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
  
  .image {
    width: 48px;
    height: 48px;
  }
  
  .title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 12px;
    font-family: Inter, sans-serif;
  }
  
  .text {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 20px;
    color: #565D6DFF;
  }
  
  .textbox {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    text-align: left;
  }
  
  .label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
    font-family: Inter, sans-serif;
  }
  
  .textbox input {
    width: 100%;
    height: 44px;
    padding: 0 12px;
    font-size: 14px;
    border-radius: 6px;
    border: 1px solid #DEE1E6;
    outline: none;
    transition: all 0.2s ease-in-out;
  }
  
  .textbox input:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
  
  /* Remember + Forgot Row */
  .options-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  /* Checkbox */
  .checkbox label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;
  }
  
  .checkbox input {
    display: none;
  }
  
  .outer-square {
    width: 16px;
    height: 16px;
    border: 1px solid #565D6DFF;
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .checkbox svg {
    display: none;
  }
  
  .checkbox input:checked + .outer-square {
    background: #4f46e5;
    border-color: #4f46e5;
  }
  
  .checkbox input:checked + .outer-square svg {
    display: block;
    fill: #fff;
  }
  
  .checkbox-text {
    font-size: 14px;
    color: #565D6DFF;
    white-space: nowrap;
  }
  
  /* Forgot Password */
  .forgot-link {
    font-size: 13px;
    color: #4f46e5;
    text-decoration: none;
  }
  
  .forgot-link:hover {
    text-decoration: underline;
  }
  
  /* Button */
  .btn {
    background: #4f46e5;
    color: #fff;
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }
  
  .btn:hover {
    background: #4338ca;
  }
  
  /* Bottom Text */
  .account-text {
    margin-top: 16px;
    font-size: 14px;
    color: #565D6DFF;
  }
  
  .login-link {
    color: #4f46e5;
    font-weight: 500;
    margin-left: 4px;
  }
  </style>
  