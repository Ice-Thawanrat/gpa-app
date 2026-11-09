<template>
  <q-page padding>
    <!-- สร้างแบบฟอร์มให้ผู้ใช้กรอก -->
    <!-- @reset="onReset" คือ ถ้ากดรีเซ็ตจะกลับไปเป็นค่าเดิม = ไม่มีอะไรเกิดขึ้น -->
    <!-- @submit.prevent="onSubmit"คือ จะเรียกใช้ตามคำสั่งของฟังชั่นด้านล่าง ดูรีแอ็คได้ที่ console หน้าเว็บ -->
    <form @reset="onReset" @submit.prevent="onSubmit">
      <div class="q-gutter-md">
        <q-input type="text" label="Your username" v-model="username"></q-input>
        <q-input
          type="email"
          label="Your email"
          v-model="email"
          @keyup.alt.enter="onReset"
        ></q-input>
        <!--  @keyup = ตรวจสอบว่าผุ้ใช้กดปุ่มอะไรในแป้นพิมพ์ -->
        <q-select v-model="role" :options="roleOptions">Role</q-select>
        <q-btn color="primary" type="submit" label="submit" />
        <q-btn color="grey" type="reset" label="reset" />
      </div>
    </form>
    <!-- การใช้ แทค ul เรียกใช้ Array -->
    <!-- <ul> -->
    <!-- <li v-for="item in items" :key="item.id">{{ item.name }} - {{ item.price }} Bath</li> -->
    <!-- index=ลำดับข้อที่เรียงข้างหน้า -->
    <!-- <li v-for="(item, index) in items" :key="index">
        {{ index + 1 }}. {{ item.name }} - {{ item.price }} Bath
      </li>
    </ul> -->

    <!-- เรื่อง if,else -->
    <!-- <div v-if="isLogged">Welcome</div>
    <div v-else>Please Login</div> -->

    <!-- กำหนดเกณฑ์คะแนน ผ่าน,ไม่ผ่าน -->
    <!-- <div v-if="score >= 80">Excellent</div>
    <div v-else-if="score >= 50">Pass</div>
    <div v-else>Fail</div>
    <div v-show="isVisible">Show or hide</div> -->

    <!-- กำหนดว่าถ้าคลิกหน้าเว็บจะขึ้น ถ้าคลิกอีกทีข้อความจะหาย -->
    <!-- <q-btn color="primary" :label="isVisible ? 'Hide' : 'Show'" @click="isVisible = !isVisible" /> -->

    <!-- สิ่งที่แสดงผลหน้าเว็บ -->
    <!-- toUppperCase =พิมพ์ใหญ่ -->
    <!-- <div>{{ msg.toUpperCase() }}</div>
    <div>{{ isActive ? 'Open' : 'Close' }}</div>
    <div>{{ 6 + 7 }}</div> -->
    <!-- <img :src="url" /> -->
    <!-- <q-btn :color="my_color" icon="check" label="OK" /> -->
    <!-- เก่า -->
    <!-- <div class="row item-center">
    <div class="col-xs-12 col-md-6">
      <h1>Welcome</h1>
    </div>
    <div class="col-xs-12 col-md-6">
      <img src="https://picsum.photos/500/300" alt="">
    </div>
    <div class="col-xs-12 col-md-6" offset-xs-3>
      <h4>Offset</h4>
    </div>
    <div>
      <q-btn color="primary" icon="home" label="MyBTN" class="q-ma-xl" />
    </div>
    <div class="text-subtitle1 text-italic text-pink">Vue.js</div>
  </div> -->
  </q-page>
</template>

//อาจารย์สอน
<script setup>
// import { ref } from 'vue'
// const msg = ref(676767)
// console.log(msg.value)

import { ref } from 'vue'
const username = ref('')
const email = ref('')
// role = ดูว่าผุ้ใช้เลือกอะไรใน Array
const role = ref(null)
const roleOptions = ['Student', 'Teacher', 'Staff']

//เอาไว้กำหนดฟังชัน reset
const onReset = () => {
  username.value = ''
  email.value = ''
  role.value = null
}
//เอาไว้กำหนดฟังชัน submit
const onSubmit = () => {
  //ถ้าผุ้ใช้ไม่ใส่ค่า
  if (!username.value || !email.value) {
    alert('username or Email is empty')
    return
  }
  //ถ้าผุ้ใช้ใส่ค่าครบ
  console.log('Form was Submitted: ', {
    username: username.value,
    email: email.value,
    role: role.value,
  })
  alert('Data save')
}

// Array ตัวที่เก็บไว้เรียกใช้
// const items = ref([
//   { id: 1, name: 'ProductA', price: 100 },
//   { id: 2, name: 'ProductB', price: 200 },
// ])

// เอาไว้ใช้ตรวจสอบว่าจะแสดงผลรึไม่
// const isVisible = ref(true)

// การล้อกอิน
// const isLogged = ref(true)

// กำหนดคะแนน
// const score = ref(80)

// import { useMeta } from 'quasar'
// useMeta({ title: 'หน้าหลัก' }) ตรงนี้สามารถเปลี่ยนชื่อแท็บเว็บได้
// const my_color = ref('yellow')
// const url = ref('/images/My-Melody.jpg')
// const msg = ref('Hello')
// const isActive = ref(true)

//Array
// const items = ref(['Apple', 'Banana', 1100, 25.5])
// items.value.push(67)
// console.log(items.value)
// //object
// const product = ref({
//   id: 1,
//   name: 'Notebook',
//   price: 15000,
// })
// console.log(product.value)
// //reactive
// const user = reactive({ name: 'Jack', age: 20 })
// console.log(user.name, user.age)
// const { name, age } = toRefs(user)
// console.log(name.value, age.value)
</script>
