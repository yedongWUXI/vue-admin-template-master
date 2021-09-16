import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getTableList(params) {
  return request({
    url: '/vue-admin-template/tableList/list',
    method: 'get',
    params
  })
}
