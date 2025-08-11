import React, { useContext, useEffect, useState } from 'react'
import '../../css/media.css'
import logo from '../../images/Myntra-icon-logo.svg'
import shield from '../../images/secure.png'
import sslbit from '../../images/ssl-bit.png'
import visa from '../../images/visa.png'
import mastercard from '../../images/mastercard.png'
import americanexpress from '../../images/americanexpress.png'
import dinersclub from '../../images/dinersclub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import discount from "../../images/discount.svg"
import star from "../../images/star.svg"
import cash from "../../images/cash.svg"
import gift from "../../images/gift.svg"
import { myntraContext } from '../../Context/MainContext'
import axios from 'axios'
import webBaseUrl from '../../common/web/WebBaseUrl'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom'

export default function Payment() {
  const { userDetails, orderDetails, setOrderDetails } = useContext(myntraContext)
  const [api, setApi] = useState({
    cartData: [],
    totalMRP: 0,
    totalDiscount: 0,
    totalAmount: 0
  })
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cod")
  const navigate = useNavigate()
  const getResponse = async () => {
    const obj = { ...api }
    if (userDetails) {
      await axios.get(webBaseUrl + `cart/view-cart/${userDetails?._id}`)
        .then((response) => response.data)
        .then((finalResponse) => {
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
  const updateOrderDetails = () => {
    const orderArr = [...orderDetails]
    orderArr.map((items, index) => {
      return (
        items.paymentMode = selectedPaymentMethod
      )
    })
    setOrderDetails(orderArr);
  }
  const placeOrder = () => {
    for (let i = 0; i < orderDetails.length; i++) {
      const items = orderDetails[i]
      axios.post(webBaseUrl + "order/add-order", items)
        .then((response) => response.data)
        .then((finalResponse) => {
          if (finalResponse?.status === 1) {
            NotificationManager.success(finalResponse.message, "", 1000);
            setOrderDetails(orderDetails.slice(i + 1, orderDetails.length))
            const filterData = api?.cartData?.filter((item, index) => item.productId === items.productId)[0]
            console.log(filterData)
            axios.post(webBaseUrl + `cart/delete-cart/${filterData._id}`)
          }
          else {
            NotificationManager.error(finalResponse.message, "", 1000);
          }
        })
      if (i === orderDetails.length - 1) {
        setTimeout(() => {
          navigate("/")
        }, 1001);
      }
    }
  }
  useEffect(() => {
    getResponse()
  }, [orderDetails])
  useEffect(() => {
    updateOrderDetails()
  }, [selectedPaymentMethod])
  return (
    <>
      <div className='main1 w-[100%]  ]'>
        <section className='cart_header_section'>
          <div className='cart _header flex items-center justify-between p-[25px]'>
            <figure className='w-[44.04px] ml-[20px]'>
              <img src={logo} alt="" />
            </figure>

            <div className='bag_address_payment'>
              <ul className='flex text-[14px]'>
                <li className='mx-[5px] tracking-wide'>BAG</li>----------
                <li className='mx-[5px]'>ADDRESS</li>----------
                <li className='ml-[5px] border-b-2 border-color8 text-color8'>PAYMENT</li>
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
                <div className='text-[12.6px] leading-[25px]'>
                  <div className='flex items-center justify-between w-[105px]'>
                    <img src={discount} alt='' width={"18px"} height={"18px"} />
                    <span className='font-[650] text-[14px] ml-[5px]'>Bank Offers</span>
                  </div>

                  <div className='leading-5 mb-[7px]'><span className='font-[900]'>1.</span> 10% Instant Discount on Kotak Credit & Debit Cards on a min spend of ₹3,000. TCA</div>

                  <div className='leading-5 mb-[7px]'><span className='font-[900]'>2.</span> 7.5% Instant Discount on every spends with Myntra Kotak Credit Card. TCA</div>

                  <div className='leading-5 mb-[7px]'><span className='font-[900]'>3.</span> Up to ₹1,000 Cashback on CRED UPI (Android Devices only) on a minimum spend of ₹1,000. TCA</div>

                  <div className='leading-5 mb-[7px]'><span className='font-[900]'>4.</span> Flat ₹30 Cashback on Freecharge UPI (Android Devices only) on a minimum spend of ₹1,999. TCA</div>

                  <div className='leading-5 mb-[7px]'><span className='font-[900]'>5.</span> Up to ₹250 Cashback on First ever Simpl Transaction on Myntra on a minimum spend of ₹1,499. TCA</div>

                  <div className='leading-5 mb-[7px]'><span className='font-[900]'>6.</span> Get ₹150 Brand Voucher on minimum spend of ₹1,000 with Payzapp wallet</div>

                  <div className='leading-5 mb-[7px]'><span className='font-[900]'>7.</span> Flat ₹75 Cashback on First Ever Mobikwik Wallet transaction on Myntra on a min spend of ₹999. Use Code MBKNEW on Mobikwik. TCA</div>

                  <div className='leading-5 mb-[7px]'><span className='font-[900]'>8.</span> Get upto 15% Cashback on Mobikwik Wallet transaction on a min spend of ₹1,500. Use Code MBK15 on Mobikwik. TCA</div>

                  <div className='show_more text-[14px] text-color3'>
                    <span>Show Less <FontAwesomeIcon icon={faAngleUp} /></span>
                  </div>
                </div>
              </div>

              <p className='text-[15px] font-[750] text-[#353434]'>Choose Payment Mode</p>
              <div className=' border border-1 border-[#525352c7]   rounded-[5px] bg-color9 flex '>
                <div className='w-[250px]'>
                  <div className='border-l-8 border-color3 flex items-center justify-between px-[10px] pr-[70px] py-[13px]'>
                    <img src={star} alt='' width={"14px"} height={"14px"} />
                    <p className='text-color3 font-[700]'>Recommended</p>
                  </div>

                  <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                    <img src={cash} alt='' width={"20px"} height={"14px"} />
                    <p className='font-[700] text-[#3f3f3f] text-[13px]'>Pay On Delivery (Cash/UPI)</p>
                  </div>

                  <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                    <img src={cash} alt='' width={"20px"} height={"14px"} />
                    <p className='font-[700] text-[#3f3f3f] text-[13px]'>Pay On Delivery (Cash/UPI)</p>
                  </div>

                  <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                    <img src={cash} alt='' width={"20px"} height={"14px"} />
                    <p className='font-[700] text-[#3f3f3f] text-[13px]'>Pay On Delivery (Cash/UPI)</p>
                  </div>

                  <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                    <img src={cash} alt='' width={"20px"} height={"14px"} />
                    <p className='font-[700] text-[#3f3f3f] text-[13px]'>Pay On Delivery (Cash/UPI)</p>
                  </div>

                  <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                    <img src={cash} alt='' width={"20px"} height={"14px"} />
                    <p className='font-[700] text-[#3f3f3f] text-[13px]'>Pay On Delivery (Cash/UPI)</p>
                  </div>

                  <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                    <img src={cash} alt='' width={"20px"} height={"14px"} />
                    <p className='font-[700] text-[#3f3f3f] text-[13px]'>Pay On Delivery (Cash/UPI)</p>
                  </div>

                  <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                    <img src={cash} alt='' width={"20px"} height={"14px"} />
                    <p className='font-[700] text-[#3f3f3f] text-[13px]'>Pay On Delivery (Cash/UPI)</p>
                  </div>
                </div>

                <div className='w-[380px]'>
                  <div className=' flex items-center justify-between px-[10px] py-[13px] font-[750] text-[#424552]'>
                    Recommended Payment Options
                  </div>

                  <div className=' flex items-center justify-between px-[10px] py-[13px] font-[750] text-[#424552]'>
                    <div className='flex'>
                      <input type="radio" name='paymentMode' value={"cod"} checked={selectedPaymentMethod === "cod"} onChange={(event) => setSelectedPaymentMethod(event.target.value)} />
                      <p className='ml-[7px]'>Pay on Delivery (Cash/UPI)</p>
                    </div>
                    <div>
                      <img src={cash} alt='' width={"20px"} height={"14px"} />
                    </div>
                  </div>

                  <div className=' flex items-center justify-between px-[10px] py-[13px] font-[750] text-[#424552]'>
                    <div className='flex'>
                      <input type="radio" name='paymentMode' value={"card"} checked={selectedPaymentMethod === "card"} onChange={(event) => setSelectedPaymentMethod(event.target.value)} />
                      <p className='ml-[7px]'>Credit/Debit Card</p>
                    </div>
                    <div>
                      <img src={cash} alt='' width={"20px"} height={"14px"} />
                    </div>
                  </div>

                  <div className=' flex items-center justify-between px-[10px] py-[13px] font-[750] text-[#424552]'>
                    <div className='flex'>
                      <input type="radio" name='paymentMode' value={"netbanking"} checked={selectedPaymentMethod === "netbanking"} onChange={(event) => setSelectedPaymentMethod(event.target.value)} />
                      <p className='ml-[7px]'>NetBanking</p>
                    </div>
                    <div>
                      <img src={cash} alt='' width={"20px"} height={"14px"} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="add_address border border-1 border-[grey] flex items-center justify-between my-[10px] p-[15px]">
                <div className='flex'>
                  <img src={gift} alt='' width={"20px"} height={"19px"} />
                  <p className='text-[14px] ml-[5px]'>Have a Gift Card?</p>
                </div>
                <div className='text-[13px] text-color3 font-[750]'>APPLY GIFT CARD</div>
              </div>
            </div>

            <div className='w-[35%] h-auto border border-[grey] p-[10px]'>
              <div>
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
                    <button className=' w-[calc(100%-10px)] p-[10px] font-[650] bg-[#ff446a] text-[white]' onClick={placeOrder}>
                      CONTINUE
                    </button>
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
      </div>
      <NotificationContainer />
    </>
  )
}
