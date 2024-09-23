<script setup lang="ts">
</script>

<template>
    <div class="outer-container">
        <img src="../assets/raven.png" class="logo"/>
        <router-link to="/" class="title">RAVEN SOFTWARE FOUNDATION</router-link>
    </div>
</template>

<style scoped>
@import '../assets/styles/variables.css';
.outer-container {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: var(--navigation-height);

    font-family: var(--serif-font);
    letter-spacing: 2px;
    font-size: 1.5vw;


    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: var(--light-beige);
    color: black;
    /* padding-left: 1vw; */
}

.logo {
    max-width: 4vw;
}

.title {
    color: black;

}

</style>