// ไฟล์สำหรับกำหนด path
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('@/pages/ch4/Ex_qcard.vue') },
      { path: 'second', component: () => import('@/pages/SecondPage.vue') },
      { path: 'note', component: () => import('@/pages/NotePage.vue') },
      {
        path: 'note/:id',
        name: 'NoteDetail',
        component: () => import('@/pages/NotePageDetail.vue'),
      },
      { path: 'list', component: () => import('@/pages/ch4/Ex_qlist.vue') },
      { path: 'table', component: () => import('@/pages/ch4/Ex_qtable.vue') },
      {
        path: 'pinia',
        component: () => import('@/pages/ch5/Expinia.vue'),
        meta: { requireAuth: true },
      },
      {
        path: 'testapi',
        component: () => import('@/pages/ch6/Ex_api.vue'),
        meta: { requireAuth: true },
      },
      {
        path: 'post',
        component: () => import('@/pages/ch6/Ex_crud.vue'),
        meta: { requireAuth: true },
      },
      {
        path: 'mockapi',
        component: () => import('@/pages/ch6/SubjectPage.vue'),
        meta: { requireAuth: true },
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/ch7/LoginPage.vue'),
      },

      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/pages/ch7/ProfilePage.vue'),
        meta: { requireAuth: true },
      },

      {
        path: 'teacher',
        name: 'teacher',
        component: () => import('@/pages/ch7/TeacherPage.vue'),
        meta: {
          requiresAuth: true,
          roles: ['teacher', 'admin'],
        },
      },
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/pages/ch7/AdminPage.vue'),
        meta: {
          requiresAuth: true,
          roles: ['admin'],
        },
      },
      { path: 'env', component: () => import('@/pages/ch8/Ex_env.vue') },
      { path: 'subject', component: () => import('@/pages/ch8/SubjectPage.vue') },
    ],
  },
  {
    path: '/note/new',
    name: 'NewNote',
    component: () => import('@/pages/NewNote.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes
