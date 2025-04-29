import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';
import { Link } from 'react-router';

const Login = () => {

    const [success, setSuccess]=useState(false)

    const [errorMessage, setErrorMessage]=useState('')

    const handleLogIn=e=>{
        e.preventDefault()

        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password)
         
        setSuccess(false)
        setErrorMessage('')
       


        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result)
            setSuccess(true)
            
        }).catch(error=>{
            console.log(error)
            setErrorMessage(error.message)
            setSuccess(false)
        })


    }
    
   


    return (
        <div className='w-9/12 mx-auto border-1 border-blue-900 max-w-sm'>
            <div className="text-center lg:text-left">
                <h1 className="text-5xl mb-6   font-bold text-center">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogIn} className="fieldset">

                        <label className="label">Email</label>

                        <input type="email" name='email' className="input" placeholder="Email" />

                        <label className="label">Password</label>

                        <input name='password' type="password" className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>

                    {
                        errorMessage && <p className='text-red-600'>{errorMessage}</p>
                    }
                   
                     <p>New to this site?Please <Link className='text-blue-500 underline' to='/Register'>Register</Link></p>
                </div>
                {
                        success && <p className='text-green-500'>Successfully loged In</p>
                    }

               
            </div>


        </div>
    );
};

export default Login;