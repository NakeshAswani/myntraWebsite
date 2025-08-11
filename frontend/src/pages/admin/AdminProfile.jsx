import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import { myntraContext } from '../../Context/MainContext'
import Location from '../../common/admin/Location'
import avatar from "../../images/avatar.png"
import profile from "../../images/Myntra-icon-logo.svg"

export function AdminProfile() {
  const { sideBar } = useContext(myntraContext)
  return (
    <div>
      <Header />
      <div className={`grid ${(sideBar) ? "grid-cols-[200px_auto]" : "grid-cols-[100px_auto]"} pt-[84px]`}>
        <Sidebar />
        <div className='w-full'>
          {/* <Location /> */}
          <div className=''>
            <div className='background_admin   grid grid-cols-[30%_auto]'>
              <div className='bg-[white]  flex items-center justify-center h-[calc(100vh-85px)] '>
                <div className='w-[250px] h-[250px] bg-[green] border-2 border-[black] rounded-[50%] flex items-center justify-center '>
                <img src={profile} alt='' className='w-[100%] h-[100%] rounded-[50%] ' />
                </div>
              </div>
              <div className='bg-[white] w-[100%]  flex justify-center items-center p-4'>
                <form className='w-[100%]'>
                  <div className='mb-4'>
                    <label className='block mb-2 font-semibold text-[#1f174e] text-[18px]'>User Name *</label>
                    <div className='w-full rounded-md pb-[2px]'>
                      <input type="text" className='w-full bg-[white] border-b-2 border-[black] p-1' value={"admin"} disabled />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 font-semibold text-[#1f174e] text-[18px]'>Email *</label>
                    <div className='w-full rounded-md pb-[2px]'>
                      <input type="email" className='w-full bg-[white] border-b-2 border-[black] p-1' value={"admin@gmail.com"} disabled />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 font-semibold text-[#1f174e] text-[18px]'>Phone *</label>
                    <div className='w-full rounded-md pb-[2px] '>
                      <input type="tel" className='w-full bg-[white] border-b-2 border-[black] p-1' value={"1234567890"} disabled />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 font-semibold text-[#1f174e] text-[18px]'>Password *</label>
                    <div className='w-full rounded-md pb-[2px]'>
                      <input type="password" className='w-full bg-[white] border-b-2 border-[black] p-1' value={"admin@123"} disabled />
                    </div>
                  </div>  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
