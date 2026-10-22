import React from 'react'
import logInImage from "../../assests/logInImage.png";

function authSidePanel() {
  return (
    <div className='flex-col flex gap-6 h-auto'>

        <h3 className='text-slate-950 font-bold text-3xl'>Agency Portal</h3>

        <p className='text-shadow-blue-800 font-medium text-sm'>DISTRIBUTION, CONNECTED</p>

        <h1 className='text-4xl text-slate-900 font-bold'>
            Every Delivery,
            Handled with care.
        </h1>
        <p className='text-slate-800 font-light text-sm'>Bring your stock , people and routes together. Keep your agency moving with confidence.</p>

        <img 
            src={logInImage}
            className='max-w-md object-contain h-auto w-full'
        />

        <p className='font-bold text-xl text-shadow-blue-800'>Better cordination. EveryDay</p>

        <p className='text-sm text-slate-800 font-light'>
            Your People, stock and deliveries - working together.
        </p>
        
    </div>
  )
}

export default authSidePanel