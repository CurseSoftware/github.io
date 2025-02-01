<script setup lang="ts">
</script>

<template>
    <div class="container">
        <div class="info grid-item">
            <h2 style="font-weight: 300;">Description</h2>
            <div style="gap: 10px;">
                <p>
                    Curse Engine is a cross-platform game engine built on the goal of creating beautiful, powerful, and fun games. 
                    Curse provides many utilities including an editor application similar to Unity or Godot, but we also provide an API similar to raylib for creating your games in code.
                </p>
                <p>
                    <b>Curse is currenty under development, but this site will be updated here as progress is made!</b>
                </p>
            </div>
        </div>
        
        <div class="roadmap grid-item">
            <h2 style="font-weight: 300;">Roadmap</h2>
            <div style="gap: 10px;">
                <ul>
                    <li>Version 0.1: Rendering focus
                        <ul>
                            <li>Physically based rendering (PBR)</li>
                            <li>Configurable rendering pipeline</li>
                            <li>Custom objects and materials</li>
                            <li>Scene rendering</li>
                            <li>Support different rendering API backends: [Dx12, Metal, Vulkan]</li>
                        </ul>
                    </li>
                    <li>Version 0.2: Game library
                        <ul>
                            <li>ECS architecture</li>
                            <li>Basic physics systems</li>
                            <li>...</li>
                        </ul>
                    </li>
                    <li>Version 0.3: Flesh out editor
                        <ul>
                            <li>Build out UI system to serve both game and editor elements</li>
                            <li>Be able to create scenes & gameplay from editor</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="grid-item links">
            <h2 style="font-weight: 300;">Links</h2>
            <div>
                <a target="_blank" href="https://github.com/CurseSoftware/Curse-Engine" class="link">
                    Source Code
                </a>
                <a target="_blank" href="https://github.com/CurseSoftware/Curse-Engine" class="link">
                    Wiki
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../assets/styles/variables.css');

ul ul, ul ol, ol ul, ol ol {
    margin-left: 20px;
}

.container {
    width: 100%;
    height: 100%;

    display: grid;
    gap: 1rem;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 2fr 2fr;

    font-size: 1rem;
    line-height: 2rem;
    font-weight: 300;
}

.link {
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
    text-underline-offset: 3px;
    color: var(--text);
    font-weight: 300;
    font-size: 1.3rem;
    padding: 10px;
    border-radius: 5px;
    transition: 100ms ease;
}

.link:hover {
    background-color: var(--light-blue);
    transition: 100ms ease;
}

.info {
    grid-row: 1 / 4;
    grid-column: 1 1;
}

.roadmap {
    grid-row: 1 / 3;
    grid-column: 1 1;
    line-height: 1.8rem;
}

.grid-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 10px;
    align-items: center;
    padding: 15px;
    border: 1px solid var(--light-blue);
    border-radius: 8px;
}

</style>