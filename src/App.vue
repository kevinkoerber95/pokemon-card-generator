<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
import './styles/app.scss';
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/pokemons">Pokemons</RouterLink>
            </nav>
        </div>
    </header>
    <RouterView/>
</template>
