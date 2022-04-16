<template>
  <div>
    <Tabbar>
      <Tabbaritem path="/home">
        <img slot = "item-icon" src="~assets/img/tabbar/home.svg" alt="首页">
        <img slot = "item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="首页">
        <div slot = "item-name">首页</div>
      </Tabbaritem>
      <Tabbaritem path="/category">
        <img slot = "item-icon" src="~assets/img/tabbar/category.svg" alt="分类">
        <img slot = "item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="分类">
        <div slot = "item-name">分类</div>
      </Tabbaritem>
      <Tabbaritem path="/cart">
        <img slot = "item-icon" src="~assets/img/tabbar/shopcart.svg" alt="购物车">
        <img slot = "item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="购物车">
        <div slot = "item-name">购物车</div>
      </Tabbaritem>
      <Tabbaritem path="/profile">
        <img slot = "item-icon" src="~assets/img/tabbar/profile.svg" alt="我的">
        <img slot = "item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="我的">
        <div slot = "item-name">我的</div>
      </Tabbaritem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "../tabbar/tabbar";

import Tabbaritem from "../tabbar/tabbarItem"

export default {
  name: "MainTabBar",
  components: {
    Tabbar,
    Tabbaritem
  }
}
</script>

<style scoped>

</style>
