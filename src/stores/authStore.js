import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore(
  'auth',
  () => {
    // state | เก็บค่า
    const isLogin = ref(false)
    const username = ref('')
    const uid = ref(0)

    // Getter ตรวจสอบสถานะ
    const loginStatus = computed(() => {
      return isLogin.value ? 'Logged In' : 'Logged Out'
    })
    const welcomeMessage = computed(() => {
      return isLogin.value ? `Welcome ${username.value}` : 'Please Login'
    })

    // Action
    const login = (name) => {
      isLogin.value = true
      username.value = name
      uid.value = 101
    }

    const logout = () => {
      isLogin.value = false
      username.value = ''
      uid.value = 0
    }
    return {
      isLogin,
      username,
      uid,
      loginStatus,
      welcomeMessage,
      login,
      logout,
    }
  },
  // เป็นการเก็บค่าถาวร refresh ก็ไม่หาย
  {
    persist: true,
  },
)
