import React from "react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import StarsIcon from "@material-ui/icons/Stars";

const PokemonList = ({pokemonList}) => {

    
 
    
  return (
    <div>
      <List component="ul">
        <Divider />
            {Object.keys(pokemonList).map((i)=>(
                <>
                <ListItem key={i} button>
                    <ListItemIcon>
                      <StarsIcon></StarsIcon>
                    </ListItemIcon>
                    <ListItemText primary={pokemonList[i].name.toUpperCase()} />
                </ListItem>
                </>)
            )}
        <Divider />
      </List>
    </div>
  );
};

export default PokemonList;
