<template>
  <q-page class="q-pa-md">
    <!--rows ข้อมูลที่เราแสดง-->
    <q-table
      title="My Records"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filterText"
      :pagination="pagination"
      :loading="isLoading"
      selection="single"
      v-model:selected="selected"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filterText" placeholder="Search">
          <template v-slot:append><q-icon name="search"></q-icon></template>
        </q-input>
      </template>
      <template v-slot:body-cell-subjectScore="props">
        <q-td :props="props">
          <!-- ถ้าคะแนนน้อยกว่า 50 สีแดง ถ้ามากกว่า 50 สีเขียว -->
          <q-chip :color="props.row.score > 50 ? 'green' : 'red'" text-color="white">
            {{ props.row.score }}</q-chip
          >
        </q-td>
      </template>
    </q-table>
    <div>Selected value: {{ JSON.stringify(selected) }}</div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const selected = ref([])

// ตัวโหลด
const isLoading = ref(true)

const filterText = ref('')

const pagination = ref({
  sortBy: 'subjectScore',
  descending: false,
  page: 1,
  rowPerPage: 3,
})

const columns = [
  { name: 'subjectName', label: 'Name', field: 'name', align: 'left', sortable: true },
  { name: 'subjectScore', label: 'Score', field: 'score', align: 'center' },
]

const rows = [
  { id: 1, name: 'Meth1', score: 80 },
  { id: 2, name: 'Eng', score: 50 },
  { id: 3, name: 'Math2', score: 60 },
  { id: 4, name: 'Math3', score: 35 },
  { id: 5, name: 'Comp1', score: 74 },
  { id: 6, name: 'Comp2', score: 52 },
  { id: 7, name: 'Comp3', score: 87 },
]

// ตัวโหลดเมื่อคลิก
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 5000)
})
</script>
