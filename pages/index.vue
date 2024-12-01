<template>
  <div>
    <h1>{{ $t('index') }}</h1>
    <button @click="logoutHandler">
      登出
    </button>
  </div>
</template>
<script setup>
import { logout } from '@/apis/logout'
async function logoutHandler () {
  try {
    const { data } = await logout()
    if (data.value.success) {
      return navigateTo('/login')
    }
    console.log('logout', data.value.success)
  } catch (error) {

  }
}
</script>
