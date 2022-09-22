export default [
  {
    path: "details",
    name: "details",
    meta: {
      title: '业务详情'
    },
    children: [
      {
        path: "water",
        name: "water",
        component: () => import('@/views/business/details/water/index.vue'),
        meta: {
          title: '供水'
        },
      },
      {
        path: "drain",
        name: "drain",
        component: () => import('@/views/business/details/drain/index.vue'),
        meta: {
          title: '排水'
        },
      },
    ],
  },
]