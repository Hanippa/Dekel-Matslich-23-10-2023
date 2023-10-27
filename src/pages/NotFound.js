import React from 'react';
import Logo from "../assets/Logo.png";

function NotFound() {
  return (
    <div id="not-found-container" className='w-screen h-screenNav bg-background p-8 font-rubik'>
        <div className='h-full w-full bg-white rounded-lg flex flex-col justify-center items-center gap-8'>
            <img className="w-44 py-4" src={Logo} alt='abra weather logo'/>
      <h1 className='text-5xl'>404 - Not Found</h1>
      <p  className='font-light text-3xl'>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;