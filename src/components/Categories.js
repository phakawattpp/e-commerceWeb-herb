import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function Categories({ setTabs }) {
  const [value, setValue] = React.useState('All');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTabs(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',

        maxWidth: '480px',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons='auto'
        aria-label='scrollable auto tabs example'
      >
        <Tab label='All' value={'All'} />
        <Tab label='Deal' value={'Deal'} />
        <Tab label='Healthy' value={'Healthy'} />
        <Tab label='Smile' value={'Smile'} />
        <Tab label='Sweet' value={'Sweet'} />
        <Tab label='Tasty' value={'Tasty'} />
        <Tab label='Smell' value={'Smell'} />
      </Tabs>
    </Box>
  );
}
