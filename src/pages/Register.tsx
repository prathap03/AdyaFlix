import React from 'react'

function Register() {
  return (
    <div className='bg-[#39071F] flex flex-grow justify-center items-center'>
        <div className='p-4 bg-white rounded-md'>
            <h1 className='text-[2rem] font-semibold'>Register</h1>
            <div className='flex flex-col gap-2'>
                <input type='text' className='p-2 border-none rounded-md' placeholder='Name' />
                <input type='text' className='p-2 border-none rounded-md' placeholder='User Name' />
                <input type='text' className='p-2 border-none rounded-md' placeholder='Email' />
                <input type='password' className='p-2 border-none rounded-md' placeholder='Password' />
                <button className='bg-[#8D1431] text-white p-2 rounded-md'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Register