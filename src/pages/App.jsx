
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout'



import '../styles/index.css'
import HomePage from './home'
import ContactPage from './contact'
import CheckoutSuccessPage from './checkout-success'
import CheckoutPage from './checkout'
import IndividualProductPage from './individual-product'
import RouteNotFound from './route-not-found'




function App() {
  


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

export default App
 

