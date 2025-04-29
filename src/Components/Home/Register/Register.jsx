import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase.init'
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link } from 'react-router';
const Register = () => {

    const [success, setSuccess] = useState(false)

    const [errorMsg, setErrorMsg] = useState('')

    const [showPass, setShowPass] = useState(false)

    const handlerRegister = e => {
        e.preventDefault()
        const photo = e.target.photo.value
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
       

        setSuccess(false)
        setErrorMsg('')
        

        const passwordRegExp = (password) => {
            if (!/.*\d/.test(password)) {
                setErrorMsg('Password must contain at least one number')
                return false
            } else if (!/(?=.*[a-z])/.test(password)) {
                setErrorMsg('password must have one lower case')
                return false
            } else if (!/(?=.*[A-Z])/.test(password)) {
                setErrorMsg('password must have 1 upper case')
                return false
            } else if (password.length < 8) {
                setErrorMsg('password must have 8 charecters')
                return false
            }
            else {
                setSuccess(true)
                return true
            }

        }
          console.log(passwordRegExp(password))
        if (!passwordRegExp(password)) {
            return;
        }

        console.log(email, password, name, photo)

        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            console.log(result)
            const user=result.user
          

            sendEmailVerification(user)
                .then(() => {
                    setSuccess(true)
                   
                })
                const profile={
                    displayName:name,
                    photoURL:photo
                }
        
                updateProfile(user,profile)
                .then(()=>{
                    alert('We send you a varification email.Please check!!')
                }).catch(error=>console.log(error))
           
                
            // setErrorMsg('')
        }).catch(error => {
            console.log(error)
            setErrorMsg(error.message)
        })


       
        

    }
    console.log(errorMsg)




    return (
        <div className='w-9/12 mx-auto mt-10'>

            <form onSubmit={handlerRegister} className='border-1 p-5 max-w-sm mx-auto mt-10'>
                <h1 className='mb-5 text-3xl font-semibold'>Please Register</h1>


                <label className="input validator join-item ">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" name='email'
                        placeholder="mail@site.com" required />
                </label>
                <label className="input validator join-item mt-5">

                    <input type="name" name='name'
                        placeholder="Your name" required />
                </label>


                <label className="input validator join-item mt-5">

                    <input type="text" name='photo'
                        placeholder="Photo URL name" required />
                </label>

                <br />

                <label className="input validator mt-5">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <div>
                        <input
                            name='password'
                            type={showPass ? 'text' : 'password'}
                            required
                            placeholder="Password"
                            minLength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                        <button onClick={() => setShowPass(!showPass)} className='ml-10'>
                            {
                                showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </button>
                    </div>
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>
                <p>Forgot password ?</p>
                <br />



                <input className='btn btn-primary ' type="Submit" value="Submit" />
                <p className='mt-3'>Already have an account? Please <span className='text-blue-400 underline'><Link to='/Login'>login</Link></span></p>

            </form>


            {
                errorMsg && <p className='text-red-700'> {errorMsg} </p>
            }
            {
                success && <p className='text-green-800 text-center text-4xl font-bold'>Successfully Registered</p>
            }



        </div>
    );
};

export default Register;