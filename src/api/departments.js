import request from '@/utils/request'
export function getTreeDate() {
  return request({
    url: '/company/department',
  })
}
export function delDepartments(id) {
  return request({
    url: `/company/department/${id}`,
    method: 'delete',
  })
}
export function addDepartments(data) {
  return request({
    url: `/company/department`,
    method: 'POST',
    data,
  })
}
