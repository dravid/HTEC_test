import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4097a3be = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _268c793a = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _06a80429 = () => interopDefault(import('../pages/lists/index.vue' /* webpackChunkName: "pages/lists/index" */))
const _8d6f3232 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _0079e56a = () => interopDefault(import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _1f4da2a2 = () => interopDefault(import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _dfbcf4e4 = () => interopDefault(import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _1394935c = () => interopDefault(import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _3de510e3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4097a3be,
    name: "about"
  }, {
    path: "/admin",
    component: _268c793a,
    name: "admin"
  }, {
    path: "/lists",
    component: _06a80429,
    name: "lists"
  }, {
    path: "/posts",
    component: _8d6f3232,
    name: "posts"
  }, {
    path: "/admin/auth",
    component: _0079e56a,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _1f4da2a2,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _dfbcf4e4,
    name: "admin-postId"
  }, {
    path: "/posts/:id",
    component: _1394935c,
    name: "posts-id"
  }, {
    path: "/",
    component: _3de510e3,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
