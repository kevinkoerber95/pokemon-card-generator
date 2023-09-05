<template>
    <div class="card-container" :class="showModal ? 'is-open' : 'is-closed'">
        <div
            id="card"
            :style="`background: radial-gradient(circle at 50% 0%, ${themeColor}, 36%, #fff 36%)`"
            v-if="!isLoading && pokemon !== null">
        </div>
        <LoadingSpinner v-if="isLoading" />
    </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default {
    name: 'PokemonCard',

    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    },

    components: {
        LoadingSpinner
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
        }
    },

    data() {
        return {
            isLoading: false,
            pokemon: null,
            themeColor: null,
            showModal: false
        }
    }
}
</script>
