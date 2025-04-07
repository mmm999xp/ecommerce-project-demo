<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CartPlugins from '@/components/Cart-Plugins.vue'
const { locale } = useI18n()
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
    <img src="/logo.svg" alt="sneakers" class="logo">
    <div class="menu">
      <div class="menu-item" v-for="item in menu" :key="item.id" @click="item.onClick(item.title)">
        {{ $t(item.title) }}
      </div>
    </div>
    <div class="personal">
      <el-badge :value="cartItem?.count || 0"  color="#FF7E1B" >
        <img src="/icon-cart.svg" alt="購物車" class="icon-cart" @click="cartSwitch">
      </el-badge>
      <img src="/image-avatar.png" alt="人物" height="50" width="50" class="avatar">
      <CartPlugins v-if="openCart" device="desktop"/>
    </div>
  </div>
</template>

<style scoped>
.header-group {
  height: 120px;
  width: 80%;
  margin: 0 auto;
  border-bottom: 2px rgb(233, 233, 233) solid;
  display: flex;
  align-items: center;
}
.logo {
  height: 20px;
  width: 140px;
}
.menu{
  display: flex;
  margin-left: 40px;
  height: 100%;
}
.menu-item {
  margin: 0 20px;
  color: hsl(219, 9%, 45%);
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    border-bottom: hsl(26, 100%, 55%) 3px solid;
  }
}
.personal {
  height: 100%;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
}
.icon-cart {
  height:22px;
  width: 22px;
  cursor: pointer;
}
.avatar {
  height:50px;
  width: 50px;
  cursor: pointer;
  &:hover {
    border: hsl(26, 100%, 55%) 2px solid;
    border-radius: 50%;
  }
}

.el-card {
  position: absolute;
  top: 90px;
  right:120px;
  width: 350px;
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
</style>
