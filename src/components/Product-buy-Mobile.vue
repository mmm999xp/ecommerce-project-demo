<script setup>
import { ref } from 'vue'
const cartItem = ref()
cartItem.value = localStorage.getItem('cart')
cartItem.value = JSON.parse(cartItem.value)
const basePrice = ref(250.00)
const discount = ref(0.5)
const count = ref(1)
count.value = cartItem.value?.count || 1
const addToCart = () => {
  const cartItem = {
    count: count.value,
    countPrice: basePrice.value * discount.value,
    price: basePrice.value * discount.value * count.value
  }
  const jsonData = JSON.stringify(cartItem)
  localStorage.setItem('cart', jsonData)
  window.location.reload()
}
</script>

<template>
<div class="price-group">
  <div class="price">
    <div class="price-number">$ {{ (basePrice * count * discount).toFixed(2) }}</div>
    <div class="discount">{{ discount * 100}} %</div>
  </div>
  <del class="base-price">$ {{ (basePrice * count).toFixed(2)}}</del>
</div>
<div class="buy-group">
  <el-input-number v-model="count" :min="1">
    <template #decrease-icon>
      <img src="/icon-minus.svg" alt="minus">
    </template>
    <template #increase-icon>
      <img src="/icon-plus.svg" alt="plus">
    </template>
  </el-input-number>
  <el-button color="hsl(26, 100%, 55%)" @click="addToCart">
    <svg class= "icon-cart" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="hsl(220, 13%, 13%)" fill-rule="nonzero"/></svg>
    {{ $t('addToCart') }}
  </el-button>
</div>
</template>

<style scoped>
.price-group {
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin:  15px auto;
}
.price {
  display: flex;
  /* margin: 20px; */
  align-items: center;
}
.price-number {
  font-size: 28px;
  font-weight: 700;
}
.discount {
  background-color: hsl(0, 0%, 0%);
  color: hsl(0, 0%, 100%);
  height: 26px;
  width: 60px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-left: 12px;
}
.base-price {
  display: flex;
  align-items: center;
  /* margin-left: 50px; */
  font-weight: 700;
  color: hsl(219, 9%, 45%);
}
.buy-group{
  width: 85%;
  margin: 12px auto;
}
.el-input-number{
  width: 100%;
  height: 50px;
  border: none;
}
:deep(.el-input-number__decrease) , :deep(.el-input-number__increase) {
  background-color: rgb(247, 248, 253);
  border: none;
}
:deep(.el-input__wrapper) {
  box-shadow: none;
  background-color: rgb(247, 248, 253);
}
:deep(.el-input__inner) {
  font-weight: 700;
  font-size: 20px;
}
:deep(.el-input) {
  --el-input-focus-border-color: hsl(26, 100%, 55%);
}
.el-button {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  font-weight: 700;
  font-size: 16px;
  color: hsl(220, 13%, 13%);
}
.icon-cart {
  margin-right: 15px;
}
</style>
