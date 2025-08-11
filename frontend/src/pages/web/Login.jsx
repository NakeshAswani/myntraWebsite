import React, { useContext, useState } from 'react'
import '../../css/index.css';
import { Header } from '../../common/web/Header'
import loginimage from "../../images/loginimage.webp";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import webBaseUrl from '../../common/web/WebBaseUrl';
import { myntraContext } from '../../Context/MainContext';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export function Login() {
  const [formData, setFormData] = useState({
    Phone: "",
    Password: ""
  })
  const { token, setToken, setUserDetails } = useContext(myntraContext)
  const navigate = useNavigate()
  const formSubmit = async (event) => {
    event.preventDefault()
    await axios.post(webBaseUrl + "user/check-user", formData)
      .then((response) => response.data)
      .then((finalResponse) => {
        if (finalResponse?.status === 1) {
          setUserDetails(finalResponse?.data?.userData)
          setToken(finalResponse?.data?.token)
          NotificationManager.success(finalResponse?.message, "", 1000);
          setTimeout(() => {
            navigate("/")
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
  return (
    <div className='main1'>
      <Header />
      <div className='login_page bg-gradient-to-r from-[#feeef1] to-[#fdefe8] w-[100%] flex items-center justify-center '>
        <div className=' my-[40px]'>
          <figure className='w-[400px]'>
            <img src={loginimage} alt="" />
          </figure>

          <form className='login_section w-[100%] p-[30px] bg-[white]' onSubmit={formSubmit}>
            <p className='text-[22px] text-[#424552] font-[665]'>Login</p>

            <div className='flex login_number items-center border border-1 border-[grey] p-[7px] my-[20px]'>
              <div className='text-[grey] text-[14px]'>+91</div>
              <div className='border-r-2 border-[grey] mx-[10px] h-[15px]'></div>
              <input type="number" className='w-[100%] outline-none text-[14px]' placeholder="Mobile Number" value={formData.Phone} onChange={(event) => {
                const obj = { ...formData }
                obj.Phone = event.target.value
                setFormData(obj)
              }} />
            </div>

            <div className='border border-1 border-[grey] p-[7px]'>
              <input type="password" className='w-[100%] outline-none text-[14px]' placeholder="Password" value={formData.Password} onChange={(event) => {
                const obj = { ...formData }
                obj.Password = event.target.value
                setFormData(obj)
              }} />
            </div>


            <p className='text-[13px] text-[grey] font-[600] mb-[10px]'>By continuing, I agree to the <span className='text-color4'>Terms of Use</span> & <span className='text-color4'>Privacy Policy</span></p>

            <div className='w-full flex justify-between items-center my-[10px]'>
              <p className='text-color4 font-[650] text-[13px]'><Link to={"/register"}>NEW USER ?</Link></p>
              <p className='text-color4 font-[650] text-[13px]'><Link to={"/change-password"}>FORGOT PASSWORD ?</Link></p>
            </div>

            <button type='submit' className='w-[100%] p-[8px] bg-color4 text-[white] font-[650] mb-[10px]'>CONTINUE</button>

            <p className='text-[13px] text-[grey]'>Have trouble logging in? <span className='text-color4'>Get help</span></p>
          </form>
        </div>
      </div>
      <NotificationContainer />
    </div>
  )
}