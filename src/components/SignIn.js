import React, { useState } from 'react'
import {auth } from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log(userCredential);
        } catch (error) {
          console.log(error);
        }
      };
      

  return (
    <div className='sign-in-container'>
        <form onSubmit={handleSubmit}>
            <h1>LOGIN INTO YOUR ACCOUNT</h1>
            <input type='email'
             placeholder='Enter your email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}

              />
            <input type='password' 
            placeholder='Enter your password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
              />
              <button type='submit' >LOG IN</button>
        </form>
    </div>
  )
}

export default SignIn