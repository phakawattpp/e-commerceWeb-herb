import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import { TextField, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WesternUnion from '../icon/Western-union.svg';
import MasterCard from '../icon/Mastercard.svg';
import Paypal from '../icon/Paypal.svg';
import Visa from '../icon/Visa.svg';
const CustomButton = styled(Button)(({ theme }) => ({
  width: '100px',
  height: '36px',
  margin: '16px 16px',
  border: 'none',
  color: 'black',
  backgroundColor: '#127632',
  '&:hover': {
    backgroundColor: '#127632',
    color: 'white',
  },
  position: 'relative',
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  // width: '100%',
  height: '240px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '64px',
}));

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '16px',
}));

export default function Footer() {
  return (
    <CustomPaper>
      <CustomBox>
        <Typography variant='h5'>About us</Typography>
        <Typography variant='subtitle1'>Join the world of HERB</Typography>
        <Typography variant='subtitle2'>Make our life complete.</Typography>
      </CustomBox>
      <CustomBox>
        <Typography variant='h5'>Support</Typography>
        <Link to='/'>Contact us</Link>
      </CustomBox>
      <CustomBox>
        <Typography variant='h5'>Follow us</Typography>
        <Typography variant='subtitle1'>
          Enter your email to subscribe information.
        </Typography>

        <TextField
          sx={{ backgroundColor: '#ffffff' }}
          variant='outlined'
          placeholder='Your Email'
        />
        <CustomButton>Join</CustomButton>
        <IconBox>
          <IconButton
            sx={{
              '&:hover': {
                color: '#DB4437',
              },
            }}
          >
            <GoogleIcon />
          </IconButton>
          <IconButton
            sx={{
              '&:hover': {
                color: '#1DA1F2',
              },
            }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            sx={{
              '&:hover': {
                color: '#4267B2',
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{
              '&:hover': {
                color: '#cd486b',
              },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </IconBox>
        <IconBox>
          <img src={WesternUnion} alt='western' />
          <img src={MasterCard} alt='mastercard' />
          <img src={Paypal} alt='paypal' />
          <img src={Visa} alt='visa' />
        </IconBox>
      </CustomBox>
    </CustomPaper>
  );
}
