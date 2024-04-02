import React, { useContext, useEffect, useState } from 'react'
import { Header } from "../../common/web/Header"
import { Footer } from "../../common/web/Footer"
import { myntraContext } from '../../Context/MainContext'
import axios from 'axios'
import webBaseUrl from '../../common/web/WebBaseUrl'

export function MyOrders() {
  const [api, setApi] = useState({
    orderImageLink: "",
    orderData: []
  })
  const { userDetails } = useContext(myntraContext)
  const getResponse = async () => {
    const obj = { ...api }
    await axios.get(webBaseUrl + `order/view-order/${userDetails?._id}`)
      .then((response) => response.data)
      .then((finalResponse) => {
        obj.orderImageLink = finalResponse?.orderImageLink
        obj.orderData = finalResponse?.data
      })
    setApi(obj)
  }
  useEffect(() => {
    getResponse()
  }, [userDetails])
  return (
    (userDetails)
      ?
      <div>
        <Header />
        <div className='w-full px-3 py-12'>
          <h1 className='font-bold text-3xl text-center mb-10'>
            <span className='text-[#f8581c] me-1'>My</span>
            <span className='text-[#ff59bd]'>Orders</span>
          </h1>
          <table className='border mx-auto' cellPadding={10}>
            <tr className='border'>
              <th className='border'>Order Id</th>
              <th className='border'>Product Name</th>
              <th className='border'>Category Name</th>
              <th className='border'>Sub-Category Name</th>
              <th className='border'>Product Color</th>
              <th className='border'>Product_image</th>
              <th className='border'>Product Price</th>
              <th className='border'>Quantity</th>
            </tr>
            {
              (api?.orderData?.length >= 1)
                ?
                api?.orderData?.map((items, index) => {
                  return (
                    <tr className='border capitalize'>
                      <td className='border'>{items?._id}</td>
                      <td className='border'>{items?.productName}</td>
                      <td className='border'>{items?.categoryName}</td>
                      <td className='border'>{items?.subCategoryName}</td>
                      <td className='border'>{items?.productColor}</td>
                      <td className='flex items-center justify-center'>
                        <img src={api?.orderImageLink + items?.productImage} alt="" className='w-[100px]' />
                      </td>
                      <td className='border'>{items?.productPrice} Rs</td>
                      <td className='border'>{items?.quantity}</td>
                    </tr>
                  )
                })
                :
                ""
            }
            <tr className='border'>
              <td colspan={8} className='capitalize text-[13px] text-center font-bold text-[black] text-opacity-55 p-0'>
                note:- if you want to cancel the order then as the delivery person comes to deliver the order you can ask him/her to cancel the order and take it back
              </td>
            </tr>
          </table>
        </div>
        <Footer />
      </div>
      :
      ""
  )
}