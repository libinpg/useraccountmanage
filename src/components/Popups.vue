<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="blue darken-1"
          v-bind="attrs"
          v-on="on"
          dark
        >
         新增订单
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
        <h2>新增订单</h2>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
            <v-btn flat class="sucess mx-0 mt-3" @click="submit">确认下单</v-btn>
          </v-form>
        </v-card-text>
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>

</style>     

<script>
export default {
    name: "popups",
    data() {
        return {
            dialog: false,
            title: "",
            content: "",
        }
    },
    methods: { 
      submit() {
        console.log(this.title, this.content);
      }
    }
} 
</script>