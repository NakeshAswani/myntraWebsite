import React from 'react'
import logo from "../../images/Myntra-icon-logo.svg"
import { Link } from 'react-router-dom'
export function Header() {
  return (
    <>
      <header className='w-[100%] border border-1 border-[blue] flex justify-between items-center  bg-[white] '>
        <div className='logo_section p-[20.77px]'>
          <img src={logo} alt="" className='w-[53px]' />
        </div>

        <div className='categories_name flex items-center justify-between h-[80px]'>

          <Link className=' categories_inner1 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550] relative'>MEN
            <div className='mens_dropdown absolute w-[450px] top-[104%] left-0  p-[20px] flex'>

              <div className='topwear_indian w-[50%] pr-[50px]'>

                <ul className='font-[100] leading-[27px]'>

                  <li className='font-bold text-[14px] text-color3 mb-[5px]'>Topwear</li>
                  <li className='text-[14px] font-[400]'>T-Shirts</li>
                  <li className='text-[14px] font-[400]'>Casual Shirts</li>
                  <li className='text-[14px] font-[400]'>Formal Shirts</li>
                  <li className='text-[14px] font-[400]'>Sweatshirts</li>
                  <li className='text-[14px] font-[400]'>Sweaters</li>
                  <li className='text-[14px] font-[400]'>Jackets</li>
                  <li className='text-[14px] font-[400]'>Blazers</li>
                  <li className='text-[14px] font-[400]'>Suits</li>
                  <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'>Rain Jackets</li>
                  <li className='font-bold text-[14px] text-color3 mt-[5px]'>Indian &amp; Festive Wear</li>
                  <li className='text-[14px] font-[400]'>Kurtas &amp; Kurta Sets</li>
                  <li className='text-[14px] font-[400]'>Sherwanis</li>
                  <li className='text-[14px] font-[400]'>Nehru Jackets</li>
                  <li className='text-[14px] font-[400]'>Dhotis</li>

                </ul>

              </div>


              <div className='bottom_wear_section w-[50%] pr-[25px]'>

                <ul className='font-[100] leading-[27px]'>

                  <li className='font-bold text-[14px] text-color3 mb-[5px]'>Bottomwear</li>
                  <li className='text-[14px] font-[400]'>Jeans</li>
                  <li className='text-[14px] font-[400]'>Casual Trousers</li>
                  <li className='text-[14px] font-[400]'>Formal Trousers</li>
                  <li className='text-[14px] font-[400]'>Shorts</li>
                  <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'>Track Pants &amp; Joggers</li>

                  <li className='font-bold text-[14px] text-color3 mb-[5px]'>Innerwear &amp; Sleepwear</li>
                  <li className='text-[14px] font-[400]'>Briefs &amp; Trunks</li>
                  <li className='text-[14px] font-[400]'>Boxers</li>
                  <li className='text-[14px] font-[400]'>Vests</li>
                  <li className='text-[14px] font-[400]'>Sleepwear &amp; Loungewear</li>
                  <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'>Thermals</li>

                  <li className='font-bold text-[14px] text-color3 mb-[5px]'>Plus Size</li>

                </ul>

              </div>

            </div>
          </Link>




          <Link className=' categories_inner2 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550] relative'>WOMEN
            <div className='womens_dropdown absolute w-[450px] top-[104%] left-0  p-[20px] flex'>

              <div className='indian_fusion_section w-[50%] pr-[50px]'>

                <ul className='font-[100] leading-[27px]'>

                  <li className='font-bold text-[14px] text-color4 mb-[5px]'>Indian &amp; Fusion Wear</li>
                  <li className='text-[14px] font-[400]'>Kurtas &amp; Suits</li>
                  <li className='text-[14px] font-[400]'>Kurtis, Tunics &amp; Tops</li>
                  <li className='text-[14px] font-[400]'>Sarees</li>
                  <li className='text-[14px] font-[400]'>Ethnic Wear</li>
                  <li className='text-[14px] font-[400]'>Leggings, Salwars &amp; Churidars</li>
                  <li className='text-[14px] font-[400]'>Skirts &amp; Palazzos</li>
                  <li className='text-[14px] font-[400]'>Dress Materials</li>
                  <li className='text-[14px] font-[400]'>Lehenga Cholis</li>
                  <li className='text-[14px] font-[400]'>Dupattas &amp; Shawls</li>
                  <li className='text-[14px] font-[400]'>Jackets</li>
                  <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'></li>
                  <li className='font-bold text-[14px] text-color4 mt-[5px]'>Rain Jackets</li>
                  <li className='font-bold text-[14px] text-color4 mt-[5px]'>Watches &amp; Wearables</li>

                </ul>

              </div>


              <div className='bottom_wear_section w-[50%] pr-[25px]'>

                <ul className='font-[100] leading-[27px]'>

                  <li className='font-bold text-[14px] text-color3 mb-[5px]'>Bottomwear</li>
                  <li className='text-[14px] font-[400]'>Jeans</li>
                  <li className='text-[14px] font-[400]'>Casual Trousers</li>
                  <li className='text-[14px] font-[400]'>Formal Trousers</li>
                  <li className='text-[14px] font-[400]'>Shorts</li>
                  <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'>Track Pants &amp; Joggers</li>

                  <li className='font-bold text-[14px] text-color3 mb-[5px]'>Innerwear &amp; Sleepwear</li>
                  <li className='text-[14px] font-[400]'>Briefs &amp; Trunks</li>
                  <li className='text-[14px] font-[400]'>Boxers</li>
                  <li className='text-[14px] font-[400]'>Vests</li>
                  <li className='text-[14px] font-[400]'>Sleepwear &amp; Loungewear</li>
                  <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'>Thermals</li>

                  <li className='font-bold text-[14px] text-color3 mb-[5px]'>Plus Size</li>

                </ul>

              </div>

            </div>
          </Link>
          <Link className=' categories_inner3 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550]'>KIDS</Link>
          <Link className=' categories_inner4 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550]'>HOME & LIVING</Link>
          <Link className=' categories_inner5 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550]'>BEAUTY</Link>
        </div>
      </header >
    </>
  )
}