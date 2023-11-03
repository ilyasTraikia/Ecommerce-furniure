import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet ,useNavigation} from "react-router-dom";
import './App.css'
import {Toaster} from 'react-hot-toast'
import OffCanvasCartRight from '../components/OffCanvasCartRight';
import { createPortal } from 'react-dom';
import usePurchase from '../custom hooks/usePurchase';
import { useEffect } from 'react';


function App() {

  const navigation = useNavigation()
  const {totalQuantities,cartItems} = usePurchase()



  return (

    <>
    
     <div className='bg-white h-full w-full  dark:bg-gray-800 '>
      
      <Navbar totalQte = {totalQuantities} />
      <Toaster />
      {/* The OffCanvasCart */}
      {createPortal(
       <OffCanvasCartRight />,
        document.body
       )}
     
      <div className='dark:bg-gray-800'>   
       {navigation.state==='loading'? <div className="lds-ring"><div></div><div></div><div></div><div></div></div>:<Outlet/> }
      </div>

      <Footer />

   
      
      


     </div>
    </>
  )
}

export default App
