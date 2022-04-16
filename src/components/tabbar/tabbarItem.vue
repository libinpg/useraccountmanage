<template>
  <div class="tab-bar-item" @click = "btnClick()">
    <div :class="{active:isActive}"><slot name = "item-name"></slot></div>
    <div v-if = "!isActive"><slot name = "item-icon"></slot></div>
    <div v-else><slot name = "item-icon-active"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  props: {
    path: ""
  },
  // data() {
  //   return {
  //     isActive: true
  //   }
  // },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    btnClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

.active {
  color: red;
}
</style>
