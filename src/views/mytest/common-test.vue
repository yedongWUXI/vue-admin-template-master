<template>
  <div class="app-container">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="简介及公告" name="announcement">
        <el-card>
          <el-form ref="form" :model="form" label-width="120px" inline>
            <el-row>
              <el-form-item label="省：">
                <el-select v-model="form.areaSh" placeholder="请选择省" clearable filterable style="width: 195px">
                  <el-option v-for="item in sgList3" :key="item.code" :label="item.name" :value="item.name" />
                </el-select>
              </el-form-item>
              <el-form-item label="市：">
                <el-select v-model="form.areaS" placeholder="请选择市" clearable filterable style="width: 195px;">
                  <el-option v-for="item in shList3" :key="item.code" :label="item.name" :value="item.name" />
                </el-select>
              </el-form-item>
              <el-form-item label="区（县）：">
                <el-select v-model="form.areaQ" placeholder="请选择区/县" clearable filterable style="width: 195px;">
                  <el-option v-for="item in qList3" :key="item.code" :label="item.name" :value="item.name" />
                </el-select>
              </el-form-item>
              <el-form-item label="街道（镇）：">
                <el-select v-model="form.areaX" placeholder="请选择镇" clearable filterable style="width: 195px;">
                  <el-option v-for="item in zList3" :key="item.code" :label="item.name" :value="item.name" />
                </el-select>
              </el-form-item>
              <el-form-item label="村（居委会）：">
                <el-select v-model="form.areaJ" placeholder="请选择居委会" clearable filterable style="width: 195px;">
                  <el-option v-for="item in jwList3" :key="item.code" :label="item.name" :value="item.name" />
                </el-select>
              </el-form-item>
            </el-row>
          </el-form>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="资讯" name="information" />
      <el-tab-pane label="直播流配置" name="stream" />
    </el-tabs>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data() {
    return {
      sgList3: [{ code: '2', name: 'zs' }],
      shList3: [],
      qList3: [],
      zList3: [],
      jwList3: [],
      form: []
    }
  },
  created() {
    this.form.areaSh = 'zs'
  }
}
</script>

<style scoped>

</style>
