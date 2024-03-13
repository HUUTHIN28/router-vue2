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
        path: "/location",
        name: "location",
        component: () => import("@/pages/location/locationListView.vue"),
      },
      {
        path: "/about",
        component: () => import("../../pages/about/layoutAbout.vue"),
        meta: {
          requiresAuth: true,
        },
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
