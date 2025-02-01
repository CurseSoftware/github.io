<script setup lang="ts">
import { defineComponent } from 'vue';

const ThreeComp = defineComponent({
    name: '3DComponent',
    setup() {
        
    }
})

</script>

<template>
    <div class="container">
        <div class="text-box">
            <div class="title-box">
                <h1>About Us</h1>
                <div class="title-underline"></div>
            </div>
            <div class="about-content-box">
                <p>We are a group of open-source developers that work to build free, powerful, and reliable software.</p>
                <p>All published software is MIT liscensed and entirely free to use.</p>
                <p>Good software is well built. Not only are we dedicated to quality software to use, but quality under the hood as well.</p>
            </div>
        </div>
        
        <div class="text-box">
            <div class="title-box">
                <h1>Our Software</h1>
                <div class="title-underline"></div>
            </div>
            <div class="software-content-grid">
                <router-link to="/engine" class="page-link">
                    <div class="software-grid-item">
                        <h2 style="font-weight: 450;">Curse Engine</h2>
                        <p>Cross platform game engine for building 2D and 3D games.</p>
                        <p>Multiplayer support and can target Windows and Linux. Further support is coming soon!</p>
                        <p>C++/C API for creating scenes and/or games alongside an Editor application.</p>
                        <p>Configurable render pipeline for adding custom shading effects and compute tasks.</p>
                    </div>
                </router-link>
                <router-link to="/vinyl" class="page-link">
                    <div class="software-grid-item">
                        <h2 style="font-weight: 450;">Vinyl Lang</h2>
                        <p>A programming language that emulates the syntax and type system of Rust without the memory constraints.</p>
                        <p>This exposes raw pointers, allocators, and other things of use in C/C++ that are not easily accessible in Rust.</p>
                        <p>Vinyl is a compiler and build system. Similar to Cargo from Rust. Undecidedly it may eventually become a package manager like Cargo as well.</p>
                    </div>
                </router-link>
                <router-link to="/mercury" class="page-link">
                    <div class="software-grid-item">
                        <h2 style="font-weight: 450;">Mercury</h2>
                        <p>A web frontend library for C++ to build web applications.</p>
                        <p>Uses a React-like component system for structuring pages.</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../../../assets/styles/variables.css';

.container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--dark-blue);
}

.page-link {
    text-decoration: none;
    color: var(--text);
}

.text-box {
    /* border: 1px solid green; */
    width: 85%;

    font-family: var(--serif-font);

    margin-top: 4vh;
    font-weight: 300;

    /* outline-width: thin;
    outline-color: red;
    outline-style: dashed; */
}

.text-box h1 {
    font-size: 2.5em;
    letter-spacing: 1.5px;
    font-weight: 200;
}

.title-box {
    width: fit-content;
}

.title-underline {
    height: 1px;
    background-color: gray;
    /* background-color: var(--dusty-pink); */
}

.software-content-grid {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    margin: 0.5vh 0 0 0;
}

.software-grid-item {
    border-radius: 10px;
    padding: 1% 2% 1% 2%;
    transition: 100ms ease-out;
    font-weight: 300;
}

.software-grid-item:hover {
    background-color: var(--light-blue);
    /* background-color: var(--beige); */
    transition: 100ms ease-in;
}


</style>