<script setup>
import { useWindowSize } from '@vueuse/core'
import HeaderDesktop from '@/components/Header-Desktop.vue'
import HeaderMobile from '@/components/Header-Mobile.vue'
import ProductImageMobile from '@/components/Product-image-Mobile.vue'
import ProductDescriptionMobile from '@/components/Product-description-Mobile.vue'
import ProductBuyMobile from '@/components/Product-buy-Mobile.vue'
const { width } = useWindowSize()

</script>

<template>
  <!-- 電腦版 -->
  <div class="container" v-if="width > 575">
    <header>
      <HeaderDesktop/>
    </header>
  </div>

  <!-- 手機版 -->
  <div class="container" v-else>
    <header>
      <HeaderMobile/>
    </header>
    <main>
      <ProductImageMobile/>
      <ProductDescriptionMobile/>
      <ProductBuyMobile/>
    </main>
  </div>
</template>

<style scoped>
</style>
