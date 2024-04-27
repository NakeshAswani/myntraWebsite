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

export function ViewProduct() {
  const { sideBar } = useContext(myntraContext)
  const [api, setApi] = useState({
    productImageLink: "",
    productData: []
  })
  const getResponse = async () => {
    const response = await axios.get(adminBaseUrl + "product/view-product")
    const finalResponse = response.data
    setApi({
      productData: finalResponse?.data,
      productImageLink: finalResponse?.productImageLink
    })
  }
  const deleteProduct = async (deleteId) => {
    const response = await axios.post(adminBaseUrl + `product/delete-product/${deleteId}`)
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
            <div className='p-4 font-mono text-[white]'>
              <h1 className='w-max text-4xl font-bold mb-6  leading-[2.8rem]'>View Product</h1>
              <div className='grid grid-cols-2 gap-2'>
                {
                  (api?.productData?.length >= 1)
                    ?
                    api?.productData?.map((items, index) => {
                      return (
                        <div className='w-full p-2 border rounded-lg grid grid-cols-[30%_auto] items-center' key={index}>
                          <figure className='w-full h-full me-2'>
                            <img src={api?.productImageLink + items?.productImage} alt='' className='w-full h-full' />
                          </figure>
                          <ul className='ms-2'>
                            <li className='font-bold capitalize my-2'>
                              product name:&nbsp;
                              <span className='font-normal'>
                                {items?.productName}
                              </span>
                            </li>
                            <li className='font-bold capitalize my-2'>
                              category name:&nbsp;
                              <span className='font-normal'>
                                {items?.categoryName}
                              </span>
                            </li>
                            <li className='font-bold capitalize my-2'>
                              sub category name:&nbsp;
                              <span className='font-normal'>
                                {items?.subCategoryId?.subCategoryName}
                              </span>
                            </li>
                            <li className='font-bold capitalize my-2'>
                              product description:&nbsp;
                              <span className='font-normal'>
                                {items?.productDescription.slice(0, 15)}...
                              </span>
                            </li>
                            <li className='font-bold capitalize my-2'>
                              product color:&nbsp;
                              <span className='font-normal'>
                                {items?.productColor}
                              </span>
                            </li>
                            <li className='font-bold capitalize my-2'>
                              product price:&nbsp;
                              <span className='font-normal'>
                                {items?.productPrice} Rs.
                              </span>
                            </li>
                            <li className='font-bold capitalize my-2'>
                              product rating:&nbsp;
                              <span className='font-normal'>
                                {items?.productRating}
                              </span>
                            </li>
                            <li className='font-bold capitalize my-2'>
                              rating count:&nbsp;
                              <span className='font-normal'>
                                {items?.ratingCount}
                              </span>
                            </li>
                            <li className='font-bold capitalize my-2'>
                              status:&nbsp;
                              <span className='font-normal'>
                                {items?.status}
                              </span>
                            </li>
                            <li className='font-bold capitalize flex gap-3'>
                              <button className='bg-[red] text-[white] py-2 px-3 font-medium rounded-lg' onClick={() => deleteProduct(items?._id)}>Delete</button>
                              <Link to={`/admin/product/add-product/${items?._id}`}>
                                <button className='bg-[darkGreen] text-[white] py-2 px-3 font-medium rounded-lg'>Edit</button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )
                    })
                    :
                    ""
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  )
}
