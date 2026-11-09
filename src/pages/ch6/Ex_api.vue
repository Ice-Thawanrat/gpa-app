<template>
  <q-page padding>
    <!-- เรียกฟังก์ชัน -->
    <q-btn color="primary" label="Load Albums" @click="albumStore.loadAlbums()" />

    <!-- ตรวจสอบ loading -->
    <!-- Loading -->
    <div v-if="albumStore.loading" class="q-mt-md">
      <q-spinner-dot color="primary" size="40px"></q-spinner-dot>
    </div>
    <!--  -->

    <!-- ตรวจสอบ Error Message -->
    <!-- Error -->
    <q-banner v-else-if="albumStore.errMessage" class="bg-red-1 text-negative q-mt-md" rounded>
      <template>
        <q-icon name="error" color="negative"></q-icon>
      </template>
      {{ albumStore.errMessage }}
    </q-banner>
    <!--  -->

    <!-- API Data -->
    <q-list v-else bordered separator class="q-mt-md">
      <q-item v-for="item in albumStore.albums" :key="item.id">
        <q-item-section>
          <q-item-label class="text-bold text-primary">{{ item.title }}</q-item-label>
          <q-item-label>Album ID: {{ item.id }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <!--  -->
  </q-page>
</template>

<script setup>
import { useAlbumStore } from '@/stores/album-store'

const albumStore = useAlbumStore()
</script>
