import React from 'react'
import logo from '../images/logo.png';
import { AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material';

function header() {
  return (
    <AppBar position='static' sx={{
        backgroundColor: "white",
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)', 
      }} >
        <Container maxWidth="lg" >
         <Toolbar sx={{ display: 'flex', justifyContent: 'center',  }}>
              <img src={logo} alt="outclass.io logo" style={{ height: '30px' }} /> 
        </Toolbar>
         </Container>
      </AppBar>
  )
}

export default header