import React from 'react'
import {Drawer, makeStyles, Divider} from '@material-ui/core'
import PokemonList from './PokemonList'



const styles=makeStyles({
    drawer:{
        width: 360,
        flexShrink: 0,
    },
    drawerPaper:{
        width: 360
    }
})

const Aside= ({pokemonList}) =>{
    const classes=styles()
    return (
        <>
            <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
            >
                <Divider />
                <PokemonList pokemonList={pokemonList}/>
            </Drawer>
        </>
    )
}

export default Aside
