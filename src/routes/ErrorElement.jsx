import React from 'react'
import { useRouteError } from "react-router-dom";

export default function ErrorElement() {

  const error = useRouteError();
  console.error(error);

  return (
    <div className='w-full mt-[230px] h-full flex-col justify-center items-center text-center'>
     <h1 className='font-bold text-3xl'>Oops!</h1>
     <p className='mt-4'>Sorry, an unexpected error has occurred.</p>
     <p className='mt-4'>
      <i>{error.statusText || error.message}</i>
     </p>
  </div>
  )
}
