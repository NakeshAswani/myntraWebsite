import React from 'react'
import logo_image from '../../images/Myntra-icon-logo.svg'
import { Link } from 'react-router-dom'
export function AdminLogin() {
  return (
    <>
      <div className=' container-fluid flex justify-center items-center background_admin h-[100vh]'>
        <div className=' flex-col bg-[white] w-[350px] shadow-lg p-[20px] flex justify-center items-center mx-auto rounded-[15px] '>
          <img src={logo_image} width={150} />
          <div className='my-[10px] '>
            <span className=' text-[#f8581c] text-[30px] font-black '> Login </span>
            <span className=' text-[#ff59bd] font-black text-[30px] '> Page </span>
          </div>
          <form className='w-[100%]'>
            <div className=' text-[#94A3B8] text-[20px] ps-1 leading-9'> username </div>
            <input type="text" className='px-2 py-1  text-[15px] w-[100%] border rounded-md' placeholder='username' />
            <div className=' text-[#94A3B8] text-[20px] ps-1 leading-9'> password </div>
            <input type="password" className='px-2 py-1 text-[15px] w-[100%] border rounded-md' placeholder='password' />
            <Link to='/admin/dashboard' >
              <button className='bg-[#f8581c] hover:bg-[#ff59bd] w-[100%]  my-3 rounded-md p-1 px-6 mx-auto text-[white] text-[20px]'>Login Now</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}
