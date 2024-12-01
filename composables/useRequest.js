export function useRequest (url, options) {
  return useFetch(url, {
    ...options,
    onRequest ({ options }) {
      console.log('請求發送前:', options)
      const { public: { apiBase } } = useRuntimeConfig()
      options.baseURL = apiBase
      options.headers.set('Content-Type', 'application/json')
    },
    onResponse ({ response }) {
      console.log('請求完成，響應資料:', response._data)
    },
    onRequestError ({ error }) {
      console.error('請求錯誤:', error)
    },
    onResponseError ({ error }) {
      console.error('響應錯誤:', error)
    }
  })
}
