import React, { useContext, useEffect, useState } from 'react'
import "../../css/index.css"
import truck from "../../images/truck.svg"
import arrows from "../../images/arrows.svg"
import { Header } from '../../common/web/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faShoppingBag, faStar, faTruck } from '@fortawesome/free-solid-svg-icons'
import { Footer } from '../../common/web/Footer'
import Location from '../../common/web/Location'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import webBaseUrl from '../../common/web/WebBaseUrl'
import { myntraContext } from '../../Context/MainContext'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export function ProductDescription() {
  const [api, setApi] = useState({
    productImageLink: "",
    productData: {},
  })
  const [quantity, setQuantity] = useState(1)
  const urlId = useLocation().search
  const today = new Date()
  const after7DaysDate = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000))
  const dayPlusComma = after7DaysDate.toDateString().slice(0, 3)
  const deliveryDate = after7DaysDate.toDateString().replace(after7DaysDate.getFullYear(), "").replace(dayPlusComma, dayPlusComma + ',')
  const { userDetails } = useContext(myntraContext)
  const navigate = useNavigate()
  const getResponse = async () => {
    const obj = { ...api }
    await axios.get(webBaseUrl + `product/view-product/${urlId}`)
      .then((response) => response.data)
      .then((finalResponse) => {
        obj.productImageLink = finalResponse?.productImageLink
        obj.productData = finalResponse?.data
      })
    setApi(obj)
  }
  const addToCart = () => {
    if (userDetails) {
      const finalCartData = {
        productId: api?.productData?._id,
        productName: api?.productData?.productName,
        categoryName: api?.productData?.categoryName,
        subCategoryName: api?.productData?.subCategoryId.subCategoryName,
        productDescription: api?.productData?.productDescription,
        productColor: api?.productData?.productColor,
        productPrice: api?.productData?.productPrice,
        finalPrice: api?.productData?.finalPrice,
        productImage: api?.productData?.productImage,
        quantity,
        totalAmount: (api?.productData?.finalPrice * quantity),
        userId: userDetails?._id
      }
      axios.post(webBaseUrl + "cart/add-cart", finalCartData)
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
    }
    else {
      navigate("/register")
    }
  }
  useEffect(() => {
    getResponse()
  }, [urlId])
  return (
    <>
      <div className='main1 '>
        <Header />
        <div className=' p-[20px]'>
          {
            (api?.productData !== undefined && api?.productData !== "" && api?.productData !== null)
              ?
              <>
                <Location urlIdToName={api?.productData?.productName} />
                <div className='flex mt-[10px]'>
                  <div className='w-[720px] flex flex-wrap'>
                    <img src={api?.productImageLink + api?.productData?.productImage} alt="" className='w-[340px] h-[340px] mx-[5px] mt-[10px]' />
                    <img src={api?.productImageLink + api?.productData?.productImage} alt="" className='w-[340px] h-[340px] mx-[5px] mt-[10px]' />
                    <img src={api?.productImageLink + api?.productData?.productImage} alt="" className='w-[340px] h-[340px] mx-[5px] mt-[10px]' />
                    <img src={api?.productImageLink + api?.productData?.productImage} alt="" className='w-[340px] h-[340px] mx-[5px] mt-[10px]' />
                    <img src={api?.productImageLink + api?.productData?.productImage} alt="" className='w-[340px] h-[340px] mx-[5px] mt-[10px]' />
                  </div>
                  <div className='w-[540px]  p-[5px]'>
                    <div className='border-b-2 border-[#80808056]'>
                      <h1 className='text-[25px] font-[650] capitalize'>
                        {api?.productData?.productName}
                      </h1>
                      <h1 className='text-[#535665] text-[20px] opacity-[0.8] mt-[10px] capitalize'>
                        {api?.productData?.productDescription}
                      </h1>
                      <div className='ratings flex border border-1 border-[grey] w-max p-[4px] my-[20px]'>
                        <div className='rate flex items-center justify-between text-[14px]'>
                          <h1 className='font-[700]'>
                            {api?.productData?.productRating}
                          </h1>
                          <FontAwesomeIcon icon={faStar} className='text-color7' />
                        </div>
                        <div className='text-center text-[grey] font-[650] border-l-2 border-[grey] pl-[3px]'>
                          {api?.productData?.ratingCount} Ratings
                        </div>
                      </div>
                    </div>
                    <div className='my-[10px] mb-[20px]'>
                      <div className='flex items-center'>
                        <strong className='text-[24px]'>
                          ₹{api?.productData?.finalPrice}
                        </strong>
                        <p className='text-[23px] text-[grey] font-[450] ml-[10px]'>
                          MRP
                          <span className='line-through'>₹{api?.productData?.productPrice}</span>
                        </p>
                        <p className='ml-[10px] text-[22px] font-[660] text-[#ff905a]'>
                          (~{(((api?.productData?.productPrice - api?.productData?.finalPrice) / api?.productData?.productPrice) * 100).toFixed(2)}% OFF)
                        </p>
                      </div>
                      <div className='text-color7 text-[14px] font-[650]'>
                        inclusive of all taxes
                      </div>
                    </div>
                    <div className='my-[10px] border-b-2 border-[#80808056]'>
                      <div className=' items-center'>
                        <strong className='text-[17px]'>
                          SELECT SIZE
                        </strong>
                        <div className='flex my-[10px]'>
                          <div className='size_round w-[50px] h-[50px] border border-1 border-[grey] flex items-center justify-center rounded-[50%] font-[550] text-[14px]'>S</div>
                          <div className='size_round w-[50px] h-[50px] border border-1 border-[grey] flex items-center justify-center rounded-[50%] font-[550] text-[14px] mx-[10px]'>M</div>
                          <div className='size_round w-[50px] h-[50px] border border-1 border-[grey] flex items-center justify-center rounded-[50%] font-[550] text-[14px] mr-[10px]'>L</div>
                          <div className='size_round w-[50px] h-[50px] border border-1 border-[grey] flex items-center justify-center rounded-[50%] font-[550] text-[14px] mr-[10px]'>XL</div>
                          <div className='size_round w-[50px] h-[50px] border border-1 border-[grey] flex items-center justify-center rounded-[50%] font-[550] text-[14px]'>XXL</div>
                        </div>
                      </div>
                      <div className=' items-center'>
                        <strong className='text-[17px]'>
                          SELECT QUANTITY
                        </strong>
                        <select className='w-[50px] border rounded-xl ms-3' onChange={(event) => setQuantity(Number(event.target.value))} value={quantity}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </select>
                      </div>
                      <div className='add_to_bag mt-[20px] mb-[20px]'>
                        <button className='bg-[#ff436a] text-[white] text-[19px] p-[10px] px-[60px] rounded-[5px]' onClick={addToCart}>
                          <FontAwesomeIcon icon={faShoppingBag} className='me-1' />
                          ADD TO BAG
                        </button>
                      </div>
                    </div>
                    <div className='my-[20px]'>
                      <p className='mb-[10px]'>DELIVERY OPTIONS <FontAwesomeIcon icon={faTruck} /> </p>
                      <div className='flex justify-between p-[5px] w-[200px] border border-1 border-[#808080d0] rounded'>
                        <div className='pincode flex items-center'>
                          {
                            (userDetails)
                              ?
                              userDetails?.Address[0]?.Pincode
                              :
                              "342003"
                          }
                          <div className='text-color7 ml-[10px]'>
                            <FontAwesomeIcon icon={faCircleCheck} />
                          </div>
                        </div>
                        <div className='change text-[#ff436a] font-[750]'>Change</div>
                      </div>
                      <div className='flex items-center'>
                        <figure className='w-[45px]'>
                          <img src={truck} alt='' />
                        </figure>
                        <h4 className='ml-[20px] font-[660]'>Get it by {deliveryDate}</h4>
                      </div>
                      <div className='flex items-center'>
                        <figure className='w-[45px]'>
                          <img src={truck} alt='' />
                        </figure>
                        <h4 className='ml-[20px] font-[660]'>Pay on delivery available</h4>
                      </div>
                      <div className='flex items-center'>
                        <figure className='w-[45px]'>
                          <img src={arrows} alt='' />
                        </figure>
                        <h4 className='ml-[20px] font-[660]'>Easy 14 days return & exchange available</h4>
                      </div>
                    </div>
                    <div className=''>100% Original Products</div>
                    <div className='my-[10px]'>
                      <h4 className='font-[650] text-[15px] my-[10px]'>BEST OFFERS</h4>
                      <div>
                        <div>
                          <div>
                            <div className="pdp-offers-offerTitle">
                              <b>Best Price:<span className='text-[#ff905a]'> Rs. 259</span></b>
                            </div>
                            <ul className='mb-[10px]'>
                              <li><div className="pdp-offers-bullet"></div><div className="pdp-offers-labelMarkup">Coupon Discount:<span className=""> Rs. 130 off (check cart for final savings)</span></div></li>
                              <li><div className="pdp-offers-bullet"></div><div className="pdp-offers-labelMarkup">Applicable on:<span className=""> Orders above Rs. 449 (only on first purchase)</span></div></li>
                              <li><div className="pdp-offers-bullet"></div><div className="pdp-offers-labelMarkup">Coupon code:<span className='font-[660]'> TOPBRANDOFFER</span></div></li>
                            </ul>
                            <Link to={"https://www.myntra.com/myntra?f=Coupons:TOPBRANDOFFER_113122"} className='text-color3 text-[14px]  font-[665]' target="_blank">View Eligible Products</Link>
                          </div>
                        </div>
                        <div className="pdp-offers-extraOffer mt-[10px]">
                          <div className="pdp-offers-offerLikeBestPrice">
                            <div className="pdp-offers-offerTitle">
                              <b>7.5% Discount on Myntra Kotak Credit Card.</b>
                            </div>
                            <div className=''>
                              <li className='flex'>
                                <div className=''></div>
                                <div className=''> Max Discount Up to ₹750 on every spends. </div>
                              </li>
                            </div>
                            <div className='text-color3 text-[15px] my-[10px] font-[665]' href="https://www.myntra.com/cbc/store" >Terms &amp; Condition</div>
                          </div>
                          <div className=''>
                            <div>
                              <b>EMI option available</b>
                            </div>
                            <div className=''>
                              <div className=''></div>
                              <div className='text-[14px]'>EMI starting from Rs.19/month</div>
                            </div>
                            <span className='text-color3 text-[15px] mt-[5px] font-[665]'>View Plan</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              :
              ""
          }
        </div>
        <Footer />
      </div>
      <NotificationContainer />
    </>
  )
}
