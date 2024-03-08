import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAnglesRight, faCopyright, faLaptop, faPalette, faShoppingCart, faSliders, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { adminContext } from '../../Context/MainContext';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {
  const { sideBar, setSideBar } = useContext(adminContext);
  return (
    <div>
      <div className={`${(sideBar) ? 'w-[210px] shadow-md' : 'w-[130px] shadow-md'} p-[10px] transition-[0.5s] bg-[black] bg-opacity-85 text-[white]`}>
        <div className='w-full'>
          <h2 className={`text-center font-semibold ${(sideBar) ? "text-[23px]" : "text-[20px]"}`}>Welcome Admin</h2>
          <ul>
            <li className='my-[10px]'>
              <Link to={'/admin/dashboard'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`}>
                <FontAwesomeIcon icon={faLaptop} className='w-full' />
                {(sideBar) ? "Dashboard" : ""}
              </Link>
            </li>
            <li className='my-[10px]'>
              <Link to={'/admin/dashboard'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`}>
                <FontAwesomeIcon icon={faSliders} className='w-full' />
                {(sideBar) ? "Slider" : ""}
              </Link>
              <ul className='mt-[10] ps-2'>
                <li>
                  <Link to={"/admin/slider/add-slider"} className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    Add Slider
                  </Link>
                </li>
                <li>
                  <Link to={"/admin/slider/view-slider"} className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    View Slider
                  </Link>
                </li>
              </ul>
            </li>
            <li className='my-[10px]'>
              <Link to={'/admin/dashboard'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`}>
                <FontAwesomeIcon icon={faCopyright} className='w-full' />
                {(sideBar) ? "Category" : ""}
              </Link>
              <ul className='mt-[10] ps-2'>
                <li>
                  <div className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    Main Category
                  </div>
                  <ul className='mt-[10] ps-2 text-[16px] font-semibold'>
                    <li>
                      <Link to={"/admin/category/add-category"} className={`grid grid-cols-[30px_auto] gap-1 items-center`}>
                        <FontAwesomeIcon icon={faAnglesRight} className='w-full' />
                        Add Category
                      </Link>
                    </li>
                    <li>
                      <Link to={"/admin/category/view-category"} className={`grid grid-cols-[30px_auto] gap-1 items-center`}>
                        <FontAwesomeIcon icon={faAnglesRight} className='w-full' />
                        View Category
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    Sub-Category
                  </div>
                  <ul className='mt-[10] ps-2 text-[16px] font-semibold'>
                    <li>
                      <Link to={"/admin/category/add-sub-category"} className={`grid grid-cols-[30px_auto] gap-1 items-center`}>
                        <FontAwesomeIcon icon={faAnglesRight} className='w-full' />
                        Add Sub-Category
                      </Link>
                    </li>
                    <li>
                      <Link to={"/admin/category/view-sub-category"} className={`grid grid-cols-[30px_auto] gap-1 items-center`}>
                        <FontAwesomeIcon icon={faAnglesRight} className='w-full' />
                        View Sub-Category
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='my-[10px]'>
              <Link to={'/admin/dashboard'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`}>
                <FontAwesomeIcon icon={faProductHunt} className='w-full' />
                {(sideBar) ? "Product" : ""}
              </Link>
              <ul className='mt-[10] ps-2'>
                <li>
                  <Link to={"/admin/product/add-product"} className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link to={"/admin/product/view-product"} className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    View Product
                  </Link>
                </li>
              </ul>
            </li>
            <li className='my-[10px]'>
              <Link to={'/admin/dashboard'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`}>
                <FontAwesomeIcon icon={faPalette} className='w-full' />
                {(sideBar) ? "Colour" : ""}
              </Link>
              <ul className='mt-[10] ps-2'>
                <li>
                  <Link to={"/admin/color/add-color"} className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    Add Color
                  </Link>
                </li>
                <li>
                  <Link to={"/admin/color/view-color"} className={`grid grid-cols-[30px_auto] gap-1 items-center font-semibold`}>
                    <FontAwesomeIcon icon={faAngleRight} className='w-full' />
                    View Color
                  </Link>
                </li>
              </ul>
            </li>
            <li className='my-[10px]'>
              <Link to={'/admin/users'} className={`font-semibold grid ${(sideBar) ? "grid-cols-[30px_auto] text-[18px] text-left" : "text-[30px] text-center"} gap-1 items-center`}>
                <FontAwesomeIcon icon={faUsers} className='w-full' />
                {(sideBar) ? "Users" : ""}
              </Link>
            </li>
            <li className='my-[10px]'>
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
