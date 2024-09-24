<script setup lang="ts">
import Navigation from './components/Navigation.vue';
</script>

<template>
  <div>
    <Navigation />
    <div class="page-body">
      <router-view class="router-page-body"></router-view>
    </div>
  </div>
</template>

<style>
@import './assets/styles/variables.css';

.page-body {
  margin: 0;
  width: 100vw;
  height: calc(100vh - var(--navigation-height));
  margin-top: var(--navigation-height);
}

.router-page-body {
  margin-top: var(--navigation-height);
}
</style>
