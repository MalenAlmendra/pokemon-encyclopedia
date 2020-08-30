import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  Container,
  ThemeProvider,
  // makeStyles,
} from "@material-ui/core";
import theme from "../Theme";
import PokemonList from "../components/PokemonList";

// const useStyle = makeStyles({
//   title: {
//     fontSize: 40,
//   },
// });

const App = () => {
  // const classes = useStyle();
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
      <Container>
        <Navbar />
        <PokemonList pokemonList={pokemones} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
