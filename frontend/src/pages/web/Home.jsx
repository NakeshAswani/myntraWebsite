import React from 'react'
import { Header } from '../../common/web/Header'
import discount_coupon from "../../images/download (1).webp"
import kiara from "../../images/original_products (1).jpeg"
import ranveer from "../../images/ranveer.jpeg"
import coupons_corner from '../../images/coupons.webp'
import flat100 from '../../images/flat_one.webp'
import flat200 from '../../images/flat_two.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import watch from '../../images/download (2).webp'
export function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
  };


  return (
    <>
      <main className='main1 w-[100%] '>
        <Header />

        <img src={discount_coupon} alt="" className='w-[100%]' />


        <sectiom className='kiara_ranveer_section flex'>
          <img src={kiara} alt="" className='w-[50%]' />
          <img src={ranveer} alt="" className='w-[50%]' />
        </sectiom>



        <sectiom className='coupons'>
          <div className='coupons_corner w-[100%]'>
            <img src={coupons_corner} alt="" />
          </div>

          <div className='two_coupons w-[100%] flex'>
            <img src={flat100} alt="" className='w-[50%]' />
            <img src={flat200} alt="" className='w-[50%]' />
          </div>
        </sectiom>

        <section className='products w-[100%]' >

          <Slider {...settings}>
           
          </Slider>

        </section>
      </main>
    </>
  )
}
