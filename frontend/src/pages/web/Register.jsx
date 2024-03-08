import React from 'react'
import { Header } from '../../common/web/Header'

export function Register() {
    return (
        <div>
            <Header />
            <div className='w-full px-3'>
                <div className='py-12'>
                    <div className='w-1/2 mx-auto rounded-lg background_admin p-[2px]'>
                        <form className='w-full bg-[white] p-4 rounded-lg shadow-xl'>
                            <h1 className='font-bold text-3xl text-center mb-4'>
                                <span className='text-[#f8581c] me-1'>Register</span>
                                <span className='text-[#ff59bd]'>Page</span>
                            </h1>
                            <div className='mb-4'>
                                <label className='block mb-2 font-semibold text-[red] text-[18px]'>Full Name *</label>
                                <div className='w-full background_admin p-[2px] rounded-md'>
                                    <input type="text" className='w-full bg-white p-1 rounded-md focus-visible:outline-offset-[3px]' />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className='block mb-2 font-semibold text-[red] text-[18px]'>Email *</label>
                                <div className='w-full background_admin p-[2px] rounded-md'>
                                    <input type="email" className='w-full bg-white p-1 rounded-md focus-visible:outline-offset-[3px]' />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className='block mb-2 font-semibold text-[red] text-[18px]'>Phone *</label>
                                <div className='w-full background_admin p-[2px] rounded-md'>
                                    <input type="number" className='w-full bg-white p-1 rounded-md focus-visible:outline-offset-[3px]' />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className='block mb-2 font-semibold text-[red] text-[18px]'>Address *</label>
                                <div className='w-full background_admin p-[2px] rounded-md'>
                                    <input type="text" className='w-full bg-white p-1 rounded-md focus-visible:outline-offset-[3px]' />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className='block mb-2 font-semibold text-[red] text-[18px]'>Pincode *</label>
                                <div className='w-full background_admin p-[2px] rounded-md'>
                                    <input type="text" className='w-full bg-white p-1 rounded-md focus-visible:outline-offset-[3px]' />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className='block mb-2 font-semibold text-[red] text-[18px]'>Password *</label>
                                <div className='w-full background_admin p-[2px] rounded-md'>
                                    <input type="password" className='w-full bg-white p-1 rounded-md focus-visible:outline-offset-[3px]' />
                                </div>
                            </div>
                            <div className='mx-auto w-max rounded-lg background_admin p-[2px]'>
                                <input type='submit' value={"Submit"} className='bg-[white] text-[18px] font-medium px-3 py-2 rounded-lg hover:bg-[transparent] hover:text-[white] transition' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}