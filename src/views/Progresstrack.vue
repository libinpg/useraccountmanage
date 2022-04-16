<template>
  <div>
    <v-container id="dropdown-example">
    <v-row>
      <v-col cols="12" sm="4">
        <h1>进度跟踪</h1>
        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          label="输入您的订单序号"
          editable
          item-value="text"
          v-model="currentIndex"
          @change="change()"
          prefix="订单id:"
        ></v-overflow-btn>
      </v-col>
    </v-row>
  </v-container>
    <v-container class="subheading grey--text my-5">
      <!-- 数据预处理 -->
      <v-layout row wrap class="mt-16">
        <v-flex xs12 sm6 md4 lg3>
          <v-card flat class="text-center">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img v-if="state['predeal']" src="/loadingfreebie_active.png" alt="">
                <img v-else src="/loadingfreebie.png" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">数据预处理</div>
            </v-card-text>
            <v-card-action>
              <v-chip>
                <span v-if="state['predeal']">已完成</span>
                <span v-else>正在进行</span>
              </v-chip>
            </v-card-action>
          </v-card>
        </v-flex>
        <!-- 模型训练 -->
        <v-flex xs12 sm6 md4 lg3>
          <v-card flat class="text-center">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img v-if="state['modeltrain']" src="/loadingfreebie_active.png" alt="">
                <img v-else src="/loadingfreebie.png" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">模型训练</div>
            </v-card-text>
            <v-card-action>
              <v-chip>
                <span v-if="state['modeltrain']">已完成</span>
                <span v-else>正在进行</span>
              </v-chip>
            </v-card-action>
          </v-card>
        </v-flex>
        <!-- 模型测试 -->
        <v-flex xs12 sm6 md4 lg3>
          <v-card flat class="text-center">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img v-if="state['modeltest']" src="/loadingfreebie_active.png" alt="">
                <img v-else src="/loadingfreebie.png" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">模型测试</div>
            </v-card-text>
            <v-card-action>
              <v-chip>
                <span v-if="state['modeltest']">已完成</span>
                <span v-else>正在进行</span>
              </v-chip>
            </v-card-action>
          </v-card>
        </v-flex>
        <!-- 生成数据 -->
        <v-flex xs12 sm6 md4 lg3>
          <v-card flat class="text-center">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img v-if="state['productdata']" src="/loadingfreebie_active.png" alt="">
                <img v-else src="/loadingfreebie.png" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">生成数据</div>
              <!-- <div class="grey--text">{{ person.role }}</div> -->
            </v-card-text>
            <v-card-action>
              <v-chip>
                <!-- <v-icon small left>mdi-message</v-icon> -->
                 <span v-if="state['productdata']">已完成</span>
                 <span v-else>正在进行</span>
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
      ],
      state: {},
      currentIndex: '1',
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      dropdown_edit: [
        {text:'1'},
        {text:'2'},
        {text:'3'},
        {text:'4'}]
      }
    },
    beofreUpdate() {
      this.$http.get('/api/home/getprogress',{}).then((response) => {
                console.log(response);
                console.log(response.data.length)
                for(let i = 0; i < response.data.length; i++){
                  this.dropdown_edit[i] = {text : i+''}
                }
      })
    },
    mounted () {
      this.$http.post('/api/home/getidprogress','id='+this.currentIndex).then((response) => {
                console.log(response.data[0]);
                this.state = response.data[0]
      });
    },
    methods: {
      change() {
        this.$http.post('/api/home/getidprogress','id='+this.currentIndex).then((response) => {
                console.log(response.data[0]);
                this.state = response.data[0]
        });
      }
    }
  }
</script>