export default [
  {
    path: "staff",
    name: "staff",
    component: () => import('@/views/system/staff/index.vue'),
    meta: {
      title: '人员管理'
    },
    children: [],
  },
  {
    path: "role",
    name: "role",
    component: () => import('@/views/system/role/index.vue'),
    meta: {
      title: '角色管理'
    },
    children: [],
  },
]