<template>
<div>
        <!-- <v-row>
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
        </v-row> -->
        
        <!-- <v-row>
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
        </v-row> -->

        <v-row class="mt-16">
             <v-col cols="3" align="right">
                <v-spacer></v-spacer>
                <v-chip
                color="indigo"
                text-color="white"
                label
                >
                  输入新的用户名
                </v-chip>
             </v-col>

             <v-col cols="7">
                <v-text-field v-model="newusername">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
        <v-col cols="9">
           <!-- v-btn可以使用loading属性 -->
           <v-btn 
           block 
           color="primary" 
           :loading="loading"
           :disabled="loading"
           @click="test()">
               确认更改
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
           //username从cookie中读取
           username: 'aaa',
           newusername: '',
           loader: null,
           loading: false,
           loading2: false,
           loading3: false,
           loading4: false,
           loading5: false,
          }
     },
     watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
     methods: {
      test() {
        this.loader = 'loading'
        this.$http.post('/api/home/updatename',"newusername="+this.newusername+"&"+"username="+this.username).then((response) => {
                console.log(response);
        });
      }
    }
}
</script>