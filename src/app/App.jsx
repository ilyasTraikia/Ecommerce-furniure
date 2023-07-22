import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Home from '../routes/Home'
import './App.css'


function App() {
  

  return (
    <>
    
     <div className='bg-white dark:bg-gray-800'>
      
      <Navbar />

      <Home />

      <Footer />
      


     </div>
    </>
  )
}

export default App
