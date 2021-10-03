import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { IconButton, Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import img from '../icon/Item1.svg';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { makeStyles } from '@mui/styles';
const CustomCard = styled(Card)(({ theme }) => ({
  width: 'calc(100% - 64px)',
  height: '120px',
  padding: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '16px',
}));

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    '&$disabled': {
      color: 'black !important',
    },
  },
  disabled: {
    color: 'black',
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  width: '120px',
  height: '48px',
  margin: '16px 16px',
  border: 'none',
  color: 'white',
  backgroundColor: '#960f0f',
  '&:hover': {
    backgroundColor: '#fa4b4b',
    color: 'white',
  },
}));
export default function Cart({
  cartItems,
  setCart,
  totalPrice,
  setTotalPrice,
}) {
  const classes = useStyles();
  const [id, setID] = React.useState(0);

  return (
    <>
      <Paper
        sx={{ display: 'flex', justifyContent: 'center', boxShadow: 'none' }}
      >
        {/* {console.log('cart', cartItems)} */}
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0px',
            marginTop: '16px',
            width: 'calc(100% - 64px)',
            minHeight: '500px',
            maxHeight: '500px',
            overflow: 'auto',
            border: '2px solid #c0f7b3',
            borderRadius: '4px',
            margin: '48px',
          }}
        >
          {cartItems.length !== 0 ? (
            cartItems.map((element, index) => (
              <CustomCard key={index}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <img src={element.productImg} width='90' height='90' />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginLeft: '16px',
                    }}
                  >
                    <Typography variant='body1'>
                      {element.productIDx}
                    </Typography>

                    {/* <Typography variant='body1'>{id}</Typography> */}
                    <Typography variant='h5'>{element.productName}</Typography>
                    <Typography variant='body1'>
                      {element.productDetail}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TextField
                    id='standard-number'
                    label='Quantity'
                    type='number'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    defaultValue={element.quantity}
                    variant='standard'
                    onChange={(e) => {
                      let newCart = [...cartItems];
                      const elementsIndex = newCart.findIndex(
                        (element2) => element2.productID == element.productID
                      );
                      newCart[elementsIndex] = {
                        ...newCart[elementsIndex],
                        quantity: e.target.value,
                      };
                      setCart(newCart);
                    }}
                    InputProps={{ inputProps: { min: 1, max: 10 } }}
                  />
                  <TextField
                    label='Total Price'
                    id='outlined-start-adornment'
                    sx={{ m: 1, width: '10ch' }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='end'>฿</InputAdornment>
                      ),
                      classes: {
                        root: classes.inputRoot,
                        disabled: classes.disabled,
                      },
                    }}
                    disabled
                    value={element.productPrice * element.quantity}
                  />
                  <IconButton
                    sx={{ width: '32px', height: '32px' }}
                    color={'error'}
                    onClick={() => {
                      let exCart = [...cartItems];
                      let newCart = exCart.filter(
                        (cart) => cart.productID !== element.productID
                      );
                      setCart(newCart);
                    }}
                  >
                    <CancelRoundedIcon />
                  </IconButton>
                </Box>
              </CustomCard>
            ))
          ) : (
            <CustomCard>
              <Typography variant='h2'>No items in cart now.</Typography>
            </CustomCard>
          )}
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0px',
            marginTop: '16px',
            width: 'calc(100% - 64px)',
            minHeight: '500px',
            maxHeight: '500px',
            overflow: 'auto',
            border: '2px solid #c0f7b3',
            borderRadius: '4px',
            margin: '48px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant='h2' sx={{ textAlign: 'center' }}>
              Bill Summary
            </Typography>
            <Typography variant='h5'>Total Price : {totalPrice}</Typography>
            <CustomButton
              onClick={() => {
                setCart([]);
              }}
            >
              Clear Cart
            </CustomButton>
          </Box>
        </Grid>
      </Paper>
    </>
  );
}
