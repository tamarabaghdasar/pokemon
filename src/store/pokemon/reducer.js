import {GET_POKEMONS_LIST} from "./constants";

const initState = {
    list: []
};

export default function pokemons(state = initState, action) {
    switch (action.type) {
        case GET_POKEMONS_LIST:
                return {...state, list: action.data};
        default: {
            return state;
        }
    }
}