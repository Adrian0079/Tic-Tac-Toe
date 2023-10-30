import { useState } from 'react'
import {Square} from './components/Square'

import { Box, Grid, Stack, Typography, Button } from '@mui/material';

function App() {
  const[squares, setSquares] = useState(Array(9).fill(null));
  const [nextX, setNextX] = useState (true);
   
  const handleClick =(i)=>{
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if(nextX){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    
    setSquares(nextSquares);
    setNextX(!nextX);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (nextX ? "X" : "O");
  }


 
  return (
    <>
     <Typography variant="h3" color="initial" textAlign="center" fontWeight="bold">
          {status}
     </Typography>
      <Stack direction="row" justifyContent="center" alignContent="center" border={0} height={598} >
        <Box width={500} border={0} borderColor={"red"}>

        </Box>
        
        <Grid container border={0} direction="row" width={300} height={300} spacing={0.1} mt={11}>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </Grid>
        


          <Grid item xs={4} sm={4} md={4} lg={4} xl={4} border={0}>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
          </Grid>

          
        </Grid>
        <Box width={500} border={0} borderColor={"red"}>
          <Button variant="contained" color="error" onClick={()=>{window.location.reload()}} sx={{marginTop:"13px"}}>
            Reset        
          </Button>
        </Box>
      </Stack>
        
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App
