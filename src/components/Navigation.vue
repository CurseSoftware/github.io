<script setup lang="ts">

</script>

<template>
    <div class="outer-container">
        <router-link to="/" class="title">
            <img src="../assets/curse.jpg" class="logo"/>
            URSE SOFTWARE
        </router-link>
        <!-- <router-link to="/software" class="page-link">SOFTWARE</router-link> -->
        <router-link to="/members" class="page-link">MEMBERS</router-link>
        <div class="info-box">
            <a target="_blank" href="https://github.com/CurseSoftware" class="icon-link">
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

    background-color: var(--dark-blue);
    /* background-color: var(--light-beige); */
    /* color: black; */
    /* padding-left: 1vw; */
}

.logo {
    max-width: 3.5vw;
    margin-right: -0.5rem;
}

.icon-link {
    text-decoration: none;
    color: #fefefe;
    /* color: var(--dark-brown); */
}

.title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--text);
    text-decoration: none;
    font-family: var(--logo-font);
    /* font-weight: 200; */
}

.page-link {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 70%;
    padding: 0 0.35vw 0 0.35vw;

    border-radius: 10px;

    margin-left: 2vw;
    
    font-size: 0.7em;
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
    text-underline-offset: 3px;
    
    /* color: var(--dark-brown); */
    color: var(--text);
    font-weight: 300;
    
    transition: 100ms ease;
}

.page-link:hover {
    transition: 100ms ease;
    background-color: var(--light-blue);
}

.info-box {
    flex-grow: 1;

    display: flex;
    flex-direction: row-reverse;
    padding: 0 1vw 0 0;
}

</style>