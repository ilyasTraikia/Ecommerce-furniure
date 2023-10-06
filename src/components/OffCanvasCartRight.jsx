import React from 'react'
import { NavLink } from 'react-router-dom'
import usePurchase from '../custom hooks/usePurchase'

export default function OffCanvasCartRight() {


  const { totalPrice, cartItems, totalQuantities, qty } = usePurchase()


  return (

    <div id="hs-overlay-right" className="hs-overlay overflow-y-auto hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-xs w-full w-full z-[60] bg-white border-l dark:bg-gray-800 dark:border-gray-700 hidden" tabIndex="-1">
      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 className="font-bold text-gray-800 dark:text-white">
          Shopping Cart
        </h3>
        <button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-overlay-right">
          <span className="sr-only">Close modal</span>
          <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div className="p-4 ">
        <div className="text-gray-800 dark:text-gray-400 mr-4   ">

          {/* The Cart content */}
          {/* Checking if the cart is empty show a text else show the content */}
          {
            cartItems?.length < 1
              ? <div>
                Your cart is currently empty.
              </div>
              : <div
                className="relative   max-w-sm py-8 "
                aria-modal="true"
                role="dialog"
                tabIndex="-1"
              >


                <div className="mt-4 space-y-6 ">
                  <ul className="space-y-4 ">
                    {cartItems.map((product, index) => {
                      return (
                        <li key={index} className="flex items-center justify-between ">
                          <div className='flex items-center gap-4'>
                            <img
                              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                              alt=""
                              className="h-16 w-16 rounded object-cover"
                            />

                            <div>
                              <h3 className="text-[16px] text-gray-900 dark:text-gray-100">{product?.name}</h3>

                              <dl className="mt-0.5 space-y-px text-[14px] text-gray-600 dark:text-gray-400">
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
                          </div>


                          <div className='flex flex-col'>
                            <div>${product?.price}</div>
                            <div>X {product.CartQuantity}</div>
                          </div>
                        </li>

                      )
                    })}

                  </ul>










                  <div className='flex flex-row justify-between pt-[50px]'>
                    <div className='font-bold text-lg dark:text-white'>Subtotal</div>
                    <div className='dark:text-white text-lg'>${totalPrice}</div>
                  </div>










                  <div className="space-y-4 text-center">
                    <NavLink
                      to="/cart"
                      data-hs-overlay="#hs-overlay-right"
                      className="block rounded border border-gray-600 dark:border-gray-300 px-5 py-3 text-sm text-gray-600 dark:text-gray-200 transition hover:ring-1 hover:ring-gray-400"
                    >
                      View my cart ({totalQuantities})
                    </NavLink>

                    <a
                      href="#"
                      className="block rounded bg-onPrimary px-5 py-3 text-sm text-gray-100 transition hover:bg-onPrimaryHover"
                    >
                      Checkout
                    </a>

                    <button

                      data-hs-overlay="#hs-overlay-right"
                      className="inline-block text-sm  text-gray-800 dark:text-white underline underline-offset-4 transition "
                    >
                      Continue shopping
                    </button>
                  </div>
                </div>
              </div>




          }














































        </div>
      </div>
    </div>



  )
}
