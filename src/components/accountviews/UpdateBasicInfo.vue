<template>
<div>
        <v-row>
            <v-col align="center">
                <v-chip
                color="indigo"
                text-color="white"
                label
                >
                <v-avatar left>
                    <v-icon>mdi-account-circle</v-icon>
                </v-avatar>
                用户名
                </v-chip>
                <v-chip
                label
                class="ma-2"
                color="indigo"
                text-color="white"
                >
                username
                </v-chip>
            </v-col>
        </v-row>
        
        <v-row>
             <v-col cols="3" align="right">
                <v-spacer></v-spacer>
                <v-chip
                color="indigo"
                text-color="white"
                label
                >
                  Last Name(姓)
                </v-chip>
             </v-col>

             <v-col cols="7">
                <v-text-field v-model="lastname">
                </v-text-field>
            </v-col>
        </v-row>

        <v-row>
             <v-col cols="3" align="right">
                <v-spacer></v-spacer>
                <v-chip
                color="indigo"
                text-color="white"
                label
                >
                  First Name(名)
                </v-chip>
             </v-col>

             <v-col cols="7">
                <v-text-field v-model="firstname">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
             <v-col cols=3 align="right">
                <v-chip
                color="indigo"
                text-color="white"
                label
                >
                  Email(邮箱地址)
                </v-chip>
             </v-col>
             <v-col cols=7>
                <v-text-field v-model="email">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
        <v-col cols="9">
           <v-btn block color="primary" @click="test()">
               下一步
           </v-btn>
        </v-col>
    </v-row>
</div>
</template>

<style scoped>

</style>

<script>
export default {
     data() {
         return {
           username: 'username',
           lastname: '',
           firstname: '',
           email: ''
         }
     },
     methods: {
      test() {
        this.$http.post('/api/home/updatebasicinfo',"firstname="+this.firstname+"&"+"lastname="+this.lastname+"&"+"email="+this.email+"&"+"username="+this.username).then((response) => {
                console.log(response);
        });
      }
    }
}
</script>