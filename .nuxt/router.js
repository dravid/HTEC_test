import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cb0b66fa = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _b1003c76 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _7d23baea = () => interopDefault(import('../pages/lists/index.vue' /* webpackChunkName: "pages/lists/index" */))
const _740e8549 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _2bdd1770 = () => interopDefault(import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _13b21e8d = () => interopDefault(import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _27c7bc20 = () => interopDefault(import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _ebbc5898 = () => interopDefault(import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _d49bbe76 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _cb0b66fa,
    name: "about"
  }, {
    path: "/admin",
    component: _b1003c76,
    name: "admin"
  }, {
    path: "/lists",
    component: _7d23baea,
    name: "lists"
  }, {
    path: "/posts",
    component: _740e8549,
    name: "posts"
  }, {
    path: "/admin/auth",
    component: _2bdd1770,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _13b21e8d,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _27c7bc20,
    name: "admin-postId"
  }, {
    path: "/posts/:id",
    component: _ebbc5898,
    name: "posts-id"
  }, {
    path: "/",
    component: _d49bbe76,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
