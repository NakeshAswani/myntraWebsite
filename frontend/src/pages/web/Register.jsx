import React, { useContext, useState } from 'react'
import '../../css/index.css';
import { Header } from '../../common/web/Header'
import loginimage from "../../images/loginimage.webp";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import webBaseUrl from '../../common/web/WebBaseUrl';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { myntraContext } from '../../Context/MainContext';

export function Register() {
  const { setUserDetails, setToken } = useContext(myntraContext)
  const [formData, setFormData] = useState({
    fullName: "",
    Email: "",
    Phone: "",
    Password: ""
  })
  const changeValue = (event) => {
    const obj = { ...formData }
    obj[event.target.name] = event.target.value
    setFormData(obj)
  }
  const navigate = useNavigate()
  const formSubmit = async (event) => {
    event.preventDefault()
    await axios.post(webBaseUrl + "user/add-user", formData)
      .then((response) => response.data)
      .then((finalResponse) => {
        if (finalResponse?.status === 1) {
          setFormData({
            fullName: "",
            Email: "",
            Phone: "",
            Password: ""
          })
          setUserDetails(finalResponse?.data?.insertData)
          setToken(finalResponse?.data?.token)
          NotificationManager.success(finalResponse?.message, "", 1000);
          setTimeout(() => {
            navigate("/")
          }, 1100)
        }
        else {
          NotificationManager.error(finalResponse?.message, "", 1000);
        }
      })
  }
  return (
    <div className='main1'>
      <Header />
      <div className='register_page bg-gradient-to-r from-[#feeef1] to-[#fdefe8] w-[100%] flex items-center justify-center p-[4px] '>
        <div className=''>
          <figure className='w-[400px]'>
            <img src={loginimage} alt="" />
          </figure>

          <form className='register_section w-[100%] p-[30px] bg-[white]' onSubmit={formSubmit}>
            <p className='text-[22px] text-[#424552] font-[665]'>Register</p>

            <div className='border border-1 border-[grey] p-[7px] my-[10px]'>
              <input type="text" className='w-[100%] outline-none text-[14px]' placeholder="Full Name *" name='fullName' value={formData?.fullName} onChange={changeValue} />
            </div>

            <div className='border border-1 border-[grey] p-[7px] my-[10px]'>
              <input type="email" className='w-[100%] outline-none text-[14px]' placeholder="Email *" name='Email' value={formData?.Email} onChange={changeValue} />
            </div>

            <div className='flex register_number items-center border border-1 border-[grey] p-[7px] my-[10px]'>
              <div className='text-[grey] text-[14px]'>+91</div>
              <div className='border-r-2 border-[grey] mx-[10px] h-[15px]'></div>
              <input type="tel" className='w-[100%] outline-none text-[14px]' placeholder="Mobile Number *" name='Phone' value={formData?.Phone} onChange={changeValue} />
            </div>

            <div className='border border-1 border-[grey] p-[7px] my-[10px]'>
              <input type="password" className='w-[100%] outline-none text-[14px]' placeholder="Password *" name='Password' value={formData?.Password} onChange={changeValue} />
            </div>

            <p className='text-[13px] my-[5px]'>Already have acount <Link to={"/login"} className='text-color4 font-[650] '>LOGIN HERE</Link></p>

            <p className='text-[13px] text-[grey] font-[600] mb-[10px]'>By continuing, I agree to the <span className='text-color4'>Terms of Use</span> & <span className='text-color4'>Privacy Policy</span></p>

            <button type='submit' className='w-[100%] p-[8px] bg-color4 text-[white] font-[650] mb-[10px]'>CONTINUE</button>

            <p className='text-[13px] text-[grey]'>Have trouble Register? <span className='text-color4'>Get help</span></p>
          </form>
        </div>
      </div>
      <NotificationContainer />
    </div>
  )
}