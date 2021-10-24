import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ItemBox from './ItemBox';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import img1 from '../icon/Item1.svg';
import img2 from '../icon/Item2.svg';
import img3 from '../icon/Item3.svg';
import { useFetch } from '../custom/useFetch';
import '../styles.css';
const useStyles = makeStyles({
  alignSub: {
    textAlign: 'center',
  },
});

const AllProductsItems = [
  {
    productImg: `${img1}`,
    productID: 0,
    productName: 'Item#1',
    productDetail: 'Product Detail',
    productPrice: 100,
    quantity: 1,
  },
  {
    productImg: `${img2}`,
    productID: 1,
    productName: 'Item#2',
    productDetail: 'Product Detail',
    productPrice: 200,
    quantity: 1,
  },
  {
    productImg: `${img3}`,
    productID: 2,
    productName: 'Item#3',
    productDetail: 'Product Detail',
    productPrice: 300,
    quantity: 1,
  },
  {
    productImg: `${img1}`,
    productID: 3,
    productName: 'Item#4',
    productDetail: 'Product Detail',
    productPrice: 400,
    quantity: 1,
  },
];

export default function AllProducts({ type }) {
  const classes = useStyles();
  const { loading, products } = useFetch('/getAllProducts');
  console.log(products);
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
          {loading ? '0' : products.length}
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
        {loading ? (
          <div className='loaderBG'>
            <div className='loader' />
          </div>
        ) : (
          products.map((el, index) => {
            return (
              <Grid item key={index} xs={3}>
                <ItemBox productType={type} product={el} key={index} />
              </Grid>
            );
          })
        )}
      </Grid>
    </Box>
  );
}
