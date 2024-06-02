import React from 'react';
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className="justify-between flex items-center">
          <a href="#">
            {/* <img src={Logo} alt="" />
             */}
             <p className='font-bold text-accent text-4xl'>ELLXYZ</p>
          </a>

          <button className='btn btn-lg'>Work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header