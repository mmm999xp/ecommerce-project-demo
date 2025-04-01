<script setup>
import { ref, computed } from 'vue'
const isLightboxOpen = ref(false)
const images = [
  {
    large: import.meta.env.BASE_URL + '/image-product-1.jpg',
    thumbnail: import.meta.env.BASE_URL + '/image-product-1-thumbnail.jpg',
    alt: '商品實拍1'
  },
  {
    large: import.meta.env.BASE_URL + '/image-product-2.jpg',
    thumbnail: import.meta.env.BASE_URL + '/image-product-2-thumbnail.jpg',
    alt: '商品實拍2'
  },
  {
    large: import.meta.env.BASE_URL + '/image-product-3.jpg',
    thumbnail: import.meta.env.BASE_URL + '/image-product-3-thumbnail.jpg',
    alt: '商品實拍3'
  },
  {
    large: import.meta.env.BASE_URL + '/image-product-4.jpg',
    thumbnail: import.meta.env.BASE_URL + '/image-product-4-thumbnail.jpg',
    alt: '商品實拍4'
  }
]

const selectedImageIndex = ref(0)

//  計算當前選中的大圖資料
const selectedImage = computed(() => images[selectedImageIndex.value])
const openLightbox = () => {
  isLightboxOpen.value = true
}

const closeLightbox = () => {
  isLightboxOpen.value = false
}
</script>

<template>
  <div class="image-group">
    <!-- 顯示選中的大圖 -->
    <div class="image-large">
      <img :src="selectedImage.large" :alt="selectedImage.alt" class="image"  @click="openLightbox()">
    </div>

    <!-- 縮圖群組 -->
    <div class="image-thumbnail-group">
      <div
        v-for="(item, index) in images"
        :key="index"
        class="image-thumbnail"
        :class="{ selected: selectedImageIndex === index }"
        @click="selectedImageIndex = index"
      >
        <img :src="item.thumbnail" :alt="item.alt">
      </div>
    </div>
  </div>

  <!-- Lightbox -->
<div v-if="isLightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
  <button class="close-btn" @click="closeLightbox">✕</button>

  <div class="lightbox-content">
    <!-- 大圖片顯示 -->
    <div class="lightbox-image-group">
      <div class="image-control-group previous-group">
        <div class="image-control " @click.stop="selectedImageIndex = (selectedImageIndex - 1 + images.length) % images.length">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </div>
      </div>

      <div class="product-image-wrapper">
        <img :src="selectedImage.large" alt="產品圖片" class="lightbox-product-image">
      </div>

      <div class="image-control-group next-group">
        <div class="image-control " @click.stop="selectedImageIndex = (selectedImageIndex + 1) % images.length">
          <svg  width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentColor" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </div>
      </div>

    </div>
    <!-- 縮圖顯示 -->
    <div class="image-thumbnail-group">
      <div
        v-for="(item, index) in images"
        :key="index"
        class="image-thumbnail"
        :class="{ selected: selectedImageIndex === index }"
        @click="selectedImageIndex = index"
      >
        <img :src="item.thumbnail" :alt="item.alt">
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.image-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image-large {
  margin: 32px;
}
.image {
  height: 450px;
  width: 450px;
  border-radius: 15px;
}
.image-thumbnail-group {
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.image-thumbnail {
  height: 90px;
  width: 90px;
  user-select: none;
  cursor: pointer;
}
.image-thumbnail > img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
}
.selected {
  border: 3px solid hsl(26, 100%, 55%);
  border-radius: 10px;
}
.selected > img {
  opacity: 0.25;
}
/* lightbox */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.lightbox-image-group {
  display: flex;
  position: relative;
}
.lightbox-product-image {
  width: 450px;
  height: 450px;
  border-radius: 10px;
  user-select: none;
}
.image-control-group {
  height: 100%;
  width: 50px;
  position: absolute;
  display: flex;
  align-items: center;
}
.image-control {
  height: 50px;
  width: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover svg {
  color: #FF7E1B;
}
}

.previous-group {
  left: -24px;
}
.next-group {
  right: -24px;
}
.close-btn {
  position: absolute;
  top: 32px;
  right: 32px;
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
