import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Navcomp from './components/Carousel/Navbar/Navcomp';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Cart from './Pages/Cart';
import Productdetails from './Pages/Productdetails';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <Navcomp></Navcomp>
    <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/home' element={<Home></Home>}> </Route>
      <Route path='/about' element={<About></About>}> </Route>
      <Route path='/shop' element={<Shop></Shop>}> </Route>
      <Route path='/product' element={<Product></Product>}> </Route>
      <Route path='/home/:productId' element={<Productdetails></Productdetails>}></Route>
      <Route path='/contact' element={<Contact></Contact>}> </Route>
      <Route path='/login' element={<Login></Login>}> </Route>
      <Route path='/signup' element={<SignUp></SignUp>}> </Route>
      <Route path='/cart' element={<Cart></Cart>}> </Route>
    </Routes>
    
    </BrowserRouter>
    </CartProvider>
    </div>
   
  );
}

export default App;
