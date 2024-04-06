import React, { useContext, useEffect, useState } from 'react'
import logo from "../../images/Myntra-icon-logo.svg"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import webBaseUrl from './WebBaseUrl'
import { myntraContext } from '../../Context/MainContext'

export function Header() {
  const [api, setApi] = useState({
    cartData: []
  })
  let categoryName = []
  const { userDetails } = useContext(myntraContext)
  const getResponse = async () => {
    const obj = { ...api }
    await axios.get(webBaseUrl + `category/view-category`)
      .then((response) => response.data)
      .then((finalResponse) => {
        finalResponse?.data.filter((item, index) => (!categoryName.includes(item.categoryName)) ? categoryName.push(item.categoryName) : "")
      })
      .catch(error => {
        console.error(error);
      })
    await axios.get(webBaseUrl + `category/view-sub-category`)
      .then((response) => response.data)
      .then((finalResponse) => {
        for (const catName of categoryName) {
          const subcategories = finalResponse?.data.filter((item, index) => item.categoryId.categoryName === catName)
          obj[catName] = subcategories
        }
      })
      .catch(error => {
        console.error(error);
      })
    setApi(obj)
    if (userDetails) {
      await axios.get(webBaseUrl + `cart/view-cart/${userDetails?._id}`)
        .then((response) => response.data)
        .then((finalResponse) => {
          obj.cartData = finalResponse?.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
  useEffect(() => {
    getResponse()
  }, [userDetails])
  const logout = () => {
    localStorage.clear("userData")
    window.location.reload()
  }
  return (
    <>
      <header className='w-[100%] flex justify-between items-center bg-[white] shadow-md'>
        {/* logo_section */}
        <Link to={"/"}>
          <div className='logo_section p-[20.77px]'>
            <img src={logo} alt="" className='w-[53px]' />
          </div>
        </Link>

        {/* menubar categories_section */}
        <div className='categories_name flex items-center justify-between h-[80px] bg-[white] '>
          {
            Object.keys(api)?.map((item, index) => {
              if (item !== "cartData") {
                return (
                  <div className='categories_inner h-[100%] mr-[25px] flex items-center px-[5px] text-[16px] font-[550] capitalize relative z-[999] border-b-[3px] border-[#f46172] border-opacity-0' key={index}>
                    <Link to={"/"}>
                      {item}
                    </Link>
                    <div className='dropdown absolute w-[auto] top-[105%] bg-[white] left-0  p-[20px] flex z-[-99] '>
                      <div className='w-max'>
                        <ul className='font-[100] leading-[27px] grid grid-cols-2 gap-x-5'>
                          {
                            api[item]?.map((innerItem, innerIndex) => {
                              return (
                                <li key={innerIndex}>
                                  <Link to={`/products/?subCategoryId=${innerItem._id}`} className='font-medium text-[14px] capitalize text-color3 mb-[5px] hover:font-bold'>
                                    {innerItem.subCategoryName}
                                  </Link>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </div >
                )
              }
            })
          }
        </div >

        {/* menubar_section */}
        <div className='menubar text-[25px] text-[#494848] absolute left-[100px]'>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* search section */}
        <div className='search w-[300px] flex items-center p-[5px] pl-[8px] mr-[10px] rounded-[5px] outline outline-[0.5px] outline-[#8080804d]'>
          <div className='search_icon'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className='search_input w-[90%]'>
            <input type="text" className=' w-[100%] h-[30px] outline-none ml-[10px] text-[15px]' placeholder="Search For Products, brands and more" />
          </div>
        </div>

        {/*  profile_and_cart_section */}
        <div className='profile_and_cart_section flex justify-between items-center w-[90px] mr-[30px]'>
          <div className='search_icon_section text-center'>
            <div className='search_icon2 text-[20px]'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className='search_heading text-[14px] mt-[-7px] font-[600]'>Search</div>
          </div>
          {/* profile_section */}
          <div className='profile_section text-center relative z-[99]'>
            <div className='profile_icon text-[20px]'>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className='profile_heading text-[14px] mt-[-7px] font-[600] cursor-pointer'>Profile</div>
            <div className=' w-[320px] bg-[white] p-[20px] absolute top-[140%] left-[-500%] shadow-md headerProfileBox'>
              <p className='font-[700] text-start text-[13px]'>
                {
                  (userDetails)
                    ?
                    "Hello " + userDetails?.fullName
                    :
                    "Hello User"
                }
              </p>
              {
                (userDetails)
                  ?
                  <p className='text-[14px] text-start'>{userDetails?.Phone}</p>
                  :
                  <>
                    <p className='text-[14px] text-start'>To access account and manage orders</p>
                    <div className='flex items-start login_btn'>
                      <Link to={"/login"}>
                        <button className='text-color3 font-[750] text-[15px] p-[5px] px-[10px] mt-[10px] border border-1 border-[#8080808a]'>LOGIN / SIGNUP</button>
                      </Link>
                    </div>
                  </>
              }
              <div className='w-[100%] my-[10px] free_border'></div>
              <ul className='text-start text-[#5a5959] text-[15px]'>
                <li>
                  <Link to={"/my-orders"}>Orders</Link>
                </li>
                <li>
                  <Link to={"/about-us"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/contact-us"}>Contact Us</Link>
                </li>
                {
                  (userDetails)
                    ?
                    <>
                      <li>
                        <Link to={"/profile"}>Profile</Link>
                      </li>
                      <li>
                        <button onClick={logout}>Logout</button>
                      </li>
                    </>
                    :
                    ""
                }
              </ul>
            </div>
          </div>
          {/* cart_section */}
          <div className='cart_section text-center relative'>
            <Link to={"/cart"}>
              <div className='cart_icon text-[20px]'>
                <FontAwesomeIcon icon={faCartPlus} />
              </div>
              <div className='cart_heading text-[14px] mt-[-7px] font-[600]'>Cart</div>
              {
                (api?.cartData?.length >= 1)
                  ?
                  <div className='w-[15px] h-[15px] bg-color1 text-[white] text-[12px] rounded-[50%] flex justify-center items-center absolute top-[-5px] right-[-5px]'>
                    {api?.cartData?.length}
                  </div>
                  :
                  ""
              }
            </Link>
          </div>
        </div>
      </header >
    </>
  )
}