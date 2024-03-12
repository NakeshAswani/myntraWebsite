import React from 'react'
import "../../css/index.css"
import des_img1 from '../../images/description_1.avif'
import des_img2 from '../../images/download_2.avif'
import des_img3 from '../../images/download_3.avif'
import des_img4 from '../../images/download_4.avif'
import des_img5 from '../../images/download_5.avif'
import { Header } from '../../common/web/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faShoppingBag, faStar, faTruck } from '@fortawesome/free-solid-svg-icons'
import { Footer } from '../../common/web/Footer'

export function Product_description() {
    return (
        <>
            <div className='main1 border border-1 border-[red]'>
                <Header />

                <div className=' p-[20px]'>
                    <p className='text-[14px]'>Home/Clothing/Men Clothing/Tshirts/<span className='font-[550]'> BULLMER Tshirts > More By BULLMER</span></p>
                    <div className='flex mt-[10px]'>
                        <div className='w-[720px] border flex flex-wrap'>
                            <img src={des_img1} alt="" className='w-[340px] mx-[5px] mt-[10px]' />
                            <img src={des_img2} alt="" className='w-[340px] mx-[5px] mt-[10px]' />
                            <img src={des_img3} alt="" className='w-[340px] mx-[5px] mt-[10px]' />
                            <img src={des_img4} alt="" className='w-[340px] mx-[5px] mt-[10px]' />
                            <img src={des_img5} alt="" className='w-[340px] mx-[5px] mt-[10px]' />
                        </div>
                        <div className='w-[540px] border border-1 border-color2 p-[5px]'>

                            <div className='border-b-2 border-[#80808056]'>
                                <h1 className='text-[25px] font-[650]'>BULLMER</h1>

                                <h1 className='text-[#535665] text-[20px] opacity-[.8] mt-[10px]'>Graphic Printed Round Neck Oversized Cotton T-shirt</h1>

                                <div className='ratings flex border border-1 border-[grey] w-[145px] p-[4px] my-[20px]'>
                                    <div className='rate flex items-center justify-between text-[14px]'>
                                        <h1 className='font-[650]'>3.7 </h1>
                                        <FontAwesomeIcon icon={faStar} className='text-color7' />
                                    </div>

                                    <div className='text-center text-[grey] font-[650] border-l-2 border-[grey] pl-[3px]'> 1.9K Ratings</div>
                                </div>
                            </div>


                            <div className='my-[10px] mb-[20px]'>
                                <div className='flex items-center'>
                                    <strong className='text-[24px]'>₹389</strong>
                                    <p className='text-[23px] text-[grey] font-[450] ml-[10px]'>MRP <span className='line-through'>₹1499</span></p>
                                    <p className='ml-[10px] text-[22px] font-[660] text-[#ff905a]'>(74% OFF)</p>
                                </div>

                                <div className='text-color7 text-[14px] font-[650]'>inclusive of all taxes</div>
                            </div>


                            <div className='my-[10px] border-b-2 border-[#80808056]'>
                                <div className=' items-center'>
                                    <strong className='text-[17px]'>SELECT SIZE</strong>

                                    <div className='flex my-[10px]'>
                                        <div className='size_round w-[50px] h-[50px] border border-1 border-[grey] flex items-center justify-center rounded-[50%] font-[550] text-[14px]'>S</div>
                                        <div className='size_round w-[50px] h-[50px] border border-1 border-[grey] flex items-center justify-center rounded-[50%] font-[550] text-[14px] mx-[10px]'>M</div>
                                        <div className='size_round w-[50px] h-[50px] border border-1 border-[grey] flex items-center justify-center rounded-[50%] font-[550] text-[14px] mr-[10px]'>L</div>
                                        <div className='size_round w-[50px] h-[50px] border border-1 border-[grey] flex items-center justify-center rounded-[50%] font-[550] text-[14px] mr-[10px]'>XL</div>
                                        <div className='size_round w-[50px] h-[50px] border border-1 border-[grey] flex items-center justify-center rounded-[50%] font-[550] text-[14px]'>XXL</div>

                                    </div>
                                </div>
                                <div className='add_to_bag mt-[20px] mb-[20px]'>
                                    <button className='bg-[#ff436a] text-[white] text-[19px] p-[10px] px-[60px] rounded-[5px]'><FontAwesomeIcon icon={faShoppingBag} /> ADD TO BAG</button>
                                </div>
                            </div>


                            <div className='my-[20px]'>
                                <p className='mb-[10px]'>DELIVERY OPTIONS <FontAwesomeIcon icon={faTruck} /> </p>
                                <div className='flex justify-between p-[5px] w-[200px] border border-1 border-[#808080d0] rounded'>
                                    <div className='pincode flex items-center'>
                                        342003
                                        <div className='text-color7 ml-[10px]'>
                                            <FontAwesomeIcon icon={faCircleCheck} />
                                        </div>
                                    </div>

                                    <div className='change text-[#ff436a] font-[750]'>Change</div>
                                </div>

                                <div className='flex items-center'>
                                    <figure className='w-[45px]'>
                                        <svg viewBox="0 0 24 25" class="pincode-serviceabilityIcon"><g fill="none" fill-rule="evenodd"><path d="M0 1h24v24H0z"></path><path d="M21.872 12.843l-.68 3.849a1.949 1.949 0 00-.398-.819c-.377-.447-.925-.693-1.549-.693-1.024 0-1.98.669-2.395 1.601l1.159-6.571h1.703c.7 0 1.31.265 1.713.746.415.494.573 1.164.447 1.887m-3.238 5.812c-.297 0-.55-.108-.715-.306-.172-.204-.236-.486-.183-.795.123-.698.816-1.288 1.51-1.288.296 0 .55.108.716.306.17.204.235.486.18.794-.123.699-.814 1.289-1.508 1.289m-11.308 0c-.295 0-.55-.108-.715-.306-.171-.204-.236-.486-.18-.794.122-.699.814-1.289 1.508-1.289.296 0 .55.108.714.306.172.204.237.486.182.794-.123.699-.815 1.289-1.509 1.289m14.932-8.397c-.616-.731-1.518-1.134-2.546-1.134H18.2l.262-1.487A.546.546 0 0017.927 7H6.417a.543.543 0 100 1.086H17.28l-1.557 8.832h-5.8a1.965 1.965 0 00-.438-1.045c-.376-.447-.926-.693-1.548-.693-1.074 0-2.074.734-2.454 1.738h-.356l.143-.811a.543.543 0 10-1.069-.188l-.256 1.447a.546.546 0 00.535.637h.86c.045.389.194.753.438 1.045.375.446.925.693 1.548.693 1.075 0 2.075-.734 2.454-1.738h6.867c.044.389.194.752.439 1.045.375.446.925.693 1.547.693 1.075 0 2.075-.734 2.454-1.738h.52c.264 0 .49-.189.534-.449l.799-4.523c.184-1.043-.058-2.028-.683-2.773" fill="#535766"></path><path d="M9.812 9.667c0-.3-.243-.543-.543-.543H1.543a.544.544 0 000 1.086h7.726c.3 0 .543-.243.543-.543M9.387 12.074c0-.3-.243-.543-.543-.543h-5.82a.543.543 0 100 1.086h5.82c.3 0 .543-.243.543-.543M8.42 13.938H4.502a.543.543 0 100 1.086H8.42a.543.543 0 100-1.086" fill="#535766"></path></g></svg>
                                    </figure>
                                    <h4 className='ml-[20px] font-[660]'>Get it by Tue, Mar 19</h4>
                                </div>

                                <div className='flex items-center'>
                                    <figure className='w-[45px]'>
                                        <svg viewBox="0 0 24 25" class="pincode-serviceabilityIcon"><g fill="none" fill-rule="evenodd"><path d="M0 1h24v24H0z"></path><path d="M21.872 12.843l-.68 3.849a1.949 1.949 0 00-.398-.819c-.377-.447-.925-.693-1.549-.693-1.024 0-1.98.669-2.395 1.601l1.159-6.571h1.703c.7 0 1.31.265 1.713.746.415.494.573 1.164.447 1.887m-3.238 5.812c-.297 0-.55-.108-.715-.306-.172-.204-.236-.486-.183-.795.123-.698.816-1.288 1.51-1.288.296 0 .55.108.716.306.17.204.235.486.18.794-.123.699-.814 1.289-1.508 1.289m-11.308 0c-.295 0-.55-.108-.715-.306-.171-.204-.236-.486-.18-.794.122-.699.814-1.289 1.508-1.289.296 0 .55.108.714.306.172.204.237.486.182.794-.123.699-.815 1.289-1.509 1.289m14.932-8.397c-.616-.731-1.518-1.134-2.546-1.134H18.2l.262-1.487A.546.546 0 0017.927 7H6.417a.543.543 0 100 1.086H17.28l-1.557 8.832h-5.8a1.965 1.965 0 00-.438-1.045c-.376-.447-.926-.693-1.548-.693-1.074 0-2.074.734-2.454 1.738h-.356l.143-.811a.543.543 0 10-1.069-.188l-.256 1.447a.546.546 0 00.535.637h.86c.045.389.194.753.438 1.045.375.446.925.693 1.548.693 1.075 0 2.075-.734 2.454-1.738h6.867c.044.389.194.752.439 1.045.375.446.925.693 1.547.693 1.075 0 2.075-.734 2.454-1.738h.52c.264 0 .49-.189.534-.449l.799-4.523c.184-1.043-.058-2.028-.683-2.773" fill="#535766"></path><path d="M9.812 9.667c0-.3-.243-.543-.543-.543H1.543a.544.544 0 000 1.086h7.726c.3 0 .543-.243.543-.543M9.387 12.074c0-.3-.243-.543-.543-.543h-5.82a.543.543 0 100 1.086h5.82c.3 0 .543-.243.543-.543M8.42 13.938H4.502a.543.543 0 100 1.086H8.42a.543.543 0 100-1.086" fill="#535766"></path></g></svg>
                                    </figure>
                                    <h4 className='ml-[20px] font-[660]'>Pay on delivery available</h4>
                                </div>

                                <div className='flex items-center'>
                                    <figure className='w-[45px]'>
                                        <svg viewBox="0 0 24 24" class="pincode-serviceabilityIcon"><g fill="#535766"><path d="M15.19 8.606V4.3a.625.625 0 00-.622-.625H6.384V.672a.624.624 0 00-.407-.588.62.62 0 00-.687.178L.367 6.048a.628.628 0 000 .812l4.923 5.778a.626.626 0 00.687.182.624.624 0 00.407-.588V9.228h8.184a.62.62 0 00.621-.622zm-1.244-.625H5.762a.625.625 0 00-.621.625v1.938l-3.484-4.09L5.14 2.362V4.3c0 .344.28.625.621.625h8.184v3.056z"></path><path d="M22.708 13.028L17.785 7.25a.616.616 0 00-.687-.178.624.624 0 00-.407.587v3.003H8.507a.625.625 0 00-.622.625v4.304c0 .343.28.625.622.625h8.184v3.003a.624.624 0 00.621.625.626.626 0 00.473-.219l4.923-5.781a.632.632 0 000-.816zm-4.774 4.497v-1.937a.625.625 0 00-.622-.625H9.13v-3.054h8.183a.625.625 0 00.622-.625V9.347l3.484 4.09-3.484 4.088z"></path></g></svg>
                                    </figure>
                                    <h4 className='ml-[20px] font-[660]'>Easy 14 days return & exchange available</h4>
                                </div>
                            </div>


                            <div className=''>100% Original Products</div>


                            <div className='my-[10px]'>
                                <h4 className='font-[650] text-[15px] my-[10px]'>BEST OFFERS</h4>
                                <div>
                                    <div classname=''>
                                        <div>
                                            <div class="pdp-offers-offerTitle">
                                                <b>Best Price:<span className='text-[#ff905a]'> Rs. 259</span></b>
                                            </div>

                                            <ul className='mb-[10px]'>
                                                <li><div class="pdp-offers-bullet"></div><div class="pdp-offers-labelMarkup">Coupon Discount:<span class=""> Rs. 130 off (check cart for final savings)</span></div></li>
                                                <li><div class="pdp-offers-bullet"></div><div class="pdp-offers-labelMarkup">Applicable on:<span class=""> Orders above Rs. 449 (only on first purchase)</span></div></li>
                                                <li><div class="pdp-offers-bullet"></div><div class="pdp-offers-labelMarkup">Coupon code:<span className='font-[660]'> TOPBRANDOFFER</span></div></li>
                                            </ul>
                                            <a className='text-color3 text-[14px]  font-[665]' target="_blank" href="https://www.myntra.com/myntra?f=Coupons:TOPBRANDOFFER_113122">View Eligible Products</a>
                                        </div>
                                    </div>
                                    <div class="pdp-offers-extraOffer mt-[10px]">
                                        <div class="pdp-offers-offerLikeBestPrice">
                                            <div class="pdp-offers-offerTitle">
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
                                            <div classname=''>
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
                </div>


                <Footer/>
            </div>

        </>
    )
}
