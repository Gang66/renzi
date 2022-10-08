import layout from '@/layout'
export default {
  path: '/attendances',
  component: layout,
  name: 'attendances',
  children: [
    {
      path: '',
      component: () => import('@/views/attendances'),
      meta: {
        title: '考勤',
        icon: 'skill',
      },
    },
  ],
}
