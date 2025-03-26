import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { colors, Container, Paper } from '@mui/material';

export default function Student() {
    const paperStyle={padding:'50px 20px', width: 600, margin:"20px auto"}
    
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Add Student</h1>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1 } }}
      noValidate
      autoComplete="off"
    >
     
      <TextField id="standard-basic" label="Student name" variant="standard" fullWidth/>
      
      <TextField id="standard-basic" label="Student address" variant="standard" fullWidth/>
      
    </Box>
    </Paper>
    </Container>
  );
}
