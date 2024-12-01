export default defineEventHandler((event) => {
  try {
    // 清除 authToken Cookie
    deleteCookie(event, 'authToken', {
      path: '/' // 確保刪除正確路徑下的 Cookie
    })

    return {
      success: true,
      msg: '登出成功。'
    }
  } catch (error) {
    console.error('登出 API 錯誤:', error)
    return {
      success: false,
      msg: '登出時發生錯誤，請稍後再試。'
    }
  }
})
