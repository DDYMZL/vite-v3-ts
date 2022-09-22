export default [
  {
    path: "staff",
    name: "staff",
    component: () => import('@/views/system/role/index.vue'),
    children: [],
  },
  {
    path: "role",
    name: "role",
    component: () => import('@/views/business/staff/index.vue'),
    children: [],
  },
]