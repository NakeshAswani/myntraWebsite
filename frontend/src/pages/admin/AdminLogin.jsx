import React, { useState } from 'react'
import logo_image from '../../images/Myntra-icon-logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import adminBaseUrl from '../../common/admin/AdminBaseUrl'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export function AdminLogin() {
  const [formData, setFormData] = useState({
    userName: "",
    password: ""
  })
  const navigate = useNavigate()
  const changeValue = (event) => {
    const obj = { ...formData }
    obj[event.target.name] = event.target.value
    setFormData(obj)
  }
  const userLogin = async (event) => {
    event.preventDefault()
    await axios.post(adminBaseUrl+"user/check-login", formData)
      .then((response) => response.data)
      .then((finalResponse) => {
        console.log(finalResponse)
        if (finalResponse?.status === 1) {
          NotificationManager.success(finalResponse?.message, "", 1000);
          setTimeout(() => {
            navigate("/admin/dashboard")
          }, 1001)
        }
        else {
          NotificationManager.error(finalResponse?.message, "", 1000);
        }
      })
      .catch(error => {
        console.error(error)
      })
  }
  console.log(formData)
  return (
    <>
      <div className=' container-fluid flex justify-center items-center background_admin h-[100vh]'>
        <div className=' flex-col bg-[white] w-[350px] shadow-lg p-[20px] flex justify-center items-center mx-auto rounded-[15px] '>
          <img src={logo_image} alt='' width={150} />
          <div className='my-[10px] '>
            <span className=' text-[#f8581c] text-[30px] font-black '> Login </span>
            <span className=' text-[#ff59bd] font-black text-[30px] '> Page </span>
          </div>
          <form className='w-[100%]' onSubmit={userLogin}>
            <div>
              <label className=' text-[#94A3B8] text-[20px] ps-1 leading-9'> username </label>
              <input type="text" className='px-2 py-1  text-[15px] w-[100%] border rounded-md' placeholder='userName' name='userName' value={formData?.userName} onChange={changeValue} />
            </div>
            <div>
              <label className=' text-[#94A3B8] text-[20px] ps-1 leading-9'> password </label>
              <input type="password" className='px-2 py-1 text-[15px] w-[100%] border rounded-md' placeholder='password' name='password' value={formData?.password} onChange={changeValue} />
            </div>
            <button type='submit' className='bg-[#f8581c] hover:bg-[#ff59bd] w-[100%]  my-3 rounded-md p-1 px-6 mx-auto text-[white] text-[20px]'>
              Login Now
            </button>
          </form>
        </div>
      </div>
      <NotificationContainer />
    </>
  )
}
