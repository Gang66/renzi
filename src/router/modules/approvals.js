import layout from '@/layout'
export default {
  path: '/approvals',
  component: layout,
  name: 'approvals',
  children: [
    {
      path: '',
      component: () => import('@/views/approvals'),
      meta: {
        title: '审批',
        icon: 'tree-table',
      },
    },
  ],
}
