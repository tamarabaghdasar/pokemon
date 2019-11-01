import axios from 'axios';
import {API_PATH} from '../../configs/api';
import {
    GET_POKEMONS_LIST
} from './constants';

export const getPokemons = () => {
    return dispatch => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then((json) => {
                dispatch({
                    type: GET_POKEMONS_LIST,
                    data: {list: json.data.results}
                });
            });
    };
};