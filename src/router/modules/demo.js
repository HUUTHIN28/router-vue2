export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../../pages/home/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../../pages/about/AboutView.vue'),
  },
];
