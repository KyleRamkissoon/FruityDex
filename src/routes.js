import React from 'react'

const Logout = React.lazy(() => import('./views/pages/logout/Logout'))
const Fruits = React.lazy(() => import('./views/pages/fruits/Fruits')) //Fruit Catalog Path
const Favorites = React.lazy(() => import('./views/pages/fruits/Favorites')) //Favorites Path
const Profile = React.lazy(() => import('./views/pages/Profile')) //Profile Path
const AdminUserTable = React.lazy(() => import('./views/pages/admin/AdminUserTable')) //Admin -  User table Path
const AdminFruitTable = React.lazy(() => import('./views/pages/admin/AdminFruitTable')) //Admin -  User table Path
const Suggestions = React.lazy(() => import('./views/pages/fruits/Suggestions')) //Admin - User Suggestions Path

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/fruits', exact: true, name: 'Fruits', component: Fruits }, //Fruit Route
  { path: '/favs', exact: true, name: 'Favorites', component: Favorites }, //Favorites Route
  { path: '/profile', name: 'Profile', component: Profile }, //User Profile Route
  { path: '/adminUserTable', name: 'Admin User Table', component: AdminUserTable }, //Admin User Table Route
  { path: '/adminFruitTable', name: 'Admin Fruit Table', component: AdminFruitTable }, //Admin User Table Route
  { path: '/suggestions', exact: true, name: 'Suggestions', component: Suggestions }, //Admin User Table Route
]

export default routes
