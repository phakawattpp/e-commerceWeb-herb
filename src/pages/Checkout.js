import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { IconButton, Typography, Button, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import img from '../icon/Item1.svg';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { makeStyles } from '@mui/styles';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';
import '../styles.css';
import { Breadcrumbs } from '@mui/material';
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
      borderColor: 'black !important',
      color: 'black !important',
    },
  },
  disabled: {
    borderColor: 'black !important',
    color: 'black',
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

export default function Checkout({ summary }) {
  const { state, dispatch } = React.useContext(CartContext);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [verified, setVerified] = React.useState(false);
  const classes = useStyles();
  React.useEffect(() => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setVerified(false);
    } else {
      setVerified(true);
    }
  }, [email]);
  return (
    <>
      <div className='breadcrumbHeader'>
        <Breadcrumbs aria-label='breadcrumb' separator='->'>
          <Link to='/'>HOME</Link>
          <Link to='/cart'>CART</Link>
          <Typography>CHECKOUT</Typography>
        </Breadcrumbs>
      </div>

      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          boxShadow: 'none',
          height: '100vh',
          maxHeight: '1080px',
        }}
      >
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
            maxHeight: '800px',
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
                    disabled
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
            maxHeight: '800px',
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
              justifyContent: 'space-between',
              maxWidth: '440px',
              width: '100%',
              maxHeight: '700px',
            }}
          >
            <Typography variant='h4' sx={{ textAlign: 'center' }}>
              Bill Summary
            </Typography>

            <Typography variant='h5'>Total Price : {summary}</Typography>
            <Divider></Divider>
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
                flexDirection: 'column',
                height: '100%',
                maxHeight: '400px',
              }}
            >
              <Typography variant='h5'>DELIVERY ADDRESS</Typography>

              <TextField
                id='outlined-basic'
                className='checkoutInput'
                label='FULLNAME'
                variant='outlined'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                id='outlined-basic'
                label='PHONE NUMBER'
                className='checkoutInput'
                type='tel'
                variant='outlined'
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <TextField
                id='outlined-basic'
                label='EMAIL'
                className='checkoutInput'
                variant='outlined'
                type='email'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {!verified && email ? (
                <p style={{ color: 'red' }}>INVALID EMAIL FORMAT</p>
              ) : null}
              <TextField
                id='outlined-multiline-static'
                label='ADDRESS'
                className='checkoutInput'
                multiline
                rows={4}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SuccessButton
                disabled={verified && name && phone && address ? false : true}
              >
                GO
              </SuccessButton>
            </div>
          </Box>
        </Grid>
      </Paper>
    </>
  );
}
