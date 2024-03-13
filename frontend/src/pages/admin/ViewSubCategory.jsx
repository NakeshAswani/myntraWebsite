import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { adminContext } from '../../Context/MainContext'

export function ViewSubCategory() {
  const { sideBar } = useContext(adminContext)
  return (
    <div>
      <div>
        <Header />
        <div className={`grid ${(sideBar) ? "grid-cols-[200px_auto]" : "grid-cols-[100px_auto]"} pt-[84px]`}>
          <Sidebar />
          <div className='w-full'>
            <Location />
            <div className='p-4'>
              <h1 className='w-max text-4xl font-bold mb-6 bgClipColor leading-[2.8rem]'>View Sub Category</h1>
              <table className='w-full table border'>
                <thead>
                  <tr>
                    <th className='border p-2 text-center'>Sub Category Name</th>
                    <th className='border p-2 text-center'>Category Name</th>
                    <th className='border p-2 text-center'>Category Id</th>
                    <th className='border p-2 text-center'>Sub Category Description</th>
                    <th className='border p-2 text-center'>Sub Category Image</th>
                    <th className='border p-2 text-center'>Status</th>
                    <th className='border p-2 text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border p-2 text-center'>topwear</td>
                    <td className='border p-2 text-center'>men</td>
                    <td className='border p-2 text-center'>123456789</td>
                    <td className='border p-2 text-center'>Sub Category 1</td>
                    <td className='border p-2 text-center'>1.png</td>
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
