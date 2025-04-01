<script setup>
import { useWindowSize } from '@vueuse/core'
import HeaderDesktop from '@/components/Header-Desktop.vue'
import HeaderMobile from '@/components/Header-Mobile.vue'
import ProductImageMobile from '@/components/Product-image-Mobile.vue'
import ProductDescriptionMobile from '@/components/Product-description-Mobile.vue'
import ProductBuyMobile from '@/components/Product-buy-Mobile.vue'
import ProductImageDesktop from '@/components/Product-image-Desktop.vue'
import ProductDescriptionDesktop from '@/components/Product-description-Desktop.vue'
import ProductBuyDesktop from '@/components/Product-buy-Desktop.vue'
const { width } = useWindowSize()

</script>

<template>
  <!-- 電腦版 -->
  <div class="container" v-if="width > 575">
    <header>
      <HeaderDesktop/>
    </header>
    <main>
      <el-row justify="space-evenly">
        <el-col :span="10">
          <div>
            <ProductImageDesktop />
          </div>
        </el-col>
        <el-col :span="10">
          <div>
            <ProductDescriptionDesktop />
            <ProductBuyDesktop />
          </div>
        </el-col>
      </el-row>
    </main>
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
.el-row {
  width: 80%;
  margin: 24px auto;
}
.grid-content {
  border: 3px peru solid;
  min-height: 600px;
}
</style>
