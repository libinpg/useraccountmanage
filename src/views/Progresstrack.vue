<template>
  <div>
    <h1>进度跟踪</h1>
    <v-container class="subheading grey--text my-5">
      <v-layout row wrap class="mt-16">
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key=person.name>
          <v-card flat class="text-center">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <!-- <div class="grey--text">{{ person.role }}</div> -->
            </v-card-text>
            <v-card-action>
              <v-chip>
                <!-- <v-icon small left>mdi-message</v-icon> -->
                <span>{{person.role}}</span>
              </v-chip>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>     
    </v-container>
  </div>
</template>

<style>

</style>

<script>
export default {
    name: 'progresstrack',
    components: {
    },
    data() {
      return {
      team: [
        { name: '数据预处理', role: '已完成', avatar: '/loadingfreebie_active.png' },
        { name: '模型训练', role: '已完成', avatar: '/loadingfreebie_active.png' },
        { name: '模型测试', role: '正在进行', avatar: '/loadingfreebie.png' },
        { name: '生成数据', role: '正在进行', avatar: '/loadingfreebie.png' },
      ]
      }
    }
  }
</script>