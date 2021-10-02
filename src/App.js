import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
const theme = createTheme({
  typography: {
    fontFamily: 'Athiti',
  },
});

function App() {
  const [cart, setCart] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    let total = 0;
    cart.map((el, index) => {
      total += el.productPrice * el.quantity;
    });
    setTotalPrice(total);
    console.log(totalPrice);
  }, [cart]);

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar cartItems={cart} />
          <Switch>
            <Route exact path='/'>
              <Home
                cart={cart}
                setCart={setCart}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
              {/* {console.log(cart)} */}
            </Route>
            {/* <Route path='/about'>
              <About />
            </Route> */}
            <Route path='/cart'>
              <Cart
                cartItems={cart}
                setCart={setCart}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            </Route>
          </Switch>
          {/* <Footer /> */}
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
