import ApiService from "@/services/api.service";
import type {AxiosResponse} from "axios";

class PokemonService extends ApiService {
    static url = 'https://pokeapi.co/api/v2/pokemon';

    public async getPokemon(id: number): Promise<AxiosResponse<any, any>> {
        const requestUrl = `${PokemonService.url}/${id}`;

        return this.get(requestUrl);
    }
}

export default PokemonService;
