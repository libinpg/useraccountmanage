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
      <v-btn v-for="link in links" :key=link.text router :to="link.route">
        <span>{{link.text}}</span>
        <v-icon>{{link.icon}}</v-icon>
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
        links: [
                {icon : 'mdi-badge-account-horizontal',text : '更改用户名', route: '/updateusername'},
                {icon : 'mdi-email',text : '更改邮箱', route: '/updateemail'},
                {icon : 'mdi-lock',text : '更改密码', route: '/updatepassword'},
                {icon : 'mdi-wechat',text : '绑定微信', route: '/updatewechat'}
               ]
      }
    },
  }
</script>