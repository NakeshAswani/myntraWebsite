import React, { useContext } from 'react'
import { adminContext } from '../../Contextdata/AdminContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQ, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {sidbarAccordion } from './F&Q'

export default function Sidebar() {
  let { sidBar, setSitBar } = useContext(adminContext);
  let datafaq = sidbarAccordion
  return (
    <>
      <div className={(sidBar) ? 'w-[218px] shadow-md' : 'w-[137px] shadow-md'}>
        <div className=' p-[10px] w-[100%] '>
          <ul>
            <h2 className='text-center font-semibold text-[30px]'>Welcome</h2>
            <li className='mt-[20px]'>
              <Link to={'/admin/dashboard'} className=' text-[25px]  m-[0] font-semibold'>
                <FontAwesomeIcon icon={faUser} className=' ps-5 pe-[8px] text-[20px]' />
                Dashboard
              </Link>
            </li>
            <li className='mt-[10px]'>
                <FontAwesomeIcon icon={faUser} className=' ps-5 pe-[8px] text-[20px]' />
                <span className=' text-[25px]  m-[0] font-semibold'>Catagery</span>
                <ul>
                  
                </ul>
            </li>
            <li className='mt-[10px]'>
              <FontAwesomeIcon icon={faUser} className=' ps-5 text-[20px]' />
              <Link to={'/admin/dashboard'} className=' text-[25px] ps-[8px] m-[0] font-semibold'>product</Link>
            </li>
            <li className='mt-[10px]'>
              <FontAwesomeIcon icon={faUser} className=' ps-5 text-[20px]' />
              <Link to={'/admin/dashboard'} className=' text-[25px] ps-[8px] m-[0] font-semibold'>colour</Link>
            </li>
            <li className='mt-[10px]'>
              <FontAwesomeIcon icon={faUser} className=' ps-5 text-[20px]' />
              <Link to={'/admin/dashboard'} className=' text-[25px] ps-[8px] m-[0] font-semibold'>user</Link>
            </li>
            <li className='mt-[10px]'>
              <FontAwesomeIcon icon={faUser} className=' ps-5 text-[20px]' />
              <Link to={'/admin/dashboard'} className=' text-[25px] ps-[8px] m-[0] font-semibold'>order</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </>
  )
}
