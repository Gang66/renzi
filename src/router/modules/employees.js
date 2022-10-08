import layout from '@/layout'
export default {
  path: '/employees',
  component: layout,
  name: 'employees',
  children: [
    {
      path: '',
      component: () => import('@/views/employees'),
      meta: {
        title: '员工',
        icon: 'people',
      },
    },
  ],
}
