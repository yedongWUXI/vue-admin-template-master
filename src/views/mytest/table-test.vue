<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" prop="id" width="95">
      </el-table-column>
      <el-table-column label="Title" prop="title">
      </el-table-column>
      <el-table-column label="Author" prop="author" width="110" align="center">
      </el-table-column>
      <el-table-column label="Pageviews" prop="pageviews" width="110" align="center">
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="display_time" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getTableList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
    console.log('qqqqqqqqqqq', this.list)
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getTableList().then(response => {
        this.list = response.data.items
        this.listLoading = false
        console.log('qqqqqqqqqqq', this.list)
      })
    }
  }
}
</script>
