<template>
  <div>
    {{ $t('products') }}
  </div>
</template>
<script setup>
import { getProducts } from '@/apis/products'

const productsList = ref({})
async function fetchProducts () {
  try {
    const { data } = await getProducts(1, 10)
    productsList.value = data.value.data
  } catch (error) {
    console.log(error)
  }
}
fetchProducts()
</script>
