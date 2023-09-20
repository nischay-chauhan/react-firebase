import React, { useState } from 'react'
import {auth } from "../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length < 6) {
          console.log("Password should be at least 6 characters long");
          return;
        }
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          console.log(userCredential);
        } catch (error) {
          console.log(error);
        }
      };
      
  return (
    <div className='sign-in-container'>
        <form onSubmit={handleSubmit}>
            <h1>Create An Account</h1>
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
              <button type='submit' >SIGN UP</button>
        </form>
    </div>
  )
}

export default SignUp