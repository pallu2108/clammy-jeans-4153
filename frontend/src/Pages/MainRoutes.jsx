
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Homemid from '../Components/HomePageMid/Homemid';
import Navbar from '../Components/Navbar/Navbar';
import BestDeals from './BestDeals';
import CartButton from './CartButton';
import Category from './Category';
import Checkout from './Checkout';
import Editcart from './Editcart';


import FlashRecords from './FlashRecords';
import Login from './Login';
import Modala from './Modal';
import Modal from './Modal';
import New from './New';
import ShopByBrands from './ShopByBrands';
import SinglePage from './SinglePage';
import Success from './Success';
import Trend from './Trend';

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homemid/>}></Route>
        <Route path="/cartbutton" element={<CartButton />}></Route>
        <Route path="/flash" element={<FlashRecords />}></Route>
        <Route path="/bestdeals" element={<BestDeals />}></Route>
        <Route path="/trend" element={<Trend />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route
          path="/shopbybrands"
          element={<ShopByBrands />}
        ></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path='/category' element={<Category/>}> </Route>
        <Route path="/editcart" element={<Editcart/>}></Route>
        <Route path='/modal' element={<Modala/>}> </Route>
        <Route path="/success" element={<Success/>} ></Route>
        <Route path="/single/:id" element={<SinglePage/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default MainRoutes;
