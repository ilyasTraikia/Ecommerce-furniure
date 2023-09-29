import React, { useRef, useState ,useEffect} from 'react'
import { logo } from '../assets'
import { Form } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import axios from '../api/axios';



export async function action({request,params}) {

  const formData = await request.formData();
  const username = formData.get("username")
  const email = formData.get("email") 
  const password = formData.get("password")


  await axios.post(`/api/User/register`, {
    username: username,
    email: email,
    password: password
      })
     

      return redirect('/login');
}










export default function Signup() {

    
    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const strongPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      userRef.current.focus();
  }, [])

   // Checking if the username is valid while typing
   useEffect(() => {
     setValidName(USER_REGEX.test(user));
   }, [user])

    // Checking if the email is valid while typing
    useEffect(() => {
      setValidEmail(EMAIL_REGEX.test(email));
    }, [email])


   // Checking if the password is valid and if the two passwords match while typing
   useEffect(() => {
    setValidPwd(strongPasswordRegex.test(pwd));
    setValidMatch(pwd === matchPwd);
   }, [pwd, matchPwd])


   // When the user has read the erros and is ajdusting changes we want to hide the message
   useEffect(() => {
     setErrMsg('');
   }, [user, pwd, matchPwd])



  
    
  


  //  const handleSubmit = async (e) => {
   
  // }







  return (

    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-4 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <img className="w-12 h-auto block mx-auto py-2" src={logo} alt="Logo" />
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
              <a className="text-onPrimary decoration-2 hover:underline font-medium ml-1" href="../examples/html/signin.html">
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-5">
            <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-onPrimaryHover transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
              <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
              </svg>
              Sign up with Google
            </button>

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

            {/* <!-- Form --> */}
            <Form method='post'>
              <div className="grid gap-y-4">

                 {/* <!-- Form Group --> */}
                 <div>
                  <label htmlFor="username" className="block text-sm mb-2 dark:text-white">Username</label>
                  <div className="relative">

                    <input type="text"
                      ref={userRef} 
                      value={user}  
                      onChange={(e) => setUser(e.target.value)} 
                      id="username"
                      name="username"
                      className={`py-3 px-4 block w-full border-gray-200 outline-none border-[1px] rounded-md text-sm  focus:border-onPrimaryHover focus:ring-onPrimaryHover  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`} 
                      required
                      aria-describedby="username-error" 
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                        />

                    <div className={`${user && !validName ? "flex" : "hidden"} absolute inset-y-0 right-0 items-center pointer-events-none pr-3`}>
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>

                  </div>

                  <p  className={`text-xs text-red-600 mt-2 ${user && !validName ? "block" : "hidden"}`} id="username-error">4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.</p>

                </div>
                {/* <!-- End Form Group --> */} 

                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      className="py-3 px-4 block w-full border-gray-200 outline-none border-[1px] rounded-md text-sm focus:border-onPrimaryHover focus:ring-onPrimaryHover dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required
                      aria-describedby="email-error"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                       />

                    <div className={` ${email && !validEmail ? "flex" : "hidden"}   absolute inset-y-0 right-0  items-center pointer-events-none pr-3`}>
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>

                  </div>

                  <p className={`${email && !validEmail ? "flex" : "hidden"} text-xs text-red-600 mt-2`} id="email-error">Please include a valid email address so we can get back to you</p>

                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>

                  <div className="relative">
                    <input
                      type="password" 
                      id="password"
                      name="password"
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)} 
                      className="py-3 px-4 block w-full border-gray-200 outline-none border-[1px] rounded-md text-sm focus:border-onPrimaryHover focus:ring-onPrimaryHover dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      aria-describedby="password-error" />

                    <div  className={`${pwd && !validPwd ? "flex" : "hidden"} absolute inset-y-0 right-0  items-center pointer-events-none pr-3`}>
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>

                  </div>
                
                  <p className={`${pwd && !validPwd ? "block" : "hidden"} text-xs text-red-600 mt-2`} id="password-error">

                  8 to 24 characters.<br />
                  Must include uppercase and lowercase letters, a number and a special character.<br />
                  Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span><br />
                  Exemple: Password@123  

                  </p>
                
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="confirm-password" className="block text-sm mb-2 dark:text-white">Confirm Password</label>

                  <div className="relative">

                    <input
                      type="password"
                      id="confirm-password"
                      name="confirm-password" 
                      value={matchPwd}
                      onChange={(e) => setMatchPwd(e.target.value)} 
                      className="py-3 px-4 block w-full border-gray-200 outline-none border-[1px] rounded-md text-sm focus:border-onPrimaryHover focus:ring-onPrimaryHover dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" 
                      required 
                      aria-describedby="confirm-password-error" 
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                      />

                    <div className={`${matchPwd && !validMatch ? "flex" : "hidden"} absolute inset-y-0 right-0  items-center pointer-events-none pr-3`}>
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>

                  </div>

                  <p className={`${matchPwd && !validMatch ? "block" : "hidden"} text-xs text-red-600 mt-2`} id="confirm-password-error">Passwords do not match</p>

                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Checkbox --> */}
                <div className="flex items-center">
                  <div className="flex">
                    <input id="remember-me" name="remember-me" type="checkbox"  className="shrink-0 mt-0.5 border-gray-200 rounded text-onPrimary  focus:ring-onPrimary dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-onPrimary dark:checked:border-onPrimary dark:focus:ring-offset-gray-800" />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="remember-me" className="text-sm dark:text-white">I accept the <a className="text-onPrimary decoration-2 hover:underline font-medium" href="#">Terms and Conditions</a></label>
                  </div>
                </div>
                {/* <!-- End Checkbox --> */}

                <button 
                type="submit"
                className={`py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-onPrimary  ${!validName || !validPwd || !validMatch ? "opacity-50" : " "} text-white hover:bg-onPrimaryHover focus:outline-none focus:ring-2 focus:ring-onPrimaryHover focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800`}
                disabled = {!validName || !validPwd || !validMatch ? true : false}
                >Sign up</button>
              </div>
            </Form>
            {/* <!-- End Form --> */}
          </div>
        </div>
      </div>
    </main>

  )
}
