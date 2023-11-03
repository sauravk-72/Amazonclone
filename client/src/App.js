
import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomponent from './components/home/Maincomponent';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_signin/Sign_in';
import Sign_up from './components/signup_signin/Sign_up';
import {Routes,Route} from "react-router-dom";
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import Address from './components/address/Address';




function App() {
  return (
    <>
      <Navbaar/>
      <Newnav/>
      <Routes>
        <Route path="/" element={<Maincomponent/>}/>
        <Route path="/login" element={<Sign_in/>}/>
        <Route path="/register" element={<Sign_up/>}/>
        <Route path="/getproductsone/:id" element={<Cart/>}/>
        <Route path="/Buynow" element={<Buynow/>}/>
        <Route path="/address" element={<Address/>}/>
        
      </Routes>
     <Footer/>
     
    </>
  );
}

export default App;
