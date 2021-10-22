import './App.css';
import './styles.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { reducer, initialState } from './reducers/cartReducers';
import Checkout from './pages/Checkout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#127236',
    },
  },
  typography: {
    fontFamily: "'Athiti',sans-serif",
  },
});

export const CartContext = React.createContext();

const Routing = () => {
  const { state, dispatch } = React.useContext(CartContext);
  const [totalPrice, setTotal] = React.useState(0);
  React.useEffect(() => {
    console.log('Cart', state);
    setTotal(
      state.reduce(
        (n, { productPrice, quantity }) => n + productPrice * quantity,
        0
      )
    );
  }, [state]);
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      {/* <Route path='/about'>
  <About />
</Route> */}
      <Route path='/cart'>
        <Cart summary={totalPrice} />
      </Route>
      <Route path='/checkout'>
        <Checkout summary={totalPrice} />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <CartContext.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <Routing />
            <Footer />
          </Router>
        </ThemeProvider>
      </CartContext.Provider>
    </>
  );
}

export default App;
