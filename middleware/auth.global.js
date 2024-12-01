// middleware/auth.global.js

export default defineNuxtRouteMiddleware((to) => {
  // 取得 token
  const token = useCookie('authToken').value

  // 判斷當前路徑是否為登入頁面
  const isLoginPage = to.path === '/login'

  if (token && isLoginPage) {
    return navigateTo('/')
  }

  if (!token && !isLoginPage) {
    return navigateTo('/login')
  }
})
