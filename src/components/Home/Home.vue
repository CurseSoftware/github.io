<script setup lang="ts">
import About from './About.vue'
</script>

<template>
    <div class="container">
        <About />
    </div>
</template>

<style scoped>
@import '../../assets/styles/variables.css';

.container {
    width: 100%;
    height: 100%;
    /* border: 1px solid green; */

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>