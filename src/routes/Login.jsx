import React from 'react'
import { useRef, useState, useEffect} from 'react';
import { logo, user } from '../assets'
import {useNavigate,Link,useLocation} from 'react-router-dom';
import axios from '../api/axios';
import useAuth from '../custom hooks/useAuth';








export default function Login() {

  const {setAuth} =  useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"
  


  const [errMsg, setErrMsg] = useState('');


  const [IsSubmitting,SetIsSubmitting] = useState(false)



  useEffect(() => {
    userRef.current.focus();
   }, [])

  // Removing the error message because the user already read it and is making adjustements
  // useEffect(() => {
  //     setErrMsg('');
  // }, [user, pwd])






  // handling the submit of the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value
    const password = e.target.password.value
   SetIsSubmitting(true)
    try {
      const response = await axios.post(`/api/User/login`, {
        username: username,
        password: password
          },  {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })

  
  
        const accessToken = response?.data?.token;
        const roles = response?.data?.roles;
       
      
      
        setAuth({ username, password, roles, accessToken });
        
        localStorage.setItem("credentials",JSON.stringify({ username, password }))
        
        SetIsSubmitting(false)
        navigate(from,{replace : true})
    } catch (err) { 

      SetIsSubmitting(false)

      if (!err?.response) {
        setErrMsg('No Server Response');
       } else if (err.response?.status === 400) {
           setErrMsg('Missing Username or Password');
       } else if (err.response?.status === 401) {
           setErrMsg('Unauthorized');
       } else {
           setErrMsg('Login Failed');
       }
       errRef.current.focus();

       } 
  }




  return (
   
      <main className="w-full max-w-md mx-auto p-6 ">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <img className="w-12 h-auto block mx-auto py-2" src={logo} alt="Logo" />
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Don't have an account yet? 
                <Link className="text-onPrimary decoration-2 hover:underline font-medium ml-1" to="/register">
                  Sign up here
                </Link>
              </p>
            </div>


            <p ref={errRef} className={`${errMsg ? "block" : "hidden"} text-red-500 mt-3`} aria-live="assertive">{errMsg}*</p>

  
            <div className="mt-5">
              <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white  focus:ring-onPrimaryHover transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                  <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
                  <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
                  <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
                  <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
                </svg>
                Sign in with Google
              </button>
  
              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>
{/*   
              <!-- Form --> */}
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  {/* <!-- Form Group --> */}
                  <div>
                    <label htmlFor="username" className="block text-sm mb-2 dark:text-white">Username</label>

                    <div className="relative">

                      <input
                       ref={userRef}
                       type="text"
                       id="username"
                       name="username"
                       className="py-3 px-4 block w-full border-gray-200 outline-none border-[1px] rounded-md text-sm focus:border-onPrimaryHover focus:ring-onPrimaryHover dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                       required 
                       aria-describedby="username-error" />

                 

                    </div>

        

                  </div>
                  {/* <!-- End Form Group --> */}
  
                  {/* <!-- Form Group --> */}
                  <div>
                    <div className="flex justify-between items-center">
                      <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                      <a className="text-sm text-onPrimary  decoration-2 hover:underline font-medium" href="#">Forgot password?</a>
                    </div>

                    <div className="relative">
                      <input
                       type="password"
                       id="password"
                       name="password"
                       className="py-3 px-4 block w-full border-gray-200 outline-none border-[1px] rounded-md text-sm focus:border-onPrimaryHover focus:ring-onPrimaryHover dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                       required 
                       aria-describedby="password-error" />

                   

                    </div>

                   

                  </div>
                  {/* <!-- End Form Group --> */}
  
                  {/* <!-- Checkbox --> */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-onPrimary focus:ring-onPrimary dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-onPrimary dark:checked:border-onPrimary dark:focus:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="remember-me" className="text-sm dark:text-white">Remember me</label>
                    </div>
                  </div>
                  {/* <!-- End Checkbox --> */}
  
                  <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-onPrimary text-white hover:bg-onPrimaryHover focus:outline-none focus:ring-2 focus:ring-onPrimaryHover focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">{IsSubmitting ? "submitting" : "Sign in"}</button>
                </div>
              </form>
              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
      </main>
 
  )
}
