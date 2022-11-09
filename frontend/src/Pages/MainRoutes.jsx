import React from 'react'
import { Route,Routes } from 'react-router-dom'
import BestDeals from './BestDeals'


import FlashRecords from './FlashRecords'
const MainRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/flash" element={<FlashRecords/>} ></Route>
        <Route path="/bestdeals"  element={<BestDeals/>} ></Route>
        
    </Routes>
      
    </div>
  )
}

export default MainRoutes
