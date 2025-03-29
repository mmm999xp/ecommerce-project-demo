<script setup>
import { ref } from 'vue'
const images = [
  import.meta.env.BASE_URL + 'image-product-1.jpg',
  import.meta.env.BASE_URL + 'image-product-2.jpg',
  import.meta.env.BASE_URL + 'image-product-3.jpg',
  import.meta.env.BASE_URL + 'image-product-4.jpg'
]
const currentIndex = ref(0)

function imageControl (action) {
  if (action === 'next') {
    currentIndex.value = (currentIndex.value + 1) % images.length
  } else if (action === 'previous') {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  }
}
</script>

<template>
  <div class="product-image-group">

    <div class="image-control-group previous-group">
      <div class="image-control " @click="imageControl('previous')">
        <img src="/icon-previous.svg" alt="切換上一張">
      </div>
    </div>

    <div class="product-image-wrapper">
      <img :src="images[currentIndex]" alt="產品圖片" class="product-image">
    </div>

    <div class="image-control-group next-group">
      <div class="image-control " @click="imageControl('next')">
        <img src="/icon-next.svg" alt="切換下一張圖片">
      </div>
    </div>

  </div>
</template>

<style scoped>
.product-image {
  height: 300px;
  width: 100%;
  object-fit: cover;
}
.product-image-group {
  display: flex;
  position: relative;

}
.image-control {
  height: 50px;
  width: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
}
.image-control-group {
  height: 100%;
  width: 50px;
  position: absolute;
  display: flex;
  align-items: center;
}
.previous-group {
  left: 12px;
}
.next-group {
  right: 12px;
}
.product-image-wrapper {
  flex-grow: 1;
}
</style>
