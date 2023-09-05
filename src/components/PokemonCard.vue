<template>
    <div class="card-container" :class="showModal ? 'is-open' : 'is-closed'">
        <div
                id="card"
                :style="`background: radial-gradient(circle at 50% 0%, ${themeColor}, 36%, #fff 36%)`"
                v-if="!isLoading && pokemon !== null">
            <p class="hp">
                <span>HP</span>
                {{ pokemon.healthPoints }}
            </p>
            <img :src="pokemon.imgSrc" />
            <h2 class="poke-name">{{ pokemon.name }}</h2>
            <div class="types">
                <span
                        v-for="(type, key) in pokemon.types"
                        :key="key"
                        :style="`background-color: ${type.color}`">{{ type.name }}</span>
            </div>
            <div class="stats">
                <div class="stat-attack">
                    <h3>{{ pokemon.statAttack }}</h3>
                    <p>Attack</p>
                </div>
                <div class="stat-defense">
                    <h3>{{ pokemon.statDefense }}</h3>
                    <p>Defense</p>
                </div>
                <div class="stat-speed">
                    <h3>{{ pokemon.statSpeed }}</h3>
                    <p>Speed</p>
                </div>
            </div>
        </div>
        <LoadingSpinner v-if="isLoading" />
    </div>
</template>

<script>
import Pokemon from '@/objects/pokemon';
import PokemonService from '@/services/pokemon.service';
import axios from 'axios';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default {
    name: 'PokemonCard',

    components: {
        LoadingSpinner
    },

    watch: {
        isOpen(isOpen) {
            if (isOpen) {
                this.loadPokemon();
                this.showModal = true;
                return;
            }

            this.showModal = false;
        }
    },

    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    },

    computed: {
        typeColors() {
            return {
                bug: '#26de81',
                dragon: '#ffeaa7',
                electric: '#fed330',
                fairy: '#FF0069',
                fighting: '#30336b',
                fire: '#f0932b',
                flying: '#81ecec',
                grass: '#00b894',
                ground: '#EFB549',
                ghost: '#a55eea',
                ice: '#74b9ff',
                normal: '#95afc0',
                poison: '#6c5ce7',
                psychic: '#a29bfe',
                rock: '#2d3436',
                water: '#0190FF'
            }
        },

        pokemonService() {
            return new PokemonService(axios);
        }
    },

    data() {
        return {
            isLoading: false,
            showModal: false,
            pokemon: null,
            themeColor: null
        }
    },

    methods: {
        loadPokemon() {
            this.isLoading = true;
            // Max value is 151 => amount of Pokémon in first generation!
            const randomId = Math.floor(Math.random() * 151) + 1;

            this.pokemonService.getPokemon(randomId).then((response) => {
                this.isLoading = false;
                this.buildPokemon(response.data);
            }).catch((exception) => {
                this.isLoading = false;
                console.error(exception);
            });
        },

        buildPokemon(data) {
            this.pokemon = new Pokemon(data.name[0].toUpperCase() + data.name.slice(1));
            this.pokemon.healthPoints = data.stats[0].base_stat;
            this.pokemon.imgSrc = data.sprites.other.dream_world.front_default;
            this.pokemon.statAttack = data.stats[1].base_stat;
            this.pokemon.statDefense = data.stats[2].base_stat;
            this.pokemon.statSpeed = data.stats[5].base_stat;
            this.themeColor = this.typeColors[data.types[0].type.name];

            let types = [];

            data.types.forEach((item) => {
                types.push({
                    name: item.type.name,
                    color: this.typeColors[item.type.name]
                });
            });

            this.pokemon.types = types;
        }
    }
}
</script>
