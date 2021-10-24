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
import { CartContext } from '../App';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
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

const SuccessButton = styled(Button)(({ theme }) => ({
  width: '120px',
  height: '48px',
  margin: '16px 16px',
  border: 'none',
  color: 'black',
  backgroundColor: '#C4F5D4',
  '&:hover': {
    backgroundColor: '#127632',
    color: 'white',
  },
}));
export default function Cart({ summary }) {
  const classes = useStyles();
  const [id, setID] = React.useState(0);
  const { state, dispatch } = React.useContext(CartContext);

  return (
    <>
      <div className='breadcrumbHeader'>
        <Breadcrumbs aria-label='breadcrumb' separator='->'>
          <Link to='/'>HOME</Link>
          <Typography>CART</Typography>
        </Breadcrumbs>
      </div>

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
          {state.length !== 0 ? (
            state.map((element, index) => (
              <CustomCard key={index}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <img src={element.product_img} width='90' height='90' />
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
                    <Typography variant='h5'>{element.product_name}</Typography>
                    <Typography variant='body1'>
                      {element.product_detail}
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
                      let newCart = [...state];
                      const elementsIndex = newCart.findIndex(
                        (element2) => element2.product_id == element.product_id
                      );
                      newCart[elementsIndex] = {
                        ...newCart[elementsIndex],
                        quantity: parseInt(e.target.value, 10),
                      };
                      dispatch({ type: 'UPDATE_CART', payload: newCart });
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
                    value={element.product_price * element.quantity}
                  />
                  <IconButton
                    sx={{ width: '32px', height: '32px' }}
                    color={'error'}
                    onClick={() => {
                      dispatch({ type: 'REMOVE_ITEM', payload: element });
                      //   let exCart = [...cartItems];
                      //   let newCart = exCart.filter(
                      //     (cart) => cart.productID !== element.productID
                      //   );
                      //   setCart(newCart);
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

            <Typography variant='h5'>Total Price : {summary}</Typography>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <CustomButton
                onClick={() => {
                  dispatch({ type: 'CLEAR_CART' });
                }}
              >
                Clear Cart
              </CustomButton>
              <SuccessButton disabled={state.length === 0 ? true : false}>
                <Link
                  to='/checkout'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  CHECKOUT
                </Link>
              </SuccessButton>
            </div>
          </Box>
        </Grid>
      </Paper>
    </>
  );
}
