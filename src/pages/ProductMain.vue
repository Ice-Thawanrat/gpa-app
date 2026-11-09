<template>
  <div>
    <ProductCard v-for="p in products" :key="p.id" :product="p" @add-to-cart="handleAddtoCart">
      <template #card-header>Product No. {{ p.id }}</template>
    </ProductCard>
  </div>
</template>
<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'ProductA', price: 100, image: '/images/My-Melody.jpg' },
  { id: 2, name: 'ProductB', price: 200, image: '/images/My-Melody.jpg' },
  { id: 3, name: 'ProductC', price: 300, image: '/images/My-Melody.jpg' },
])
const handleAddtoCart = (product) => {
  console.log('Add: ', product.name, product.price, 'Bath')
}
</script>
