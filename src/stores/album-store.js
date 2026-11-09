import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/boot/axios'

export const useAlbumStore = defineStore('album', () => {
  const albums = ref([])
  const loading = ref(false)
  const errMessage = ref('')

  async function loadAlbums() {
    loading.value = true
    errMessage.value = ''
    try {
      const response = await api.get('/albums')
      albums.value = response.data
    } catch (error) {
      if (error.response) {
        errMessage.value = `Server Error (${error.response.status})`
      } else if (error.request) {
        errMessage.value = 'Unable to connect to server'
      } else {
        errMessage.value = error.message
      }
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  return { albums, loading, errMessage, loadAlbums }
})
