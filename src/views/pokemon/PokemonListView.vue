<template>
    <div class="pokemon-list"></div>
</template>

<script>
import PokemonService from "@/services/pokemon.service";
import axios from "axios";

export default {
    name: 'PokemonListView',

    computed: {
        pokemonService() {
            return new PokemonService(axios);
        }
    },

    data() {
        return {
            isLoading: false,
            pokemons: [],
            currentPage: 0,
            limitPerPage: 20
        }
    },

    created() {
        this.componentCreated();
    },

    methods: {
        componentCreated() {
            this.loadPokemons();
        },

        loadPokemons() {
            this.isLoading = true;
            this.pokemonService.getList(this.currentPage, this.limitPerPage).then((result) => {
                this.isLoading = false;
                if (result.status === 200 && result.data) {
                    this.pokemons = result.data.results;
                }
            }).catch((exception) => {
                this.isLoading = false;
                console.error(exception);
            })
        }
    }
}
</script>
