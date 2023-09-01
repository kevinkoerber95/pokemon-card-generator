import {createRouter, createWebHistory} from 'vue-router'
// @ts-ignore
import HomeView from '../views/HomeView.vue'
// @ts-ignore
import PokemonListView from "@/views/pokemon/PokemonListView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/pokemons',
            name: 'pokemonlist',
            component: PokemonListView
        }
    ]
})

export default router
