import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { myntraContext } from '../../Context/MainContext'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications'
import adminBaseUrl from '../../common/admin/AdminBaseUrl'

export function AddColor() {
  const { sideBar } = useContext(myntraContext)
  const [formData, setFormData] = useState({
    colorName: "",
    colorDescription: "",
    status: 1
  })
  const changeValue = (event) => {
    const obj = { ...formData }
    obj[event.target.name] = event.target.value
    setFormData(obj)
  }
  const url = useParams()
  const navigate = useNavigate()
  const addColor = async (event) => {
    event.preventDefault()
    if (url.id === undefined) {
      try {
        const response = await axios.post(adminBaseUrl + "color/add-color", formData)
        const finalResponse = response.data
        if (finalResponse?.status === 1) {
          NotificationManager.success(finalResponse?.message, "", 1000);
          setFormData({
            colorName: "",
            colorDescription: "",
            status: 1
          })
          setTimeout(() => {
            navigate("/admin/color/view-color")
          }, 1100);
        }
        else {
          NotificationManager.error(finalResponse?.message, "", 1000);
        }
      }
      catch (error) {
        NotificationManager.error("! data not added !", "", 1000);
        console.error(error)
      }
    }
    else {
      try {
        const response = await axios.post(adminBaseUrl + `color/add-color/${url.id}`, formData)
        const finalResponse = response.data
        if (finalResponse?.status === 1) {
          NotificationManager.success(finalResponse?.message, "", 1000);
          setFormData({
            colorName: "",
            colorDescription: "",
            status: 1
          })
          setTimeout(() => {
            navigate("/admin/color/view-color")
          }, 1100);
        }
        else {
          NotificationManager.error(finalResponse?.message, "", 1000);
        }
      }
      catch (error) {
        NotificationManager.error("! data not added !", "", 1000);
        console.error(error)
      }
    }
  }
  useEffect(() => {
    setFormData({
      colorName: "",
      colorDescription: "",
      status: 1
    })
    if (url.id !== "" && url.id !== undefined) {
      try {
        axios.get(adminBaseUrl + `color/edit-color/${url.id}`)
          .then((response) => response.data)
          .then((finalResponse) => {
            setFormData(finalResponse?.data)
          })
      }
      catch (error) {
        NotificationManager.error("! data not found !", "", 1000);
        console.error(error)
      }
    }
  }, [url.id])
  return (
    <div>
      <div>
        <Header />
        <div className={`grid ${(sideBar) ? "grid-cols-[200px_auto]" : "grid-cols-[100px_auto]"} pt-[84px]`}>
          <Sidebar />
          <div className='w-full'>
            <Location />
            <div className='p-4'>
              <h1 className='w-max text-4xl font-bold mb-6 bgClipColor  leading-[2.8rem]'>Add Color</h1>
              <form className='w-8/12' onSubmit={addColor}>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Color Name <span className='text-[red]'>*</span></label>
                  <div className='w-full bg-[black] bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="text" className='w-full bg-[white] rounded-md p-1 outline-offset-[-999px]' value={formData?.colorName} name='colorName' onChange={changeValue} />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Color Description <span className='text-[red]'>*</span></label>
                  <div className='w-full h-[120px] bg-[black] bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <textarea className='w-full h-full bg-[white] rounded-md p-1 outline-offset-[-999px] resize-none' value={formData?.colorDescription} name='colorDescription' onChange={changeValue}></textarea>
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Color Status <span className='text-[red]'>*</span></label>
                  <div className='text-[18px]'>
                      <input type="radio" name='status' value={1} checked={formData.status == 1 ? true : false} onChange={changeValue} className='me-1' />Active<br />
                      <input type="radio" name='status' value={0} checked={formData.status == 0 ? true : false} onChange={changeValue} className='me-1' />De-Active
                    </div>
                </div>
                <div className='mb-6'>
                  <button className='py-2 px-4 font-semibold border border-[black] rounded-lg hover:bg-[black] hover:text-[white]'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  )
}
