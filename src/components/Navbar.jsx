import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const estilo = makeStyles((theme) => ({
  title: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
  },
  icon:{
      color:theme.palette.common.white
  },
  menuButtom:{
      marginRight:theme.spacing(2),
      marginLeft:theme.spacing(2)
  },
  offset:theme.mixins.toolbar
}));

const Navbar = () => {
  const classes = estilo();

  return (
    <>
      <AppBar>
        <Toolbar className={classes.title}>
          <IconButton className={classes.menuButtom} edge="start" aria-laberl="Menu">
              <MenuIcon className={classes.icon} />
          </IconButton>
          <Typography variant='h6'>Pokemon Encyclopedia</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default Navbar;
