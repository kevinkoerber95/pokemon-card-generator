<template>
    <main>
        <div
            v-if="isCardOpen"
            @click="isCardOpen = !isCardOpen"
            id="overlay"></div>
        <div class="home-container">
            <img
                class="pokeball pb-3"
                src="@/assets/pokeball.png"
                alt="pokeball"/>
            <h1 class="home-title">Pokémon Card Generator</h1>
            <div class="pt-5">
                <button class="btn btn-primary" @click="isCardOpen = !isCardOpen">
                    Create my card!
                </button>
            </div>

            <PokemonCard :is-open="isCardOpen" />
        </div>
    </main>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue';
export default {
    name: 'HomeView',

    components: {
        PokemonCard
    },

    data() {
        return {
            isCardOpen: false
        }
    }
}
</script>
