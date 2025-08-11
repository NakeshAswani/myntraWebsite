import React, { useContext, useEffect, useState } from 'react'
import '../../css/media.css'
import logo from '../../images/Myntra-icon-logo.svg'
import shield from '../../images/secure.png'
import sslbit from '../../images/ssl-bit.png'
import visa from '../../images/visa.png'
import mastercard from '../../images/mastercard.png'
import americanexpress from '../../images/americanexpress.png'
import dinersclub from '../../images/dinersclub.png'
import { Link } from 'react-router-dom'
import { myntraContext } from '../../Context/MainContext'
import axios from 'axios'
import webBaseUrl from '../../common/web/WebBaseUrl'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export function Address() {
  const { token, userDetails, setUserDetails, orderDetails, setOrderDetails } = useContext(myntraContext)
  const [api, setApi] = useState({
    cartImageLink: "",
    cartData: [],
    totalMRP: 0,
    totalDiscount: 0,
    totalAmount: 0
  })
  const [edit, setEdit] = useState("")
  const [addAddress, setAddAddress] = useState(false)
  const [selectedAddressId, setSelectedAddressId] = useState(userDetails?.Address[0]?._id);
  const [formData, setFormData] = useState({
    Address: {
      addressName: "",
      addressPhone: "",
      Street: "",
      City: "",
      State: "",
      Pincode: "",
      Type: ""
    }
  })
  const today = new Date()
  const after5DaysDate = new Date(today.getTime() + (5 * 24 * 60 * 60 * 1000))
  const after7DaysDate = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000))
  let dayPlusComma = after5DaysDate.toDateString().slice(0, 3)
  const deliveryDateFirst = after5DaysDate.toDateString().replace(after5DaysDate.getFullYear(), "").replace(dayPlusComma, dayPlusComma + ',')
  dayPlusComma = after7DaysDate.toDateString().slice(0, 3)
  const deliveryDateLast = after7DaysDate.toDateString().replace(after7DaysDate.getFullYear(), "").replace(dayPlusComma, dayPlusComma + ',')
  const getResponse = async () => {
    const obj = { ...api }
    if (userDetails) {
      await axios.get(webBaseUrl + `cart/view-cart/${userDetails?._id}`)
        .then((response) => response.data)
        .then((finalResponse) => {
          obj.cartImageLink = finalResponse?.cartImageLink
          obj.cartData = finalResponse?.data
          obj.totalMRP = 0
          obj.totalAmount = 0
          obj.totalDiscount = 0
          finalResponse?.data?.map((items, index) => {
            obj.totalMRP += (items?.productPrice * items?.quantity)
            obj.totalAmount += items?.totalAmount
            obj.totalDiscount = obj.totalMRP - obj.totalAmount
            return obj
          })
        })
        .catch(error => {
          console.error(error)
        })
    }
    setApi(obj)
  }
  const changeValue = (event) => {
    const obj = { ...formData }
    obj.Address[event.target.name] = event.target.value
    setFormData(obj)
  }
  const updateOrAddAddress = async (event) => {
    event.preventDefault()
    if (edit !== "") {
      await axios.post(webBaseUrl + `user/edit-address/${userDetails?._id}/?addressId=${edit}`, formData)
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
      setFormData({
        Address: {
          addressName: "",
          addressPhone: "",
          Street: "",
          City: "",
          State: "",
          Pincode: "",
          Type: ""
        }
      })
      setEdit("")
    }
    else {
      await axios.post(webBaseUrl + `user/add-address/${userDetails?._id}`, formData)
        .then((response) => response.data)
        .then((finalResponse) => {
          if (finalResponse?.status === 1) {
            if (!userDetails?.Address?.length >= 1) {
              setSelectedAddressId(finalResponse?.data?._id)
            }
            NotificationManager.success(finalResponse?.message, "", 1000);
            setFormData({
              Address: {
                addressName: "",
                addressPhone: "",
                Street: "",
                City: "",
                State: "",
                Pincode: "",
                Type: ""
              }
            })
            setAddAddress(false)
          }
          else {
            NotificationManager.error(finalResponse?.message, "", 1000);
          }
        })
        .catch(error => {
          console.error(error)
        })
    }
    await axios.get(webBaseUrl + `user/view-user/${userDetails?._id}/?token=${token}`)
      .then((response) => response.data)
      .then((finalResponse) => {
        setUserDetails(finalResponse?.data)
      })
      .catch(error => {
        console.error(error)
      })
  }
  const deleteAddress = async (deleteId) => {
    await axios.get(webBaseUrl + `user/delete-address/${userDetails?._id}/?addressId=${deleteId}`)
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
  }
  const updateOrderDetails = () => {
    const orderArr = [...orderDetails]
    const selectedAddress = userDetails?.Address?.filter((items, index) => items._id === selectedAddressId)[0]
    orderArr.map((items, index) => {
      return (
        items.orderAddress = selectedAddress
      )
    })
    setOrderDetails(orderArr);
  }
  useEffect(() => {
    getResponse()
  }, [userDetails])
  return (
    (userDetails)
      ?
      <div className='main1 w-[100%]'>
        <section className={`fixed w-full left-0 h-screen bg-[black] bg-opacity-50 ${(edit !== "" || addAddress) ? "top-0" : "top-[-100%]"}`} style={{ transition: "0.5s" }}>
          <form className='w-[32%] h-[79%] bg-[white] absolute top-[2.5%] left-[50%] -translate-x-1/2 rounded' onSubmit={updateOrAddAddress}>
            <div className='h-[6%] text-[20px] font-extrabold px-2 border-b border-[black] border-opacity-30 flex justify-between items-center'>
              <span className='font-bold capitalize'>
                {
                  (edit !== "")
                    ?
                    "edit address"
                    :
                    "add new address"
                }
              </span>
              <span className='cursor-pointer' onClick={() => (edit !== "") ? setEdit("") : setAddAddress(false)}>&times;</span>
            </div>
            <div className='h-[84%] px-4 overflow-y-auto'>
              <div className='my-[20px]'>
                <p className='text-[20px] text-[#424552] font-[700]'>Contact Details</p>

                <div className='border border-1 border-[grey] p-[7px] my-[10px]'>
                  <input type="text" className='w-[100%] outline-none text-[14px]' placeholder="Full Name *" name="addressName" value={formData?.Address?.addressName} onChange={changeValue} />
                </div>

                <div className='flex register_number items-center border border-1 border-[grey] p-[7px] my-[10px]'>
                  <div className='text-[grey] text-[14px]'>+91</div>
                  <div className='border-r-2 border-[grey] mx-[10px] h-[15px]'></div>
                  <input type="tel" className='w-[100%] outline-none text-[14px]' placeholder="Mobile Number *" name="addressPhone" value={formData?.Address?.addressPhone} onChange={changeValue} />
                </div>
              </div>

              <div className='my-[20px]'>
                <p className='text-[20px] text-[#424552] font-[700]'>Address Details</p>

                <div className='border border-1 border-[grey] p-[7px] my-[10px]'>
                  <input type="text" className='w-[100%] outline-none text-[14px]' placeholder="Street *" name='Street' value={formData?.Address?.Street} onChange={changeValue} />
                </div>

                <div className='border border-1 border-[grey] p-[7px] my-[10px]'>
                  <input type="text" className='w-[100%] outline-none text-[14px]' placeholder="City *" name='City' value={formData?.Address?.City} onChange={changeValue} />
                </div>

                <div className='border border-1 border-[grey] p-[7px] my-[10px]'>
                  <input type="text" className='w-[100%] outline-none text-[14px]' placeholder="State *" name='State' value={formData?.Address?.State} onChange={changeValue} />
                </div>

                <div className='border border-1 border-[grey] p-[7px] my-[10px]'>
                  <input type="text" className='w-[100%] outline-none text-[14px]' placeholder="Pincode *" name='Pincode' value={formData?.Address?.Pincode} onChange={changeValue} />
                </div>

                <div className='border border-1 border-[grey] p-[7px] my-[10px]'>
                  <select type="text" className='w-[100%] outline-none text-[14px] cursor-pointer' name='Type' value={formData?.Address?.Type} onChange={changeValue}>
                    <option value="">Select a Type *</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='h-[10%] p-1 border-t border-[black] border-opacity-30'>
              <button type='submit' className='w-full h-full bg-[green] rounded-lg text-[white] font-semibold'>
                Save Details
              </button>
            </div>
          </form>
        </section>
        <section className='cart_header_section'>
          <div className='cart _header flex items-center justify-between p-[25px]'>
            <figure className='w-[44.04px] ml-[20px]'>
              <img src={logo} alt="" />
            </figure>

            <div className='bag_address_payment'>
              <ul className='flex text-[14px]'>
                <li className='mx-[5px] tracking-wide'>BAG</li>----------
                <li className='mx-[5px] border-b-2 border-color8 text-color8'>ADDRESS</li>----------
                <li className='ml-[5px] '>PAYMENT</li>
              </ul>
            </div>

            <div className='secure flex items-center justify-between w-[108px]'>
              <figure className='w-[26px]'>
                <img src={shield} alt="" />
              </figure>
              <p className='text-[13px]'>100% SECURE</p>
            </div>
          </div>
        </section>


        <section className='w-[100%] flex justify-center items-center py-[10px] '>

          <div className='w-[75%] flex'>

            <div className='w-[60%] mr-[20px]'>
              <div className='address_section border border-1 border-[#525352c7] flex items-center justify-between p-[15px] mb-[7px] rounded-[5px] bg-color9'>
                <div className='address_inner flex'>
                  <div className='name_pincode'>
                    <p className='text-[18px] font-[700]'>Select Delivery Address</p>
                  </div>
                </div>


                <div className='change_address'>
                  <button className='text-[12px] text-[#4d4d4d] font-[650] border border-1 border-[black] rounded-[4px] p-[10px]' onClick={() => setAddAddress(true)}>
                    ADD NEW ADDRESS
                  </button>
                </div>
              </div>

              <p className='text-[11px] font-[750] text-[grey]'>ADDRESSES</p>
              {
                (userDetails?.Address?.length >= 1)
                  ?
                  userDetails?.Address?.map((items, index) => {
                    return (
                      <div className='available_offer border border-1 border-[#525352c7] p-[15px] my-[10px] rounded-[5px] bg-color9' key={index}>
                        <div className='input_name flex items-center justify-start'>
                          <input type="radio" className='mr-[10px]' checked={selectedAddressId === items?._id} onChange={() => setSelectedAddressId(items?._id)} />
                          <p className='font-[750] text-[13px] text-[#494949] mr-[10px]'>{items?.addressName}</p>
                          <button className='text-[10px] text-color7 uppercase border border-1 border-color7 flex items-center justify-center p-[1px] px-[10px] rounded-[100px]'>{items?.Type}</button>
                        </div>

                        <div className='address_mobile'>
                          <p className='text-[12px] mt-[10px] text-[grey]'>
                            {
                              Object.entries(items).map(([key, value]) => {
                                if (['Type', 'addressName', 'addressPhone', '_id'].includes(key)) {
                                  return ""
                                }
                                return value + " "
                              })
                            }
                          </p>
                          <p className='text-[12px] mt-[10px] text-[grey]'>Mobile: <span className='font-[700] text-[#3b3b3b]'>{items?.addressPhone}</span> </p>
                          <ul className='list-[disc] text-[14px] text-[grey] mt-[10px]'>
                            <li className='ml-[20px]'>Pay on Delivery available</li>
                          </ul>
                        </div>

                        <div className='remove_edit_btn mt-[13px]'>
                          <button className='text-[11px] text-[#4d4d4d] font-[650] border border-1 border-[black] rounded-[4px] py-[6px] px-[15px] mr-[15px]' onClick={() => deleteAddress(items?._id)}>REMOVE</button>
                          <button className='text-[11px] text-[#4d4d4d] font-[650] border border-1 border-[black] rounded-[4px] py-[6px] px-[15px]' onClick={() => {
                            setEdit(items?._id)
                            setFormData({
                              Address: {
                                addressName: userDetails?.Address[index]?.addressName,
                                addressPhone: userDetails?.Address[index]?.addressPhone,
                                Street: userDetails?.Address[index]?.Street,
                                City: userDetails?.Address[index]?.City,
                                State: userDetails?.Address[index]?.State,
                                Pincode: userDetails?.Address[index]?.Pincode,
                                Type: userDetails?.Address[index]?.Type
                              }
                            })
                          }}>EDIT</button>
                        </div>
                      </div>
                    )
                  })
                  :
                  ""
              }

              <div className="add_address border-dashed border-2 border-[grey] flex items-center my-[10px] py-[15px] cursor-pointer" onClick={() => setAddAddress(true)}>
                <p className='font-[650] ml-[12px] text-color3'>+ ADD ADDRESS</p>
              </div>

            </div>


            <div className='w-[35%] h-auto border border-[grey] p-[10px]'>
              <p className='text-[grey] text-[12px] font-[850] mb-[5px]'>DELIVERY ESTIMATE</p>

              {
                (api?.cartData?.length >= 1)
                  ?
                  api?.cartData?.map((items, index) => {
                    return (
                      <div className='apply_coupons w-[100%] flex justify-between mb-[10px]' key={index}>
                        <div className='apply_heading flex items-center justify-between'>
                          <figure className='w-[42px]'>
                            <img src={api?.cartImageLink + items?.productImage} alt="" />
                          </figure>
                          <p className=' px-[12px] py-[5px] text-[13px] font-[450] text-[grey]'>
                            Delivery between <span className='text-[black] font-[650]'>{deliveryDateFirst} - {deliveryDateLast}</span>
                          </p>
                        </div>
                      </div>
                    )
                  })
                  :
                  ""
              }

              <div className=''>
                <div className='total_amount'>
                  <div className='price_details text-[12px] text-[grey] font-[700] py-[5px]'>PRICE DETAILS ({api?.cartData?.length} item)</div>
                  <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]'><p className='font-[550]'>Total MRP</p><p className='font-[650]'>₹{api?.totalMRP}</p></div>
                  <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]'>
                    <p className='font-[550]'>DISCOUNT on MRP</p>
                    <p className='text-color7'>-₹{api?.totalDiscount}</p>
                  </div>
                  <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]'><p className='font-[550]'>Platform Fee</p><p className='text-color7 font-[450]'>FREE</p></div>
                  <div className='price_details text-[13px] font-[700] flex justify-between '><p className='font-[550]'>Shipping Fee</p><p className='text-color7 font-[450]'><span className='text-[black] line-through mr-[5px]'>₹79</span>FREE</p></div>
                  <div className='price_details text-[13px] font-[700] flex justify-between'><p className='text-[11px] text-[grey] mt-[-3px]'>Free shipping for you</p></div>
                  <div className='w-[100%] border-b-2 border-[#615e5ebd] my-[10px]'></div>
                  <div className='total w-[100%] flex justify-between font-[700] text-[#383838] pb-[10px]'>Total Amount<p>₹{api?.totalAmount}</p></div>
                  <div className='place_order_btn flex justify-center'>
                    <Link to={"/payment"} className='w-[100%]'><button className=' w-[calc(100%-10px)] p-[10px] font-[650] bg-[#ff446a] text-[white]' onClick={updateOrderDetails}>CONTINUE</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bank_icons flex justify-center mt-[50px]'>
          <div className='bank_inner   w-[74%] flex justify-between'>
            <div className='bank_images'>
              <figure className='w-[60px] flex'>
                <img src={sslbit} alt="" />
                <img src={visa} alt="" />
                <img src={mastercard} alt="" />
                <img src={americanexpress} alt="" />
                <img src={dinersclub} alt="" />
              </figure>
            </div>
            <div>Need Help ? Contact Us</div>
          </div>
        </section>
        <NotificationContainer />
      </div>
      :
      ""
  )
}
