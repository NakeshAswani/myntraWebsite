import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { myntraContext } from '../../Context/MainContext'
import axios from 'axios'
import adminBaseUrl from '../../common/admin/AdminBaseUrl'
import { Link } from 'react-router-dom'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications'

export function ViewSlider() {
  const { sideBar } = useContext(myntraContext)
  const [api, setApi] = useState({
    sliderImageLink: "",
    sliderData: []
  })
  const getResponse = async () => {
    const response = await axios.get(adminBaseUrl + "slider/view-slider")
    const finalResponse = response.data
    setApi({
      sliderImageLink: finalResponse?.sliderImageLink,
      sliderData: finalResponse?.data
    })
  }
  const deleteSlider = async (deleteId) => {
    const response = await axios.post(adminBaseUrl + `slider/delete-slider/${deleteId}`)
    const finalResponse = response.data
    if (finalResponse.status === 1){
      NotificationManager.success(finalResponse?.message, "", 1000);
      getResponse()
    }
    else{
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
          <div className='w-full font-mono text-[white]'>
            {/* <Location /> */}
            <div className='p-4'>
              <h1 className='w-max text-4xl font-bold mb-6 leading-[2.8rem]'>View Slider</h1>
              <table className='w-full table border'>
                <thead>
                  <tr>
                    <th className='border p-2 text-center'>Slider Number</th>
                    <th className='border p-2 text-center'>Slider Name</th>
                    <th className='border p-2 text-center'>Slider Description</th>
                    <th className='border p-2 text-center'>Slider Image</th>
                    <th className='border p-2 text-center'>Status</th>
                    <th className='border p-2 text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (api?.sliderData?.length >= 1)
                      ?
                      api?.sliderData?.map((items, index) => {
                        return (
                          <tr key={index}>
                            <td className='border p-2 text-center'>{items?.sliderNumber}</td>
                            <td className='border p-2 text-center'>{items?.sliderName}</td>
                            <td className='border p-2 text-center'>{items?.sliderDescription}</td>
                            <td className='border p-2 text-center'>
                              <img src={api?.sliderImageLink + items?.sliderImage} alt="" className='w-[80px] mx-auto' />
                            </td>
                            <td className='border p-2 text-center'>{items?.status}</td>
                            <td className='border p-2 text-center'>
                              <div className='grid grid-cols-2 gap-3'>
                                <button className='bg-[red] text-[white] w-full py-2 font-medium rounded-lg' onClick={() => deleteSlider(items?._id)}>Delete</button>
                                <Link to={`/admin/slider/add-slider/${items?._id}`}>
                                  <button className='bg-[darkGreen] text-[white] w-full py-2 font-medium rounded-lg'>Edit</button>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                      :
                      <tr>
                        <td className='border p-2 text-center'>! No Data Found !</td>
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