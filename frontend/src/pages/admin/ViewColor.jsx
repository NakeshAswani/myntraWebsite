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

export function ViewColor() {
  const { sideBar } = useContext(myntraContext)
  const [colorData, setColorData] = useState([])
  const getResponse = async () => {
    const response = await axios.get(adminBaseUrl + "color/view-color")
    const finalResponse = response.data
    setColorData(finalResponse?.data)
  }
  const deleteColor = async (deleteId) => {
    const response = await axios.post(adminBaseUrl + `color/delete-color/${deleteId}`)
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
            <div className='p-4 font-mono'>
              <h1 className='w-max text-4xl font-bold mb-6  leading-[2.8rem]'>View Color</h1>
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
                  {
                    (colorData.length >= 1)
                      ?
                      colorData.map((items, index) => {
                        return (
                          <tr>
                            <td className='border p-2 text-center'>{items?.colorName}</td>
                            <td className='border p-2 text-center'>{items?.colorDescription}</td>
                            <td className='border p-2 text-center'>{items?.status}</td>
                            <td className='border p-2 text-center'>
                              <div className='grid grid-cols-2 gap-3'>
                                <button className='bg-[red] text-[white] w-full py-2 font-medium rounded-lg' onClick={() => deleteColor(items?._id)}>Delete</button>
                                <Link to={`/admin/color/add-color/${items?._id}`}>
                                  <button className='bg-[darkGreen] text-[white] w-full py-2 font-medium rounded-lg'>Edit</button>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                      :
                      <tr>
                        <td className='border p-2 text-center' colSpan={4}>! No Data Found !</td>
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
