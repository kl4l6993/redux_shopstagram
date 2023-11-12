import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Payment from './pages/Payment';
import Pnf from './components/Pnf';



function App() {
  return (
    <div className="App">
      
      <Header />
      {/* since we are using more than one route, we need to wrap both route with routes. */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
        <Route path='/payment' element={<Payment></Payment>}></Route>
        <Route path='*' element={<Pnf></Pnf>}></Route>
      </Routes>     
      <Footer />
    
    </div>
  );
}

export default App;

