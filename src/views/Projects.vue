<template>
  <div>
    <v-layout class="mb-3">
      <!-- <v-tooltip top>
         <template v-slot:activator="{ on, attrs }">
         <v-btn small flat @click="sortBy('createtime')" 
          color="grey lighten-1"
          dark
          v-bind="attrs"
          v-on="on"
         >
          <v-icon left small>mdi-folder</v-icon>
          <span class="caption text-lowercase">按创建时间排序</span>
         </v-btn>
         </template>
        <span>按创建时间排序</span>
      </v-tooltip>

      <v-tooltip top>
         <template v-slot:activator="{ on, attrs }">
         <v-btn small flat @click="sortBy('finishtime')" 
          color="grey lighten-1"
          dark
          v-bind="attrs"
          v-on="on"
         >
          <v-icon left small>mdi-person</v-icon>
          <span class="caption text-lowercase">按完成时间排序</span>
         </v-btn>
         </template>
        <span>按完成时间排序</span>
      </v-tooltip> -->
      </v-layout>
       <v-row>
        <v-col cols = "1">
          <div class="caption grey--text">任务序号</div>
        </v-col>
        <v-col>
          <div class="caption grey--text">提取类型</div>
        </v-col>
        <v-col>
          <div class="caption grey--text">创建日期</div>
        </v-col>
        <v-col>
          <div class="caption grey--text">完成日期</div>
        </v-col>
        <v-col>
          <div class="caption grey--text">任务状态</div>
        </v-col>
       </v-row>
       <v-divider>
      </v-divider>
      <v-card flat class="mt-5" v-for="project in projects" :key="project.title"> 
      <!-- <v-layout  row :class="`project ${project.status}`" align-content-space-between=1>
        <v-flex xs12 md1 >
          <div>{{project.id}}</div>
        </v-flex>
        <v-flex xs12 md2>
          <div>{{project.extractiontype}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div>{{project.createtime}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div>{{project.finishtime}}</div>
        </v-flex>
        <v-flex xs2 sm4 md2>
          <div>{{project.status}}</div>
          <div :class="`$(project.status) white--text my-2 caption`">任务状态</div>
        </v-flex>
      </v-layout> -->
      <v-row  :class="`project ${project.status}`">
        <v-col cols = "1" class="projectcol">
          <div>{{project.id}}</div>
        </v-col>
        <v-col class="projectcol">
          <div>{{project.extractiontype}}</div>
        </v-col>
        <v-col class="projectcol">
          <div>{{project.createtime}}</div>
        </v-col>
        <v-col class="projectcol">
          <div>{{project.finishtime}}</div>
        </v-col>
        <v-col class="projectcol">
          <div>{{project.status}}</div>
          <div :class="`$(project.status) white--text my-2 caption`">任务状态</div>
        </v-col>
      </v-row>
      <v-divider>
      </v-divider>
      </v-card>
      <div class="text-center">
        <v-pagination
          class="pagination"
          v-model="page"
          :length="6"
      ></v-pagination>
      </div>
  </div>
</template>

<style>
.project.数据预处理 {
  border-right:4px solid tomato;
}
.project.模型训练 {
  border-right:4px solid orange;
}
.project.模型测试 {
  border-right:4px solid blue;
}
.project.生成数据 {
  border-right:4px solid green;
}

.project.数据预处理 .projectcol{
  height: 30px;
}
.project.模型训练 .projectcol{
  height: 30px;
}
.project.模型测试 .projectcol{
  height: 30px;
}
.project.生成数据 .projectcol{
  height: 30px;
}
.text-center {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
  export default {
    name: 'projects',
    components: {
    },
    data() {
      return {
      //   projects: [
      //   { title: '道路', createtime: '1st Jan 2019', finishtime: '1st Jan 2019', status: '数据预处理', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: '水体', createtime: '10th Jan 2019', finishtime: '10th Jan 2019', status: '模型训练', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: '建筑', createtime: '20th Dec 2018', finishtime: '20th Dec 2018', status: '模型测试', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: '植被', createtime: '20th Oct 2018', finishtime: '20th Oct 2018', status: '生成数据', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      // ]
      page: 1,
      projects: []
      }
    },
    created() {
      this.$http.get('/api/home/gettasks',{}).then((response) => {
                console.log(response);
                this.projects = response.data
      });
    },
    methods: {
      sortBy(prop) {
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1:1)
      }
    }
  }
</script>
