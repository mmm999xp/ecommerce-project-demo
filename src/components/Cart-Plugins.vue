<script setup>
import { ref } from 'vue'
const cartItem = ref()
cartItem.value = localStorage.getItem('cart')
cartItem.value = JSON.parse(cartItem.value)
const deleteCart = () => {
  localStorage.removeItem('cart')
  window.location.reload()
}
const props = defineProps({
  device: {
    type: String,
    required: true,
    validator: (value) => {
      return ['desktop', 'mobile'].includes(value)
    }
  }
})
</script>

<template>
       <el-card :class="props.device" >
        <template #header>
          <div class="card-header">
            <h3>{{ $t('cart') }}</h3>
          </div>
        </template>
        <div class="withData"  v-if="!!cartItem">
          <el-row>
            <el-col :span="5">
              <img src="/image-product-1-thumbnail.jpg" alt="產品" class="cart-image">
            </el-col>
            <el-col :span="17">
              <div>{{ $t('product_name') }}</div>
              <div>${{ cartItem.countPrice }} X {{ cartItem.count }} <b>${{ cartItem.price }}</b></div>
            </el-col>
            <el-col :span="2" class="delete" @click="deleteCart">
              <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </el-col>
          </el-row>
          <el-button color="hsl(26, 100%, 55%)" >
              {{ $t('checkout') }}
          </el-button>
        </div>
        <div class="no-data" v-else >{{ $t('noData') }}</div>
      </el-card>
</template>

<style scoped>
.desktop {
  position: absolute;
  top: 90px;
  right:120px;
  width: 350px;
  min-height: 200px;
  z-index: 10;
}
.mobile {
  position: absolute;
  top: 90px;
  right:6px;
  width: 350px;
  min-height: 270px;
  z-index: 10;
}
.cart-image {
  height: 50px;
  width: 50px;
  border-radius: 4px;
}
.delete {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-button {
  width: 100%;
  height: 50px;
  /* font-weight: 700; */
  font-size: 18px;
  font-family: 'Kumbh Sans';
}
</style>
