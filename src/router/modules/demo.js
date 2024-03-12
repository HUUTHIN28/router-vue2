export default [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/layoutView.vue"),

    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../../pages/home/homeView.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/about",
        component: () => import("../../pages/about/layoutAbout.vue"),
        children: [
          {
            path: "",
            component: () => import("../../pages/about/aboutView.vue"),
          },
          {
            path: ":id",
            component: () => import("../../pages/about/aboutId.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../../pages/auth/login.vue"),
    meta: {
      requiresAuth: false,
    },
  },
];
