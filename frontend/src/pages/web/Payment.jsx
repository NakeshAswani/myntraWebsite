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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'



export default function Payment() {
    return (
        <>



            <div className='main1 w-[100%]  ]'>

                <section className='cart_header_section'>
                    <div className='cart _header flex items-center justify-between p-[25px]'>
                        <figure className='w-[44.04px] ml-[20px]'>
                            <img src={logo} alt="" />
                        </figure>

                        <div className='bag_address_payment'>
                            <ul className='flex text-[14px]'>
                                <li className='mx-[5px] tracking-wide'>BAG</li>----------
                                <li className='mx-[5px]'>ADDRESS</li>----------
                                <li className='ml-[5px] border-b-2 border-color8 text-color8'>PAYMENT</li>
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
                                <div className='text-[12.6px] leading-[25px]'>
                                    <div className='flex items-center justify-between w-[105px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="offersV2-base-discountIcon"><g fill="#000" fill-rule="evenodd"><path d="M15.292 10.687v.001c-.198.742.076 1.454.296 2.026l.045.12-.137.021c-.602.094-1.352.211-1.892.75-.538.54-.655 1.288-.748 1.89l-.022.138a22.096 22.096 0 0 1-.12-.045c-.443-.171-.946-.364-1.49-.364-.185 0-.366.023-.536.068-.728.194-1.198.78-1.577 1.249-.032.04-.07.088-.111.137l-.112-.138c-.378-.47-.848-1.054-1.575-1.248a2.092 2.092 0 0 0-.537-.068c-.543 0-1.046.193-1.49.364l-.12.045-.022-.138c-.093-.602-.21-1.35-.749-1.89-.539-.539-1.289-.656-1.891-.75l-.137-.022a15 15 0 0 1 .045-.118c.22-.573.494-1.286.296-2.027-.194-.728-.78-1.199-1.25-1.577L1.323 9l.137-.11c.47-.38 1.055-.85 1.249-1.577.198-.742-.076-1.455-.296-2.028l-.045-.118.137-.022c.602-.094 1.352-.211 1.891-.75.54-.539.656-1.289.75-1.891l.022-.137.119.045c.443.171.947.365 1.49.365.186 0 .367-.024.537-.07.727-.193 1.198-.778 1.576-1.248L9 1.322l.111.137c.379.47.85 1.055 1.576 1.249.17.045.352.069.537.069.544 0 1.047-.194 1.491-.365l.119-.045.022.137c.094.602.21 1.353.75 1.891.538.539 1.288.656 1.89.75l.138.022-.046.119c-.22.572-.494 1.285-.295 2.026.194.728.778 1.199 1.248 1.577.04.033.088.07.137.111l-.137.11c-.47.38-1.054.85-1.249 1.577M18 9c0-.744-1.459-1.286-1.642-1.972-.19-.71.797-1.907.437-2.529-.364-.63-1.898-.372-2.41-.884-.511-.511-.253-2.045-.883-2.41a.647.647 0 0 0-.33-.08c-.585 0-1.403.542-1.998.542a.778.778 0 0 1-.201-.025C10.286 1.46 9.743 0 9 0c-.744 0-1.286 1.459-1.972 1.642a.78.78 0 0 1-.2.025c-.596 0-1.414-.542-2-.542a.647.647 0 0 0-.33.08c-.63.365-.37 1.898-.883 2.41-.512.512-2.046.254-2.41.884-.36.62.627 1.819.437 2.529C1.46 7.714 0 8.256 0 9s1.459 1.286 1.642 1.972c.19.71-.797 1.908-.437 2.53.364.63 1.898.371 2.41.883.511.512.253 2.045.884 2.41.097.056.208.08.33.08.585 0 1.403-.542 1.998-.542a.78.78 0 0 1 .201.025C7.714 16.54 8.256 18 9 18s1.286-1.46 1.973-1.642a.774.774 0 0 1 .2-.025c.595 0 1.413.542 1.998.542a.647.647 0 0 0 .33-.08c.631-.365.373-1.898.884-2.41.512-.512 2.046-.254 2.41-.884.36-.62-.627-1.819-.437-2.529C16.54 10.286 18 9.744 18 9"></path><path d="M10.897 6.34l-4.553 4.562a.536.536 0 0 0 .76.758l4.552-4.562a.536.536 0 0 0-.76-.758M6.75 7.875a1.126 1.126 0 0 0 0-2.25 1.126 1.126 0 0 0 0 2.25M11.25 10.125a1.126 1.126 0 0 0 0 2.25 1.126 1.126 0 0 0 0-2.25"></path></g></svg>
                                        <span className='font-[650] text-[14px] ml-[5px]'>Bank Offers</span>
                                    </div>
                                    <div className='leading-5 mb-[7px]'><span className='font-[900]'>1.</span> 10% Instant Discount on Kotak Credit & Debit Cards on a min spend of ₹3,000. TCA</div>
                                    <div className='leading-5 mb-[7px]'><span className='font-[900]'>2.</span> 7.5% Instant Discount on every spends with Myntra Kotak Credit Card. TCA</div>
                                    <div className='leading-5 mb-[7px]'><span className='font-[900]'>3.</span> Up to ₹1,000 Cashback on CRED UPI (Android Devices only) on a minimum spend of ₹1,000. TCA</div>
                                    <div className='leading-5 mb-[7px]'><span className='font-[900]'>4.</span> Flat ₹30 Cashback on Freecharge UPI (Android Devices only) on a minimum spend of ₹1,999. TCA</div>
                                    <div className='leading-5 mb-[7px]'><span className='font-[900]'>5.</span> Up to ₹250 Cashback on First ever Simpl Transaction on Myntra on a minimum spend of ₹1,499. TCA</div>
                                    <div className='leading-5 mb-[7px]'><span className='font-[900]'>6.</span> Get ₹150 Brand Voucher on minimum spend of ₹1,000 with Payzapp wallet</div>
                                    <div className='leading-5 mb-[7px]'><span className='font-[900]'>7.</span> Flat ₹75 Cashback on First Ever Mobikwik Wallet transaction on Myntra on a min spend of ₹999. Use Code MBKNEW on Mobikwik. TCA</div>
                                    <div className='leading-5 mb-[7px]'><span className='font-[900]'>8.</span> Get upto 15% Cashback on Mobikwik Wallet transaction on a min spend of ₹1,500. Use Code MBK15 on Mobikwik. TCA</div>

                                    <div className='show_more text-[14px] text-color3'>
                                        <span>Show Less <FontAwesomeIcon icon={faAngleUp} />     </span>
                                    </div>
                                </div>

                            </div>

                            <p className='text-[15px] font-[750] text-[#353434]'>Choose Payment Mode</p>

                            <div className=' border border-1 border-[#525352c7]   rounded-[5px] bg-color9 flex '>


                                <div className='w-[250px]'>
                                    <div className='border-l-8 border-color3 flex items-center justify-between px-[10px] pr-[70px] py-[13px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" prefix=""><path fill="none" fill-rule="nonzero" stroke="#000" d="M6.918 11.185L4.05 12.993l-.278-4.327-2.57-2.33L5.086 4.71 6.39 1.499l2.652 3.318 3.368.299-2.228 3.706.765 3.432-4.03-1.069z"></path></svg>
                                        <p className='text-color3 font-[700]'>Recommended</p>
                                    </div>

                                    <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 16" prefix=""><g fill="none" fill-rule="evenodd" transform="rotate(-6 29.622 -5.581)"><path stroke="#000" d="M19.938 1.386l1.03.072a1 1 0 0 1 .928 1.067l-.697 9.976a1 1 0 0 1-1.068.927L1.988 11.946"></path><rect width="20" height="12" stroke="#000" rx="1"></rect><path fill="#000" fill-rule="nonzero" d="M10.622 10l.744-.36-2.27-2.38c.216-.039.427-.101.633-.188.206-.086.394-.199.563-.336.17-.138.317-.3.441-.488.125-.188.214-.4.267-.637h1v-.798h-.992a1.612 1.612 0 0 0-.067-.234 2.82 2.82 0 0 0-.24-.5 1.462 1.462 0 0 0-.146-.204H12V3H8.122v.875h.559c.218 0 .414.025.588.075.174.05.325.117.454.204a1.276 1.276 0 0 1 .508.659h-2.11v.798h2.09c-.07.173-.179.32-.324.442a1.96 1.96 0 0 1-.488.298 3.005 3.005 0 0 1-1.063.23L8 7.198 10.622 10z"></path><path stroke="#000" d="M3 0c-.167.833-.5 1.5-1 2s-1.167.833-2 1M3 12c-.167-.833-.5-1.5-1-2S.833 9.167 0 9M17 0c.167.833.5 1.5 1 2s1.167.833 2 1M17 12c.167-.833.5-1.5 1-2s1.167-.833 2-1"></path></g></svg>
                                        <p className='font-[700] text-[#3f3f3f] text-[13px]'>Cash On Delivery (Cash/UPI)</p>
                                    </div>

                                    <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 16" prefix=""><g fill="none" fill-rule="evenodd" transform="rotate(-6 29.622 -5.581)"><path stroke="#000" d="M19.938 1.386l1.03.072a1 1 0 0 1 .928 1.067l-.697 9.976a1 1 0 0 1-1.068.927L1.988 11.946"></path><rect width="20" height="12" stroke="#000" rx="1"></rect><path fill="#000" fill-rule="nonzero" d="M10.622 10l.744-.36-2.27-2.38c.216-.039.427-.101.633-.188.206-.086.394-.199.563-.336.17-.138.317-.3.441-.488.125-.188.214-.4.267-.637h1v-.798h-.992a1.612 1.612 0 0 0-.067-.234 2.82 2.82 0 0 0-.24-.5 1.462 1.462 0 0 0-.146-.204H12V3H8.122v.875h.559c.218 0 .414.025.588.075.174.05.325.117.454.204a1.276 1.276 0 0 1 .508.659h-2.11v.798h2.09c-.07.173-.179.32-.324.442a1.96 1.96 0 0 1-.488.298 3.005 3.005 0 0 1-1.063.23L8 7.198 10.622 10z"></path><path stroke="#000" d="M3 0c-.167.833-.5 1.5-1 2s-1.167.833-2 1M3 12c-.167-.833-.5-1.5-1-2S.833 9.167 0 9M17 0c.167.833.5 1.5 1 2s1.167.833 2 1M17 12c.167-.833.5-1.5 1-2s1.167-.833 2-1"></path></g></svg>
                                        <p className='font-[700] text-[#3f3f3f] text-[13px]'>Cash On Delivery (Cash/UPI)</p>
                                    </div>

                                    <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 16" prefix=""><g fill="none" fill-rule="evenodd" transform="rotate(-6 29.622 -5.581)"><path stroke="#000" d="M19.938 1.386l1.03.072a1 1 0 0 1 .928 1.067l-.697 9.976a1 1 0 0 1-1.068.927L1.988 11.946"></path><rect width="20" height="12" stroke="#000" rx="1"></rect><path fill="#000" fill-rule="nonzero" d="M10.622 10l.744-.36-2.27-2.38c.216-.039.427-.101.633-.188.206-.086.394-.199.563-.336.17-.138.317-.3.441-.488.125-.188.214-.4.267-.637h1v-.798h-.992a1.612 1.612 0 0 0-.067-.234 2.82 2.82 0 0 0-.24-.5 1.462 1.462 0 0 0-.146-.204H12V3H8.122v.875h.559c.218 0 .414.025.588.075.174.05.325.117.454.204a1.276 1.276 0 0 1 .508.659h-2.11v.798h2.09c-.07.173-.179.32-.324.442a1.96 1.96 0 0 1-.488.298 3.005 3.005 0 0 1-1.063.23L8 7.198 10.622 10z"></path><path stroke="#000" d="M3 0c-.167.833-.5 1.5-1 2s-1.167.833-2 1M3 12c-.167-.833-.5-1.5-1-2S.833 9.167 0 9M17 0c.167.833.5 1.5 1 2s1.167.833 2 1M17 12c.167-.833.5-1.5 1-2s1.167-.833 2-1"></path></g></svg>
                                        <p className='font-[700] text-[#3f3f3f] text-[13px]'>Cash On Delivery (Cash/UPI)</p>
                                    </div>

                                    <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 16" prefix=""><g fill="none" fill-rule="evenodd" transform="rotate(-6 29.622 -5.581)"><path stroke="#000" d="M19.938 1.386l1.03.072a1 1 0 0 1 .928 1.067l-.697 9.976a1 1 0 0 1-1.068.927L1.988 11.946"></path><rect width="20" height="12" stroke="#000" rx="1"></rect><path fill="#000" fill-rule="nonzero" d="M10.622 10l.744-.36-2.27-2.38c.216-.039.427-.101.633-.188.206-.086.394-.199.563-.336.17-.138.317-.3.441-.488.125-.188.214-.4.267-.637h1v-.798h-.992a1.612 1.612 0 0 0-.067-.234 2.82 2.82 0 0 0-.24-.5 1.462 1.462 0 0 0-.146-.204H12V3H8.122v.875h.559c.218 0 .414.025.588.075.174.05.325.117.454.204a1.276 1.276 0 0 1 .508.659h-2.11v.798h2.09c-.07.173-.179.32-.324.442a1.96 1.96 0 0 1-.488.298 3.005 3.005 0 0 1-1.063.23L8 7.198 10.622 10z"></path><path stroke="#000" d="M3 0c-.167.833-.5 1.5-1 2s-1.167.833-2 1M3 12c-.167-.833-.5-1.5-1-2S.833 9.167 0 9M17 0c.167.833.5 1.5 1 2s1.167.833 2 1M17 12c.167-.833.5-1.5 1-2s1.167-.833 2-1"></path></g></svg>
                                        <p className='font-[700] text-[#3f3f3f] text-[13px]'>Cash On Delivery (Cash/UPI)</p>
                                    </div>

                                    <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 16" prefix=""><g fill="none" fill-rule="evenodd" transform="rotate(-6 29.622 -5.581)"><path stroke="#000" d="M19.938 1.386l1.03.072a1 1 0 0 1 .928 1.067l-.697 9.976a1 1 0 0 1-1.068.927L1.988 11.946"></path><rect width="20" height="12" stroke="#000" rx="1"></rect><path fill="#000" fill-rule="nonzero" d="M10.622 10l.744-.36-2.27-2.38c.216-.039.427-.101.633-.188.206-.086.394-.199.563-.336.17-.138.317-.3.441-.488.125-.188.214-.4.267-.637h1v-.798h-.992a1.612 1.612 0 0 0-.067-.234 2.82 2.82 0 0 0-.24-.5 1.462 1.462 0 0 0-.146-.204H12V3H8.122v.875h.559c.218 0 .414.025.588.075.174.05.325.117.454.204a1.276 1.276 0 0 1 .508.659h-2.11v.798h2.09c-.07.173-.179.32-.324.442a1.96 1.96 0 0 1-.488.298 3.005 3.005 0 0 1-1.063.23L8 7.198 10.622 10z"></path><path stroke="#000" d="M3 0c-.167.833-.5 1.5-1 2s-1.167.833-2 1M3 12c-.167-.833-.5-1.5-1-2S.833 9.167 0 9M17 0c.167.833.5 1.5 1 2s1.167.833 2 1M17 12c.167-.833.5-1.5 1-2s1.167-.833 2-1"></path></g></svg>
                                        <p className='font-[700] text-[#3f3f3f] text-[13px]'>Cash On Delivery (Cash/UPI)</p>
                                    </div>

                                    <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 16" prefix=""><g fill="none" fill-rule="evenodd" transform="rotate(-6 29.622 -5.581)"><path stroke="#000" d="M19.938 1.386l1.03.072a1 1 0 0 1 .928 1.067l-.697 9.976a1 1 0 0 1-1.068.927L1.988 11.946"></path><rect width="20" height="12" stroke="#000" rx="1"></rect><path fill="#000" fill-rule="nonzero" d="M10.622 10l.744-.36-2.27-2.38c.216-.039.427-.101.633-.188.206-.086.394-.199.563-.336.17-.138.317-.3.441-.488.125-.188.214-.4.267-.637h1v-.798h-.992a1.612 1.612 0 0 0-.067-.234 2.82 2.82 0 0 0-.24-.5 1.462 1.462 0 0 0-.146-.204H12V3H8.122v.875h.559c.218 0 .414.025.588.075.174.05.325.117.454.204a1.276 1.276 0 0 1 .508.659h-2.11v.798h2.09c-.07.173-.179.32-.324.442a1.96 1.96 0 0 1-.488.298 3.005 3.005 0 0 1-1.063.23L8 7.198 10.622 10z"></path><path stroke="#000" d="M3 0c-.167.833-.5 1.5-1 2s-1.167.833-2 1M3 12c-.167-.833-.5-1.5-1-2S.833 9.167 0 9M17 0c.167.833.5 1.5 1 2s1.167.833 2 1M17 12c.167-.833.5-1.5 1-2s1.167-.833 2-1"></path></g></svg>
                                        <p className='font-[700] text-[#3f3f3f] text-[13px]'>Cash On Delivery (Cash/UPI)</p>
                                    </div>

                                    <div className='border border-1 border-[#8080809d] flex items-center justify-between px-[10px] py-[13px] '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 16" prefix=""><g fill="none" fill-rule="evenodd" transform="rotate(-6 29.622 -5.581)"><path stroke="#000" d="M19.938 1.386l1.03.072a1 1 0 0 1 .928 1.067l-.697 9.976a1 1 0 0 1-1.068.927L1.988 11.946"></path><rect width="20" height="12" stroke="#000" rx="1"></rect><path fill="#000" fill-rule="nonzero" d="M10.622 10l.744-.36-2.27-2.38c.216-.039.427-.101.633-.188.206-.086.394-.199.563-.336.17-.138.317-.3.441-.488.125-.188.214-.4.267-.637h1v-.798h-.992a1.612 1.612 0 0 0-.067-.234 2.82 2.82 0 0 0-.24-.5 1.462 1.462 0 0 0-.146-.204H12V3H8.122v.875h.559c.218 0 .414.025.588.075.174.05.325.117.454.204a1.276 1.276 0 0 1 .508.659h-2.11v.798h2.09c-.07.173-.179.32-.324.442a1.96 1.96 0 0 1-.488.298 3.005 3.005 0 0 1-1.063.23L8 7.198 10.622 10z"></path><path stroke="#000" d="M3 0c-.167.833-.5 1.5-1 2s-1.167.833-2 1M3 12c-.167-.833-.5-1.5-1-2S.833 9.167 0 9M17 0c.167.833.5 1.5 1 2s1.167.833 2 1M17 12c.167-.833.5-1.5 1-2s1.167-.833 2-1"></path></g></svg>
                                        <p className='font-[700] text-[#3f3f3f] text-[13px]'>Cash On Delivery (Cash/UPI)</p>
                                    </div>

                                </div>
                                <div className='w-[380px]'>
                                    <div className=' flex items-center justify-between px-[10px] py-[13px] font-[750] text-[#424552]'>Recommended Payment Options</div>
                                    <div className=' flex items-center justify-between px-[10px] py-[13px] font-[750] text-[#424552]'>
                                        <div className='flex'>
                                            <input type="radio" />
                                            <p className='ml-[7px]'>Cash on Delivery (Cash/UPI)</p>
                                        </div>

                                        <div className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 16"><g fill="none" fill-rule="evenodd" transform="rotate(-6 29.622 -5.581)"><path stroke="#000" d="M19.938 1.386l1.03.072a1 1 0 0 1 .928 1.067l-.697 9.976a1 1 0 0 1-1.068.927L1.988 11.946"></path><rect width="20" height="12" stroke="#000" rx="1"></rect><path fill="#000" fill-rule="nonzero" d="M10.622 10l.744-.36-2.27-2.38c.216-.039.427-.101.633-.188.206-.086.394-.199.563-.336.17-.138.317-.3.441-.488.125-.188.214-.4.267-.637h1v-.798h-.992a1.612 1.612 0 0 0-.067-.234 2.82 2.82 0 0 0-.24-.5 1.462 1.462 0 0 0-.146-.204H12V3H8.122v.875h.559c.218 0 .414.025.588.075.174.05.325.117.454.204a1.276 1.276 0 0 1 .508.659h-2.11v.798h2.09c-.07.173-.179.32-.324.442a1.96 1.96 0 0 1-.488.298 3.005 3.005 0 0 1-1.063.23L8 7.198 10.622 10z"></path><path stroke="#000" d="M3 0c-.167.833-.5 1.5-1 2s-1.167.833-2 1M3 12c-.167-.833-.5-1.5-1-2S.833 9.167 0 9M17 0c.167.833.5 1.5 1 2s1.167.833 2 1M17 12c.167-.833.5-1.5 1-2s1.167-.833 2-1"></path></g></svg>
                                        </div>
                                    </div>
                                    <div className=' flex items-center justify-between px-[10px] py-[13px] font-[750] text-[#424552]'>
                                        <div className='flex'>
                                            <input type="radio" />
                                            <p className='ml-[7px]'>Cash on Delivery (Cash/UPI)</p>
                                        </div>

                                        <div className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 16"><g fill="none" fill-rule="evenodd" transform="rotate(-6 29.622 -5.581)"><path stroke="#000" d="M19.938 1.386l1.03.072a1 1 0 0 1 .928 1.067l-.697 9.976a1 1 0 0 1-1.068.927L1.988 11.946"></path><rect width="20" height="12" stroke="#000" rx="1"></rect><path fill="#000" fill-rule="nonzero" d="M10.622 10l.744-.36-2.27-2.38c.216-.039.427-.101.633-.188.206-.086.394-.199.563-.336.17-.138.317-.3.441-.488.125-.188.214-.4.267-.637h1v-.798h-.992a1.612 1.612 0 0 0-.067-.234 2.82 2.82 0 0 0-.24-.5 1.462 1.462 0 0 0-.146-.204H12V3H8.122v.875h.559c.218 0 .414.025.588.075.174.05.325.117.454.204a1.276 1.276 0 0 1 .508.659h-2.11v.798h2.09c-.07.173-.179.32-.324.442a1.96 1.96 0 0 1-.488.298 3.005 3.005 0 0 1-1.063.23L8 7.198 10.622 10z"></path><path stroke="#000" d="M3 0c-.167.833-.5 1.5-1 2s-1.167.833-2 1M3 12c-.167-.833-.5-1.5-1-2S.833 9.167 0 9M17 0c.167.833.5 1.5 1 2s1.167.833 2 1M17 12c.167-.833.5-1.5 1-2s1.167-.833 2-1"></path></g></svg>
                                        </div>
                                    </div>
                                    <div className=' flex items-center justify-between px-[10px] py-[13px] font-[750] text-[#424552]'>
                                        <div className='flex'>
                                            <input type="radio" />
                                            <p className='ml-[7px]'>Cash on Delivery (Cash/UPI)</p>
                                        </div>

                                        <div className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 16"><g fill="none" fill-rule="evenodd" transform="rotate(-6 29.622 -5.581)"><path stroke="#000" d="M19.938 1.386l1.03.072a1 1 0 0 1 .928 1.067l-.697 9.976a1 1 0 0 1-1.068.927L1.988 11.946"></path><rect width="20" height="12" stroke="#000" rx="1"></rect><path fill="#000" fill-rule="nonzero" d="M10.622 10l.744-.36-2.27-2.38c.216-.039.427-.101.633-.188.206-.086.394-.199.563-.336.17-.138.317-.3.441-.488.125-.188.214-.4.267-.637h1v-.798h-.992a1.612 1.612 0 0 0-.067-.234 2.82 2.82 0 0 0-.24-.5 1.462 1.462 0 0 0-.146-.204H12V3H8.122v.875h.559c.218 0 .414.025.588.075.174.05.325.117.454.204a1.276 1.276 0 0 1 .508.659h-2.11v.798h2.09c-.07.173-.179.32-.324.442a1.96 1.96 0 0 1-.488.298 3.005 3.005 0 0 1-1.063.23L8 7.198 10.622 10z"></path><path stroke="#000" d="M3 0c-.167.833-.5 1.5-1 2s-1.167.833-2 1M3 12c-.167-.833-.5-1.5-1-2S.833 9.167 0 9M17 0c.167.833.5 1.5 1 2s1.167.833 2 1M17 12c.167-.833.5-1.5 1-2s1.167-.833 2-1"></path></g></svg>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="add_address border border-1 border-[grey] flex items-center justify-between my-[10px] p-[15px]">
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" class="giftcard-base-giftIcon"><path fill-rule="evenodd" stroke="#000" stroke-width=".2" d="M18.1 7.26h-5.85V4.577h5.85v2.685zm-5.85 9.845h4.95v-8.95h-4.95v8.95zm-9.45 0h4.95v-8.95H2.8v8.95zM1.9 4.576h5.85v2.685H1.9V4.576zm4.295-2.073c-.01-.098 0-.264.193-.464.12-.089.25-.11.402-.11.653 0 1.565 1.081 2.25 1.752H6.886c-.263-.224-.656-.835-.691-1.178zm5.155 14.602h-2.7V4.576h2.7v12.53zm1.879-15.183c.152 0 .28.028.401.117.194.2.204.371.194.47-.036.358-.45.948-.693 1.172h-2.152c.685-.671 1.596-1.759 2.25-1.759zm5.323 1.76h-4.279c.218-.225.408-.71.446-1.087.031-.303-.026-.77-.475-1.213-.012-.012-.025-.03-.038-.04a1.552 1.552 0 0 0-.977-.34c-1.248 0-2.587 1.527-3.22 2.342C9.376 2.529 8.037 1 6.79 1a1.549 1.549 0 0 0-1.015.37c-.449.442-.506.922-.475 1.225.039.376.228.862.446 1.086H1.448c-.247 0-.448.15-.448.4v3.61c0 .25.2.465.448.465H1.9v9.37c0 .246.19.474.42.474h15.363c.23 0 .417-.228.417-.474v-9.37h.452A.46.46 0 0 0 19 7.692V4.08c0-.25-.2-.4-.448-.4z"></path></svg>
                                    <p className='text-[14px] ml-[5px]'>Have a Gift Card?</p>
                                </div>


                                <div className='text-[13px] text-color3 font-[750]'>APPLY GIFT CARD</div>
                            </div>

                        </div>


                        <div className='w-[35%] h-auto border border-[grey] p-[10px]'>



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
                                        <button className=' w-[calc(100%-10px)] p-[10px] font-[650] bg-[#ff446a] text-[white] '>CONTINUE</button>
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
        </>
    )
}
