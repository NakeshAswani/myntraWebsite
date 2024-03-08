import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import { adminContext } from '../../Context/MainContext'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faPalette, faShoppingCart, faSliders, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'

export function Dashboard() {
  const {sideBar, setSideBar}=useContext(adminContext)
  const URL=useLocation()
  return (
    <>
      <div>
        <Header />
        <div className={`grid ${(sideBar) ? "grid-cols-[210px_auto]" : "grid-cols-[130px_auto]"}`}>
          <Sidebar />
          <div className='w-full'>
            <h2 className='w-full py-3 px-4 shadow-lg rounded-b-3xl font-bold text-[20px]'>{URL.pathname.slice(1,URL.pathname.length)}</h2>
            <div className='p-4'>
              <h1 className='text-4xl font-bold mb-6'>Dashboard</h1>
              <div className='w-full grid grid-cols-4 gap-x-10 gap-y-10'>
                <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                  <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                    <FontAwesomeIcon icon={faCopyright} className='text-color5' />
                  </div>
                  <div className='bg-[white] rounded-md p-2 font-medium'>
                    Main Category: 5<br/>
                    Sub Category: 5
                  </div>
                </div>
                <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                  <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                    <FontAwesomeIcon icon={faProductHunt} className='text-color5' />
                  </div>
                  <div className='bg-[white] rounded-md p-2 font-medium'>
                    Product: 5
                  </div>
                </div>
                <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                  <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                    <FontAwesomeIcon icon={faPalette} className='text-color5' />
                  </div>
                  <div className='bg-[white] rounded-md p-2 font-medium'>
                    Colors: 5
                  </div>
                </div>
                <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                  <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                    <FontAwesomeIcon icon={faUsers} className='text-color5' />
                  </div>
                  <div className='bg-[white] rounded-md p-2 font-medium'>
                    Users: 5
                  </div>
                </div>
                <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                  <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                    <FontAwesomeIcon icon={faShoppingCart} className='text-color5' />
                  </div>
                  <div className='bg-[white] rounded-md p-2 font-medium'>
                    Orders: 5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
