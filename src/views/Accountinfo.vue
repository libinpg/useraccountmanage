<template>
    <v-card
    width="98%"
    height="89.4%"
    class="mx-auto mt-5 mr-0 mb-0"
    >
    <!-- <v-layout row wrap justify-space-around>
        <v-spacer></v-spacer>
        <v-flex xs=4 md=3>
            <v-btn>aaa</v-btn>
        </v-flex>
        <v-spacer></v-spacer>
    </v-layout> -->
    <v-row justify="center" class="pt-16">
        <v-col cols="2">
            <v-chip
            label
            x-large
            >
            账号密码修改
            </v-chip>
        </v-col>
    </v-row>
    <v-row justify="center">
    <v-col cols="2">
      <v-chip
      label
      x-large
      >
      输入新的密码
    </v-chip>
        </v-col>
        <v-col cols="8">
             <v-text-field
            v-model="userpassword"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="至少有8个字符"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col cols="2" >
            <v-chip
            label
            x-large
            >
            再次确认密码
            </v-chip>
        </v-col>

        <v-col cols="8">
            <v-text-field
            v-model="userpassword"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="至少有8个字符"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col cols="10">
           <v-btn block color="primary" @click="test()">
               下一步
           </v-btn>
        </v-col>
    </v-row>
  </v-card>
</template>

<style>

</style>

<script>
 export default {
    data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || '最少有8个字符',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
        username: 'root',
        userpassword: ''
      }
    },
    methods: {
      test() {

        this.$http.post('/api/home/updateuserpassword',"userpassword="+this.userpassword+"&"+"username="+this.username).then((response) => {
                console.log(response);
        });
        this.$http.get('/api/home/getlist',{}).then((response) => {
                console.log(response);
      });
      }
    }
 }
</script>
