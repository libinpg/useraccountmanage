<template>
  <div class="overflow-hidden">
    <div class="mb-2">
      <v-btn
        text
        color="deep-purple"
        @click="showNav = !showNav"
      >
        资料管理
      </v-btn>
    </div>

    <v-bottom-navigation
      v-model="activeBtn"
      :input-value="showNav"
      color="indigo"
    >
      <v-btn router to="/updatebasicinfo">
        <span>基本信息</span>
        <v-icon>mdi-card-account-details</v-icon>
      </v-btn>

      <v-btn router to="/updatepassword">
        <span>安全设置</span>
        <v-icon>mdi-security</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeBtn: 1,
        showNav: true,
      }
    },
  }
</script>