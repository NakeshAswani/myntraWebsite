import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { myntraContext } from '../../Context/MainContext'
import axios from 'axios'
import adminBaseUrl from '../../common/admin/AdminBaseUrl'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { useNavigate, useParams } from 'react-router-dom'

export function AddSlider() {
  const { sideBar } = useContext(myntraContext)
  const [formData, setFormData] = useState({
    sliderNumber: "",
    sliderName: "",
    sliderDescription: "",
    sliderImage: null,
    status: 1
  })
  const changeValue = (event) => {
    const obj = { ...formData }
    obj[event.target.name] = event.target.value
    setFormData(obj)
  }
  const url = useParams()
  const navigate = useNavigate()
  const addSlider = async (event) => {
    event.preventDefault()

    if (url.id === undefined) {
      try {
        const allFormData = new FormData(event.target)
        const response = await axios.post(adminBaseUrl + "slider/add-slider", allFormData)
        const finalResponse = response.data
        if (finalResponse?.status === 1) {
          NotificationManager.success(finalResponse?.message, "", 1000);
          setFormData({
            sliderNumber: "",
            sliderName: "",
            sliderDescription: "",
            sliderImage: null,
            status: 1
          })
          setTimeout(() => {
            navigate("/admin/slider/view-slider")
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
        const allFormData = new FormData(event.target)
        const response = await axios.post(adminBaseUrl + `slider/add-slider/${url.id}`, allFormData)
        const finalResponse = response.data
        if (finalResponse?.status === 1) {
          NotificationManager.success(finalResponse?.message, "", 1000);
          setFormData({
            sliderNumber: "",
            sliderName: "",
            sliderDescription: "",
            sliderImage: null,
            status: 1
          })
          setTimeout(() => {
            navigate("/admin/slider/view-slider")
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
      sliderNumber: "",
      sliderName: "",
      sliderDescription: "",
      sliderImage: null,
      status: 1
    })
    if (url.id !== "" && url.id !== undefined) {
      try {
        axios.get(adminBaseUrl + `slider/edit-slider/${url.id}`)
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
      <Header />
      <div className={`grid ${(sideBar) ? "grid-cols-[200px_auto]" : "grid-cols-[100px_auto]"} pt-[84px]`}>
        <Sidebar />
        <div className='w-full font-mono'>
          {/* <Location /> */}
          <div className='p-4'>
            <h1 className='w-max text-4xl font-bold mb-6    leading-[2.8rem]'>Add Slider</h1>
            <form className='w-8/12' onSubmit={addSlider}>
              <div className='mb-6'>
                <label className='block text-[18px] font-medium  mb-1'>Slider Number <span className='text-[red]'>*</span></label>
                <div className='w-full  bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                  <input type="text" className='w-full border border-1 border-[black] rounded-md p-1 outline-offset-[-999px]' value={formData?.sliderNumber} name='sliderNumber' onChange={changeValue} />
                </div>
              </div>
              <div className='mb-6'>
                <label className='block text-[18px] font-medium mb-1 '>Slider Name <span className='text-[red]'>*</span></label>
                <div className='w-full  bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                  <input type="text" className='w-full border border-1 border-[black]  rounded-md p-1 outline-offset-[-999px]' value={formData?.sliderName} name='sliderName' onChange={changeValue} />
                </div>
              </div>
              <div className='mb-6'>
                <label className='block text-[18px] font-medium mb-1  '>Slider Description <span className='text-[red]'>*</span></label>
                <div className='w-full h-[120px]  bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                  <textarea className='w-full h-full border border-1 border-[black] rounded-md p-1 outline-offset-[-999px] resize-none' value={formData?.sliderDescription} name='sliderDescription' onChange={changeValue}></textarea>
                </div>
              </div>
              <div className='mb-6'>
                <label className='block text-[18px] font-medium mb-1 '>Slider Image <span className='text-[red]'>*</span></label>
                <div className='w-full  bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                  <input type="file" className='file_upload w-full border border-1 border-[black] rounded-md p-[7px]' name='sliderImage' />
                </div>
              </div>
              <div className='mb-6 '>
                <label className='block text-[18px] font-medium mb-1'>Slider Status <span className='text-[red]'>*</span></label>
                <div className='text-[18px]'>
                  <input type="radio" name='status' value={1} checked={formData.status == 1 ? true : false} onChange={changeValue} className='me-1' />Active<br />
                  <input type="radio" name='status' value={0} checked={formData.status == 0 ? true : false} onChange={changeValue} className='me-1' />De-Active
                </div>
              </div>
              <div className='mb-6 '>
                <button className='py-2 px-4 font-semibold border border-[black] rounded-lg hover:bg-[black] hover:text-[white]'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  )
}
