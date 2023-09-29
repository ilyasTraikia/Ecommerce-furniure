import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom";

import './App.css'


function App() {
  

  return (
    <>
    
     <div className='bg-white h-full w-full  dark:bg-gray-800 '>
      
      <Navbar />
      
      <div className='dark:bg-gray-800'>   
       <Outlet  />
      </div>

      <Footer />

   
      


     </div>
    </>
  )
}

export default App
