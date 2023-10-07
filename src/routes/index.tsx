import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import AppProduct from '../pages/product'
import ProductDetailPage from '../pages/productDetail'
import Cart from '../pages/cart'

export default function AppRoute() {
  return <>
  <Router>
    <Routes>
        <Route path='/' element={<AppProduct />} />
        <Route path="/:id" element={<ProductDetailPage />} />
        <Route path="cart" element={<Cart />} />
    </Routes>
  </Router>
  </>
}
