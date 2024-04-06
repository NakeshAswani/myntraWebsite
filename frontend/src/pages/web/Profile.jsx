import React, { useContext, useState } from 'react'
import { Header } from '../../common/web/Header'
import avatar from "../../images/avatar.png"
import { myntraContext } from '../../Context/MainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import webBaseUrl from '../../common/web/WebBaseUrl'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export function Profile() {
  const { token, setToken, userDetails, setUserDetails } = useContext(myntraContext)
  const [formData, setFormData] = useState({
    fullName: userDetails?.fullName,
    Email: userDetails?.Email,
    Phone: userDetails?.Phone,
    Password: userDetails?.Password
  })
  const [edit, setEdit] = useState(false)
  const changeValue = (event) => {
    const obj = { ...formData }
    obj[event.target.name] = event.target.value
    setFormData(obj)
  }
  const updateUser = async () => {
    await axios.post(webBaseUrl + `user/add-user/${userDetails?._id}`, formData)
      .then((response) => response.data)
      .then((finalResponse) => {
        if (finalResponse?.status === 1) {
          NotificationManager.success(finalResponse?.message, "", 1000);
        }
        else {
          NotificationManager.error(finalResponse?.message, "", 1000);
        }
      })
      .catch(error => {
        console.error(error)
      })
    await axios.get(webBaseUrl + `user/view-user/${userDetails?._id}/?token=${token}`)
      .then((response) => response.data)
      .then((finalResponse) => {
        setUserDetails(finalResponse?.data)
      })
      .catch(error => {
        console.error(error)
      })
    setEdit(false)
  }
  const deleteUser = () => {
    if (window.confirm("Are You Sure You Want To Delete Account:")) {
      axios.post(webBaseUrl + `order/delete-order/${userDetails?._id}`)
        .then((response) => response.data)
        .then((finalResponse) => {
          if (finalResponse?.status === 1) {
            axios.get(webBaseUrl + `user/delete-user/${userDetails?._id}`)
              .then((innerResponse) => innerResponse.data)
              .then((innerFinalResponse) => {
                if (innerFinalResponse?.status === 1) {
                  setToken(null)
                  setUserDetails(null)
                  NotificationManager.success(innerFinalResponse?.message, "", 1000);
                }
                else {
                  NotificationManager.error(innerFinalResponse?.message, "", 1000);
                }
              })
              .catch(error => {
                console.error(error)
              })
          }
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      {
        (userDetails)
          ?
          <div className='w-full px-3 py-10'>
            <div className='px-20'>
              <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto]'>
                <div className='h-full bg-[white] me-[1px] rounded-s-lg p-4 flex flex-col justify-between'>
                  <img src={avatar} alt='' className='w-3/4 mx-auto' />
                  <div className='flex justify-between items-center'>
                    <button className='py-2 px-4 font-bold capitalize border border-[#303030] rounded-lg transition hover:bg-[#303030] hover:text-[white]' onClick={deleteUser}>remove account</button>
                    {
                      (edit)
                        ?
                        <button className='py-2 px-4 font-bold capitalize border border-[#303030] rounded-lg transition hover:bg-[#303030] hover:text-[white]' onClick={updateUser}>
                          save user
                        </button>
                        :
                        <button className='py-2 px-4 font-bold capitalize border border-[#303030] rounded-lg transition hover:bg-[#303030] hover:text-[white]' onClick={() => {
                          setEdit(true)
                          NotificationManager.success("! Now You Can Update Data !", "", 1000);
                        }}>
                          edit user
                        </button>
                    }
                  </div>
                </div>
                <div className='bg-[white] ms-[1px] rounded-e-lg p-4'>
                  <form className=''>
                    <div className='mb-4'>
                      <label className='block mb-2 font-semibold text-[red] text-[18px]'>Full Name *</label>
                      <div className='w-full h-[40px] rounded-md pb-[2px] background_admin'>
                        <input type="text" className='w-full h-full bg-[white] rounded-md p-1' name='fullName' value={formData?.fullName} onChange={(edit) ? changeValue : null} disabled={(edit) ? false : true} />
                      </div>
                    </div>
                    <div className='mb-4'>
                      <label className='block mb-2 font-semibold text-[red] text-[18px]'>Email *</label>
                      <div className='w-full h-[40px] rounded-md pb-[2px] background_admin'>
                        <input type="email" className='w-full h-full bg-[white] rounded-md p-1' name='Email' value={formData?.Email} onChange={(edit) ? changeValue : null} disabled={(edit) ? false : true} />
                      </div>
                    </div>
                    <div className='mb-4'>
                      <label className='block mb-2 font-semibold text-[red] text-[18px]'>Phone *</label>
                      <div className='w-full h-[40px] rounded-md pb-[2px] background_admin'>
                        <input type="tel" className='w-full h-full bg-[white] rounded-md p-1' name='Phone' value={formData?.Phone} onChange={(edit) ? changeValue : null} disabled={(edit) ? false : true} />
                      </div>
                    </div>
                    <div className='mb-4'>
                      <label className='block mb-2 font-semibold text-[red] text-[18px]'>Password *</label>
                      <div className='w-full h-[40px] rounded-md pb-[2px] background_admin'>
                        <input type="password" className='w-full h-full bg-[white] rounded-md p-1' name='Password' value={formData?.Password} onChange={(edit) ? changeValue : null} disabled={(edit) ? false : true} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          :
          setTimeout(() => {
            navigate("/")
          }, 1000)
      }
      <NotificationContainer />
    </div>
  )
}