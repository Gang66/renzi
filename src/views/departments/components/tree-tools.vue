<template>
  <el-row
    type="flex"
    justify="space-between"
    align="middle"
    style="height: 40px; width: 100%"
    slot-scope="{ treeNode }"
  >
    <el-col>
      <span>{{ treeNode.name }}</span></el-col
    >
    <el-col :span="4">
      <el-row type="flex" justify="end">
        <el-col>{{ treeNode.message }}</el-col>
        <el-col>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="add">添加子部门</el-dropdown-item>
              <el-dropdown-item command="edit" v-if="isShow"
                >编辑部门</el-dropdown-item
              >
              <el-dropdown-item command="del" v-if="isShow"
                >删除部门</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { delDepartments } from '@/api/departments'
import addpartment from './addpartment.vue'

export default {
  components: {
    addpartment,
  },
  props: {
    treeNode: {
      type: Object,
      require: true,
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    handleCommand(type) {
      if (type === 'add') {
        this.$emit('OpenDialog', this.treeNode)
      } else if (type === 'edit') {
      } else if (type === 'del') {
        this.$confirm('确定要删除该部门吗')
          .then(() => {
            return delDepartments(this.treeNode.id)
          })
          .then(() => {
            this.$emit('delSuccess')
            this.$message.success('删除成功')
          })
      }
    },
  },
}
</script>

<style></style>
