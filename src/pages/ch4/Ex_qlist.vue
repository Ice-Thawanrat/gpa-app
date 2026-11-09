<template>
    <q-page class="q-pa-md">
        <!-- separator คือเส้นแบ่ง -->
        <q-list bordered separator class="rounded-borders"
        style="max-width: 600px;" magrin: 0 auto;>
        <q-item-label header class="text-h6">My Todo List</q-item-label>
        <q-item v-for="item in todoList" :key="item.id" clickable v-ripple 
        :class="item.done ? 'bg-green-1' : 'bg-white'" @click="toggleTodo(item.id)"> <!-- ใช้เรียกฟังชันก์ toggleTOdo เมื่อคลิก -->

            <!-- Check box ในรูปแบบ Avartar -->
            <q-item-section avatar>
                <q-icon :name="item.done ? 'check_circle' : 'radio_button_unchecked'"
                :color="item.done ? 'positive' : 'gray-5'" size="28px"></q-icon>
            </q-item-section>

            <q-item-section>
                <q-item-label 
                :class="item.done ? 'text-strikethrough text-grey-6' : 'text-dark'">{{ item.title }}</q-item-label>
                <q-item-label caption lines="1">
                    Due Date: {{ item.dueDate }} | {{ item.category }}</q-item-label>
            </q-item-section>

            <q-item-section side>
                <!-- q-badge ป้าย tag เล็กๆ -->
                <q-badge :color="getPriorityColor(item.priority)"
                    :label="item.priority"></q-badge>
            </q-item-section>
        </q-item>

        <!-- แสดงข้อความ No List -->
        <q-item v-if="todoList.length === 0">
            <q-item-section class="text-center text-gray">No List</q-item-section>
        </q-item>

        </q-list>
    </q-page>
</template>

<script setup>
import {ref} from 'vue';
const todoList = ref([
    {id: 1, title: 'Frontend Class', done: false,
        dueDate: '2026-09-07', category: 'Education', priority: 'high'},
    {id: 2, title: 'Shopping', done: true,
        dueDate: '2026-08-20', category: 'Shopping', priority: 'low'},
    {id: 3, title: 'Excercise', done: false,
        dueDate: '2026-09-01', category: 'Health', priority: 'medium'},
])

// ฟังชันก์สีของ q-badge
const getPriorityColor = (priority) => {
    const colors = {
        high: 'negative',
        medium: 'warining',
        low: 'positive'
    }
    return colors[priority] || 'gray'
}

// ฟังชันก์รับค่าเมื่อกดคลิก Avatar
const toggleTodo = (id) => {
    const index = todoList.value.findIndex(todo => todo.id === id)
    // ตรวจว่าไม่ใช่ค่า -1
    if(index !== -1){
        todoList.value[index].done = !todoList.value[index].done
    }
}
</script>

<style scoped>
    .text-strikethrough { text-decoration: line-through; }
</style>