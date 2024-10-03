import React from 'react';
import { ShoppingSuccessAnimation } from '../../components/animations';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom'; 





function CheckoutSuccessPage() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

    return ( 
      <div className="container flex flex-col items-center justify-center">
        <div className="w-full h-auto mb-4"><ShoppingSuccessAnimation/></div> 
          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl uppercase">Shopped and paid,</h1>
            <p className="lg:text-xl font-medium mt-2 lg:mt-4 mb-8 lg:mb-12">Soon packed and delivered!</p>
            <Button text="Return Home" onClick={handleReturnHome} />
          </div>
      </div>
    );
}

export default CheckoutSuccessPage;
