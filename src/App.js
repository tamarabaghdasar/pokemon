import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {getPokemons} from './store/pokemon/actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      list:[]
    }
  }
  componentDidMount() {
    this.props.getList();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({list:nextProps.pokemons.list,mainList:nextProps.pokemons.list});
  }
  search=(e)=>{
    let list=this.state.list;
    if(e.target.value.trim().length) {
      this.setState({list:list.filter(pokemon => pokemon.name.toLowerCase().includes(e.target.value))});
    }else {
      this.setState({list:this.state.mainList});
    }
  }

  categoryFilter=(e)=>{
    let list=this.state.mainList;
    if(e.target.value.trim().length) {
      this.setState({list:list.filter(pokemon => pokemon.name.toLowerCase().includes(e.target.value))});
    }else {
      this.setState({list:this.state.mainList});
    }
  }


  render() {
    let pokemons=this.state.list;
    let mainPokemonsList=this.state.mainList;
    return (
      <div className="App">
        <input type="text" onInput={this.search}/>
        <select onChange={this.categoryFilter}>
          <option value="">No Filter</option>
        {mainPokemonsList ? mainPokemonsList.map((pokemon,index) =>
            <option key={index} value={pokemon.name}>{pokemon.name}</option>
) : ""}
        </select>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Avatar</td>
              <td>URL</td>
            </tr>
          </thead>
          <tbody>
          {pokemons.map((pokemon,index) =>
      
            <tr key={index}>
              <td>{pokemon.name}</td>
              <td>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+pokemon.url.split('/')[pokemon.url.split('/').length-2]+".png"}/>
              </td>
              <td>{pokemon.url}</td>
            </tr>
)}
          </tbody>
        </table>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
      pokemons: state.pokemons.list
      // componentPropName: state.pokemons.ReducerKeyName,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      getList: () => {
          dispatch(getPokemons());
      }
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(App);
