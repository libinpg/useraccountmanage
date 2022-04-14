  // map processbar(遥感数据处理状态显示,精度分级(遥感分类精度级别 losscode)) 深入简洁 三部分 订单
  //绑定toolbar和路由组件 
  <template>
    <nav>
      <v-toolbar app flat class="grey lighten-3">
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase text--grey">
          <span class="font-weight-light">
            用户管理页面
          </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
          >
            菜单
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="method" v-for="link in links" :key = link.route router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
        <v-btn color="white" class="ml-3">
            <span>注销</span>
            <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-toolbar>
      
      <v-main>
        <v-navigation-drawer app v-model="drawer" class="blue lighten-1">
        <v-toolbar app flat class="blue lighten-1">
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light text--white">
            用户管理页面
          </span>
        </v-toolbar-title>
        </v-toolbar>
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-avatar size="100">
              <img src="/avatar-1.png" alt="">
            </v-avatar>  
            <p class="white--text subheading mt-1">username</p>
          </v-flex>
        </v-layout>

        <v-list>
           <v-list-item v-for="link in links" :key=link.text router :to="link.route" link>
            <v-list-item-action>
                <v-icon>{{link.icon}}</v-icon>    
            </v-list-item-action>   
            <v-list-item-content> 
              <v-list-item-title class="white--text">
                {{link.text}} 
              </v-list-item-title>    
            </v-list-item-content>
        </v-list-item>    
       </v-list>
      </v-navigation-drawer>
      </v-main>
      
    </nav>
  </template>

  <style>
  .custom_overlay {
    position: fixed;
    height: 100vh;
    width: 100%;
    background: rgba(50,50,50,0.5);
    z-index:2;
  }
  </style>

  <script>
      import Popups from './Popups.vue'
      export default {
        data() {
            return {
                drawer: false,
                links: [
                {icon : 'mdi-view-dashboard-edit-outline',text : '账号信息', route: '/accountinfo'},
                {icon : 'mdi-database-search',text : '订单管理', route: '/order'},
                {icon : 'mdi-database-search',text : '进度跟踪', route: '/progresstrack'},
                {icon : 'mdi-message-alert',text : '用户反馈', route: '/projects'},
                {icon : 'mdi-database-search',text : '数据检索', route: '/'},
                {icon : 'mdi-archive-plus-outline',text : '数据入库', route: '/'},
                {icon : 'mdi-export',text : '数据导出', route: '/'},
                {icon : 'mdi-ab-testing',text : '系统性能测试', route: '/'},
                ]
            }
        },
        components: {Popups}  
      }
  </script>