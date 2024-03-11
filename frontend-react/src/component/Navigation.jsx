import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

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
            borderBottom: "2px solid black",
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
        <BottomNavigationAction label="Dashboard" component={Link} to="/dashboard" />
      </BottomNavigation>
    </Box>
  );
}
