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
  width: 85%;
  margin:  0 auto;
}
.company-text {
  color: hsl(219, 9%, 45%);
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 700;
}
.product-name {
  margin: 0;
  height: 60px;
}
.product-description {
  color: hsl(219, 9%, 45%);
  margin: 20px 0;
  line-height: 1.6;
  height: 130px;
}
</style>
