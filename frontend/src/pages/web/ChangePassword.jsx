import React from 'react'
import '../../css/index.css';
import { Header } from '../../common/web/Header'

export function ChangePassword() {
    return (
        <div className='main1'>
            <Header />
            <div className='register_page bg-gradient-to-r from-[#feeef1] to-[#fdefe8] w-[100%] flex items-center justify-center '>
                <div className=' my-[66px]'>

                    <div className='register_section w-[100%] py-[100px] px-[35px] bg-[white]'>
                        <p className='text-[19px] text-[#424552] font-[600]'>Reset Password</p>

                        <p className='text-[12px] mt-[10px]'>Enter your email or mobile number and we’ll send a link on your <br /> email to reset your password.</p>

                        <div className='flex register_number items-center border border-1 border-[grey] p-[7px] my-[20px]'>
                            <input type="tel" className='w-[100%] outline-none text-[14px]' placeholder="Mobile Number" />
                        </div>

                        <button className='w-[100%] p-[8px] bg-color4 text-[white] font-[650] mb-[10px]'>SEND LINK</button>

                        <p className='text-[13px] text-[grey]'>Unable to reset password? <span className='text-color4'>Get help</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}