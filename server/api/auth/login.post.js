export default defineEventHandler(async (event) => {
  try {
    // 解析請求的 body
    const body = await readBody(event)
    const { username, password } = body

    // 檢查帳號和密碼是否存在
    if (!username || !password) {
      return {
        success: false,
        msg: '請提供帳號和密碼。'
      }
    }

    // 驗證帳號和密碼
    if (username === 'admin' && password === '1234') {
      // 如果驗證成功，回傳 success 和 token
      return {
        success: true,
        msg: '登入成功。',
        token: '123456789'
      }
    } else {
      // 如果驗證失敗，回傳錯誤訊息
      return {
        success: false,
        msg: '帳號或密碼錯誤。'
      }
    }
  } catch (error) {
    // 處理任何意外錯誤
    console.error('登入 API 錯誤:', error)
    return {
      success: false,
      msg: '伺服器錯誤，請稍後再試。',
      body
    }
  }
})
