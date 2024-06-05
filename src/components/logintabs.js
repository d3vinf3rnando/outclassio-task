import { Container } from '@mui/material'
import React from 'react'
import  { useState } from 'react';
import { AppBar, Tab, Tabs, Typography, TextField, Button, Box } from '@mui/material';

function Logintabs() {
    const [activeTab, setActiveTab] = useState('provider'); 

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'provider':
        return (
          <>
            <Typography variant="h6" fontWeight="bold"  align="center">
            Outclass for providers
            </Typography>
            <Typography variant="body1" align="center">
            Create an account or log in to book and grow your enrolments
            </Typography>
            <TextField label="Email" type="email" margin="normal" required fullWidth />
            <Button variant="contained" type="submit"  sx={{ mt: 2, width: '100%' ,backgroundColor:'#6d6aeb','&:hover': { backgroundColor: '#6d6aeb' } ,'&:active': { backgroundColor: '#6d6aeb' }}}>
              Continue
            </Button>
          </>
        );
      case 'parent':
        return (
          <>
            <Typography variant="h6" fontWeight="bold"  align="center">
            Outclass for parents
            </Typography>
            <Typography variant="body1" align="center">
            Create an account or log in to book and manage your kids' classes
            </Typography>
            <TextField label="Email" type="email" margin="normal" required fullWidth />
            <Button variant="contained" type="submit" sx={{ mt: 2, width: '100%' ,backgroundColor:'#6d6aeb','&:hover': { backgroundColor: '#6d6aeb' } ,'&:active': { backgroundColor: '#6d6aeb' }}}>
              Continue
            </Button>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto', paddingTop:"200px",}}>
    <AppBar position="static" sx={{backgroundColor:"white", boxShadow:"none",}} >
      <Tabs value={activeTab} onChange={handleTabChange} centered sx={{ '& .Mui-selected': { color: '#6d6aeb' , } }}>
        <Tab label="Provider" value="provider" sx={{'&:active': { color: '#6d6aeb' }}} />
        <Tab label="Parent" value="parent" sx={{'&:active': { color: '#6d6aeb' }}}  />
      </Tabs>
    </AppBar>
    {renderContent()}
  </Box>
  )
}

export default Logintabs