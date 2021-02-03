<template>
  <el-card>
    <el-row :gutter="20" style="margin-bottom: 10px">
      <el-col :span="6">
        <el-input size="medium" placeholder="输入分类名称" style="width: 100%" v-model="cateName" @keyup.enter.native="addCate"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button size="medium" type="primary" @click="addCate">添加分类</el-button>
      </el-col>
    </el-row>
    <el-table style="width: 100%" :data="cateData" border stripe>
      <el-table-column
          type="index"
          align="center"
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
      <el-form label-width="100px">
        <el-form-item label="分类名称">
          <el-input style="width: 50%" v-model="currentCateName"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
      cateName: '',
      dialogVisible: false,
      currentCateName: '',
    }
  },
  methods: {
    showDialog(row) {
      this.currentCateName = row.cateName
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
          message: '已取消删除'
        });
      });
    },
    addCate() {
      this.cateData.push({cateName: this.cateName})
      this.cateName = ''
    },
  }
}
</script>

<style lang="less" scoped>

</style>
