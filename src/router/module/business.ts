export default [
  {
    path: "details",
    name: "details",
    children: [
      {
        path: "water",
        name: "water",
        component: () => import('@/views/business/details/water/index.vue'),
      },
      {
        path: "drain",
        name: "drain",
        component: () => import('@/views/business/details/drain/index.vue'),
      },
    ],
  },
]