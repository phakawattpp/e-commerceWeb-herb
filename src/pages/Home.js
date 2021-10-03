import React from 'react';
import ImgSlider from '../components/ImgSlider';
import ItemBox from '../components/ItemBox';
import Paper from '@mui/material/Paper';
import { Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Categories from '../components/Categories';
import Divider from '@mui/material/Divider';
import AllProducts from '../components/AllProducts';
const CustomButton = styled(Button)(({ theme }) => ({
  width: '120px',
  height: '48px',
  margin: '16px 16px',
  border: 'none',
  color: 'black',
  '&:hover': {
    backgroundColor: '#127632',
    color: 'white',
  },
  position: 'relative',
}));
export default function Home({ cart, setCart, totalPrice, setTotalPrice }) {
  const [tabs, setTabs] = React.useState('All');

  return (
    <>
      {/* <ImgSlider /> */}
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: 'calc(100% - 128px)',
            margin: '32px',
            padding: '32px',
          }}
        >
          <Typography variant='h2' sx={{ textAlign: 'center' }}>
            This week best deals
          </Typography>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <ItemBox productType={'Healthy'} />
            </Grid>
            <Grid item xs={6}>
              <ItemBox productType={'All'} />
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction='row'
            sx={{ margin: '24px' }}
          >
            <ItemBox productType={'All'} />
            <ItemBox productType={'Deal'} />
            <ItemBox productType={'Healthy'} />
            <ItemBox productType={'All'} />
          </Grid>
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <CustomButton
              variant='contained'
              sx={{ width: '140px', backgroundColor: '#C4F5D4' }}
            >
              More
            </CustomButton>
          </Grid>
        </Paper>
      </div> */}

      {/* Our products Section */}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: 'calc(100% - 128px)',
            margin: '32px',
            padding: '32px',
            backgroundColor: '#ECFCF1',
          }}
        >
          <Typography variant='h2' sx={{ textAlign: 'center' }}>
            Our Products
          </Typography>
          {/* <Grid
            container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '16px',
            }}
          >
            <Typography variant='h6' sx={{ textAlign: 'center' }}>
              Categories
            </Typography>
            <Divider orientation='vertical' flexItem>
              {' '}
              -{' '}
            </Divider>
            <Categories setTabs={setTabs} />
          </Grid> */}
          <AllProducts
            type={tabs}
            cart={cart}
            setCart={setCart}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        </Paper>
      </div>
    </>
  );
}
