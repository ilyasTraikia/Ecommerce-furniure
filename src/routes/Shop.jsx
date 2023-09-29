import React, { useEffect, useState } from 'react'
import { shopBackground,Syltherine,shipping,support,trophy,warranty } from '../assets'
import { Filter,ProductItem } from '../components'
import { useLocation,useNavigate} from "react-router-dom";
import useAxiosPrivate from '../custom hooks/useAxiosPrivate';










export default function Shop() {


  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  



  useEffect(() => {

    let isMounted = true;
    const controller = new AbortController();

    const getProducts = async () => {
        try {
     
            const response = await axiosPrivate.get('/api/products', {
                signal: controller.signal
            });
    
            isMounted && setProductsData(response.data);
            isMounted && setProducts(response.data);
        } catch (err) {
            console.error(err);
            navigate('/login', { state: { from: location }, replace: true });
        }
    }

    getProducts();

    return () => {
      isMounted = false
      isMounted && controller.abort()
    }
}, [])


  const [productsData, setProductsData] = useState([{}]);
  const [products,setProducts] = useState(productsData)


  const [currentPage,setCurrentPage] = useState(1)
  const NumberOfProductsPerPage = 8
  const numberOfPages = Math.ceil(productsData.length / NumberOfProductsPerPage)
  const pages = Array.from({length: numberOfPages}, (_, i) => i + 1)




 // useEffect hook to initialize the array to display the first elements of the page
  useEffect(()=> {
    setProducts( products.slice((currentPage*NumberOfProductsPerPage - NumberOfProductsPerPage)   ,  (  currentPage * NumberOfProductsPerPage )))
  },[])



  // a function to handle slicing the array based on the number that was clicked on in the pagination
  const handlePaginationClick = (e,element)=> {
    setCurrentPage(element)
    setProducts(productsData.slice(  (element*NumberOfProductsPerPage - NumberOfProductsPerPage)   ,  (  element * NumberOfProductsPerPage )))
  }



 


  return (
    <div>
     {/* header component */}
     <div className='relative text-black text-center'>

      <img className='w-full h-auto' src={shopBackground} alt="shopBackground" />
      <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col space-y-1 sm:space-y-4'>
        <div className=' text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium dark:text-white'>Shop</div>
        <div className=' text-sm sm:text-base font-medium flex space-x-4 dark:text-white'>Home {' >'} <div className='dark:text-white font-light ml-2'>Shop</div></div>
      </div>

     </div>
    

    {/* filter component */}
    <Filter />


    {/* Products with pagination */}
    <div>
         {/* Products */}
         <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 ">
           <ul className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
 
            {  
              products.map((element,index)=> {
          
            
                return (
                <div key={index}><ProductItem   product={element} /></div>
                )
              })    
            }
      
           </ul>
         </div>


         {/* Pagination */}
          <nav className="flex justify-center items-center space-x-2">
            
            {/* The back button */}
            {/* A conditional rendering on the back button to determine when to disable it */}
            {  currentPage == pages[0] ?  
                    <button disabled className="text-gray-500 disabled:text-gray-300 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" href="#">
                     <span aria-hidden="true">«</span>
                     <span className="sr-only">Previous</span>
                   </button>

                   : 


                   <button onClick={(e)=> {
                    handlePaginationClick(e,currentPage-1)
                   }}  className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" href="#">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </button>
            }
           





            {/* Pagination numbers mapping with a condition rendering to determine when to disable a number */}
            {pages.map((element,index)=> {
              if(element == currentPage) {

             

                return(<button disabled key={index}  onClick={(e)=> {
                  handlePaginationClick(e,element)
  
                }} className="w-10 h-10 bg-onPrimary  disabled:text-gray-300  text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full">{element}</button>)

              } else {

          

                return(<button  onClick={(e)=> {
                  handlePaginationClick(e,element)
  
                }} className="w-10 h-10  text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full">{element}</button>)

              }
             
            })}
          







            {/* Conditional rendering on the next button to determine when to disable it in this case when the currenge pages is equal to the number of pages  */}
            {
              currentPage == pages.length ?
               <button disabled className="text-gray-500 disabled:text-gray-300 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" >
                <span className="sr-only">Next</span>
                <span aria-hidden="true">»</span>
              </button> 


                  :    



              <button  onClick={(e)=> {
                handlePaginationClick(e,currentPage+1)
              }} className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" >
                <span className="sr-only">Next</span>
                <span aria-hidden="true">»</span>
              </button>
            }

          
          </nav>

     </div>





      {/* The featured section */}
     <div className=' h-[520px] lg:h-[270px] bg-primary  mt-[70px] grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10 lg:gap-y-0 lg:grid-cols-4 justify-center content-center px-4 sm:px-10 py-2'>

      <div className='flex h-16 flex-row space-x-[13px]'>
        <img width='60px' height='60px' src={trophy} alt="trophy" />
        <div className='flex flex-col space-y-1'>
          <div className=' text-xl sm:text-2xl font-semibold text-[#242424]'>High Quality</div>
          <div className='font-medium text-xl text-[#898989]'>crafted from top materials</div>
        </div>
      </div>




      <div className='flex h-16 flex-row space-x-[13px]'>
        <img width='60px' height='60px' src={warranty} alt="warranty" />
        <div className='flex flex-col space-y-1'>
          <div className='text-xl sm:text-2xl font-semibold text-[#242424]'>Warranty Protection</div>
          <div className='font-medium text-xl text-[#898989]'>Over 2 years</div>
        </div>
      </div>





      <div className='flex h-16 flex-row space-x-[13px]'>
        <img width='60px' height='60px' src={shipping} alt="shipping" />
        <div className='flex flex-col space-y-1'>
          <div className='text-xl sm:text-2xl font-semibold text-[#242424]'>Free Shipping</div>
          <div className='font-medium text-xl text-[#898989]'>Order over 150 $</div>
        </div>
      </div>





      <div className='flex h-16 flex-row space-x-[13px]'>
        <img width='60px' height='60px' src={support} alt="support" />
        <div className='flex flex-col space-y-1'>
          <div className='text-xl sm:text-2xl font-semibold text-[#242424]'>24 / 7 Support</div>
          <div className='font-medium text-xl text-[#898989]'>Dedicated support</div>
        </div>
      </div>










     </div>











    </div>
  )
}
