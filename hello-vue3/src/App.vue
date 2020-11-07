<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">1. Watch Computed</router-link> |
      <router-link to="/props">2. Props - Emit - Components</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>