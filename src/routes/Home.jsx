import React from 'react'
import { plantBackground,bedroom,dining,livingRoom,Syltherine } from '../assets'
import { products } from '../data/products'
import { ProductItem } from '../components'

export default function Home() {
  return (
    <div className='relative'>

       {/* background image */}
      <img className='w-full h-auto' src={plantBackground} alt="plant background"/>



       {/* card */}
      <div className='absolute mx-2 top-[1%] lg:top-[150px] right-[11%] lg:right-[50px]'> 
       <div className="flex flex-col bg-primary max-w-[20rem] lg:max-w-[37rem] lg:pt-6 border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        
         <div className="p-4 md:p-7">
           <p className=' text-sm lg:text-base font-semibold text-[#333333] dark:text-white'>New Arrival</p>

           <h3 className="text-xl lg:text-5xl font-bold text-onPrimary dark:text-white">
           Discover Our New Collection
           </h3>
          <p className="mt-3 text-[#333333] text-base lg:text-lg dark:text-gray-400">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <a className="mt-2 mb-2 lg:mt-8 lg:mb-6 w-[200px] h-[40px] lg:h-[70px] py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-onPrimary text-white hover:bg-onPrimaryHover focus:outline-none focus:ring-2 focus:ring-onPrimaryHover focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
            BUY NOW
          </a>
         </div>
       </div>
      </div>


      {/* Browse range section */}
      <div className=' mt-[270px] md:mt-[56px] flex flex-col space-y-[60px] justify-center items-center'>
       {/* The text */}
        <div className='text-center'>
         <p className='text-3xl text-brandGray dark:text-white font-bold'>Browse The Range</p>
         <p className='text-brandGrayLight dark:text-gray-400 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>




        <div className='flex flex-col mx-2 md:flex-row space-y-4 md:space-y-0 md:space-x-5'>
          <div className='flex flex-col space-y-7 items-center'>
             <img src={dining} alt="dining" />
             <p className='font-semibold text-2xl text-brandGray dark:text-white'>Dining</p>
          </div>

          <div className='flex flex-col space-y-7 items-center'>
             <img src={livingRoom} alt="livingroom" />
             <p className='font-semibold text-2xl text-brandGray dark:text-white'>Living</p>
          </div>

          <div className='flex flex-col space-y-7 items-center'>
             <img src={bedroom} alt="bedroom" />
             <p className='font-semibold text-2xl text-brandGray dark:text-white'>Bedroom</p>
          </div>

        </div>

      </div>


      {/* Products section */}
      <div className='mt-[100px] flex flex-col space-y-8 justify-center items-center pb-12'>
        <p className='text-4xl text-brandGray dark:text-white font-bold'>Our Products</p>
        


        {/* Product list */}
        

         <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-5 lg:px-8 ">
           <ul className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
 
            {  
              products.map((element,index)=> {
                return (
                 <ProductItem key={index} product={element} />
                )
              })    
            }
      
           </ul>
         </div>

      {/* Show more button */}
      <button type="button" className="py-3   px-4 w-[245px] inline-flex justify-center items-center gap-2 rounded-md border-2 border-onPrimary font-semibold text-onPrimary hover:text-white hover:bg-onPrimary hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800">
       Show More
      </button>



      </div>




    </div>
  )
}
