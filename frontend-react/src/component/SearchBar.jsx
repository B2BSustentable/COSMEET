import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import search from '../assets/search.svg'

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
    >
      <img src={search} alt="Search Icon" style={{ marginLeft: '10px', marginRight: '5px', width: '20px', height: '20px' }} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Procure por uma empresa ou categoria."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}
