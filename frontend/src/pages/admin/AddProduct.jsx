import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { myntraContext } from '../../Context/MainContext'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import adminBaseUrl from '../../common/admin/AdminBaseUrl'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications'

export function AddProduct() {
  const { sideBar } = useContext(myntraContext)
  const [api, setApi] = useState({
    subCategoryData: [],
    colorData: []
  })
  const [formData, setFormData] = useState({
    productName: "",
    categoryName: "",
    subCategoryId: "",
    productPrice: "",
    finalPrice: "",
    productDescription: "",
    productRating: "",
    ratingCount: "",
    productColor: "",
    productImage: null,
    status: 1
  })
  const changeValue = (event) => {
    const obj = { ...formData }
    obj[event.target.name] = event.target.value
    setFormData(obj)
  }
  const url = useParams()
  const navigate = useNavigate()
  const getResponse = async () => {
    const subCatResponse = await axios.get(adminBaseUrl + "category/view-sub-category")
    const subCatFinalResponse = subCatResponse.data
    const colorResponse = await axios.get(adminBaseUrl + "color/view-color")
    const colorFinalResponse = colorResponse.data
    setApi({
      subCategoryData: subCatFinalResponse?.data,
      colorData: colorFinalResponse?.data
    })
  }
  const addProduct = async (event) => {
    event.preventDefault()
    if (url.id === undefined) {
      try {
        const allFormData = new FormData(event.target)
        const response = await axios.post(adminBaseUrl + "product/add-product", allFormData)
        const finalResponse = response.data
        if (finalResponse?.status === 1) {
          NotificationManager.success(finalResponse?.message, "", 1000);
          setFormData({
            productName: "",
            categoryName: "",
            subCategoryId: "",
            productPrice: "",
            finalPrice: "",
            productDescription: "",
            productRating: "",
            ratingCount: "",
            productColor: "",
            productImage: null,
            status: 1
          })
          setTimeout(() => {
            navigate("/admin/product/view-product")
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
        const response = await axios.post(adminBaseUrl + `product/add-product/${url.id}`, allFormData)
        const finalResponse = response.data
        if (finalResponse?.status === 1) {
          NotificationManager.success(finalResponse?.message, "", 1000);
          setFormData({
            productName: "",
            categoryName: "",
            subCategoryId: "",
            productPrice: "",
            finalPrice: "",
            productDescription: "",
            productRating: "",
            ratingCount: "",
            productColor: "",
            productImage: null,
            status: 1
          })
          setTimeout(() => {
            navigate("/admin/product/view-product")
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
      productName: "",
      categoryName: "",
      subCategoryId: "",
      productPrice: "",
      finalPrice: "",
      productDescription: "",
      productRating: "",
      ratingCount: "",
      productColor: "",
      productImage: null,
      status: 1
    })
    getResponse()
    if (url.id !== "" && url.id !== undefined) {
      try {
        axios.get(adminBaseUrl + `product/edit-product/${url.id}`)
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
            {/* <Location /> */}
            <div className='p-4 font-mono'>
              <h1 className='w-max text-4xl font-bold mb-6  leading-[2.8rem]'>Add Product</h1>
              <form className='w-8/12' onSubmit={addProduct}>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1 '>Product Name <span className='text-[red]'>*</span></label>
                  <div className='w-full bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="text" className='w-full border border-1 border-[black] rounded-md p-1 outline-offset-[-999px]' value={formData?.productName} name='productName' onChange={changeValue} />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1 '>Category Name <span className='text-[red]'>*</span></label>
                  <div className='w-full bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="text" className='w-full border border-1 border-[black] rounded-md p-1 outline-offset-[-999px]' value={formData?.categoryName} name='categoryName' onChange={changeValue} />
                  </div>
                </div>
                <div className='mb-6 '>
                  <label className='block text-[18px] font-medium mb-1 '>Sub Category Id <span className='text-[red]'>*</span></label>
                  <div className='w-full  bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <select className='w-full border border-1 border-[black] rounded-md p-1 outline-offset-[-999px]' value={formData?.subCategoryId} name='subCategoryId' onChange={changeValue}>
                      <option value={""}>Select Sub Category Id (Category Name: Sub Category Name)</option>
                      {
                        (api?.subCategoryData?.length >= 1)
                          ?
                          api?.subCategoryData?.map((items, index) => {
                            return (
                              <option value={items?._id} key={index}>
                                {items?._id} ({items?.categoryId?.categoryName + ": " + items?.subCategoryName})
                              </option>
                            )
                          })
                          :
                          ""
                      }
                    </select>
                  </div>
                </div>
                <div className='mb-6 '>
                  <label className='block text-[18px] font-medium mb-1 '>Product Price <span className='text-[red]'>*</span></label>
                  <div className='w-full  bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="text" className='w-full border border-1 border-[black] rounded-md p-1 outline-offset-[-999px]' value={formData?.productPrice} name='productPrice' onChange={changeValue} />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1 '>Final Price <span className='text-[red]'>*</span></label>
                  <div className='w-full  bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="text" className='w-full border border-1 border-[black] rounded-md p-1 outline-offset-[-999px]' value={formData?.finalPrice} name='finalPrice' onChange={changeValue} />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1 '>Product Description <span className='text-[red]'>*</span></label>
                  <div className='w-full h-[120px]  bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <textarea className='w-full h-full border border-1 border-[black] rounded-md p-1 outline-offset-[-999px] resize-none' value={formData?.productDescription} name='productDescription' onChange={changeValue}></textarea>
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1 '>Product Rating <span className='text-[red]'>*</span></label>
                  <div className='w-full  bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="text" className='w-full border border-1 border-[black] rounded-md p-1 outline-offset-[-999px]' value={formData?.productRating} name='productRating' onChange={changeValue} />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1 '>Rating Count <span className='text-[red]'>*</span></label>
                  <div className='w-full  bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="text" className='w-full border border-1 border-[black] rounded-md p-1 outline-offset-[-999px]' placeholder={"example: 10.5k"} value={formData?.ratingCount} name='ratingCount' onChange={changeValue} />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1 '>Product Color <span className='text-[red]'>*</span></label>
                  <div className='w-full  bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <select className='w-full border border-1 border-[black] rounded-md p-1 outline-offset-[-999px]' value={formData?.productColor} name='productColor' onChange={changeValue}>
                      <option value={""}>Select Color Name</option>
                      {
                        (api?.colorData?.length >= 1)
                          ?
                          api?.colorData?.map((items, index) => {
                            return (
                              <option value={items?.colorName} key={index}>
                                {items?.colorName}
                              </option>
                            )
                          })
                          :
                          ""
                      }
                    </select>
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1 '>Product Image <span className='text-[red]'>*</span></label>
                  <div className='w-full  bg-opacity-50 p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="file" className='file_upload w-full rounded-md border border-1 border-[black] p-[7px]' name='productImage' />
                  </div>
                </div>
                <div className='mb-6 '>
                  <label className='block text-[18px] font-medium mb-1 '>Product Status <span className='text-[red]'>*</span></label>
                  <div className='text-[18px]'>
                    <input type="radio" name='status' value={1} checked={formData.status == 1 ? true : false} onChange={changeValue} className='me-1 ' />Active<br />
                    <input type="radio" name='status' value={0} checked={formData.status == 0 ? true : false} onChange={changeValue} className='me-1' />De-Active
                  </div>
                </div>
                <div className='mb-6'>
                  <button className='py-2 px-4 font-semibold border border-1 border-[black] rounded-lg hover:bg-[black] hover:text-[white]'>Submit</button>
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
