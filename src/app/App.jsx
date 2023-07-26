import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Login, Signup } from '../routes'
import Shop from '../routes/Shop'

import './App.css'


function App() {
  

  return (
    <>
    
     <div className='bg-white h-full w-full  dark:bg-gray-800 '>
      
      <Navbar />

      <Shop />

      <Footer />

   
      


     </div>
    </>
  )
}

export default App
