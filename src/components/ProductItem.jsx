import React from 'react'


export default function ProductItem(props) {
  return (
        <li className='relative'>
           <a href="#" class="block overflow-hidden group">
            {/* The hidden div */}
            {/* <div className='absolute upside hidden group-hover:block group-hover:pointer-events-auto  z-10 top-[40%] right-[35%]'>
              <button onClick={()=>{console.log("clicked on btn")}} >Add to cart</button>
            </div> */}
           <img
            src={props.image}
            alt=""
            className="h-[350px] w-full object-cover transition duration-500  group-hover:scale-105 sm:h-[300px]"
           />

           <div className="relative pt-3 bg-[#F4F5F7] dark:bg-gray-700 p-4">
             <h3
              className="text-2xl text-[#3A3A3A] dark:text-white font-semibold "
             >
              {props.title}
             </h3>

             <h3
               className="text-base text-[#898989] dark:text-white"
             >
               {props.category}
             </h3>

             <p className="mt-2">
               <span className="sr-only"> Regular Price </span>
               <span className="tracking-wider text-xl font-semibold text-[#3A3A3A] dark:text-white">${props.price}</span>
             </p>
           </div>
         </a>
        </li>
  )
}
