<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <treeDate :tree-node="company" @OpenDialog="OpenDialog"> </treeDate>
        <el-tree
          :data="departs"
          :props="defaultProps"
          :default-expand-all="true"
        >
          <treeDate
            slot-scope="{ data }"
            :tree-node="data"
            :isShow="true"
            @delSuccess="FindTreeData"
            @OpenDialog="OpenDialog"
          >
          </treeDate>
        </el-tree>
      </el-card>
    </div>
    <addpartment :dialogVisible="dialogVisible" />
  </div>
</template>

<script>
import treeDate from './components/tree-tools.vue'
import { getTreeDate } from '@/api/departments'
import { tranListToTreeData } from '@/utils/treeData'
import addpartment from './components/addpartment.vue'

export default {
  components: {
    treeDate,
    addpartment,
  },
  data() {
    return {
      company: {},
      departs: [],
      defaultProps: {
        children: 'children',
        label: 'name',
      },
      dialogVisible: false,
      node: null, //当前新增的部门
    }
  },
  created() {
    this.FindTreeData()
  },
  methods: {
    async FindTreeData() {
      const res = await getTreeDate()
      console.log(res)
      this.company = { name: res.companyName, message: '管理员' }
      this.departs = tranListToTreeData(res.depts, '')
    },
    OpenDialog(val) {
      this.dialogVisible = true
      this.node = val
    },
  },
}
</script>

<style lang="scss" scoped>
.tree-card {
  padding: 30px 140px;
  font-size: 14px;
}
</style>
