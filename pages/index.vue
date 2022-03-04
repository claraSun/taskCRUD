<template>
<div>
  <h1>task</h1>
  <el-button type="primary" icon="el-icon-plus" @click="addTodo">add</el-button>

  <div class="single-block" v-for="(i,id) in todos" :key="id" @click="gotoEdit(i.id)">
    <el-steps :active="i.status" finish-status="success" simple style="margin-top: 20px">
      <el-step :title="i.name || '輸入Task 名稱'" icon="el-icon-upload"></el-step>
      <el-step :title="i.img !== null? 'done': '請上傳圖片'" icon="el-icon-picture"></el-step>
      <el-step :title="i.info || '填寫Task 敘述'" icon="el-icon-edit"></el-step>
      <el-step :title="i.status === 4 ? '完成' : '未完成'" icon="el-icon-edit"></el-step>
    </el-steps>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  // name: 'IndexPage',
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo() {
      this.$router.push({path:`/${Date.now()}`, query: {isNew: true}})
    },
    gotoEdit(id) {
      console.log(id)
      this.$router.push(`/${id}`)
    }
  }
}
</script>
