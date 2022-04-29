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
        <!-- <v-layout column align-center>
          <v-flex class="mt-1" md1>
            <v-avatar size="40">
              <img src="/avatar-1.png" alt="">
            </v-avatar>  
            <p class="black--text subheading mt-1 mr-0">root</p>
          </v-flex>
        </v-layout> -->
        <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="mr-3"
          >
            <div @click = "changeArrow()">
              <span>菜单</span>
            <v-icon>{{arrowicon}}</v-icon>
            </div>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="method" v-for="link in links" :key = link.route router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn class="mr-3" icon >
            <v-avatar size="40">
              <img src="/account-circle-outline.png" alt="">
            </v-avatar>
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
                arrowicon : "mdi-menu-right",
                drawer: false,
                links: [
                {icon : 'mdi-account',text : '账号管理', route: '/accountinfo'},
                {icon : 'mdi-calendar-check',text : '任务管理', route: '/projects'},
                {icon : 'mdi-database-plus-outline',text : '数据入库', route: '/adddata'},
                {icon : 'mdi-database-search',text : '进度跟踪', route: '/progresstrack'},
                {icon : 'mdi-message-alert',text : '用户反馈', route: '/feedback'},
                {icon : 'mdi-export',text : '数据导出', route: '/'},
                {icon : 'mdi-ab-testing',text : '系统性能测试', route: '/'},
                ]
            }
        },
        components: {Popups},
        methods: {
          changeArrow() {
            if (this.arrowicon == "mdi-menu-right") {
              this.arrowicon = "mdi-menu-down";
            }
            else if (this.arrowicon == "mdi-menu-down") {
              this.arrowicon = "mdi-menu-right";
            }
          }
        }
      }
  </script>