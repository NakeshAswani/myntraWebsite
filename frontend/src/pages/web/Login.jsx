import React from 'react'
import '../../css/index.css';
import { Header } from '../../common/web/Header'
import loginimage from "../../images/loginimage.webp";
import { Link } from 'react-router-dom';

export function Login() {
    return (
        <div className='main1'>
            <Header />
            <div className='login_page bg-gradient-to-r from-[#feeef1] to-[#fdefe8] w-[100%] flex items-center justify-center '>
                <div className=' my-[40px]'>
                    <figure className='w-[400px]'>
                        <img src={loginimage} alt="" />
                    </figure>

                    <div className='login_section w-[100%] p-[30px] bg-[white]'>
                        <p className='text-[22px] text-[#424552] font-[665]'>Login</p>

                        <div className='flex login_number items-center border border-1 border-[grey] p-[7px] my-[20px]'>
                            <div className='text-[grey] text-[14px]'>+91</div>
                            <div className='border-r-2 border-[grey] mx-[10px] h-[15px]'></div>
                            <input type="number" className='w-[100%] outline-none text-[14px]' inputMode="numeric" max="9999999999" min="6000000000" pattern="[0-9]+" placeholder="Mobile Number" />
                        </div>

                        <div className='border border-1 border-[grey] p-[7px]'>
                            <input type="password" className='w-[100%] outline-none text-[14px]' inputMode="numeric" max="9999999999" min="6000000000" pattern="[0-9]+" placeholder="Password" />
                        </div>


                        <p className='text-[13px] text-[grey] font-[600] mb-[10px]'>By continuing, I agree to the <span className='text-color4'>Terms of Use</span> & <span className='text-color4'>Privacy Policy</span></p>

                        <p className='my-[10px] text-color4 font-[650] text-[13px]'><Link to={"/change-password"}>FORGOT PASSWORD ?</Link></p>

                        <button className='w-[100%] p-[8px] bg-color4 text-[white] font-[650] mb-[10px]'>CONTINUE</button>

                        <p className='text-[13px] text-[grey]'>Have trouble logging in? <span className='text-color4'>Get help</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}