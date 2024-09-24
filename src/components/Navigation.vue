<script setup lang="ts">

</script>

<template>
    <div class="outer-container">
        <img src="../assets/raven.png" class="logo"/>
        <router-link to="/" class="title">RAVEN SOFTWARE FOUNDATION</router-link>
        <!-- <router-link to="/software" class="page-link">SOFTWARE</router-link> -->
        <router-link to="/members" class="page-link">MEMBERS</router-link>
        <div class="info-box">
            <a target="_blank" href="https://github.com/RavenSoftLabs" class="icon-link">
                <font-awesome-icon :icon="['fab', 'github']" size="xl"/>
            </a>
        </div>
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
    /* color: black; */
    /* padding-left: 1vw; */
}

.logo {
    max-width: 4vw;
}

.icon-link {
    text-decoration: none;
    color: var(--dark-brown);
}

.title {
    color: var(--dark-brown);
    text-decoration: none;
}

.page-link {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 70%;
    padding: 0 0.35vw 0 0.35vw;

    border-radius: 10px;

    margin-left: 2vw;
    
    font-size: 0.8em;
    text-decoration: underline;
    
    color: var(--dark-brown);
    
    transition: 100ms ease;
}

.page-link:hover {
    transition: 100ms ease;
    background-color: var(--beige);
}

.info-box {
    flex-grow: 1;

    display: flex;
    flex-direction: row-reverse;
    padding: 0 1vw 0 0;
}

</style>