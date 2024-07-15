import * as React from 'react';
import Box from '@mui/material/Box';

const Responsive=()=>{
  return (
    <Box className="box"
      sx={{ 
        width : {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
        },
        }}
    >
    </Box>
  );
}

export default Responsive