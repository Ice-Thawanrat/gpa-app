import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/boot/axios'

export const usePostStore = defineStore('posts', () => {
  const postItem = ref([])
  const isLoading = ref(false)

  async function fetchAllPosts() {
    isLoading.value = true
    try {
      const res = await api.get('/posts')
      postItem.value = res.data
      console.log('Lising All Success: ', res.data)
    } catch (error) {
      console.error('Fetch Error:', error)
    } finally {
      isLoading.value = false
    }
  }

  async function createNewPost(newPost) {
    try {
      const res = await api.post('/posts', newPost, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      })
      console.log('Creating Success (Look at ID: 101):', res.data)
      postItem.value.unshift(res.data)
    } catch (error) {
      console.error('Create Error:', error)
    }
  }

  async function updatePost(id, updatedData) {
    try {
      // const res = await api.put(`/posts/${id}`, updatedData, {
      // เพิ่มหน้า axios แล้วก็ลบส่วน headers ได้เลย
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8',
      //   },
      // })
      const res = await api.post(`/posts/${id}`, updatedData)
      console.log('Updating (PUT) Success:', res.data)
      const index = postItem.value.findIndex((item) => item.id === id)
      if (index !== -1) {
        postItem.value[index] = res.data
      }
    } catch (error) {
      console.error('PUT Error:', error)
    }
  }

  async function deletePost(id) {
    try {
      await api.delete(`/posts/${id}`)
      console.log(`Deleting Success at ID: ${id}`)
      postItem.value = postItem.value.filter((item) => item.id !== id)
    } catch (error) {
      console.error('DELETE Error:', error)
    }
  }

  async function filterPost(userId) {
    isLoading.value = true
    try {
      const res = await api.get(`/posts?userId=${userId}`)
      postItem.value = res.data
      console.log(`Filter ID: ${userId} success`, res.data)
    } catch (error) {
      console.log('Filter error: ', error)
    } finally {
      isLoading.value = false
    }
  }

  async function fetchComments(id) {
    try {
      const res = await api.get(`/posts/${id}/comments`)
      console.log(`Comment for post id ${id}`, res.data)
      return res.data
    } catch (error) {
      console.log('Filter error: ', error)
    }
  }

  return {
    postItem,
    isLoading,
    fetchAllPosts,
    createNewPost,
    updatePost,
    deletePost,
    filterPost,
    fetchComments,
  }
})
