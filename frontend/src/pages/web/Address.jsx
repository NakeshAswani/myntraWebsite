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
import { Link } from 'react-router-dom'

export function Address() {

  return (
    <div className='main1 w-[100%]  ]'>

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
                <button className='text-[12px] text-[#4d4d4d] font-[650] border border-1 border-[black] rounded-[4px] p-[10px]'>ADD NEW ADDRESS</button>
              </div>
            </div>

            <p className='text-[11px] font-[750] text-[grey]'>DEFAULT ADDRESS</p>
            <div className='available_offer border border-1 border-[#525352c7]  p-[15px] rounded-[5px] bg-color9 '>
              <div className='input_name w-[100px] flex items-center justify-between'>
                <input type="radio" className='mr-[10px]' />
                <p className='font-[750] text-[13px] text-[#494949] mr-[10px]'>Vershab</p>
                <button className='text-[10px] text-color7 border border-1 border-color7 flex items-center justify-center p-[1px] px-[10px] rounded-[100px]'>HOME</button>
              </div>

              <div className='address_mobile'>
                <p className='text-[12px] mt-[10px] text-[grey]'>433 3rd c road sardarpura, sardarpura <br /> jodhpur, rajasthan - 342003</p>
                <p className='text-[12px] mt-[10px] text-[grey]'>Mobile: <span className='font-[700] text-[#3b3b3b]'>9351858094</span> </p>
                <ul className='list-[disc] text-[14px] text-[grey] mt-[10px]'>
                  <li className='ml-[20px]'>Pay on Delivery available</li>
                </ul>
              </div>

              <div className='remove_edit_btn mt-[13px]'>
                <button className='text-[11px] text-[#4d4d4d] font-[650] border border-1 border-[black] rounded-[4px] py-[6px] px-[15px] mr-[15px]'>REMOVE</button>
                <button className='text-[11px] text-[#4d4d4d] font-[650] border border-1 border-[black] rounded-[4px] py-[6px] px-[15px]'>EDIT</button>
              </div>


            </div>

            <div className="add_address border-dashed border-2 border-[grey] flex items-center my-[10px] py-[15px]">
                <p className='font-[650] ml-[12px] text-color3'>+ ADD ADDRESS</p>
            </div>

            </div>


          <div className='w-[35%] h-auto border border-[grey] p-[10px]'>
            <p className='text-[grey] text-[12px] font-[850] mb-[5px]'>DELIVERY ESTIMATE</p>

            <div className='apply_coupons w-[100%] flex justify-between mb-[10px]'>
              <div className='apply_heading flex items-center justify-between'>
                <figure className='w-[42px]'>
                  <img src={p_image} alt="" />
                </figure>
                <button className=' px-[12px] py-[5px] text-[13px] font-[450] text-[grey]'>Delivery between <span className='text-[black] font-[650]'>19 Mar - 21 Mar</span></button>
              </div>
            </div>


            <div className=''>
             
              <div className='total_amount'>
                <div className='price_details text-[12px] text-[grey] font-[700] py-[5px]'>PRICE DETAILS (1 item)</div>
                <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]'><p className='font-[550]'>Total MRP</p><p className='font-[650]'>₹1,199</p></div>
                <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]'>
                  <p className='font-[550]'>DISCOUNT on MRP</p>
                  <p className='text-color7'>-₹708</p>
                </div>
                <div className='price_details text-[13px] font-[700] flex justify-between py-[5px]' ><p className='font-[550]'>Platform Fee</p><p className='text-color7 font-[450]'>FREE</p></div>
                <div className='price_details text-[13px] font-[700] flex justify-between '><p className='font-[550]'>Shipping Fee</p><p className='text-color7 font-[450]'><span className='text-[black] line-through mr-[5px]'>₹79</span>FREE</p></div>
                <div className='price_details text-[13px] font-[700] flex justify-between' ><p className='text-[11px] text-[grey] mt-[-3px]'>Free shipping for you</p></div>
                <div className='w-[100%] border-b-2 border-[#615e5ebd] my-[10px]'></div>
                <div className='total w-[100%] flex justify-between font-[700] text-[#383838] pb-[10px]'>Total Amount<p>₹491</p></div>
                <div className='place_order_btn flex justify-center'>
                <Link to={"/payment"} className='w-[100%]'><button className=' w-[calc(100%-10px)] p-[10px] font-[650] bg-[#ff446a] text-[white] '>CONTINUE</button></Link>
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
