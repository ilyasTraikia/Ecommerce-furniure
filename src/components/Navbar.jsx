import React from 'react'
import { logo, logout, user, wallet,favorites} from '../assets'
import { NavLink } from 'react-router-dom'
import useAuth from '../custom hooks/useAuth'

export default function Navbar({totalQte}) {


 // Getting the auth global state from the context
 const {auth, setAuth} = useAuth()



  return (



<header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
  <nav className="max-w-[85rem] w-full mx-auto px-2 lg:flex sm:items-center lg:justify-between" aria-label="Global">
    {/* Logo */}
    <div className="flex items-center content-center justify-between">
      <a className="inline-flex items-center gap-x-2 text-3xl font-semibold dark:text-white" href="#">
        <img className="w-10 h-auto" src={logo} alt="Logo" />
        Brand
      </a>
      <div className="lg:hidden">
        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-image-and-text-2 " aria-controls="navbar-image-and-text-2 " aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>



   {/* pages */}
    <div id="navbar-image-and-text-2" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block mt-6 lg:mt-0">
      <div className="flex flex-col gap-10 mt-5 lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:pl-5">
        <NavLink to="/" className="font-medium text-onPrimary text-base"  aria-current="page">Home</NavLink>
        <NavLink to="/shop" className="font-medium text-gray-600  dark:text-gray-400 hover:text-onPrimaryHover text-base" >Shop</NavLink>
        <NavLink to="/About" className="font-medium text-gray-600  dark:text-gray-400 hover:text-onPrimaryHover text-base" href="#">About</NavLink>
        <NavLink to="/Contact" className="font-medium text-gray-600  dark:text-gray-400 hover:text-onPrimaryHover text-base" href="#">Contact</NavLink>
      </div>
    </div>


   {/* Options */}
    <div id="navbar-image-and-text-2" className="hs-collapse hidden  transition-all duration-300 basis-full grow lg:block mt-6 lg:mt-0">
      <div className="flex flex-col gap-5 mt-5 lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:pl-1">


     
       

        {
          !auth?.accessToken 
            ?   <>
                       <NavLink
                         className="block rounded-md bg-onPrimary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-onPrimaryHover"
                         to="/login"
                       >
                         Login
                       </NavLink>
      
                       <NavLink
                        className="block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-onPrimary transition hover:text-onPrimaryHover"
                         to="/register"
                       >
                         Register
                      </NavLink>
                </>
            : <>
                {/* the user Icon */}
                 <button className="font-medium dark:fill-gray-400  hover:fill-onPrimary"  aria-current="page">
                   <svg width="24" height="20" viewBox="0 0 24 20"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.3333 10V4.16669H23.6666V11.1667H21.3333M21.3333 15.8334H23.6666V13.5H21.3333M9.66665 11.1667C12.7816 11.1667 19 12.73 19 15.8334V19.3334H0.333313V15.8334C0.333313 12.73 6.55165 11.1667 9.66665 11.1667ZM9.66665 0.666687C10.9043 0.666687 12.0913 1.15835 12.9665 2.03352C13.8416 2.90869 14.3333 4.09568 14.3333 5.33335C14.3333 6.57103 13.8416 7.75802 12.9665 8.63319C12.0913 9.50836 10.9043 10 9.66665 10C8.42897 10 7.24198 9.50836 6.36682 8.63319C5.49164 7.75802 4.99998 6.57103 4.99998 5.33335C4.99998 4.09568 5.49164 2.90869 6.36682 2.03352C7.24198 1.15835 8.42897 0.666687 9.66665 0.666687ZM9.66665 13.3834C6.20165 13.3834 2.54998 15.0867 2.54998 15.8334V17.1167H16.7833V15.8334C16.7833 15.0867 13.1316 13.3834 9.66665 13.3834ZM9.66665 2.88335C9.01687 2.88335 8.3937 3.14148 7.93424 3.60094C7.47477 4.06041 7.21665 4.68357 7.21665 5.33335C7.21665 5.98313 7.47477 6.6063 7.93424 7.06577C8.3937 7.52523 9.01687 7.78335 9.66665 7.78335C10.3164 7.78335 10.9396 7.52523 11.3991 7.06577C11.8585 6.6063 12.1166 5.98313 12.1166 5.33335C12.1166 4.68357 11.8585 4.06041 11.3991 3.60094C10.9396 3.14148 10.3164 2.88335 9.66665 2.88335Z" />
                   </svg>
                 </button>

              
              </>
        }
        {/* If the user is not logged in we show this 2 buttons instead of the user icon */}
       

      

        {/* The Cart Icon */}
        <button  className="font-medium relative   dark:fill-gray-400  hover:fill-onPrimary badgeIcon " data-hs-overlay="#hs-overlay-right">
         <svg width="26" height="25" viewBox="0 0 26 23" xmlns="http://www.w3.org/2000/svg" >
          <path d="M24.2355 16.1926H7.95234L8.76991 14.5273L22.3543 14.5027C22.8137 14.5027 23.2074 14.1746 23.2894 13.7207L25.1707 3.19062C25.2199 2.91445 25.1461 2.63008 24.9656 2.41406C24.8764 2.30775 24.7652 2.22211 24.6396 2.16309C24.514 2.10407 24.377 2.07308 24.2383 2.07227L6.95702 2.01484L6.80937 1.32031C6.7164 0.877344 6.31718 0.554688 5.86328 0.554688H1.63867C1.38267 0.554688 1.13716 0.656381 0.956142 0.837398C0.775125 1.01841 0.673431 1.26393 0.673431 1.51992C0.673431 1.77592 0.775125 2.02143 0.956142 2.20245C1.13716 2.38346 1.38267 2.48516 1.63867 2.48516H5.08124L5.72656 5.55312L7.31523 13.2449L5.26992 16.5836C5.1637 16.727 5.09972 16.8972 5.08523 17.075C5.07073 17.2528 5.10629 17.4312 5.18788 17.5898C5.35195 17.9152 5.68281 18.1203 6.04921 18.1203H7.7664C7.40032 18.6065 7.20258 19.1988 7.20312 19.8074C7.20312 21.3551 8.46093 22.6129 10.0086 22.6129C11.5562 22.6129 12.8141 21.3551 12.8141 19.8074C12.8141 19.1977 12.6117 18.6043 12.2508 18.1203H16.6559C16.2898 18.6065 16.092 19.1988 16.0926 19.8074C16.0926 21.3551 17.3504 22.6129 18.898 22.6129C20.4457 22.6129 21.7035 21.3551 21.7035 19.8074C21.7035 19.1977 21.5012 18.6043 21.1402 18.1203H24.2383C24.7687 18.1203 25.2035 17.6883 25.2035 17.1551C25.2019 16.8994 25.0993 16.6546 24.9179 16.4743C24.7366 16.294 24.4913 16.1927 24.2355 16.1926ZM7.35898 3.91797L23.1035 3.96992L21.5613 12.6051L9.19374 12.627L7.35898 3.91797ZM10.0086 20.6715C9.53281 20.6715 9.14452 20.2832 9.14452 19.8074C9.14452 19.3316 9.53281 18.9434 10.0086 18.9434C10.4844 18.9434 10.8726 19.3316 10.8726 19.8074C10.8726 20.0366 10.7816 20.2564 10.6196 20.4184C10.4575 20.5805 10.2378 20.6715 10.0086 20.6715ZM18.898 20.6715C18.4223 20.6715 18.034 20.2832 18.034 19.8074C18.034 19.3316 18.4223 18.9434 18.898 18.9434C19.3738 18.9434 19.7621 19.3316 19.7621 19.8074C19.7621 20.0366 19.6711 20.2564 19.509 20.4184C19.347 20.5805 19.1272 20.6715 18.898 20.6715Z" />
         </svg>
         <span className="absolute top-[16px]  right-[0px] inline-flex items-center  px-1.5 rounded-full text-[10px] font-medium transform -translate-y-1/2 translate-x-1/2 bg-rose-500 text-white">{totalQte}</span>
        </button>

     

       { auth?.accessToken && 
       <button onClick={()=> {setAuth({}); localStorage.removeItem("credentials") }} className="font-medium dark:fill-gray-400  hover:fill-onPrimary w-[24px] h-[25px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                   <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
                  </svg>
       </button>}

  

      </div>
    </div>



  </nav>
</header>
    





  )
}
