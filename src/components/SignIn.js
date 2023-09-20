import React, { useState } from 'react'

const SignIn = () => {
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
  return (
    <div className='sign-in-container'>
        <form>
            <h1>LOGIN</h1>
            <input type='email' placeholder='Enter your email' />
            <input type='password' placeholder='Enter your password' />
        </form>
    </div>
  )
}

export default SignIn