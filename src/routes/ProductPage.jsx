import { ProductItem } from '../components'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import useProducts from '../custom hooks/useProducts'
import usePurchase from '../custom hooks/usePurchase'
import { useState } from 'react'
import { useRef ,useEffect} from 'react'



export async function loader({ params }) {
  // if(params.productId <= 5 ) {
  //   throw new Error("error")
  // }
  const product = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/${params.productId}`)
  return  product;
}


export default function ProductPage() {

  const  product  = useLoaderData().data
  const { products} = useProducts()
  const [found,setFound] = useState({})
  const [foundCartItem, setfoundCartItem] = useState({})
  const [cartClicked, setcartClicked] = useState(false)

 

  // Getting the purchase context
  const { incQty, decQty,qty, onAdd , OutOfStockProducts, setOutOfStockProducts,setQty,cartItems} = usePurchase()
  const [QuantityState, setQuantityState] = useState(0)
 // console.log(`Cart clicked ${cartClicked}`)
 // console.log(`found is ${JSON.stringify(found)}`)




 

 // Used to identify whenever we chose enought quantity to make the product in the outOfStock array in the context state
  useEffect(() => {
    if((product.quantity == 0 || product.quantity <= QuantityState) && cartClicked) {
      setOutOfStockProducts([...OutOfStockProducts,{id:product.id,isOutOfStock:true}])
    }
  }, [QuantityState,cartClicked])





// Used to check if the current product is in the outofStock products in the context state
  useEffect(()=> {
   setFound(OutOfStockProducts.find((item)=> {
   return( item.id == product.id )
  }))

  setfoundCartItem(cartItems.find((item)=> {
   return( item.id == product.id)
  }))

  },[])
  






  return (


     <div>
      {/* The header div */}
      <div className='w-full flex  items-center h-[100px] bg-[#F9F1E7]'>

       <div className=' ml-[30px] sm:ml-[99px] text-sm sm:text-base font-light flex space-x-4 dark:text-black'>Home <span className='ml-1 sm:ml-3 font-extrabold'>{' >'}</span> <div className='dark:text-black font-light ml-2'>Shop <span className='ml-1 sm:ml-3 dark:text-black font-extrabold'>{' >'}</span></div>   <div className='dark:text-black font-normal border-s border-[#9F9F9F] px-4 ml-2'>{product.name}</div>    </div>

      </div>


















{/* The product preview section */}
<div style={{backgroundColor:'rgba(0, 0, 0, 0)'}}>
<div className="container px-5 py-24 mx-auto" style={{cursor: 'auto'}}>
  <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://stackdiary.com/140x100.png" style={{cursor: 'auto'}}/>
    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style={{cursor: 'auto'}}>
      {/* <h2 className="text-sm title-font text-gray-500 tracking-widest" style={{cursor: 'auto'}}>ON SALE</h2> */}
      <h1 className="text-gray-900 dark:text-white text-3xl title-font font-medium mb-1" style={{cursor: 'auto'}}>{product.name}</h1>
      <h2 className="text-2xl title-font text-gray-500 dark:text-white tracking-widest" style={{cursor: 'auto'}}>${product.price}</h2>
      <div className="flex mb-4">
        {/* Reviews */}
        {/* <span className="flex items-center">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <span className="text-gray-600 ml-3">20 Reviews</span>
        </span> */}
          
     {/* Social media links */}
        {/* <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
          <a className="text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </a>
        </span> */}
      </div>
      <p className="leading-relaxed dark:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos a excepturi. Ea dolorum harum soluta adipisci non doloribus neque recusandae, iste dignissimos assumenda, quas quidem voluptates quasi, asperiores molestiae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, amet, hic qui iure rerum magnam accusamus possimus ea, consectetur numquam cum excepturi corporis aut repudiandae vero cumque reprehenderit corrupti eaque?.</p>
      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        <div className="flex">
          <span className="mr-3 dark:text-white">Color</span>
          <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
        </div>
        <div className="flex ml-6 items-center">
          <span className="mr-3 dark:text-white">Size</span>
          <div className="relative">
            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 ">
              <option>SM</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    <div className="flex">

        {/* the quantity input element */}
        <div>
          <label htmlFor="Quantity" className="sr-only dark:text-white"> Quantity </label>

          <div className="flex items-center border border-gray-200  rounded ">
            <button
              type="button"
              className=" w-5 sm:w-10 h-10 leading-10 text-gray-600 dark:bg-white transition hover:opacity-75"
              onClick={()=> { 
                setQuantityState(QuantityState -1);
                decQty() 
              }}
              disabled = { QuantityState == 0 || product.quantity == 0 }
            >
              &minus;
       
             
            </button>

            <input
              type="number"
              id="Quantity"
              value={QuantityState}
              disabled = { QuantityState == 0 }
              className={`h-10 ${ QuantityState == 0 || product.quantity == 0 ? 'text-gray-300' : 'text-black' }  w-12 sm:w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none`}
            />

           <button
             type="button"
             disabled = { (product.quantity <= QuantityState || found?.isOutOfStock || foundCartItem?.CartQuantity<= QuantityState ) }
             className="w-5 sm:w-10 h-10 leading-10 text-gray-600 dark:bg-white transition hover:opacity-75"
             onClick={()=> {
               setQuantityState(QuantityState +1);
               incQty()
               }}
           > + </button>


          
       </div>

           
    </div> 
          {/* If the product quantity becomes 0 or the product quantity becomes equalt or less to the quantityState in the toggler */}
          { (product.quantity == 0 || product.quantity <= QuantityState || found?.isOutOfStock || foundCartItem?.CartQuantity<= QuantityState ) && 
            <div className='ml-3 mr-1 mt-3 text-red-600'>
             Out of stock
            </div>   
          }
          {console.log(`product Quantity ${foundCartItem?.CartQuantity}  ++  ${QuantityState}`)}
    
        


        <button
         className="flex ml-auto text-white bg-onPrimary border-0 py-2 px-6 focus:outline-none hover:bg-onPrimaryHover rounded"
         onClick={()=> {onAdd(product,QuantityState);setcartClicked(true);setQuantityState(0);setQty(0)}}
         disabled = {(product.quantity == 0 || product.quantity < QuantityState || QuantityState == 0 || found?.isOutOfStock)}
        >Add To Cart</button>
        {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button> */}
      </div>
    </div>
  </div>
</div>
</div>











{/* The tabs htmlFor description section */}
<div className="border-b border-gray-200 dark:border-gray-700 sm:block flex flex-wrap">
  <nav className="-mb-0.5 flex justify-center space-x-6 sm:flex-row  flex-col sm:space-y-0 space-y-2" aria-label="Tabs" role="tablist">
    <button type="button" className="ml-6 text-sm md:text-2xl hs-tab-active:font-semibold hs-tab-active:border-onPrimary dark:hs-tab-active:text-white hs-tab-active:text-black py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent  whitespace-nowrap text-gray-500 hover:text-onPrimary active" id="horizontal-alignment-item-1" data-hs-tab="#horizontal-alignment-1" aria-controls="horizontal-alignment-1" role="tab">
     Description
    </button>
    <button type="button" className="text-sm md:text-2xl hs-tab-active:font-semibold hs-tab-active:border-onPrimary dark:hs-tab-active:text-white hs-tab-active:text-black py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent  whitespace-nowrap text-gray-500 hover:text-onPrimary" id="horizontal-alignment-item-2" data-hs-tab="#horizontal-alignment-2" aria-controls="horizontal-alignment-2" role="tab">
    Additional InhtmlFormation
    </button>
    <button type="button" className="text-sm md:text-2xl hs-tab-active:font-semibold hs-tab-active:border-onPrimary dark:hs-tab-active:text-white hs-tab-active:text-black py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent  whitespace-nowrap text-gray-500 hover:text-onPrimary" id="horizontal-alignment-item-3" data-hs-tab="#horizontal-alignment-3" aria-controls="horizontal-alignment-3" role="tab">
    Reviews [5]
    </button>
  </nav>
</div>


{/* 
 Tabs content */}
<div className="mt-3 border-b border-gray-200 dark:border-gray-700">
  <div className='m-auto px-[15%] py-[30px]' id="horizontal-alignment-1" role="tabpanel" aria-labelledby="horizontal-alignment-item-1">
    <p className="text-gray-500 dark:text-gray-400">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Et necessitatibus officia ipsum optio fugit eos omnis nemo. Repellat, tempore sequi assumenda enim ullam ad repudiandae consequuntur, temporibus corporis fugit in?
    </p>
    <p className="text-gray-500 dark:text-gray-400 mt-[25px]">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos a excepturi. Ea dolorum harum soluta adipisci non doloribus neque recusandae, iste dignissimos assumenda, quas quidem voluptates quasi, asperiores molestiae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, amet, hic qui iure rerum magnam accusamus possimus ea, consectetur numquam cum excepturi corporis aut repudiandae vero cumque reprehenderit corrupti eaque?
    </p>
  </div>
  <div  id="horizontal-alignment-2" className="hidden m-auto px-[15%] py-[30px]" role="tabpanel" aria-labelledby="horizontal-alignment-item-2">
    <p className="text-gray-500 dark:text-gray-400">
      This is the <em className="font-semibold text-gray-800 dark:text-gray-200">second</em> item's tab body.
    </p>
  </div>
  <div id="horizontal-alignment-3" className="hidden m-auto px-[15%] py-[30px]" role="tabpanel" aria-labelledby="horizontal-alignment-item-3">
    <p className="text-gray-500 dark:text-gray-400">
      This is the <em className="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab body.
    </p>
  </div>
</div>




 




     {/* Related Products section */}
     <div className='mt-[56px] flex flex-col space-y-2 justify-center items-center pb-12'>
        <p className=' text-2xl sm:text-4xl  text-brandGray dark:text-white font-bold'>Related Products</p>
        


        {/* Product list */}
        

         <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-4 lg:px-8 ">
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
