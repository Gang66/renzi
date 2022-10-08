const TokenKey = 'vue_admin_template_token'
const timeOutKey = 'Time-Out-Key'
export function getToken() {
  return window.localStorage.getItem(TokenKey) || ''
}

export function setToken(token) {
  return window.localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return window.localStorage.removeItem(TokenKey)
}

export function getTimeStemp() {
  return window.localStorage.getItem(timeOutKey)
}
export function setTimeStemp() {
  return window.localStorage.setItem(timeOutKey, Date.now())
}
