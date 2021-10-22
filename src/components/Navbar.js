import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../icon/Logo.svg';
import Badge from '@mui/material/Badge';
import Bag from '../icon/bag.svg';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AllProducts from './AllProducts';
import { CartContext } from '../App';
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
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#C4F5D4',
  // '&:hover': {
  //   boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 10px',
  // },
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  width: '100%',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {
  const { state, dispatch } = React.useContext(CartContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky' sx={{ background: 'white' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '300px',
            }}
          >
            <img src={Logo} alt='Logo' />
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Link to='/cart'>
              <IconButton aria-label='cart' sx={{ margin: '16px 16px' }}>
                <Badge badgeContent={state.length} color={'error'}>
                  <img src={Bag} alt='bag' />
                </Badge>
              </IconButton>
            </Link>
            <Divider orientation='vertical' flexItem />
            <CustomButton
              variant='text'
              sx={{
                textDecoration: 'underline',
                color: '#127632',
                // backgroundColor: '#C4F5D4',
                border: '1px solid #C4F5D4',
              }}
            >
              Login
            </CustomButton>
            <Typography variant='body1' color={'black'}>
              or
            </Typography>
            <CustomButton
              variant='contained'
              sx={{ width: '140px', backgroundColor: '#C4F5D4' }}
            >
              Join Us
            </CustomButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
