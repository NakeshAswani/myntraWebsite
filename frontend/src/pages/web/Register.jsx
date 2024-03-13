import React from 'react'
import '../../css/index.css';
import { Header } from '../../common/web/Header'
import loginimage from "../../images/loginimage.webp";
import { Link } from 'react-router-dom';

export function Register() {
    return (
        <div className='main1'>
            <Header />
            <div className='register_page bg-gradient-to-r from-[#feeef1] to-[#fdefe8] w-[100%] flex items-center justify-center p-[4px] '>
                <div className=''>
                    <figure className='w-[400px]'>
                        <img src={loginimage} alt="" />
                    </figure>

                    <div className='register_section w-[100%] p-[30px] bg-[white]'>
                        <p className='text-[22px] text-[#424552] font-[665]'>Register</p>

                        <div className='flex register_number items-center border border-1 border-[grey] p-[7px] my-[20px]'>
                            <div className='text-[grey] text-[14px]'>+91</div>
                            <div className='border-r-2 border-[grey] mx-[10px] h-[15px]'></div>
                            <input type="number" className='w-[100%] outline-none text-[14px]' inputMode="numeric" max="9999999999" min="6000000000" pattern="[0-9]+" placeholder="Mobile Number" />
                        </div>

                        <div className='border border-1 border-[grey] p-[7px]'>
                            <input type="password" className='w-[100%] outline-none text-[14px]' inputMode="numeric" max="9999999999" min="6000000000" pattern="[0-9]+" placeholder="Password" />
                        </div>

                        <div className='border border-1 border-[grey] p-[7px] mt-[5px]'>
                            <input type="password" className='w-[100%] outline-none text-[14px]' inputMode="numeric" max="9999999999" min="6000000000" pattern="[0-9]+" placeholder="Confirm Password" />
                        </div>

                        <p className='text-[13px] my-[5px]'>Already have acount <Link to={"/login"} className='text-color4 font-[650] '>LOGIN HERE</Link></p>

                        <p className='text-[13px] text-[grey] font-[600] mb-[10px]'>By continuing, I agree to the <span className='text-color4'>Terms of Use</span> & <span className='text-color4'>Privacy Policy</span></p>

                        <button className='w-[100%] p-[8px] bg-color4 text-[white] font-[650] mb-[10px]'>CONTINUE</button>

                        <p className='text-[13px] text-[grey]'>Have trouble Register? <span className='text-color4'>Get help</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}