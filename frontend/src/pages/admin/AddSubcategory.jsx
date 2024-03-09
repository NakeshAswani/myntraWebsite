import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { adminContext } from '../../Context/MainContext'

export function AddSubcategory() {
  const { sideBar } = useContext(adminContext)
  return (
    <div>
      <div>
        <Header />
        <div className={`grid ${(sideBar) ? "grid-cols-[200px_auto]" : "grid-cols-[100px_auto]"} h-full`}>
          <Sidebar />
          <div className='w-full'>
            <Location />
            <div className='p-4'>
              <h1 className='w-max text-4xl font-bold mb-6 bgClipColor leading-[2.8rem]'>Add Sub Category</h1>
              <form className='w-8/12'>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Sub Category Name <span className='text-[red]'>*</span></label>
                  <div className='w-full bg-[black] bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="text" className='w-full bg-[white] rounded-md p-1 outline-offset-[-999px]' />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Category Name <span className='text-[red]'>*</span></label>
                  <div className='w-full bg-[black] bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="text" className='w-full bg-[white] rounded-md p-1 outline-offset-[-999px]' />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Category Id <span className='text-[red]'>*</span></label>
                  <div className='w-full bg-[black] bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="text" className='w-full bg-[white] rounded-md p-1 outline-offset-[-999px]' />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Sub Category Description <span className='text-[red]'>*</span></label>
                  <div className='w-full h-[120px] bg-[black] bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <textarea className='w-full h-full bg-[white] rounded-md p-1 outline-offset-[-999px] resize-none'></textarea>
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Sub Category Image <span className='text-[red]'>*</span></label>
                  <div className='w-full bg-[black] bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="file" className='w-full bg-[white] rounded-md p-1' />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Sub Category Status <span className='text-[red]'>*</span></label>
                  <div className='text-[18px]'>
                    <input type="radio" name='status' value={1} className='me-1' />Active<br />
                    <input type="radio" name='status' value={0} className='me-1' />De-Active
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
