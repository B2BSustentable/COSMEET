import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React, { useState, useEffect } from "react";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case '/home':
        setValue(0);
        break;
      case '/profile':
        setValue(1);
        break;
      case '/favorite':
        setValue(2);
        break;
      default:
        setValue(0);
    }
  }, [location]);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          "& .Mui-selected": {
            borderBottom: "1px solid black",
            fontWeight: "bold",
            color: "black"
          },
          "& .MuiBottomNavigationAction-root": {
            borderBottom: "none" 
          }
        }}
      >
        <BottomNavigationAction label="Home" component={Link} to="/home" />
        <BottomNavigationAction label="Perfil" component={Link} to="/profile" />
        {/* <BottomNavigationAction label="Favoritos" component={Link} to="/favorite" /> */}
      </BottomNavigation>
    </Box>
  );
}
