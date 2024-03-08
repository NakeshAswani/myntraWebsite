import React from 'react'
import { Header } from '../../common/web/Header'
import avatar from "../../images/avatar.png"

export function Profile() {
    return (
        <div>
            <Header />
            <div className='w-full px-3'>
                <div className='px-20'>
                    <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto]'>
                        <div className='bg-[white] me-[1px] rounded-lg p-4'>
                            <img src={avatar} className='w-3/4 mx-auto' />
                        </div>
                        <div className='bg-[white] ms-[1px] rounded-lg p-4'>
                            <form className=''>
                                <div className='mb-4'>
                                    <label className='block mb-2 font-semibold text-[red] text-[18px]'>Full Name *</label>
                                    <div className='w-full rounded-md pb-[2px] background_admin'>
                                        <input type="text" className='w-full bg-[white] rounded-md p-1' disabled />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2 font-semibold text-[red] text-[18px]'>Email *</label>
                                    <div className='w-full rounded-md pb-[2px] background_admin'>
                                        <input type="email" className='w-full bg-[white] rounded-md p-1' disabled />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2 font-semibold text-[red] text-[18px]'>Phone *</label>
                                    <div className='w-full rounded-md pb-[2px] background_admin'>
                                        <input type="number" className='w-full bg-[white] rounded-md p-1' disabled />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2 font-semibold text-[red] text-[18px]'>Address *</label>
                                    <div className='w-full rounded-md pb-[2px] background_admin'>
                                        <input type="text" className='w-full bg-[white] rounded-md p-1' disabled />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2 font-semibold text-[red] text-[18px]'>Pincode *</label>
                                    <div className='w-full rounded-md pb-[2px] background_admin'>
                                        <input type="text" className='w-full bg-[white] rounded-md p-1' disabled />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2 font-semibold text-[red] text-[18px]'>Password *</label>
                                    <div className='w-full rounded-md pb-[2px] background_admin'>
                                        <input type="password" className='w-full bg-[white] rounded-md p-1' disabled />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}