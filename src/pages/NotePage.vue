<template>
  <h4>Note Page</h4>
  <div v-for="value in notes" :key="value.id">
    <div>
      {{ value.id }} - {{ value.name }}
      <q-icon name="description" @click="viewNote(value)" />
    </div>
  </div>
  <div>
    <q-btn color="primary" label="New note" @click="$router.push({ name: 'NewNote' })" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const notes = ref([
  { id: 1, name: 'Task1' },
  { id: 2, name: 'Task2' },
])
const viewNote = (item) => {
  router.push({
    name: 'NoteDetail',
    params: { id: item.id },
  })
}
</script>
