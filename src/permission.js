import store from '@/store/index'
import router from './router'
const whiteList = ['/login', '/404']
router.beforeEach(async (to, form, next) => {
  if (store.getters.token) {
    if (!store.getters.userId) {
      await store.dispatch('user/findUserInfo')
    }
    return next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
