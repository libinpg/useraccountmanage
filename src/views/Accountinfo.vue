<template>
    <v-app>
      <AccountNavbar />
      <v-main class="mx-4 px-0">
          <router-view/>
      </v-main>
    </v-app>
   
</template>

<style>

</style>

<script>
 import AccountNavbar from "../components/AccountNavbar"

 export default {
    components: {AccountNavbar}
 }
</script>
