<template>
  <div>Note Page Detail</div>
  <div>ID: {{ id }}</div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
</script>
