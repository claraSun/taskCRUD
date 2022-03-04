<template>
<div>
    <h1>Task</h1>
 <div>
    <el-form label-width="80px" :model="taskForm">
      <el-form-item label="輸入Task 名稱">
        <el-input v-model.trim="taskForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model.trim="taskForm.img"></el-input>
      </el-form-item>
      <el-form-item label="填寫Task 敘述">
        <el-input v-model.trim="taskForm.info"></el-input>
      </el-form-item>
    </el-form>
  </div>
  <div>
    <el-button type="primary" icon="el-icon-plus" @click="removeTask">刪除</el-button>
    <el-button v-if="!isNew" type="primary" icon="el-icon-plus" @click="updateTask">儲存</el-button>
    <el-button v-if="isNew" type="primary" icon="el-icon-plus" @click="addTask">新增</el-button>
  </div>
    


 

</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
        isNew: false,
        list: '',
        keyId: '',
        taskForm: {
          id: '',
          name: '',
          img: '',
          info: '',
          status: ''
        }
    }
  },
  mounted() {
    this.isNew = this.$route.query.isNew
    this.list = this.$store.state.todos.list
    this.key = this.$route.params.task
    if(!this.isNew) {
      this.findTask()
    }

  },
  methods: {
    addTask() {
      if(this.taskForm.name !== '' && this.taskForm.img == '' && this.taskForm.info == '' ){
        this.taskForm.status = 1
      }
      if(this.taskForm.name !== '' && this.taskForm.img !== '' && this.taskForm.info == '' ){
        this.taskForm.status = 2
      }
      if(this.taskForm.name !== '' && this.taskForm.img !== '' && this.taskForm.info !== '' ){
        this.taskForm.status = 4
      }
      
      this.taskForm.id = this.$route.params.task
      this.$store.commit('todos/add', this.taskForm)
      
    },

    findTask() {
      let item = this.list.filter((item) => {
        return item.id == this.key
      })[0]
      if(item !== 'undefined') {
        this.taskForm = JSON.parse(JSON.stringify(item))
      }
    },

    updateTask() {
      if(this.taskForm.name !== '' && this.taskForm.img == '' && this.taskForm.info == '' ){
        this.taskForm.status = 1
      }
      if(this.taskForm.name !== '' && this.taskForm.img !== '' && this.taskForm.info == '' ){
        this.taskForm.status = 2
      }
      if(this.taskForm.name !== '' && this.taskForm.img !== '' && this.taskForm.info !== '' ){
        this.taskForm.status = 4
      }
      this.$store.commit('todos/update',this.taskForm)
    },
    removeTask() {
      this.$store.commit('todos/remove',this.taskForm)
    }
  }
}
</script>
