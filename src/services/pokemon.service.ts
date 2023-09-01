import ApiService from "@/services/api.service";

class PokemonService extends ApiService {
    static url = 'https://pokeapi.co/api/v2/pokemon';

    public async getList(page: number, limit: number) {
        const offset = (page * limit);
        const requestUrl = `${PokemonService.url}?offset=${offset}&limit=${limit}`;
        return this.get(requestUrl);
    }
}

export default PokemonService;
