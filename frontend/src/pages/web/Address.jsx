import React from 'react'

export function Address() {
  return (
    import React from 'react'
import '../../css/media.css'

import logo from '../../images/Myntra-icon-logo.svg'
import shield from '../../images/secure.png'
import p_image from '../../images/product_img.webp'
import sslbit from '../../images/ssl-bit.png'
import visa from '../../images/visa.png'
import mastercard from '../../images/mastercard.png'
import americanexpress from '../../images/americanexpress.png'
import dinersclub from '../../images/dinersclub.png'
import { Header } from "../../common/web/Header"
import { Footer } from '../../common/web/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

export function Cart() {
  return (
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


      <section className='w-[100%] flex justify-center items-center py-[10px] '>

        <div className='w-[75%] flex'>

          <div className='w-[60%] mr-[20px]'>
            <div className='address_section border border-1 border-[#525352c7] flex items-center justify-between p-[15px] mb-[7px] rounded-[5px] bg-color9'>
              <div className='address_inner flex'>
                <div className='name_pincode'>
                  <p className='text-[13px]'>Deliver to: <span className='font-[700]'> Vershab, 342003</span></p>
                  <div className='address text-[13.5px]'>
                    <p>433 3rd c road sardarpura jodhpur</p>
                  </div>
                </div>
              </div>


              <div className='change_address'>
                <button className='text-[12px] text-color3 border border-1 border-color3 rounded-[4px] p-[10px]'>CHANGE ADDRESS</button>
              </div>
            </div>

            <div className='available_offer border border-1 border-[#525352c7] flex items-center justify-between p-[15px] rounded-[5px] bg-color9 '>
              <div className='text-[12.6px] leading-[25px]'>
                <div className='flex items-center justify-between w-[135px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="offersV2-base-discountIcon"><g fill="#000" fill-rule="evenodd"><path d="M15.292 10.687v.001c-.198.742.076 1.454.296 2.026l.045.12-.137.021c-.602.094-1.352.211-1.892.75-.538.54-.655 1.288-.748 1.89l-.022.138a22.096 22.096 0 0 1-.12-.045c-.443-.171-.946-.364-1.49-.364-.185 0-.366.023-.536.068-.728.194-1.198.78-1.577 1.249-.032.04-.07.088-.111.137l-.112-.138c-.378-.47-.848-1.054-1.575-1.248a2.092 2.092 0 0 0-.537-.068c-.543 0-1.046.193-1.49.364l-.12.045-.022-.138c-.093-.602-.21-1.35-.749-1.89-.539-.539-1.289-.656-1.891-.75l-.137-.022a15 15 0 0 1 .045-.118c.22-.573.494-1.286.296-2.027-.194-.728-.78-1.199-1.25-1.577L1.323 9l.137-.11c.47-.38 1.055-.85 1.249-1.577.198-.742-.076-1.455-.296-2.028l-.045-.118.137-.022c.602-.094 1.352-.211 1.891-.75.54-.539.656-1.289.75-1.891l.022-.137.119.045c.443.171.947.365 1.49.365.186 0 .367-.024.537-.07.727-.193 1.198-.778 1.576-1.248L9 1.322l.111.137c.379.47.85 1.055 1.576 1.249.17.045.352.069.537.069.544 0 1.047-.194 1.491-.365l.119-.045.022.137c.094.602.21 1.353.75 1.891.538.539 1.288.656 1.89.75l.138.022-.046.119c-.22.572-.494 1.285-.295 2.026.194.728.778 1.199 1.248 1.577.04.033.088.07.137.111l-.137.11c-.47.38-1.054.85-1.249 1.577M18 9c0-.744-1.459-1.286-1.642-1.972-.19-.71.797-1.907.437-2.529-.364-.63-1.898-.372-2.41-.884-.511-.511-.253-2.045-.883-2.41a.647.647 0 0 0-.33-.08c-.585 0-1.403.542-1.998.542a.778.778 0 0 1-.201-.025C10.286 1.46 9.743 0 9 0c-.744 0-1.286 1.459-1.972 1.642a.78.78 0 0 1-.2.025c-.596 0-1.414-.542-2-.542a.647.647 0 0 0-.33.08c-.63.365-.37 1.898-.883 2.41-.512.512-2.046.254-2.41.884-.36.62.627 1.819.437 2.529C1.46 7.714 0 8.256 0 9s1.459 1.286 1.642 1.972c.19.71-.797 1.908-.437 2.53.364.63 1.898.371 2.41.883.511.512.253 2.045.884 2.41.097.056.208.08.33.08.585 0 1.403-.542 1.998-.542a.78.78 0 0 1 .201.025C7.714 16.54 8.256 18 9 18s1.286-1.46 1.973-1.642a.774.774 0 0 1 .2-.025c.595 0 1.413.542 1.998.542a.647.647 0 0 0 .33-.08c.631-.365.373-1.898.884-2.41.512-.512 2.046-.254 2.41-.884.36-.62-.627-1.819-.437-2.529C16.54 10.286 18 9.744 18 9"></path><path d="M10.897 6.34l-4.553 4.562a.536.536 0 0 0 .76.758l4.552-4.562a.536.536 0 0 0-.76-.758M6.75 7.875a1.126 1.126 0 0 0 0-2.25 1.126 1.126 0 0 0 0 2.25M11.25 10.125a1.126 1.126 0 0 0 0 2.25 1.126 1.126 0 0 0 0-2.25"></path></g></svg>
                  <span className='font-[650] text-[14px] ml-[10px]'>Available Offers</span>
                </div>
                <div className='leading-5 mb-[7px]'><span className='font-[900]'>1.</span> 7.5 mb-[7px]% Instant Discount on every spends with Myntra Kotak Credit Card. TCA</div>
                <div className='leading-5 mb-[7px]'><span className='font-[900]'>2.</span> Up to ₹250 Cashback on First ever Simple Transaction on Myntra on a minimum spend of ₹1,499. TCA</div>
                <div className='leading-5 mb-[7px]'><span className='font-[900]'>3.</span> Up to ₹1,000 Cashback on CRED UPI (Android Devices only) on a minimum spend of ₹1,000. TCA</div>
                <div className='leading-5 mb-[7px]'><span className='font-[900]'>4.</span> Flat ₹30 Cashback on Freecharge UPI (Android Devices only) on a minimum spend of ₹1,999. TCA</div>
                <div className='leading-5 mb-[7px]'><span className='font-[900]'>5.</span> Get ₹150 Brand Voucher on minimum spend of ₹1,000 with Payzapp wallet</div>
                <div className='leading-5 mb-[7px]'><span className='font-[900]'>6.</span> Flat ₹75 Cashback on First Ever Mobikwik Wallet transaction on Myntra on a min spend of ₹999. Use Code MBKNEW on Mobikwik. TCA</div>
                <div className='leading-5 mb-[7px]'><span className='font-[900]'>7.</span> Get upto 10% Cashback on Mobikwik Wallet transaction on a min spend of ₹1,500. Use Code MBK10 on Mobikwik. TCA</div>
                <div className='leading-5 mb-[7px]'><span className='font-[900]'>8.</span> Flat ₹100 on Airtel Payments Bank transactions on a min spend of ₹1,000. TCA</div>

                <div className='show_more text-[14px] text-color3'>
                  <span>Show Less <FontAwesomeIcon icon={faAngleUp} />     </span>
                </div>
              </div>
            </div>

            <div className="items_selected flex items-center justify-between my-[10px]">
              <div className=' flex'>
                <input type="checkbox" />
                <p className='font-[650] ml-[12px]'>1/1 ITEMS SELECTED</p>
              </div>

              <div className='remove_move_to_wishlist flex'>
                <div className='remove border-r-2 border-[grey] p-[10px]'>REMOVE</div>
                <div className='move_to_wishlist p-[10px]'>MOVE TO WISHLIST</div>
              </div>
            </div>


            <div className='product_description border border-1 border-[#80808098] p-[10px]  flex'>
              <div className='p_image'>
                <figure className='w-[111px]'>
                  <img src={p_image} alt="" />
                </figure>
              </div>
              <div className='p_small_description ml-[10px] w-[100%]'>
                <div className='p_name w-[100%]  relative  font-[780] text-[13px]'>
                  <div className='flex'> HRX by Hrithik Roshan  <div className=' absolute right-0'>	&#10060;</div> </div>
                </div>
                <div className='p_categories text-[12.5px] mt-[2px]'>Women Black Solid Joggers</div>
                <div className='sold_by text-[11px] mt-[2px]'>Sold by: ARDEUR FASHIONS</div>

                <div className='rs_discount flex mt-[2px]'>
                  <div className='flex items-center '>
                    <svg width="8" height="10" viewBox="0 0 8 10" class="itemComponents-base-rupeeBoldIcon"><path fill-rule="nonzero" d="M3.418 10 .898 5.604V4.568h.84c.336 0 .63-.047.882-.14.262-.103.476-.247.644-.434.178-.187.299-.41.364-.672H.898V2.286h2.716a1.694 1.694 0 0 0-.294-.644 1.289 1.289 0 0 0-.532-.434 1.678 1.678 0 0 0-.784-.168H.898V.004h6.314V1.04H5.014c.159.177.29.369.392.574.112.205.187.43.224.672h1.582v1.036H5.658c-.093.69-.36 1.232-.798 1.624-.438.383-1.003.644-1.694.784L5.91 10H3.418Z"></path></svg>
                    <span className='text-[14px] font-[750] ml-[1px]'>491</span>
                  </div>

                  <div className='discount_rate ml-[6px] text-[14px]'>
                    <span class="itemComponents-base-price itemComponents-base-strike itemContainer-base-strikedAmount flex items-center line-through"><svg width="8" height="9" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg" class="itemComponents-base-rupeeIcon "><g clip-path="url(#clip0_674_1209)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.966797 4.6993L3.27973 8.73777H4.52798L2.19057 4.88287C2.6647 4.81768 3.06996 4.69005 3.40632 4.5H7V3.5H4.29767C4.37186 3.30767 4.42008 3.09555 4.44231 2.86364H6.03325V2.08042H4.41785C4.38521 1.79487 4.30771 1.54604 4.18531 1.33392C4.06295 1.12179 3.90795 0.938227 3.72028 0.783217H6.03325V0H0.966797V0.783217H1.23603C1.65211 0.783217 2.00293 0.82809 2.28848 0.917833C2.58218 1.00758 2.8147 1.15035 2.98603 1.34615C3.15736 1.5338 3.27158 1.77855 3.32868 2.08042H0.966797V2.86364H3.34091C3.3155 3.11784 3.24801 3.32996 3.13843 3.5H0V4.5H0.966797V4.6993Z"></path></g><defs><clipPath id="clip0_674_1209"><rect width="7" height="9"></rect></clipPath></defs></svg>1,199</span>
                  </div>


                  <div className='discount_percentage text-[#fbaa73] ml-[6px] text-[14px] flex items-center'>
                    59% OFF
                  </div>
                </div>

                <div className='replacement flex items-center mt-[3px]'>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.63639 6.99013C6.84386 7.1976 6.84386 7.53397 6.63639 7.74143L5.7725 8.60533H8.27232C9.21251 8.60533 9.97949 7.84333 9.97949 6.89824C9.97949 5.95914 9.21859 5.19824 8.27949 5.19824H6.89116C6.59776 5.19824 6.35991 4.96039 6.35991 4.66699C6.35991 4.37359 6.59776 4.13574 6.89116 4.13574H8.27949C9.80539 4.13574 11.042 5.37234 11.042 6.89824C11.042 8.43232 9.79722 9.66783 8.27241 9.66783H5.77242L6.63639 10.5318C6.84386 10.7393 6.84386 11.0756 6.63639 11.2831C6.42893 11.4906 6.09256 11.4906 5.88509 11.2831L4.11426 9.51227C4.0417 9.43971 3.99452 9.35138 3.97271 9.25831C3.96352 9.21922 3.95866 9.17846 3.95866 9.13658C3.95866 9.05996 3.97488 8.98713 4.00407 8.92134C4.02519 8.87367 4.05366 8.82847 4.08949 8.78745C4.09828 8.77738 4.10745 8.76764 4.11697 8.75826L5.88509 6.99013C6.09256 6.78267 6.42893 6.78267 6.63639 6.99013Z" fill="#282C3F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.416992 7.50033C0.416992 3.58831 3.58831 0.416992 7.50033 0.416992C11.4123 0.416992 14.5837 3.58831 14.5837 7.50033C14.5837 11.4123 11.4123 14.5837 7.50033 14.5837C3.58831 14.5837 0.416992 11.4123 0.416992 7.50033ZM7.50033 1.47949C4.17511 1.47949 1.47949 4.17511 1.47949 7.50033C1.47949 10.8255 4.17511 13.5212 7.50033 13.5212C10.8255 13.5212 13.5212 10.8255 13.5212 7.50033C13.5212 4.17511 10.8255 1.47949 7.50033 1.47949Z" fill="#282C3F"></path></svg>
                  <p className='text-[13px]'> <span className='font-[750]'>14 days</span> return available</p>
                </div>
              </div>
            </div>
          </div>


          <div className='w-[35%] h-auto border border-[grey] p-[10px]'>
            <p className='text-[grey] text-[12px] font-[850] mb-[5px]'>COUPONS</p>

            <div className='apply_coupons w-[100%] flex justify-between mb-[10px]'>
              <div className='apply_heading flex items-center justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="coupons-base-couponIcon"><g fill="none" fill-rule="evenodd" transform="rotate(45 6.086 5.293)"><path stroke="#000" d="M17.5 10V1a1 1 0 0 0-1-1H5.495a1 1 0 0 0-.737.323l-4.136 4.5a1 1 0 0 0 0 1.354l4.136 4.5a1 1 0 0 0 .737.323H16.5a1 1 0 0 0 1-1z"></path><circle cx="5.35" cy="5.35" r="1.35" fill="#000" fill-rule="nonzero"></circle></g></svg>
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
                <div className='ten flex items-center border py-[4px] px-[15px] rounded-[16px]'> <svg width="8" height="10" viewBox="0 0 8 10" class="itemComponents-base-rupeeBoldIcon"><path fill-rule="nonzero" d="M3.418 10 .898 5.604V4.568h.84c.336 0 .63-.047.882-.14.262-.103.476-.247.644-.434.178-.187.299-.41.364-.672H.898V2.286h2.716a1.694 1.694 0 0 0-.294-.644 1.289 1.289 0 0 0-.532-.434 1.678 1.678 0 0 0-.784-.168H.898V.004h6.314V1.04H5.014c.159.177.29.369.392.574.112.205.187.43.224.672h1.582v1.036H5.658c-.093.69-.36 1.232-.798 1.624-.438.383-1.003.644-1.694.784L5.91 10H3.418Z"></path></svg>10</div>
                <div className='fifty flex items-center border py-[4px] px-[15px] rounded-[16px]'> <svg width="8" height="10" viewBox="0 0 8 10" class="itemComponents-base-rupeeBoldIcon"><path fill-rule="nonzero" d="M3.418 10 .898 5.604V4.568h.84c.336 0 .63-.047.882-.14.262-.103.476-.247.644-.434.178-.187.299-.41.364-.672H.898V2.286h2.716a1.694 1.694 0 0 0-.294-.644 1.289 1.289 0 0 0-.532-.434 1.678 1.678 0 0 0-.784-.168H.898V.004h6.314V1.04H5.014c.159.177.29.369.392.574.112.205.187.43.224.672h1.582v1.036H5.658c-.093.69-.36 1.232-.798 1.624-.438.383-1.003.644-1.694.784L5.91 10H3.418Z"></path></svg>50</div>
                <div className='hundred flex items-center border py-[4px] px-[15px] rounded-[16px]'> <svg width="8" height="10" viewBox="0 0 8 10" class="itemComponents-base-rupeeBoldIcon"><path fill-rule="nonzero" d="M3.418 10 .898 5.604V4.568h.84c.336 0 .63-.047.882-.14.262-.103.476-.247.644-.434.178-.187.299-.41.364-.672H.898V2.286h2.716a1.694 1.694 0 0 0-.294-.644 1.289 1.289 0 0 0-.532-.434 1.678 1.678 0 0 0-.784-.168H.898V.004h6.314V1.04H5.014c.159.177.29.369.392.574.112.205.187.43.224.672h1.582v1.036H5.658c-.093.69-.36 1.232-.798 1.624-.438.383-1.003.644-1.694.784L5.91 10H3.418Z"></path></svg>100</div>
              </div>

              <div className='text-[14px] text-color3 font-[700] mt-[10px]'>Know More</div>

              <div className='total_amount'>
                <div className='price_details text-[12px] text-[grey] font-[700] py-[5px]'>PRICE DETAILS (1 item)</div>
                <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]'><p className='font-[550]'>Total MRP</p><p className='font-[650]'>₹1,199</p></div>
                <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]'>
                  <p className='font-[550]'>DISCOUNT on MRP</p>
                  <p className='text-color7'>-₹708</p>
                </div>
                <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]'><p className='font-[550]'>Coupon Discount</p><p className='font-[450] text-color3'>Apply Coupon</p></div>
                <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]' ><p className='font-[550]'>Platform Fee</p><p className='text-color7 font-[450]'>FREE</p></div>
                <div className='price_details text-[13px] font-[700] flex justify-between '><p className='font-[550]'>Shipping Fee</p><p className='text-color7 font-[450]'><span className='text-[black] line-through mr-[5px]'>₹79</span>FREE</p></div>
                <div className='price_details text-[13px] font-[700] flex justify-between' ><p className='text-[11px] text-[grey] mt-[-3px]'>Free shipping for you</p></div>
                <div className='w-[100%] border-b-2 border-[#615e5ebd] my-[10px]'></div>
                <div className='total w-[100%] flex justify-between font-[700] text-[#383838] pb-[10px]'>Total Amount<p>₹491</p></div>
                <div className='place_order_btn flex justify-center'>
                  <button className=' w-[calc(100%-10px)] p-[10px] bg-[#ff446a] text-[white] '>PLACE ORDER</button>
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
    </div >
  )
}
  )
}
