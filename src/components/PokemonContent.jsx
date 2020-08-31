import React,{useState, useEffect} from "react";
import Graphic from './Graphic'
import { makeStyles, Grid, Typography} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  pokemonImage:{
    width:theme.spacing(100)
  }
}));



const PokemonContent = ({pokemonList}) => {
  const classes = styles();
  const [actualPokemon, setActualPokemon]=useState({})
  const [pokemonStats,setPokemonStats]=useState([])
  const [pokemonImage,setPokemonImage]=useState('')

  const getPokemonStates= async (id)=>{
    let url=`https://pokeapi.co/api/v2/pokemon/${id}/`
    let pokemonFind = fetch(url)
    let data= await pokemonFind
    let res= await data.json()

    let stats=createArrayStats(res.stats)
    setActualPokemon(res)
    setPokemonStats(stats)
    setPokemonImage(res.sprites.front_default)
  }

  const createArrayStats=(status)=>{
    let arrayStats=[]
    status.map(s=>arrayStats.push(s.base_stat))
    return arrayStats
  }

  useEffect(()=>{
    getPokemonStates(1)
  },[])
  
  console.log(pokemonStats)
  console.log(pokemonImage)
  console.log(actualPokemon.name)
  return (
    <Grid container sm={12} className={classes.content}>
      <Grid item sm={3}>
        <div className={classes.toolbar}></div>
        <img className={classes.pokemonImage} src={pokemonImage} alt=""/>
      </Grid>
      <Grid item sm={9}>
        <div className={classes.toolbar}></div>
        <Graphic stats={pokemonStats} pokemonName={actualPokemon.name}/>
      </Grid>
    </Grid>
  );
};

export default PokemonContent;
