import {combineReducers} from "redux";
import pokemons from "./pokemon/reducer";

const rootReducer = combineReducers({
    pokemons: pokemons
});

export default rootReducer;