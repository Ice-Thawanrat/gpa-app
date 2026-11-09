<template>
  <div class="q-ma-md">
    Count: {{ count }}
    <q-btn color="primary" label="ADD" @click="increment" />
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'
const timer = ref(null)
const count = ref(0)
const increment = () => {
  count.value++
}
onMounted(() => {
  console.log('component loaded')
  timer.value = setInterval(() => {
    console.log('Time working....')
  }, 5000)
})
onUnmounted(() => {
  console.log('remove component')
  clearInterval(timer.value)
})
onUpdated(() => {
  console.log('count=', count.value)
})
</script>
