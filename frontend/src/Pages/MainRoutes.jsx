import React from 'react'
import { Route,Routes } from 'react-router-dom'
import BestDeals from './BestDeals'
import CartButton from './CartButton'
import Checkout from './Checkout'


import FlashRecords from './FlashRecords'
import New from './New'
import ShopByBrands from './ShopByBrands'
import Trend from './Trend'
const MainRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/cartbutton" element={<CartButton/>}></Route>
        <Route path="/flash" element={<FlashRecords/>} ></Route>
        <Route path="/bestdeals"  element={<BestDeals/>} ></Route>
        <Route path='/trend' element={<Trend/>} ></Route>
        <Route path='/new' element={<New/>} ></Route>
        <Route path='/shopbybrands' element={<ShopByBrands/>} ></Route>
        <Route path='/checkout' element={<Checkout/>} ></Route>


    </Routes>
      
    </div>
  )
}

export default MainRoutes
