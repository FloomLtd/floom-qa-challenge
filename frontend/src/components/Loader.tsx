import React from 'react';
import { Box } from '@material-ui/core';


const Loader: React.FC<{ text: string }> = ({text}) => {
  return (
    <Box color="text.primary">
      {text}
    </Box>
  )
};

export default Loader;
