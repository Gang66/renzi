import { getToken, setToken, removeToken, setTimeStemp } from '@/utils/auth'
import { login, getUserInfo, getUserBaseInfo } from '@/api/user'
// 状态
const state = {
  token: getToken(), //设置token
  userInfo: {},
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  remToken(state) {
    state.token = null
    removeToken()
  },
  getUserInfo(state, result) {
    state.userInfo = result
  },
  remUserInfo(state, result) {
    state.userInfo = {}
  },
}
const actions = {
  async Onlogin(context, data) {
    const token = await login(data)
    context.commit('setToken', token)
    setTimeStemp()
  },
  async findUserInfo(context, data) {
    const res = await getUserInfo()
    const baseRes = await getUserBaseInfo(res.userId)
    const allInfo = { ...res, ...baseRes }
    console.log(allInfo)
    context.commit('getUserInfo', allInfo)
    return res
  },
  logout(context, data) {
    context.commit('remToken')
    context.commit('remUserInfo')
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
