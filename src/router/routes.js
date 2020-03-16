
const routes = [
  {
    path: '/', component: () => import('layouts/firstLogin.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') }
    ]
  },
  {
    path: '/Dashboard',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: '/viewBooking', component: () => import('pages/viewBooking.vue') },
      { path: '/viewOrder', component: () => import('pages/viewOrder.vue') },
      { path: '/editTourMain', component: () => import('pages/editTourMain.vue') },    
      { path: '/editProMain', component: () => import('pages/editProMain.vue') },
      { path: '/milkEdit', component: () => import('pages/milkEdit.vue') },
      { path: '/milkForm', component: () => import('pages/milkForm.vue') },
      { path: '/instantEdit', component: () => import('pages/instantEdit.vue') },
      { path: '/instantForm', component: () => import('pages/instantForm.vue') },
      { path: '/toiletriesEdit', component: () => import('pages/toiletriesEdit.vue') },
      { path: '/toiletriesForm', component: () => import('pages/toiletriesForm.vue') },
      { path: '/tourEdit', component: () => import('pages/tourEdit.vue') },
      { path: '/tourForm', component: () => import('pages/tourForm.vue') },
      { path: '/chaletEdit', component: () => import('pages/chaletEdit.vue') },
      { path: '/chaletForm', component: () => import('pages/chaletForm.vue') },
      { path: '/dormEdit', component: () => import('pages/dormEdit.vue') },
      { path: '/dormForm', component: () => import('pages/dormForm.vue') },
      
    ]
  }
]


// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
