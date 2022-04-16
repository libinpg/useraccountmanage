<template>
  <v-app>
    <NavBar />
    <v-main class = "mx-4">
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import NavBar from "@/components/NavBar.vue"

export default {
  name: 'App',
  components: {NavBar},
  data: () => ({
    //
  }),
};
</script>
