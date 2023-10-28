<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuth0 } from '@auth0/auth0-vue'
import HelloWorld from './components/HelloWorld.vue'
import LoginButton from './components/LoginButton.vue'
import LogoutButton from './components/LogoutButton.vue'
import SignupButton from './components/SignupButton.vue'

const { isLoading, isAuthenticated } = useAuth0()
</script>

<template>
  <div v-if="isLoading" class="page-layout">
    <PageLoader />
  </div>
  <template v-else>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <template v-if="!isAuthenticated">
            <SignupButton />
            <LoginButton />
          </template>
          <LogoutButton v-if="isAuthenticated" />
          <RouterLink to="/">Home</RouterLink>
          <RouterLink v-if="isAuthenticated" to="/profile">Profile</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </template>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
