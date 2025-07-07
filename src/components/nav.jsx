import React from 'react'
import Logo from '../assets/logo.png'
import Input from '../assets/input.png'
const nav = () => {
  return (
    <div>
        <nav className='justify-center'>
            <ul className='flex justify-center gap-10' >
            <img className='flex' src={Logo} alt="logo" />
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#"></a></li>
                <input type='text' placeholder='What are you looking for?' className='w-38 h- bg-[#F5F5F5]'/><img src= {Input} alt='Input' />
                
            </ul>
            
        </nav>
    </div>
  )
}

export default nav