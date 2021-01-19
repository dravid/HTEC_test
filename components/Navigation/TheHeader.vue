<template>
  <div class="header-container">
    <header class="the-header">
      <div class="logo">
        <nuxt-link to="/">Trello Test</nuxt-link>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle';

export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle,
  },
};
</script>

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #0096AC;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.7rem;
}

.logo a:link,
.logo a:visited {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-decoration: none;
  color: #00c3e1;
  letter-spacing: 2px;
  transition: all .2s;
}

.logo a:hover {
  color: #fff;
  opacity: .8 !important;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
