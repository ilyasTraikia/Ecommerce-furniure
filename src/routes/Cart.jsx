import React from 'react'
import { shopBackground,Syltherine,shipping,support,trophy,warranty } from '../assets'
import usePurchase from '../custom hooks/usePurchase'
import { axiosPrivate,axiosPrivateTwo } from '../api/axios'
import toast from 'react-hot-toast'
import axios from 'axios'


export default function Cart() {

  

    const {totalPrice,cartItems,totalQuantities,onRemove} = usePurchase()

    console.log(`in the Cart page ,  ${JSON.stringify(cartItems)}`)


    // const handleCheckout = async () => {

    //    try {
    //     const response = await axiosPrivate.post('/create-checkout-session', {
    //       CartItems :  JSON.stringify(cartItems)
    //     })

    //     if(response.statusCode === 500) return

    //     const data = JSON.stringify(response)

    //     console.log(`data is  ${data.data}`)

    //     toast.loading('Redirecting...')

    //     // stripe.redirectToCheckout({sessionId: })

    //    } catch(err) {
    //      console.log(`error is ${err}`)
    //    }
       

    // }

    


  return (
    <div>



               {/* header component */}
               <div className='relative text-black text-center'>

                   <img className='w-full h-auto' src={shopBackground} alt="shopBackground" />
                   <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col space-y-1 sm:space-y-4'>
                     <div className=' text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium dark:text-white'>Cart</div>
                     <div className=' text-sm sm:text-base font-medium flex space-x-4 dark:text-white'>Home {' >'} <div className='dark:text-white font-light ml-2'>Cart</div></div>
                   </div>

              </div>  









               {/* The cart Componenet */}
              <div>



              <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-3xl">

    {
      cartItems.length < 1 
      ? <div>
       Your cart is currently empty.
      </div>
      : 
      <div className="mt-8">
       <ul className="space-y-4">
        {
          cartItems.map((product,index)=> {
            return(

          <li className="flex items-center gap-4" key={index}>
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt="product"
                className="h-20 w-20 rounded object-cover"
              />
    
              <div>
                <h3 className="text-lg text-gray-900 dark:text-gray-100">{product.name}</h3>
                
    
                <dl className="mt-0.5 space-y-px text-[15px] text-gray-600 dark:text-gray-400">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>
    
                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
    
              <div className="flex flex-1 items-center justify-end gap-2">
                <div className='dark:text-gray-300'>${product.price}</div>
                <form>
                  <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>
    
                  <input
                    type="number"
                    min="1"
                    value={product.CartQuantity}
                    id="Line1Qty"
                    className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </form>
    
                <button
                className="text-gray-600 dark:text-gray-200 transition hover:text-red-600" 
                onClick={()=> { onRemove(product)}}
                >
                  <span className="sr-only">Remove item</span>
    
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
















            )
          })
        }
     

      
     



      </ul>

      <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
        <div className="w-screen max-w-lg space-y-4">
          <dl className="space-y-0.5 text-sm text-gray-700 dark:text-gray-200">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>${totalPrice}</dd>
            </div>

            <div className="flex justify-between">
              <dt>VAT</dt>
              <dd>$0</dd>
            </div>

            <div className="flex justify-between">
              <dt>Discount</dt>
              <dd>$0</dd>
            </div>

            <div className="flex justify-between !text-base font-medium">
              <dt>Total</dt>
              <dd>${totalPrice}</dd>
            </div>
          </dl>

        

          <div className="flex justify-end">
            {/* <button
               onClick={handleCheckout}
              className="block rounded bg-onPrimary px-5 py-3 text-sm text-gray-100 transition hover:bg-onPrimaryHover"
            >
              Checkout
            </button> */}
            <form action="https://localhost:7269/create-checkout-session" method="POST" enctype="application/x-www-form-urlencoded" >

          
               {/* Add hidden input fields for each item in the cart */}
               <input type="hidden" name="cartProducts" value={JSON.stringify(cartItems)} />
               <input type="hidden" name="test" value="testValue" />


              <button 
              type="submit"
              className="block rounded bg-onPrimary px-5 py-3 text-sm text-gray-100 transition hover:bg-onPrimaryHover"
              >
                Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

      
      }
    

    
    </div>
  </div>
</section>

































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
