import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { myntraContext } from '../../Context/MainContext'
import axios from 'axios'
import adminBaseUrl from '../../common/admin/AdminBaseUrl'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { Link } from 'react-router-dom'

export function ViewSubCategory() {
  const { sideBar } = useContext(myntraContext)
  const [api, setApi] = useState({
    subCategoryImageLink: "",
    subCategoryData: []
  })
  const getResponse = async () => {
    const response = await axios.get(adminBaseUrl + "category/view-sub-category")
    const finalResponse = response.data
    setApi({
      subCategoryImageLink: finalResponse?.subCategoryImageLink,
      subCategoryData: finalResponse?.data
    })
  }
  const deleteSubCategory = async (deleteId) => {
    const response = await axios.post(adminBaseUrl + `category/delete-sub-category/${deleteId}`)
    const finalResponse = response.data
    if (finalResponse.status === 1) {
      NotificationManager.success(finalResponse?.message, "", 1000);
      getResponse()
    }
    else {
      NotificationManager.error(finalResponse?.message, "", 1000);
    }
  }
  useEffect(() => {
    getResponse()
  }, [])
  return (
    <div>
      <div>
        <Header />
        <div className={`grid ${(sideBar) ? "grid-cols-[200px_auto]" : "grid-cols-[100px_auto]"} pt-[84px]`}>
          <Sidebar />
          <div className='w-full'>
            {/* <Location /> */}
            <div className='p-4 text-[white] font-mono'>
              <h1 className='w-max text-4xl font-bold mb-6  leading-[2.8rem]'>View Sub Category</h1>
              <table className='w-full table border'>
                <thead>
                  <tr>
                    <th className='border p-2 text-center'>Sub Category Name</th>
                    <th className='border p-2 text-center'>Category Name</th>
                    {/* <th className='border p-2 text-center'>Category Id</th> */}
                    <th className='border p-2 text-center'>Sub Category Description</th>
                    <th className='border p-2 text-center'>Sub Category Image</th>
                    <th className='border p-2 text-center'>Status</th>
                    <th className='border p-2 text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (api?.subCategoryData?.length >= 1)
                      ?
                      api?.subCategoryData?.map((items, index) => {
                        return (
                          <tr>
                            <td className='border p-2 text-center'>{items?.subCategoryName}</td>
                            <td className='border p-2 text-center'>{items?.categoryId?.categoryName}</td>
                            {/* <td className='border p-2 text-center'>123456789</td> */}
                            <td className='border p-2 text-center'>{items?.subCategoryDescription}</td>
                            <td className='border p-2 text-center'>
                              <img src={api?.subCategoryImageLink + items?.subCategoryImage} alt='' className='w-[80px] mx-auto' />
                            </td>
                            <td className='border p-2 text-center'>{items?.status}</td>
                            <td className='border p-2 text-center'>
                              <div className='grid grid-cols-2 gap-3'>
                                <button className='bg-[red] text-[white] w-full py-2 font-medium rounded-lg' onClick={() => deleteSubCategory(items?._id)}>Delete</button>
                                <Link to={`/admin/category/add-sub-category/${items?._id}`}>
                                  <button className='bg-[darkGreen] text-[white] w-full py-2 font-medium rounded-lg'>Edit</button>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                      :
                      <tr>
                        <td className='border p-2 text-center' colSpan={6}>! No Data Found !</td>
                      </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  )
}
