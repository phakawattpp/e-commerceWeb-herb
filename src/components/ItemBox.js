import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Img1 from '../icon/Item1.svg';
import Img2 from '../icon/Item2.svg';
import Img3 from '../icon/Item3.svg';
import noImg from '../icon/noImg.jpg';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import React from 'react';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ItemBox({
  toggle,
  productType,
  product,
  addItem,
  cartItems,
  totalPrice,
  setTotalPrice,
}) {
  const [toggleAdd, setToggleAdd] = React.useState(false);

  let newCart = [...cartItems];
  let element = newCart.findIndex(
    (element) => element.productID === product.productID
  );

  // console.log(element);
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 2,
        margin: 'auto',
        maxWidth: '200px',
        flexGrow: 1,
      }}
    >
      <Grid container direction='column' spacing={2}>
        <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonBase
            sx={{
              width: 128,
              height: 128,
            }}
          >
            <Img
              alt='complex'
              src={
                productType === 'All'
                  ? Img1
                  : productType === 'Deal'
                  ? Img2
                  : productType === 'Healthy'
                  ? Img3
                  : noImg
              }
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column' spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant='subtitle1' component='div'>
                {product.productName}
              </Typography>
              <Typography variant='body2' gutterBottom>
                {product.productDetail}
              </Typography>
              <Link>View</Link>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography color='red' variant='subtitle1' component='div'>
              {product.productPrice} B/KG
            </Typography>

            {!toggleAdd && element === -1 ? (
              <IconButton
                onClick={() => {
                  let date = new Date();
                  product.productIDx = date.getMilliseconds();
                  addItem([...newCart, product]);
                  setToggleAdd(true);
                }}
              >
                <AddShoppingCartRoundedIcon color={'success'} />
              </IconButton>
            ) : (
              <IconButton>
                <CheckCircleRoundedIcon color={'success'} />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
