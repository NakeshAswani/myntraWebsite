import React from 'react'
import { Header } from '../../common/web/Header'
import { Footer } from '../../common/web/Footer'
import Location from '../../common/web/Location'
import topwearImg from "../../images/585db9fe-1df0-458d-b218-6f514eabb9601553068826233-Mast--Harbour-Men-Shirts-4141553068825026-1.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Products() {
    return (
        <div>
            <Header />
            <div className='py-10'>
                <Location />
                <div className='grid grid-cols-[20%_auto]'>
                    <div className='p-[0px_20px_20px_20px] mt-[8px] border-b'>
                        <h2 className='capitalize font-bold mb-6'>men topwear <span className='font-normal lowercase'>- 12 items</span></h2>
                        <h2 className='uppercase font-bold'>filters</h2>
                    </div>
                    <div className='p-5 border-b'></div>
                    <div className='border-r'>
                        <div className='p-5 border-b'>
                            <h2 className='uppercase font-bold mb-2'>categories</h2>
                            <ul className='capitalize'>
                                <li>topwear</li>
                                <li>bottomwear</li>
                                <li>innerwear & sleepwear</li>
                            </ul>
                        </div>
                        <div className='p-5 border-b'>
                            <h2 className='uppercase font-bold mb-2'>color</h2>
                            <ul className='capitalize'>
                                <li>
                                    <input type="checkbox" className='me-1' />
                                    black
                                </li>
                                <li>
                                    <input type="checkbox" className='me-1' />
                                    blue
                                </li>
                                <li>
                                    <input type="checkbox" className='me-1' />
                                    green
                                </li>
                                <li>
                                    <input type="checkbox" className='me-1' />
                                    white
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-6'>
                        <div className='pb-10 grid grid-cols-4 gap-x-16 gap-y-8'>
                            <div>
                                <figure className='relative'>
                                    <img src={topwearImg} />
                                    <span className='absolute bottom-2 left-2 text-[12px] font-medium bg-[white] bg-opacity-60'>
                                        4.3
                                        <FontAwesomeIcon icon={faStar} className='px-1 border-r' />
                                        <span className='px-1'>9.6k</span>
                                    </span>
                                </figure>
                                <figcaption className='py-2 px-2 bg-[grey] bg-opacity-5'>
                                    <h3 className='text-[15px] font-bold'>Mast & Harbour</h3>
                                    <p className='text-[14px]'>Men Slim Fit Casual Sustainab...</p>
                                    <p className='text-[13px]'>
                                        <span className='font-semibold'>Rs. 598</span>
                                        <span className='text-[11px] text-[black] text-opacity-50 line-through px-1'>Rs. 2099</span>
                                        <span className='text-[11px] text-[red] text-opacity-60'>(Rs. 1501 OFF)</span>
                                    </p>
                                </figcaption>
                            </div>
                            <div>
                                <figure className='relative'>
                                    <img src={topwearImg} />
                                    <span className='absolute bottom-2 left-2 text-[12px] font-medium bg-[white] bg-opacity-60'>
                                        4.3
                                        <FontAwesomeIcon icon={faStar} className='px-1 border-r' />
                                        <span className='px-1'>9.6k</span>
                                    </span>
                                </figure>
                                <figcaption className='py-2 px-2 bg-[grey] bg-opacity-5'>
                                    <h3 className='text-[15px] font-bold'>Mast & Harbour</h3>
                                    <p className='text-[14px]'>Men Slim Fit Casual Sustainab...</p>
                                    <p className='text-[13px]'>
                                        <span className='font-semibold'>Rs. 598</span>
                                        <span className='text-[11px] text-[black] text-opacity-50 line-through px-1'>Rs. 2099</span>
                                        <span className='text-[11px] text-[red] text-opacity-60'>(Rs. 1501 OFF)</span>
                                    </p>
                                </figcaption>
                            </div>
                            <div>
                                <figure className='relative'>
                                    <img src={topwearImg} />
                                    <span className='absolute bottom-2 left-2 text-[12px] font-medium bg-[white] bg-opacity-60'>
                                        4.3
                                        <FontAwesomeIcon icon={faStar} className='px-1 border-r' />
                                        <span className='px-1'>9.6k</span>
                                    </span>
                                </figure>
                                <figcaption className='py-2 px-2 bg-[grey] bg-opacity-5'>
                                    <h3 className='text-[15px] font-bold'>Mast & Harbour</h3>
                                    <p className='text-[14px]'>Men Slim Fit Casual Sustainab...</p>
                                    <p className='text-[13px]'>
                                        <span className='font-semibold'>Rs. 598</span>
                                        <span className='text-[11px] text-[black] text-opacity-50 line-through px-1'>Rs. 2099</span>
                                        <span className='text-[11px] text-[red] text-opacity-60'>(Rs. 1501 OFF)</span>
                                    </p>
                                </figcaption>
                            </div>
                            <div>
                                <figure className='relative'>
                                    <img src={topwearImg} />
                                    <span className='absolute bottom-2 left-2 text-[12px] font-medium bg-[white] bg-opacity-60'>
                                        4.3
                                        <FontAwesomeIcon icon={faStar} className='px-1 border-r' />
                                        <span className='px-1'>9.6k</span>
                                    </span>
                                </figure>
                                <figcaption className='py-2 px-2 bg-[grey] bg-opacity-5'>
                                    <h3 className='text-[15px] font-bold'>Mast & Harbour</h3>
                                    <p className='text-[14px]'>Men Slim Fit Casual Sustainab...</p>
                                    <p className='text-[13px]'>
                                        <span className='font-semibold'>Rs. 598</span>
                                        <span className='text-[11px] text-[black] text-opacity-50 line-through px-1'>Rs. 2099</span>
                                        <span className='text-[11px] text-[red] text-opacity-60'>(Rs. 1501 OFF)</span>
                                    </p>
                                </figcaption>
                            </div>
                            <div>
                                <figure className='relative'>
                                    <img src={topwearImg} />
                                    <span className='absolute bottom-2 left-2 text-[12px] font-medium bg-[white] bg-opacity-60'>
                                        4.3
                                        <FontAwesomeIcon icon={faStar} className='px-1 border-r' />
                                        <span className='px-1'>9.6k</span>
                                    </span>
                                </figure>
                                <figcaption className='py-2 px-2 bg-[grey] bg-opacity-5'>
                                    <h3 className='text-[15px] font-bold'>Mast & Harbour</h3>
                                    <p className='text-[14px]'>Men Slim Fit Casual Sustainab...</p>
                                    <p className='text-[13px]'>
                                        <span className='font-semibold'>Rs. 598</span>
                                        <span className='text-[11px] text-[black] text-opacity-50 line-through px-1'>Rs. 2099</span>
                                        <span className='text-[11px] text-[red] text-opacity-60'>(Rs. 1501 OFF)</span>
                                    </p>
                                </figcaption>
                            </div>
                            <div>
                                <figure className='relative'>
                                    <img src={topwearImg} />
                                    <span className='absolute bottom-2 left-2 text-[12px] font-medium bg-[white] bg-opacity-60'>
                                        4.3
                                        <FontAwesomeIcon icon={faStar} className='px-1 border-r' />
                                        <span className='px-1'>9.6k</span>
                                    </span>
                                </figure>
                                <figcaption className='py-2 px-2 bg-[grey] bg-opacity-5'>
                                    <h3 className='text-[15px] font-bold'>Mast & Harbour</h3>
                                    <p className='text-[14px]'>Men Slim Fit Casual Sustainab...</p>
                                    <p className='text-[13px]'>
                                        <span className='font-semibold'>Rs. 598</span>
                                        <span className='text-[11px] text-[black] text-opacity-50 line-through px-1'>Rs. 2099</span>
                                        <span className='text-[11px] text-[red] text-opacity-60'>(Rs. 1501 OFF)</span>
                                    </p>
                                </figcaption>
                            </div>
                            <div>
                                <figure className='relative'>
                                    <img src={topwearImg} />
                                    <span className='absolute bottom-2 left-2 text-[12px] font-medium bg-[white] bg-opacity-60'>
                                        4.3
                                        <FontAwesomeIcon icon={faStar} className='px-1 border-r' />
                                        <span className='px-1'>9.6k</span>
                                    </span>
                                </figure>
                                <figcaption className='py-2 px-2 bg-[grey] bg-opacity-5'>
                                    <h3 className='text-[15px] font-bold'>Mast & Harbour</h3>
                                    <p className='text-[14px]'>Men Slim Fit Casual Sustainab...</p>
                                    <p className='text-[13px]'>
                                        <span className='font-semibold'>Rs. 598</span>
                                        <span className='text-[11px] text-[black] text-opacity-50 line-through px-1'>Rs. 2099</span>
                                        <span className='text-[11px] text-[red] text-opacity-60'>(Rs. 1501 OFF)</span>
                                    </p>
                                </figcaption>
                            </div>
                            <div>
                                <figure className='relative'>
                                    <img src={topwearImg} />
                                    <span className='absolute bottom-2 left-2 text-[12px] font-medium bg-[white] bg-opacity-60'>
                                        4.3
                                        <FontAwesomeIcon icon={faStar} className='px-1 border-r' />
                                        <span className='px-1'>9.6k</span>
                                    </span>
                                </figure>
                                <figcaption className='py-2 px-2 bg-[grey] bg-opacity-5'>
                                    <h3 className='text-[15px] font-bold'>Mast & Harbour</h3>
                                    <p className='text-[14px]'>Men Slim Fit Casual Sustainab...</p>
                                    <p className='text-[13px]'>
                                        <span className='font-semibold'>Rs. 598</span>
                                        <span className='text-[11px] text-[black] text-opacity-50 line-through px-1'>Rs. 2099</span>
                                        <span className='text-[11px] text-[red] text-opacity-60'>(Rs. 1501 OFF)</span>
                                    </p>
                                </figcaption>
                            </div>
                            <div className='border-t pt-8 col-span-4 grid grid-cols-[30%_auto] items-center'>
                                <div className='text-[14px]'>
                                    Page 1 of 10
                                </div>
                                <div className='flex gap-10'>
                                    <ul className='flex gap-2'>
                                        <li className='bg-[black] bg-opacity-80 text-[white] border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>1</li>
                                        <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>2</li>
                                        <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>3</li>
                                        <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>4</li>
                                        <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>5</li>
                                        <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>6</li>
                                        <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>7</li>
                                        <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>8</li>
                                        <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>9</li>
                                        <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>10</li>
                                    </ul>
                                    <button className='border border-[black] border-opacity-80 px-4 font-semibold rounded'>Next <FontAwesomeIcon icon={faAngleRight} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}