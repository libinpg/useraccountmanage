<template>
  <div>
    <v-layout class="mb-3">
      <v-tooltip top>
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
      </v-tooltip>
      </v-layout>
    <v-card flat v-for="project in projects" :key="project.title" class="mt-5"> 
      <v-layout row wrap :class="`pa-3 project ${project.status}`">
        <v-flex xs12 md1>
          <div class="caption grey--text">任务序号</div>
          <div>{{project.id}}</div>
        </v-flex>
        <v-flex xs12 md5>
          <div class="caption grey--text">提取类型</div>
          <div>{{project.extractiontype}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">创建日期</div>
          <div>{{project.createtime}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">完成日期</div>
          <div>{{project.finishtime}}</div>
        </v-flex>
        <v-flex xs2 sm4 md2>
          <div :class="`$(project.status) white--text my-2 caption`">任务状态</div>
          <div>{{project.status}}</div>
        </v-flex>
      </v-layout>
    </v-card>
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
