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
import { Link } from 'react-router-dom'
import { myntraContext } from '../../Context/MainContext'
import axios from 'axios'
import webBaseUrl from '../../common/web/WebBaseUrl'
import discount from "../../images/discount.svg"
import return_img from "../../images/return.svg"
import couponsvg from "../../images/couponsvg.svg"
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export function Cart() {
  const [api, setApi] = useState({
    cartImageLink: "",
    cartData: [],
    totalMRP: 0,
    totalDiscount: 0,
    totalAmount: 0
  })
  const { userDetails, setOrderDetails } = useContext(myntraContext)
  const fullAddress = (userDetails?.Address?.length >= 1) ? Object.entries(userDetails?.Address[0]).map(([key, value]) => {
    if (['Type', 'addressName', 'addressPhone', '_id'].includes(key)) {
      return ""
    }
    return value + " "
  }) : []
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
  const deleteCart = (deleteIndex) => {
    const deleteId = api?.cartData[deleteIndex]?._id
    axios.post(webBaseUrl + `cart/delete-cart/${deleteId}`)
      .then((response) => response.data)
      .then((finalResponse) => {
        if (finalResponse?.status === 1) {
          NotificationManager.success(finalResponse?.message, "", 1000);
          getResponse()
        }
        else {
          NotificationManager.error(finalResponse?.message, "", 1000);
        }
      })
      .catch(error => {
        console.error(error)
      })
  }
  const updateOrderDetails = () => {
    const newOrderDetails = []
    api.cartData.forEach((item) => {
      newOrderDetails.push({
        productId: item.productId,
        productName: item.productName,
        categoryName: item.categoryName,
        subCategoryName: item.subCategoryName,
        productColor: item.productColor,
        productImage: item.productImage,
        productPrice: item.finalPrice,
        quantity: item.quantity,
        totalAmount: item.totalAmount,
        userId: item.userId,
      })
    })
    setOrderDetails(newOrderDetails);
  }
  useEffect(() => {
    getResponse()
  }, [userDetails])
  return (
    (userDetails)
      ?
      (api?.cartData?.length >= 1)
        ?
        <div className='main1 w-[100%]  ]'>
          {/* <section className={`fixed w-full left-0 h-screen bg-[black] bg-opacity-50`} style={{ transition: "0.5s" }}> */}
          {/* ${(edit !== "" || addAddress) ? "top-0" : "top-[-100%]"} */}
          {/* <form className='w-[32%] h-[79%] bg-[white] absolute top-[2.5%] left-[50%] -translate-x-1/2 rounded'>
              <div className='h-[6%] text-[20px] font-extrabold px-2 border-b border-[black] border-opacity-30 flex justify-between items-center'>
                <span className='font-bold capitalize'>
                  Change Address
                </span>
                <span className='cursor-pointer'>&times;</span>
              </div>
              <div className='h-[84%] p-4 overflow-y-auto'>
                <div className='border'>
                  <div className='my-[20px]'>
                    <p className='text-[18px] text-[#424552] font-[700]'>Contact Details</p>
                  </div>

                  <div className='my-[20px]'>
                    <p className='text-[18px] text-[#424552] font-[700]'>Address Details</p>
                  </div>
                </div>
              </div>
              <div className='h-[10%] p-1 border-t border-[black] border-opacity-30'>
                <button type='submit' className='w-full h-full bg-[green] rounded-lg text-[white] font-semibold'>
                  Save Details
                </button>
              </div>
            </form>
          </section> */}
          <section className='cart_header_section'>
            <div className='cart _header flex items-center justify-between p-[25px]'>
              <figure className='w-[44.04px] ml-[20px]'>
                <img src={logo} alt="" />
              </figure>

              <div className='bag_address_payment'>
                <ul className='flex text-[14px]'>
                  <li className='mx-[5px] border-b-2 border-color8 text-color8 tracking-wide'>BAG</li>----------
                  <li className='mx-[5px]'>ADDRESS</li>----------
                  <li className='ml-[5px]'>PAYMENT</li>
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
                <div className='address_section border border-1 border-[#525352c7] flex items-center justify-between p-[15px] mb-[10px] rounded-[5px] bg-color9'>
                  <div className='address_inner flex'>
                    <div className='name_pincode pe-1'>
                      <p className='text-[14px]'>
                        Deliver to:&nbsp;
                        <span className='font-[700]'>
                          {userDetails?.fullName}, {userDetails?.Address[0]?.Pincode}
                        </span>
                      </p>
                      <div className='address text-[14px]'>
                        <p>
                          {fullAddress}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='change_address'>
                    <button className='text-[12px] text-color3 border border-1 border-color3 rounded-[4px] p-[10px]'>CHANGE ADDRESS</button>
                  </div>
                </div>
                <div className='available_offer border border-1 border-[#525352c7] flex items-center justify-between p-[15px] rounded-[5px] bg-color9 mb-[10px]'>
                  <div className='text-[12.6px] leading-[25px]'>
                    <div className='flex items-center justify-between w-[135px]'>
                      <img src={discount} alt='' width={"18px"} height={"18px"} />
                      <span className='font-[650] text-[14px] ml-[10px]'>Available Offers</span>
                    </div>
                    <div className='leading-5 mb-[7px]'>
                      <span className='font-[900]'>
                        1.
                      </span>
                      7.5 mb-[7px]% Instant Discount on every spends with Myntra Kotak Credit Card. TCA
                    </div>
                    <div className='leading-5 mb-[7px]'>
                      <span className='font-[900]'>
                        2.
                      </span>
                      Up to ₹250 Cashback on First ever Simple Transaction on Myntra on a minimum spend of ₹1,499. TCA
                    </div>
                    <div className='leading-5 mb-[7px]'>
                      <span className='font-[900]'>
                        3.
                      </span>
                      Up to ₹1,000 Cashback on CRED UPI (Android Devices only) on a minimum spend of ₹1,000. TCA
                    </div>
                    <div className='leading-5 mb-[7px]'>
                      <span className='font-[900]'>
                        4.
                      </span>
                      Flat ₹30 Cashback on Freecharge UPI (Android Devices only) on a minimum spend of ₹1,999. TCA
                    </div>
                    <div className='leading-5 mb-[7px]'>
                      <span className='font-[900]'>
                        5.
                      </span>
                      Get ₹150 Brand Voucher on minimum spend of ₹1,000 with Payzapp wallet
                    </div>
                    <div className='leading-5 mb-[7px]'>
                      <span className='font-[900]'>
                        6.
                      </span>
                      Flat ₹75 Cashback on First Ever Mobikwik Wallet transaction on Myntra on a min spend of ₹999
                      . Use Code MBKNEW on Mobikwik. TCA
                    </div>
                    <div className='leading-5 mb-[7px]'>
                      <span className='font-[900]'>
                        7.
                      </span>
                      Get upto 10% Cashback on Mobikwik Wallet transaction on a min spend of ₹1,500. Use Code MBK
                      10 on Mobikwik. TCA
                    </div>
                    <div className='leading-5 mb-[7px]'>
                      <span className='font-[900]'>
                        8.
                      </span>
                      Flat ₹100 on Airtel Payments Bank transactions on a min spend of ₹1,000. TCA
                    </div>
                    <div className='show_more text-[14px] text-color3'>
                      <span>
                        Show Less <FontAwesomeIcon icon={faAngleUp} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="items_selected font-[700]">
                  Number of Items: {api?.cartData?.length}
                </div>

                {
                  (api?.cartData?.length >= 1)
                    ?
                    api?.cartData?.map((items, index) => {
                      return (
                        <div className='product_description border border-1 border-[#80808098] rounded-[5px] p-[10px] my-[10px] flex w-full' key={index}>
                          <div className='p_image'>
                            <figure className='w-[111px]'>
                              <img src={api?.cartImageLink + items?.productImage} alt="" />
                            </figure>
                          </div>
                          <div className='p_small_description ml-[10px] w-[100%]'>
                            <div className='p_name w-[100%]  relative  font-[780] text-[13px]'>
                              <div className='flex capitalize'>
                                {items?.productName}
                                <div className=' absolute right-0 cursor-pointer' onClick={() => deleteCart(index)}>&#10060;</div>
                              </div>
                            </div>
                            <div className='p_categories text-[13px] mt-[2px] capitalize'>{items?.productDescription}</div>
                            <div className='sold_by text-[13px] mt-[2px]'>Quantity: {items?.quantity}</div>

                            <div className='rs_discount flex mt-[2px]'>
                              <div className='flex items-center '>
                                ₹<span className='text-[14px] font-[750]'>{items?.finalPrice}</span>
                              </div>

                              <div className='discount_rate ml-[6px] text-[14px]'>
                                <span className="itemComponents-base-price itemComponents-base-strike itemContainer-base-strikedAmount flex items-center line-through">
                                  ₹{items?.productPrice}
                                </span>
                              </div>

                              <div className='discount_percentage text-[#fbaa73] ml-[6px] text-[14px] flex items-center'>
                                ~{(((items?.productPrice - items?.finalPrice) / items?.productPrice) * 100).toFixed(2)}% OFF
                              </div>
                            </div>

                            <div className='replacement flex items-center mt-[3px]'>
                              <img src={return_img} alt='' width={"15px"} height={"15px"} />
                              <p className='text-[13px]'> <span className='font-[750]'>14 days</span> return available</p>
                            </div>
                          </div>
                        </div>
                      )
                    })
                    :
                    ""
                }
              </div>

              <div className='w-[35%] h-auto border border-[grey] p-[10px]'>
                <p className='text-[grey] text-[12px] font-[850] mb-[5px]'>COUPONS</p>

                <div className='apply_coupons w-[100%] flex justify-between mb-[10px]'>
                  <div className='apply_heading flex items-center justify-between'>
                    <img src={couponsvg} alt='' width={"18px"} height={"18px"} />
                    <p className='font-[650] ml-[5px]'>Apply Coupons</p>
                  </div>
                  <div className='apply_btn'>
                    <button className='text-color3 border border-color3 px-[12px] py-[5px] text-[12px] font-[650]'>APPLY</button>
                  </div>
                </div>

                <div className=''>
                  <p className='text-[14px]  font-[500] text-[#555353]'>Support transformative social work in India</p>
                  <div className='donate flex items-center mt-[15px]'>
                    <input type="checkbox" className='w-[20px] h-[20px]' />
                    <p className='ml-[5px] text-[14px] font-[550]'>Donate and make a difference</p>

                  </div>
                  <div className='flex w-[230px] justify-between mt-[20px]'>
                    <div className='ten flex items-center border py-[4px] px-[15px] rounded-[16px]'>
                      ₹10
                    </div>
                    <div className='fifty flex items-center border py-[4px] px-[15px] rounded-[16px]'>
                      ₹50
                    </div>
                    <div className='hundred flex items-center border py-[4px] px-[15px] rounded-[16px]'>
                      ₹100
                    </div>
                  </div>

                  <div className='text-[14px] text-color3 font-[700] mt-[10px]'>Know More</div>

                  <div className='total_amount'>
                    <div className='price_details text-[12px] text-[grey] font-[700] py-[5px]'>PRICE DETAILS ({api?.cartData?.length} item)</div>
                    <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]'><p className='font-[550]'>Total MRP</p><p className='font-[650]'>₹{api?.totalMRP}</p></div>
                    <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]'>
                      <p className='font-[550]'>DISCOUNT on MRP</p>
                      <p className='text-color7'>-₹{api?.totalDiscount}</p>
                    </div>
                    <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]'>
                      <p className='font-[550]'>Coupon Discount</p>
                      <p className='font-[450] text-color3'>Apply Coupon</p>
                    </div>
                    <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]' >
                      <p className='font-[550]'>Platform Fee</p>
                      <p className='text-color7 font-[450]'>FREE</p>
                    </div>
                    <div className='price_details text-[13px] font-[700] flex justify-between '>
                      <p className='font-[550]'>Shipping Fee</p>
                      <p className='text-color7 font-[450]'>
                        <span className='text-[black] line-through mr-[5px]'>₹79</span>FREE
                      </p>
                    </div>
                    <div className='price_details text-[13px] font-[700] flex justify-between' ><p className='text-[11px] text-[grey] mt-[-3px]'>Free shipping for you</p></div>
                    <div className='w-[100%] border-b-2 border-[#615e5ebd] my-[10px]'></div>
                    <div className='total w-[100%] flex justify-between font-[700] text-[#383838] pb-[10px]'>
                      Total Amount<p>₹{api?.totalAmount}</p>
                    </div>
                    <div className='place_order_btn flex justify-center'>
                      <Link to={"/address"} className='w-[calc(100%-10px)] flex items-center justify-center'>
                        <button className='w-[calc(100%-10px)] p-[10px] bg-[#ff446a] text-[white]' onClick={updateOrderDetails}>
                          PLACE ORDER
                        </button>
                      </Link>
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
          </section >
          <NotificationContainer />
        </div>
        :
        <div className='main1 w-[100%]  ]'>
          <section className='cart_header_section'>
            <div className='cart _header flex items-center justify-between p-[25px]'>
              <figure className='w-[44.04px] ml-[20px]'>
                <img src={logo} alt="" />
              </figure>

              <div className='bag_address_payment'>
                <ul className='flex text-[14px]'>
                  <li className='w-[]mx-[5px] border-b-2 border-color8 text-color8 tracking-wide'>BAG</li>----------
                  <li className='mx-[5px]'>ADDRESS</li>----------
                  <li className='ml-[5px]'>PAYMENT</li>
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
          <section>
            <div className='text-[40px] font-bold uppercase text-center fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
              nothing in cart yet
              <Link to={"/"}>
                <button className='capitalize py-3 px-5 mt-5 border-2 rounded-xl hover:bg-[black] hover:text-[white] hover:rounded-3xl' style={{ transition: "1s" }}>Start Shopping</button>
              </Link>
            </div>
          </section>
        </div>
      :
      <div className='main1 w-[100%]  ]'>
        <section className='cart_header_section'>
          <div className='cart _header flex items-center justify-between p-[25px]'>
            <figure className='w-[44.04px] ml-[20px]'>
              <img src={logo} alt="" />
            </figure>

            <div className='bag_address_payment'>
              <ul className='flex text-[14px]'>
                <li className='w-[]mx-[5px] border-b-2 border-color8 text-color8 tracking-wide'>BAG</li>----------
                <li className='mx-[5px]'>ADDRESS</li>----------
                <li className='ml-[5px]'>PAYMENT</li>
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
        <section>
          <div className='text-[40px] font-bold fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
            First login
          </div>
        </section>
      </div>
  )
}