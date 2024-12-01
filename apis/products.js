export function getProducts (page, limit) {
  return useRequest('/products', { method: 'get', query: { page, limit } })
}
