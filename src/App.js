import './App.css';
import Footer from './Components/footer/Footer';
import Navbaar from './Components/header/Navbaar';
import Maincomp from './Components/home/Maincomp';
import Newnav from './Components/newnav/Newnav';
import SignUp from './Components/signup_signin/SignUp';
import Sign_in from './Components/signup_signin/Sign_in';
import { Routes , Route } from 'react-router-dom';
import Cart from './Components/cart/Cart';


function App() {
  return (
    <>
        <Navbaar/>
        <Newnav/>
        <Routes>
            <Route path='/' element={<Maincomp/>} />
            <Route path='/login' element={<Sign_in/>} />
            <Route path='/register' element={<SignUp/>} />
            <Route path='/cart' element={<Cart/>} />            
        </Routes>        
        <Footer/>
    </>
  );
}

export default App;
