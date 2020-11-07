<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">1. Watch Computed</router-link> |
      <router-link to="/about">2. About</router-link>
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