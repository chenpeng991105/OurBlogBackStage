<template>
  <el-card>
    <el-row :gutter="20" style="margin-bottom: 10px">
      <el-col :span="6">
        <el-input
            size="medium"
            clearable
            placeholder="输入分类名称"
            v-model="cateName"
            @clear="clearInput"
            @keyup.enter.native="searchCate">
          <el-button slot="append" icon="el-icon-search" @click="searchCate"></el-button>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-button size="medium" type="primary" @click="addCate">添加分类</el-button>
      </el-col>
    </el-row>
    <el-table style="width: 100%" :data="cateData" border stripe>
      <el-table-column
          type="index"
          align="center"
          label="#"
          width="60">
      </el-table-column>
      <el-table-column
          align="center"
          prop="cateName"
          label="分类名称">
      </el-table-column>
      <el-table-column
          align="center"
          label="操作">
        <template v-slot="scope">
          <el-button size="small" type="primary" icon="el-icon-edit" @click="showDialog(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" icon="el-icon-delete" @click="deleteCate(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogVisible" width="30%" title="编辑分类">
      <el-form label-width="80px" :model="cateForm" :rules="cateRules" ref="cateForm">
        <el-form-item label="分类名称" prop="cateName">
          <el-input v-model="cateForm.cateName" size="medium"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="medium">取 消</el-button>
        <el-button type="primary" @click="saveCate" size="medium">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      cateData: [
        {cateName: '后端'},
        {cateName: '前端'},
        {cateName: '大数据'},
        {cateName: '人工智能'}
      ],
      tempData: [
        {cateName: '后端'},
        {cateName: '前端'},
        {cateName: '大数据'},
        {cateName: '人工智能'}
      ],
      cateName: '',
      dialogVisible: false,
      row: {},
      cateForm: {
        cateName: ''
      },
      cateRules: {
        cateName: [
          { required: true, message: '请输入分类名称', trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
    showDialog(row) {
      this.row = row
      this.cateForm.cateName = row.cateName
      this.dialogVisible = true
    },
    deleteCate(index) {
      this.$confirm('确认删除该分类吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.cateData.splice(index, 1)
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
    addCate() {
      this.$prompt('请输入分类名称', '添加分类', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator: (val) => {
          if (!val) {
            return '分类名称不能为空'
          }
        }
      }).then(({ value }) => {
        this.cateData.push({cateName: value})
        this.$message({
          type: 'success',
          message: '添加成功'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消添加'
        });
      });
    },
    searchCate() {
      this.cateData = this.cateData.filter(item => item.cateName === this.cateName)
    },
    clearInput() {
      this.cateData = this.tempData
    },
    saveCate() {
      this.$refs.cateForm.validate(valid => {
        console.log(valid)
        if (valid) {
          this.$message.success('修改成功')
          this.row.cateName = this.cateForm.cateName
          this.dialogVisible = false
        } else {
          return false
        }
      })
    },
  }
}
</script>

<style lang="less" scoped>

</style>
