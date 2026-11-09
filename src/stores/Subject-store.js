// import { definedStore } from 'pinia'
// import { ref } from 'vue'
// import { api } from '@/boot/axios'

// export const useSubjectStore = definedStore('subject', () => {
//   const subjects = ref([])
//   async function fetchAll() {
//     try {
//       const res = await api.get('/subjects')
//       subjects.value = res.data
//     } catch (error) {
//       console.error('Error: ', error)
//     }
//   }
//   return { subjects, fetchAll }
// })
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/boot/axios'
export const useSubjectsStore = defineStore('subjects', () => {
  const subjects = ref([])
  async function fetchAll() {
    try {
      const response = await api.get('/subjects')
      subjects.value = response.data
    } catch (error) {
      console.error('Fetch Error:', error)
    }
  }
  return { subjects, fetchAll }
})
