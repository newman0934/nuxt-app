<template>
  <div class="login-container">
    <h1>登入</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">帳號：</label>
        <input
          id="username"
          v-model="username"
          type="text"
          required
          placeholder="輸入帳號"
        >
      </div>
      <div>
        <label for="password">密碼：</label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="輸入密碼"
        >
      </div>
      <button type="submit" :disabled="pending">
        登入
      </button>
    </form>
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/apis/login'

const username = ref('')
const password = ref('')
const error = ref(null)
const pending = ref(false)
const router = useRouter()
const token = useCookie('authToken', { maxAge: 60 })

async function handleLogin () {
  pending.value = true
  error.value = null

  try {
    const { data } = await login({
      username: username.value,
      password: password.value
    })
    if (data.value.success) {
      token.value = data.value.token

      // 登入成功，重定向到首頁
      router.push('/')
    } else {
      error.value = data.value.msg || '登入失敗。'
    }
  } catch (err) {
    console.error('登入錯誤:', err)
    error.value = '登入時發生錯誤，請稍後再試。'
  } finally {
    pending.value = false
  }
}
</script>

  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 100px auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .login-container h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .login-container form div {
    margin-bottom: 1rem;
  }
  .login-container label {
    display: block;
    margin-bottom: 0.5rem;
  }
  .login-container input {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
  }
  .login-container button {
    width: 100%;
    padding: 0.75rem;
  }
  .error {
    margin-top: 1rem;
    color: red;
    text-align: center;
  }
  </style>
