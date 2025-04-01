<script setup></script>

<template>
  <div class="description">
    <p class="company-text">{{ $t('company')}}</p>
    <h2 class="product-name">{{ $t('product_name')}}</h2>
    <p class="product-description">{{ $t('product_description')}}</p>
  </div>
</template>

<style scoped>
.description {
  width: 100%;
  margin:  100px auto 0 auto;
}
.company-text {
  color: hsl(219, 9%, 45%);
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: 700;
}
.product-name {
  margin: 0;
  height: 150px;
  font-size: 44px;
}
.product-description {
  color: hsl(219, 9%, 45%);
  margin: 20px 0;
  line-height: 1.6;
  height: 130px;
  font-size: 16px;
}
</style>
