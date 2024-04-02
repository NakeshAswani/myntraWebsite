import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAnglesRight, faCopyright, faLaptop, faPalette, faShoppingCart, faSliders, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { myntraContext } from '../../Context/MainContext';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {
  let { sideBar, setSideBar } = useContext(myntraContext)
  let changeData = () => setSideBar(!sideBar);
  const [open, setOpen] = useState({
    slider: false,
    category: false,
    product: false,
    color: false
  })
  const [innerOpen, setInnerOpen] = useState({
    mainCategory: false,
    subCategory: false,
  })
  const mainOpen = (fieldName) => {
    setOpen((prevOpen) => ({
      slider: false,
      category: false,
      product: false,
      colors: false,
      [fieldName]: !prevOpen[fieldName]
    }));
  };
  const openInside = (fieldName) => {
    setInnerOpen((prevOpen) => ({
      mainCategory: false,
      subCategory: false,
      [fieldName]: !prevOpen[fieldName]
    }));
  };
  return (
    <div>
      <div className={`${(sideBar) ? 'w-[200px] shadow-md' : 'w-[100px] shadow-md'} fixed h-[calc(100vh - 84px)] p-[10px] transition-[0.8s] bg-[black] bg-opacity-85 text-[white] h-full sideBarOpenClose`}>
        <div className='absolute top-[281px] text-[black] text-[18px] transition-[0.5s] cursor-pointer' onClick={()=>{
          changeData()
          mainOpen()
          openInside()
        }}>
          <FontAwesomeIcon icon={(sideBar)?faAngleLeft:faAngleRight} />
        </div>
        <div className='w-full'>
          <h2 className={`text-center font-semibold ${(sideBar) ? "text-[23px]" : "text-[20px]"}`}>Welcome Admin</h2>
          <ul>
            <li className='my-[15px]'>
              <Link to={'/admin/dashboard'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`}>
                <FontAwesomeIcon icon={faLaptop} className='w-full' />
                {(sideBar) ? "Dashboard" : ""}
              </Link>
            </li>
            <li className='my-[15px]'>
              <Link to={'#'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`} onClick={() => mainOpen("slider")}>
                <FontAwesomeIcon icon={faSliders} className='w-full' />
                {(sideBar) ? "Slider" : ""}
              </Link>
              <ul>
                <li className={`${(open.slider) ? "mt-[10px] ps-2 h-auto text-[auto] scale-y-100" : "mt-[0px] ps-0 h-0 text-[0] scale-y-0"} origin-top`} style={{ transition: "0.5s" }}>
                  <Link to={"/admin/slider/add-slider"} className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    Add Slider
                  </Link>
                </li>
                <li className={`${(open.slider) ? "mt-[10px] ps-2 h-auto text-[auto] scale-y-100" : "mt-[0px] ps-0 h-0 text-[0] scale-y-0"} origin-top`} style={{ transition: "0.5s" }}>
                  <Link to={"/admin/slider/view-slider"} className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    View Slider
                  </Link>
                </li>
              </ul>
            </li>
            <li className='my-[15px]'>
              <Link to={'#'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`} onClick={() => {
                mainOpen("category")
                openInside()
                }}>
                <FontAwesomeIcon icon={faCopyright} className='w-full' />
                {(sideBar) ? "Category" : ""}
              </Link>
              <ul>
                <li className={`${(open.category) ? "mt-[10px] ps-2 h-auto text-[auto] scale-y-100" : "mt-[0px] ps-0 h-0 text-[0] scale-y-0"} origin-top`} style={{ transition: "0.5s" }}>
                  <div className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold cursor-pointer`} onClick={() => openInside("mainCategory")}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    Main Category
                  </div>
                  <ul>
                    <li className={`${(open.category && innerOpen.mainCategory) ? "mt-[10px] ps-2 h-auto text-[16px] font-semibold scale-y-100" : "mt-[0px] ps-0 h-0 text-[0] font-normal scale-y-0"} origin-top`} style={{ transition: "0.5s" }}>
                      <Link to={"/admin/category/add-category"} className={`grid grid-cols-[30px_auto] gap-1 items-center`}>
                        <FontAwesomeIcon icon={faAnglesRight} className='w-full' />
                        Add Category
                      </Link>
                    </li>
                    <li className={`${(open.category && innerOpen.mainCategory) ? "mt-[10px] ps-2 h-auto text-[16px] font-semibold scale-y-100" : "mt-[0px] ps-0 h-0 text-[0] font-normal scale-y-0"} origin-top`} style={{ transition: "0.5s" }}>
                      <Link to={"/admin/category/view-category"} className={`grid grid-cols-[30px_auto] gap-1 items-center`}>
                        <FontAwesomeIcon icon={faAnglesRight} className='w-full' />
                        View Category
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`${(open.category) ? "mt-[10px] ps-2 h-auto text-[auto] scale-y-100" : "mt-[0px] ps-0 h-0 text-[0] scale-y-0"} origin-top`} style={{ transition: "0.5s" }}>
                  <div className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold cursor-pointer`} onClick={() => openInside("subCategory")}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    Sub-Category
                  </div>
                  <ul>
                    <li className={`${(open.category && innerOpen.subCategory) ? "mt-[10px] ps-2 h-auto text-[16px] font-semibold scale-y-100" : "mt-[0px] ps-0 h-0 text-[0] font-normal scale-y-0"} origin-top`} style={{ transition: "0.5s" }}>
                      <Link to={"/admin/category/add-sub-category"} className={`grid grid-cols-[30px_auto] gap-1 items-center`}>
                        <FontAwesomeIcon icon={faAnglesRight} className='w-full' />
                        Add Sub-Category
                      </Link>
                    </li>
                    <li className={`${(open.category && innerOpen.subCategory) ? "mt-[10px] ps-2 h-auto text-[16px] font-semibold scale-y-100" : "mt-[0px] ps-0 h-0 text-[0] font-normal scale-y-0"} origin-top`} style={{ transition: "0.5s" }}>
                      <Link to={"/admin/category/view-sub-category"} className={`grid grid-cols-[30px_auto] gap-1 items-center`}>
                        <FontAwesomeIcon icon={faAnglesRight} className='w-full' />
                        View Sub-Category
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='my-[15px]'>
              <Link to={'#'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`} onClick={() => mainOpen("product")}>
                <FontAwesomeIcon icon={faProductHunt} className='w-full' />
                {(sideBar) ? "Product" : ""}
              </Link>
              <ul>
                <li className={`${(open.product) ? "mt-[10px] ps-2 h-auto text-[auto] scale-y-100" : "mt-[0px] ps-0 h-0 text-[0] scale-y-0"} origin-top`} style={{ transition: "0.5s" }}>
                  <Link to={"/admin/product/add-product"} className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    Add Product
                  </Link>
                </li>
                <li className={`${(open.product) ? "mt-[10px] ps-2 h-auto text-[auto] scale-y-100" : "mt-[0px] ps-0 h-0 text-[0] scale-y-0"} origin-top`} style={{ transition: "0.5s" }}>
                  <Link to={"/admin/product/view-product"} className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    View Product
                  </Link>
                </li>
              </ul>
            </li>
            <li className='my-[15px]'>
              <Link to={'#'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`} onClick={() => mainOpen("color")}>
                <FontAwesomeIcon icon={faPalette} className='w-full' />
                {(sideBar) ? "Colour" : ""}
              </Link>
              <ul>
                <li className={`${(open.color) ? "mt-[10px] ps-2 h-auto text-[auto] scale-y-100" : "mt-[0px] ps-0 h-0 text-[0] scale-y-0"} origin-top`} style={{ transition: "0.5s" }}>
                  <Link to={"/admin/color/add-color"} className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    Add Color
                  </Link>
                </li>
                <li className={`${(open.color) ? "mt-[10px] ps-2 h-auto text-[auto] scale-y-100" : "mt-[0px] ps-0 h-0 text-[0] scale-y-0"} origin-top`} style={{ transition: "0.5s" }}>
                  <Link to={"/admin/color/view-color"} className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    View Color
                  </Link>
                </li>
              </ul>
            </li>
            <li className='my-[15px]'>
              <Link to={'/admin/users'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`}>
                <FontAwesomeIcon icon={faUsers} className='w-full' />
                {(sideBar) ? "Users" : ""}
              </Link>
            </li>
            <li className='my-[15px]'>
              <Link to={'/admin/orders'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`}>
                <FontAwesomeIcon icon={faShoppingCart} className='w-full' />
                {(sideBar) ? "Order" : ""}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
