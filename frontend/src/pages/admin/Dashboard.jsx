import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { adminContext } from '../../Context/MainContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faPalette, faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'

export function Dashboard() {
  const { sideBar } = useContext(adminContext)
  return (
    <div>
      <div>
        <Header />
        <div className={`grid ${(sideBar) ? "grid-cols-[210px_auto]" : "grid-cols-[130px_auto]"} h-full`}>
          <Sidebar />
          <div className='w-full'>
            <Location />
            <div className='p-4'>
              <h1 className='w-max text-4xl font-bold mb-6 bgClipColor'>Dashboard</h1>
              <div className='w-full grid grid-cols-4 gap-x-10 gap-y-10'>
                <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                  <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                    <FontAwesomeIcon icon={faCopyright} />
                  </div>
                  <div className='bg-[white] rounded-md p-2 font-medium'>
                    Main Category: 5<br />
                    Sub Category: 5
                  </div>
                </div>
                <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                  <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                    <FontAwesomeIcon icon={faProductHunt} />
                  </div>
                  <div className='bg-[white] rounded-md p-2 font-medium'>
                    Product: 5
                  </div>
                </div>
                <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                  <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                    <FontAwesomeIcon icon={faPalette} />
                  </div>
                  <div className='bg-[white] rounded-md p-2 font-medium'>
                    Colors: 5
                  </div>
                </div>
                <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                  <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <div className='bg-[white] rounded-md p-2 font-medium'>
                    Users: 5
                  </div>
                </div>
                <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                  <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                    <FontAwesomeIcon icon={faShoppingCart} />
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
    </div>
  )
}
