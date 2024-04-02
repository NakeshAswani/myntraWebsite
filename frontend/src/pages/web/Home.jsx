import React, { useEffect, useState } from 'react'
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
import playstore from '../../images/playstore.webp'
//slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import webBaseUrl from '../../common/web/WebBaseUrl'
import { Link } from 'react-router-dom'

export function Home() {
  const [api, setApi] = useState({
    sliderImagePath: "",
    sliderData: [],
    subCategoryImagePath: "",
    subCategoryData: []
  })
  const getResponse = async () => {
    const finalData = { ...api };
    await axios.get(webBaseUrl + "slider/view-slider")
      .then((response) => response.data)
      .then((finalResponse) => {
        finalData.sliderData = finalResponse?.data
        finalData.sliderImagePath = finalResponse?.sliderImageLink
      })
      .catch(error => {
        console.error(error);
      })
    await axios.get(webBaseUrl + "category/view-sub-category")
      .then((response) => response.data)
      .then((finalResponse) => {
        finalData.subCategoryData = finalResponse?.data
        finalData.subCategoryImagePath = finalResponse?.subCategoryImageLink
      })
      .catch(error => {
        console.error(error);
      })
    setApi(finalData)
  }
  useEffect(() => {
    getResponse()
  }, [])
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
          <Slider1 api={api} />
        </section>

        <section>
          <img src={categories} alt="" />
          <Slider2 api={api} />
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

function Slider1({ api }) {
  const settings = {
    dots: 0,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
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
    <Slider {...settings} className='w-[100%] '>
      {
        (api?.sliderData?.length >= 1)
          ?
          api?.sliderData?.map((items, index) => {
            return (
              <div className=' h-[359px] slider1' key={index}>
                <div className='img_section w-[100%] h-[78%]'>
                  <img src={api?.sliderImagePath + items?.sliderImage} alt="" className='w-[100%] h-[100%]' />
                </div>
              </div>
            )
          })
          :
          ""
      }
    </Slider>
  )
}

function Slider2({ api }) {
  const settings = {
    dots: 0,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
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
      {
        (api?.subCategoryData?.length >= 1)
          ?
          api?.subCategoryData?.map((items, index) => {
            return (
              <Link to={`/products/?subCategoryId=${items?._id}`} className='h-[288px]' key={index}>
                <div className='w-[100%] h-[78%]'>
                  <img src={api?.subCategoryImagePath + items?.subCategoryImage} alt="" className='w-[100%] h-[100%]' />
                </div>
                <div className='w-[100%] h-[20%] pt-[2%] text-center'>
                  <h3 className='font-[660] capitalize'>{items?.subCategoryName}</h3>
                </div>
              </Link>
            )
          })
          :
          ""
      }
    </Slider>
  );
}
