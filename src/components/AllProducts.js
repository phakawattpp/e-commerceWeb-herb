import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ItemBox from './ItemBox';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  alignSub: {
    textAlign: 'center',
  },
});

const AllProductsItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function AllProducts({ type }) {
  const classes = useStyles();
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='subtitle1' className={classes.alignSub}>
          SHOWING
        </Typography>
        <Typography
          variant='subtitle1'
          color={'#127632'}
          className={classes.alignSub}
        >
          &nbsp;
          {AllProductsItems.length}
          &nbsp;
        </Typography>
        <Typography variant='subtitle1' className={classes.alignSub}>
          PRODUCTS OF
        </Typography>
        <Typography variant='h6' color={'#127632'} className={classes.alignSub}>
          &nbsp;* {type} *
        </Typography>
      </Box>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {AllProductsItems.map((object, index) => {
          return (
            <Grid item key={index} xs={3}>
              <ItemBox productType={type} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
