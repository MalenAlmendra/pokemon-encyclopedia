import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Container, ThemeProvider, makeStyles } from "@material-ui/core";
import theme from "../Theme";
import PokemonContent from "./PokemonContent";
import Aside from "./Aside";

const useStyle = makeStyles({
  root: {
    display: "flex",
  },
  title: {
    fontSize: 40,
  },
});

const App = () => {
  const classes = useStyle();
  const [pokemones, setPokemones] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setPokemones(data.results);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <Navbar />
        <Aside pokemonList={pokemones} />
        <PokemonContent pokemonList={pokemones}/>
      </Container>
    </ThemeProvider>
  );
};

export default App;
