import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { myntraContext } from '../../Context/MainContext'
import axios from 'axios'
import adminBaseUrl from '../../common/admin/AdminBaseUrl'

export function Orders() {
  const { sideBar } = useContext(myntraContext)
  const [api, setApi] = useState({
    orderImageLink: "",
    orderData: [],
    userIds: [],
    userNames: {}
  })
  const getResponse = async () => {
    const obj = { ...api }
    try {
      const response = await axios.get(adminBaseUrl + "order/view-orders");
      const finalResponse = response.data;
      obj.orderImageLink = finalResponse?.orderImageLink
      obj.orderData = finalResponse?.data || []
      obj.userIds = [...new Set(finalResponse?.data?.map((item) => item.userId) || [])]
      const nameResponse = await axios.get(adminBaseUrl + "user/view-users");
      const nameFinalResponse = nameResponse.data
      finalResponse?.data?.forEach((item) => {
        const userId = item.userId;
        if (userId && nameFinalResponse?.data) {
          const matchingUser = nameFinalResponse.data.find(user => user._id === userId);
          if (matchingUser) {
            obj.userNames[userId] = matchingUser.fullName;
          }
        }
      });
      setApi(obj)
    }
    catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getResponse()
  }, [])
  console.log(api?.userNames);
  return (
    <div>
      <div>
        <Header />
        <div className={`grid ${(sideBar) ? "grid-cols-[200px_auto]" : "grid-cols-[100px_auto]"} pt-[84px]`}>
          <Sidebar />
          <div className='w-full font-mono'>
            {/* <Location /> */}
            <div className='p-4'>
              <h1 className='w-max text-4xl font-bold mb-6  leading-[2.8rem]'>View Order</h1>
              <div className='grid grid-cols-2 gap-3'>
                {
                  (api?.orderData?.length >= 1)
                    ?
                    api?.orderData?.map((items, index) => {
                      return (
                        <div className='w-full p-2 border rounded-lg grid grid-cols-[30%_auto] items-center' key={index}>
                          <figure className='w-full h-full me-2'>
                            <img src={api?.orderImageLink + items?.productImage} alt='' className='w-full h-full' />
                          </figure>
                          <ul className='ms-2'>
                            <li className='font-bold capitalize my-1'>
                              order id:&nbsp;
                              <span className='font-normal'>
                                {items?._id}
                              </span>
                            </li>
                            <li className='font-bold capitalize my-1'>
                              user name:&nbsp;
                              <span className='font-normal'>
                                {
                                  (api?.userNames)
                                    ?
                                    Object.entries(api?.userNames).map(([key, value]) => (key === items?.userId) ? value : "")
                                    :
                                    ""
                                }
                              </span>
                            </li>
                            <li className='font-bold capitalize my-1'>
                              product name:&nbsp;
                              <span className='font-normal'>
                                {items?.productName}
                              </span>
                            </li>
                            <li className='font-bold capitalize my-1'>
                              category name:&nbsp;
                              <span className='font-normal'>
                                {items?.categoryName}
                              </span>
                            </li>
                            <li className='font-bold capitalize my-1'>
                              sub category name:&nbsp;
                              <span className='font-normal'>
                                {items?.subCategoryName}
                              </span>
                            </li>
                            <li className='font-bold capitalize my-1'>
                              product color:&nbsp;
                              <span className='font-normal'>
                                {items?.productColor}
                              </span>
                            </li>
                            <li className='font-bold capitalize my-1'>
                              product price:&nbsp;
                              <span className='font-normal'>
                                {items?.productPrice} Rs.
                              </span>
                            </li>
                            <li className='font-bold capitalize my-1'>
                              quantity:&nbsp;
                              <span className='font-normal'>
                                {items?.quantity} {(items?.quantity === 1) ? "item" : "items"}
                              </span>
                            </li>
                            <li className='font-bold capitalize my-1'>
                              total amount:&nbsp;
                              <span className='font-normal'>
                                {items?.totalAmount} Rs.
                              </span>
                            </li>
                            <li className='font-bold capitalize flex gap-3'>
                              <button className='bg-[red] text-[black] py-2 px-3 font-medium rounded-lg'>Delete</button>
                            </li>
                          </ul>
                        </div>
                      )
                    })
                    :
                    <article className='text-[white] text-[20px]'>
                      ! No Orders Yet !
                    </article>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}