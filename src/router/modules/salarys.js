import layout from '@/layout'
export default {
  path: '/salarys',
  component: layout,
  name: 'salarys',
  children: [
    {
      path: '',
      component: () => import('@/views/salarys'),
      meta: {
        title: '工资',
        icon: 'money',
      },
    },
  ],
}
