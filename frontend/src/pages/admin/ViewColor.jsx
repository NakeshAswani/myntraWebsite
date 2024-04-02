import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { myntraContext } from '../../Context/MainContext'

export function ViewColor() {
  const { sideBar } = useContext(myntraContext)
  return (
    <div>
      <div>
        <Header />
        <div className={`grid ${(sideBar) ? "grid-cols-[200px_auto]" : "grid-cols-[100px_auto]"} pt-[84px]`}>
          <Sidebar />
          <div className='w-full'>
            <Location />
            <div className='p-4'>
              <h1 className='w-max text-4xl font-bold mb-6 bgClipColor leading-[2.8rem]'>View Color</h1>
              <table className='w-full table border'>
                <thead>
                  <tr>
                    <th className='border p-2 text-center'>Color Name</th>
                    <th className='border p-2 text-center'>Color Description</th>
                    <th className='border p-2 text-center'>Status</th>
                    <th className='border p-2 text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border p-2 text-center'>blue</td>
                    <td className='border p-2 text-center'>Color 1</td>
                    <td className='border p-2 text-center'>1</td>
                    <td className='p-2 text-center grid grid-cols-2 gap-3'>
                      <button className='bg-[red] text-[white] w-full py-2 font-medium rounded-lg'>Delete</button>
                      <button className='bg-[darkGreen] text-[white] w-full py-2 font-medium rounded-lg'>Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
