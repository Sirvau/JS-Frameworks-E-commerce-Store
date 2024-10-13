
import { NoPageAnimation } from "../../components/animations"
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom'; 

function RouteNotFound() {

  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

    return (
      <div className="my-20 flex flex-col justify-center items-center">
        <div>
        <NoPageAnimation/>
      <p className="text-center text-xl font-semibold">Unfortunately,</p>
      <p className="text-center text-lg font-medium mb-6 mt-2"> this page is not found.</p>
      <Button text="Return home" onClick={handleReturnHome} />
        </div>
     
      
    </div>
    )
   
  }

  export default RouteNotFound