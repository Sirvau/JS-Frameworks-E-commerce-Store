
import { Route, Routes } from 'react-router-dom'
import Layout from "../components/layout"
import HomePage from '../pages/home'
import ContactPage from '../pages/contact'
import IndividualProductPage from '../pages/individual-product'
import CheckoutPage from '../pages/checkout'
import CheckoutSuccessPage from '../pages/checkout-success'
import RouteNotFound from '../pages/route-not-found'


function RoutePaths() {
    return ( 
    <div>
         <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="individual-product" element={<IndividualProductPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes> 
    </div>
    )
  }

export default RoutePaths