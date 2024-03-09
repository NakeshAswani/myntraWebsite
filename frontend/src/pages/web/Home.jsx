import React from 'react'
//components
import { Footer } from '../../common/web/Footer'
import { Header } from '../../common/web/Header'
// images
import discount_coupon from "../../images/download (1).webp"
import kiara from "../../images/original_products (1).jpeg"
import ranveer from "../../images/ranveer.jpeg"
import coupons_corner from '../../images/coupons.webp'
import flat100 from '../../images/flat_one.webp'
import flat200 from '../../images/flat_two.webp'
import crazy from "../../images/crazy_deals.webp"
import categories from '../../images/category.webp'
import women from '../../images/download (3).webp'
import men from '../../images/men.webp'
import kids from '../../images/kids.webp'
import home from '../../images/bedsheets.webp'
import beauty from '../../images/moisturisers.jpeg'
import playstore from '../../images/playstore.webp'
//slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Home() {

  var settings = {
    dots: 0,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    autoplay: true,
    speed: 300,
    loop: true,
    responsive: [
      {
        breakpoint: 1045,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        }
      },

      {
        breakpoint: 885,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },

      {
        breakpoint: 555,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 355,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      }
    ]
  };
  return (
    <>
      <main className='main1 w-[100%] '>
        <Header />

        <img src={discount_coupon} alt="" className='w-[100%]' />


        <section className='kiara_ranveer_section flex'>
          <img src={kiara} alt="" className='w-[50%]' />
          <img src={ranveer} alt="" className='w-[50%]' />
        </section>



        <section className='coupons'>
          <div className='coupons_corner w-[100%]'>
            <img src={coupons_corner} alt="" />
          </div>

          <div className='two_coupons w-[100%] flex'>
            <img src={flat100} alt="" className='w-[50%]' />
            <img src={flat200} alt="" className='w-[50%]' />
          </div>
        </section>


        <section className='w-[100%] '>
          <img src={crazy} alt="" />
          <Slider {...settings} className='w-[100%] '>

            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={men} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={women} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={kids} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={home} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>




            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={beauty} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>





            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={men} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={women} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={kids} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={home} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>




            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={beauty} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>




            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={men} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={women} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={kids} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={home} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>




            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={beauty} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={men} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={women} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={kids} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>



            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={home} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>




            <div className=' h-[359px] slider1'>
              <div className='img_section w-[100%] h-[78%]'>
                <img src={beauty} alt="" className='w-[100%] h-[100%]' />
              </div>

              <div className=' description_section w-[100%] h-[20%] pl-[5%] pt-[2%]'>
                <h3 className='font-[660]'>BULLMER</h3>
                <h4>Oversized Cotton T-shirt</h4>
                <div className='rupees_discount_section flex'>
                  <h2 className='text-[14px] font-[660]'>Rs .389</h2>
                  <p className='ml-[10px] text-[12px] line-through'>Rs. 1499</p>
                  <p className='ml-[10px] text-[10px] text-[#ffa58d]'>(74%OFF)</p>
                </div>
              </div>
            </div>
          </Slider>
        </section>

        <section className='mt-[70px]'>
          <img src={categories} alt="" />
          <SimpleSlider />
        </section>


        <section className='playstore w-[100%]'>
          <a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059?mt=8">
            <img src={playstore} alt="" className='w-[100%]' />
          </a>
        </section>


        <section className='w-[100%]'>
          <Footer />
        </section>


      </main>
    </>
  )
}


export function SimpleSlider() {
  var settings = {
    dots: 0,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
    autoplay: true,
    speed: 300,
    loop: true,
    responsive: [
      {
        breakpoint: 1246,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: false,
        }
      },

      {
        breakpoint: 1071,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        }
      },

      {
        breakpoint: 910,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 722,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 355,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      }
    ]
    
  };
  return (
    <Slider {...settings}>
      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={men} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>


      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={women} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>


      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={kids} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>


      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={home} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>


      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={beauty} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>

      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={men} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>


      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={women} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>


      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={kids} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>


      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={home} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>


      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={beauty} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>

      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={men} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>


      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={women} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>


      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={kids} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>


      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={home} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>


      <div className=' h-[288px] category_slider'>
        <div className='img_section w-[100%] h-[78%]'>
          <img src={beauty} alt="" className='w-[100%] h-[100%]' />
        </div>

        <div className=' description_section w-[100%] h-[20%]  pt-[2%] text-center bg-gradient-to-r from-color1 to bg-color3 to bg-color4'>
          <h3 className='font-[660]'>MENS</h3>
          <h4>Oversized Cotton T-shirt</h4>
        </div>
      </div>
    </Slider>
  );
}
