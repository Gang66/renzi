import request from '@/utils/request'

// 登陆接口
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data,
  })
}

export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'POST',
  })
}
export function getUserBaseInfo(id) {
  return request({
    url: `/sys/user/${id}`,
  })
}

export function logout() {}
