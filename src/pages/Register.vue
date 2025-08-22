<template>
    <div class="page-wrapper">
      <div class="container">
        <!-- Logo -->
        <div class="logo-wrapper">
          <img src="@/assets/logo.png" alt="DocuMind Logo" class="image" />
        </div>
  
        <h2 class="title">Create Your DocuMind AI Account</h2>
        <p class="text">
          Unlock powerful document intelligence with AI OCR and advanced processing.
        </p>
  
        <!-- Full Name -->
        <div class="textbox">
          <label class="label" for="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
  
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
  
        <!-- Checkbox -->
        <div class="checkbox">
          <label for="terms">
            <input type="checkbox" id="terms" />
            <div class="outer-square">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20">
                <path d="M7.629 14.566l-4.243-4.243 1.414-1.414L7.63 11.738l7.071-7.071 1.414 1.414z"/>
              </svg>
            </div>
            <span class="checkbox-text">
              I accept the <a href="/terms" class="link">Terms and Conditions</a>
            </span>
          </label>
        </div>
  
        <!-- Button -->
        <button type="submit" class="btn">Sign Up</button>
  
        <!-- Already have account -->
        <p class="account-text">
          Already have an account?
          <router-link to="/login" class="login-link">Login</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  // No logic yet
  </script>
  
  <style scoped>
  /* Page Wrapper to center container */
  .page-wrapper {
    display: flex;
    justify-content: center;   /* horizontal */
    align-items: center;       /* vertical */
    min-height: 100vh;         /* full screen */
    background: #f9fafb;       /* light bg */
    padding: 16px;             /* safe padding for mobile */
    box-sizing: border-box;
  }
  
  /* Container */
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
  
  /* Logo */
  .logo-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
  
  .image {
    width: 48px;
    height: 48px;
  }
  
  /* Title */
  .title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 12px;
    font-family: Inter, sans-serif;
  }
  
  /* Subtitle */
  .text {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 20px;
    color: #565D6DFF;
  }
  
  /* Textbox */
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
  
  /* Checkbox */
  .checkbox {
    margin-bottom: 20px;
  }
  
  .checkbox label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .checkbox input {
    display: none;
  }
  
  .outer-square {
    width: 16px;
    height: 16px;
    border: 1px solid #565D6DFF;
    border-radius: 2px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
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
  }
  
  .link {
    color: #4f46e5;
    text-decoration: none;
  }
  
  .link:hover {
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
  
  /* Already have account */
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
  