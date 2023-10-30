import { Button, ThemeProvider, createTheme, Container, Grid } from '@mui/material';
import React from 'react'
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000e35",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export const Square = ({value, onSquareClick}) => {

  return (
    
      <ThemeProvider theme={theme}>
        
          <Button sx={{border: 2, height:"97px", width:"97px"}} className='bt' onClick={onSquareClick} >{value}</Button>
          
      </ThemeProvider>
    //----------
  );
}

export default Square