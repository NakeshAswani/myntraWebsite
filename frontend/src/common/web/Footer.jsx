import React from 'react'
import googleplay from '../../images/googleplay.png'
import applestore from '../../images/download (1).png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import youtube from '../../images/youtube.png'
import instagram from '../../images/instagran.png'
import original from '../../images/originalstamp.png'
import fourteen from '../../images/fourteenreplacement.png'
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <>
            <footer className='flex-wrap w-[100%] flex justify-evenly'>

                <div className='footer_inner flex-wrap  w-[100%] my-[25px] flex justify-evenly '>
                    <div className='flex justify-evenly'>
                        <div className=' categories_footer w-[150px]  leading-7'>
                            <h5 className='font-[1000] text-[13px] text-[#424242]'>CATEGORIES</h5>
                            <ul className='text-[#555454] text-[15px]'>
                                <li> <Link>Men</Link></li>
                                <li><Link>Women</Link></li>
                                <li><Link>Kids</Link></li>
                                <li><Link>Home & Living</Link></li>
                                <li><Link>Beauty</Link></li>
                            </ul>
                        </div>




                        <div className=' customer_section mt-[25px] w-[170px]'>
                            <h5 className='font-[800] text-[13px] text-[#424242]'>CUSTOMER POLICIES</h5>
                            <ul className='text-[#555454] text-[15px]'>
                                <li> <Link>Men</Link></li>
                                <li><Link>Women</Link></li>
                                <li><Link>Kids</Link></li>
                                <li><Link>Home & Living</Link></li>
                                <li><Link>Beauty</Link></li>
                            </ul>
                        </div>
                    </div>



                    <div className=' app_on_mobile w-[280px] mt-[50px] '>
                        <h5 className='font-[800] text-[12px] text-[#555454] text-center'>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                        <div className='download_app flex justify-between w-[270px] mt-[20px]'>
                            <div className='googleplaystore w-[50%]'>
                                <a href="https://play.google.com/store/apps/details?id=com.myntra.android">
                                    <img src={googleplay} alt="" className='w-[100%]' />
                                </a>
                            </div>

                            <div className='apple_store w-[50%] ml-2'>
                                <a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059">
                                    <img src={applestore} alt="" className='w-[100%]' />
                                </a>
                            </div>
                        </div>

                        <div className='social_icons flex items-center justify-center '>

                            <h5 className='font-[800] text-[12px] text-[#555454] mt-[20px]'>KEEP IN TOUCH</h5>

                            <div className='social flex justify-between w-[40%] mt-[13px]'>
                                <div className='facebook  w-[30px] flex items-center'>
                                    <a href="https://www.facebook.com/myntra"><img src={facebook} alt="" className='w-[100%] mr-[5px]' /></a>
                                </div>

                                <div className='twitter w-[30px] flex items-center ml-2'>
                                    <a href="https://twitter.com/myntra"><img src={twitter} alt="" className='w-[100%] mr-[5px]' /></a>
                                </div>

                                <div className='youtube  w-[35px] flex items-center ml-2'>
                                    <a href="https://www.youtube.com/user/myntradotcom"><img src={youtube} alt="" className='w-[100%] mr-[5px]' /></a>
                                </div>

                                <div className='instagram w-[30px] flex items-center ml-2'>
                                    <a href='https://www.instagram.com/myntra/'><img src={instagram} alt="" className='w-[100%] mr-[5px]' /></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=' original_section_outer w-[300px] mt-[50px] '>
                        <div className='original_section flex'>
                            <img src={original} alt="" className='w-[60px] h-[55px]' />
                            <p className='ml-[10px]'><span className='font-[800]'>100% ORIGINAL</span> guarantee for all products at myntra.com</p>
                        </div>

                        <div className='original_section flex mt-[25px]'>
                            <img src={fourteen} alt="" className='w-[60px] h-[55px]' />
                            <p className='ml-[10px]'><span className='font-[800]'>Return within 14days</span> of receiving your order</p>
                        </div>
                    </div>

                </div>
                <div className='w-full px-28 border-t-[1px] border-[black] border-opacity-50 py-[10px] flex justify-between'>
                    <p>
                        © 2024 www.myntra.com. All rights reserved.
                    </p>
                    <p>
                        A Flipkart company
                    </p>
                </div>
            </footer>
        </>
    )
}
