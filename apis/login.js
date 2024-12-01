export function login (body) {
  return useRequest('/auth/login', { method: 'post', body })
}
