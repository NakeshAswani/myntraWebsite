import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { myntraContext } from '../../Context/MainContext'
import axios from 'axios'
import adminBaseUrl from '../../common/admin/AdminBaseUrl'

export function Users() {
  const { sideBar } = useContext(myntraContext)
  const [userData, setUserData] = useState([])
  const getResponse = async () => {
    const response = await axios.get(adminBaseUrl + "user/view-users")
    const finalResponse = await response.data
    setUserData(finalResponse?.data)
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
              <h1 className='w-max text-4xl font-bold mb-6  leading-[2.8rem]'>View Users</h1>
              <div className='grid grid-cols-2 gap-3 items-start'>
                {
                  (userData?.length >= 1)
                    ?
                    userData?.map((items, index) => {
                      return (
                        <div className='w-full p-2 border rounded-lg items-center' key={index}>
                          <ul className='ms-2'>
                            <li className='font-bold capitalize my-1'>
                              username: <span className='font-normal normal-case'>{items?.fullName}</span>
                            </li>
                            <li className='font-bold capitalize my-1'>
                              phone: <span className='font-normal'>{items?.Phone}</span>
                            </li>
                            <li className='font-bold capitalize my-1'>
                              email: <span className='font-normal normal-case'>{items?.Email}</span>
                            </li>
                            {
                              (items?.Address?.length >= 1)
                                ?
                                (items?.Address?.length > 1)
                                  ?
                                  items?.Address?.map((innerItem, innerIndex) => {
                                    return (
                                      <li className='font-bold capitalize my-1 flex'>
                                        address {innerIndex + 1}:&nbsp;
                                        <span className='font-normal normal-case'>
                                          {
                                            Object.entries(innerItem).map(([key, value]) => {
                                              if (!["_id"].includes(key)) {
                                                return (
                                                  <div className='flex'>
                                                    <span>{key}:&nbsp;</span>
                                                    <span>{value}</span><br />
                                                  </div>
                                                )
                                              }
                                            })
                                          }
                                        </span>
                                      </li>
                                    )
                                  })
                                  :
                                  <li className='font-bold capitalize my-1 flex'>
                                    address 1:&nbsp;
                                    <div className='font-normal normal-case'>
                                      {
                                        Object.entries(items?.Address[0]).map(([key, value]) => {
                                          if (!["_id"].includes(key)) {
                                            return (
                                              <div className='flex'>
                                                <span>{key}:&nbsp;</span>
                                                <span>{value}</span><br />
                                              </div>
                                            )
                                          }
                                        })
                                      }
                                    </div>
                                  </li>
                                :
                                ""
                            }
                          </ul>
                        </div>
                      )
                    })
                    :
                    <article className='text-[white] text-[20px]'>
                      ! No Users Yet !
                    </article>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
