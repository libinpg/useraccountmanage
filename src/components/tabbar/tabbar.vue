<template>
<div>
  <div id = "tab-bar">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "tabbar",
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 49px;
  background-color: #f2f2f2;
  position: fixed;
  box-shadow: 0px -1px 1px rgba(100,100,100,.2);
}
</style>
