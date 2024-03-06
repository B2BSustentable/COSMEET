import * as React from 'react';
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
            borderBottom: "none" // Remove a borda inferior dos itens não selecionados
          }
        }}
      >
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Perfil" />
        <BottomNavigationAction label="Dashboard" />
      </BottomNavigation>
    </Box>
  );
}
