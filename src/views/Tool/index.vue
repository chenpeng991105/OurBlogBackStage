<template>
  <el-card>
    <el-row :gutter="20" style="margin-bottom: 10px">
      <el-col :span="6">
        <el-input
            size="medium"
            clearable
            placeholder="输入实用工具名称"
            v-model="name"
            @clear="clearInput"
            @keyup.enter.native="searchTool">
          <el-button slot="append" icon="el-icon-search" @click="searchTool"></el-button>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-button size="medium" type="primary" @click="addTool">添加工具</el-button>
      </el-col>
    </el-row>
    <el-table style="width: 100%" :data="toolData" border stripe>
      <el-table-column
          type="index"
          align="center"
          label="#"
          width="60">
      </el-table-column>
      <el-table-column
          align="center"
          prop="name"
          label="工具名称">
      </el-table-column>
      <el-table-column
          align="center"
          prop="url"
          label="工具链接">
      </el-table-column>
      <el-table-column
          align="center"
          label="操作">
        <template v-slot="scope">
          <el-button size="small" type="primary" icon="el-icon-edit" @click="showDialog(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" icon="el-icon-delete" @click="deleteTool(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogVisible" width="30%" title="编辑工具">
      <el-form label-width="80px" :model="toolForm" :rules="toolRules" ref="cateForm">
        <el-form-item label="工具名称" prop="name">
          <el-input v-model="toolForm.name" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="工具链接" prop="url">
          <el-input v-model="toolForm.url" size="medium"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="medium">取 消</el-button>
        <el-button type="primary" @click="saveTool" size="medium">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      toolData: [
        {name: '百度', url: 'https://www.baidu.com'},
        {name: '百度', url: 'https://www.baidu.com'},
        {name: '百度', url: 'https://www.baidu.com'},
        {name: '百度', url: 'https://www.baidu.com'},
        {name: '百度', url: 'https://www.baidu.com'}
      ],
      tempData: [
        {name: '百度', url: 'https://www.baidu.com'},
        {name: '百度', url: 'https://www.baidu.com'},
        {name: '百度', url: 'https://www.baidu.com'},
        {name: '百度', url: 'https://www.baidu.com'},
        {name: '百度', url: 'https://www.baidu.com'}
      ],
      name: '',
      dialogVisible: false,
      row: {},
      toolForm: {
        name: '',
        url: '',
      },
      toolRules: {
        name: [
          { required: true, message: '请输入工具名称', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '请输入工具链接', trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
    showDialog(row) {
      this.row = row
      this.toolForm.toolName = row.toolName
      this.dialogVisible = true
    },
    deleteTool(index) {
      this.$confirm('确认删除该工具吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.toolData.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消删除'
        });
      });
    },
    addTool() {

    },
    searchTool() {},
    clearInput() {
      this.cateData = this.tempData
    },
    saveTool() {

    },
  }
}
</script>

<style lang="less" scoped>

</style>
