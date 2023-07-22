import React from 'react'
import { logo, search, user, wallet,favorites} from '../assets'

export default function Navbar() {






  return (



<header class="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
  <nav class="max-w-[85rem] w-full mx-auto px-2 lg:flex sm:items-center lg:justify-between" aria-label="Global">
    {/* Logo */}
    <div class="flex items-center content-center justify-between">
      <a class="inline-flex items-center gap-x-2 text-3xl font-semibold dark:text-white" href="#">
        <img class="w-10 h-auto" src={logo} alt="Logo" />
        Brand
      </a>
      <div class="lg:hidden">
        <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-image-and-text-2 " aria-controls="navbar-image-and-text-2 " aria-label="Toggle navigation">
          <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>



   {/* pages */}
    <div id="navbar-image-and-text-2" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block mt-6 lg:mt-0">
      <div class="flex flex-col gap-10 mt-5 lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:pl-5">
        <a class="font-medium text-onPrimary text-base" href="#" aria-current="page">Home</a>
        <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 text-base" href="#">Shop</a>
        <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 text-base" href="#">About</a>
        <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 text-base" href="#">Contact</a>
      </div>
    </div>


   {/* Options */}
    <div id="navbar-image-and-text-2" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block mt-6 lg:mt-0">
      <div class="flex flex-col gap-9 mt-5 lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:pl-5">
        <button class="font-medium text-onPrimary" href="#" aria-current="page"><img src={user} alt="user" /></button>
        <button class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#"><img src={search} alt="search" /></button>
        <button class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#"><img src={favorites} alt="favorites" /></button>
        <button class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#"><img src={wallet} alt="wallet" /></button>
      </div>
    </div>



  </nav>
</header>
    





  )
}
