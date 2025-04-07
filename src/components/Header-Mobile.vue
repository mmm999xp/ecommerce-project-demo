<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CartPlugins from '@/components/Cart-Plugins.vue'
const { locale } = useI18n()
const openMenu = ref(false)
const menu = [
  {
    id: 1,
    title: 'Collections',
    onClick: (title) => console.log(title)
  },
  {
    id: 2,
    title: 'Men',
    onClick: (title) => console.log(title)
  },
  {
    id: 3,
    title: 'Women',
    onClick: (title) => console.log(title)
  },
  {
    id: 4,
    title: 'About',
    onClick: (title) => console.log(title)
  },
  {
    id: 5,
    title: 'Contact',
    onClick: (title) => console.log(title)
  },
  {
    id: 6,
    title: 'Language',
    onClick: () => {
      locale.value = locale.value === 'zh-TW' ? 'en' : 'zh-TW'
      localStorage.setItem('Ecommerce_locale', locale.value) // 存到本地，保持選擇
    }
  }
]

const openCart = ref(false)
const cartSwitch = () => {
  openCart.value = !openCart.value
}
const cartItem = ref()
cartItem.value = localStorage.getItem('cart')
cartItem.value = JSON.parse(cartItem.value)
</script>

<template>
  <div class="header-group">
    <div class="menu-icon-group" @click="() => openMenu = true">
      <img src="/icon-menu.svg" alt="menu">
    </div>
    <img src="/logo.svg" alt="sneakers" class="logo">
    <div class="personal">
      <el-badge :value="cartItem?.count || 0"  color="#FF7E1B" >
        <img src="/icon-cart.svg" alt="購物車" class="icon-cart" @click="cartSwitch">
      </el-badge>
      <img src="/image-avatar.png" alt="人物" height="50" width="50" class="avatar">
      <CartPlugins v-if="openCart" device="mobile" />
    </div>
  </div>
  <!-- 抽屜式選單 -->
   <el-drawer
    v-model="openMenu"
    direction="ltr"
    size="60%"
  >
    <div class="menu">
      <div class="menu-item" v-for="item in menu" :key="item.id" @click="item.onClick(item.title)">
        {{ $t(item.title) }}
      </div>
    </div>
  </el-drawer>
</template>

<style scoped>
.header-group {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  /* background-color: brown; */
}
.menu-icon-group{
  height: 100%;
  width: 50px;
  margin-left: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.logo {
  height: 20px;
  width: 140px;
}
.personal {
  height: 100%;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: auto;
}
.menu-item {
  font-weight: 700;
  font-size: 20px;
  margin: 20px 0;
  height: 30px;
}
</style>
