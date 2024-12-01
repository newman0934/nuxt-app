export function logout () {
  return useRequest('/auth/logout', { method: 'post' })
}
