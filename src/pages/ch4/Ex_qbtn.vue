<template>
  <q-page padding>
    <!-- ไม่มีเงาไอคอน -->
    <q-btn label="Save" color="primary" text-color="black" icon="favorite" unelevated> </q-btn>

    <!-- ไม่มีพื้นหลัง -->
    <q-btn outline label="NO BG"></q-btn>

    <!-- เส้นแบ่ง -->
    <q-separator spaced size="4px" color="yellow" />

    <!-- ทำให้เป็นวงกลม -->
    <q-btn round icon="share" />

    <!-- แท็ปขึ้นบรรทัดใหม่ -->
    <q-space />

    <!-- ไอคอนวงที่มีลักษณะคล้ายยา -->
    <q-btn rounded label="Confirm" />

    <!-- จัดกลุ่มให้ปุ่ม -->
    <q-separator spaced="16px" />
    <q-btn-group push>
      <q-btn push label="Yesterday" />
      <q-btn push label="Today" />
      <q-btn push label="Tomorrow" />
    </q-btn-group>
    <q-separator spaced="16px" />

    <q-btn
      :loading="isSaving"
      color="primary"
      :label="isSaving ? 'Saving...' : 'Saved'"
      @click="save"
    >
      <template v-slot:loading>
        <q-spinner-dots color="white" size="3rem" :thickness="5" />Saving...
      </template>
    </q-btn>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const isSaving = ref(false)
const save = async () => {
  isSaving.value = true
  try {
    // async ต้งรอ await ทำงานเสร็จก่อน เมื่อเสร็จจะโหลด 2 วิก่อน
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('Data Saved')
  } catch (error) {
    console.log('Error: ', error)
  } finally {
    isSaving.value = false
  }
}
</script>
