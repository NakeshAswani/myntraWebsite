import React, { useContext, useEffect } from 'react'
import logo_image from "../../images/Myntra-icon-logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGear } from '@fortawesome/free-solid-svg-icons'
import { faBell, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { adminContext } from '../../Context/MainContext'

export default function Header() {
  let { sideBar, setSideBar } = useContext(adminContext)
  let changeData = () => setSideBar(!sideBar);
  return (
    <header className='bg-[grey] bg-opacity-10'>
      <div className=' container-fluid shadow-md '>
        <div className='flex items-center px-4 py-3'>
          <div className='flex items-center'>
            <img src={logo_image} width={60} />
            <div className=' text-[20px] font-bold px-2 '>Myntra</div>
            {/* {(sideBar) ?
              :
              ""
            } */}
          </div>
          <div>
            <FontAwesomeIcon icon={faBars} className=' ps-5 text-[20px]' onClick={changeData} />
            <FontAwesomeIcon icon={faEnvelope} className=' ps-5 text-[20px]' />
            <FontAwesomeIcon icon={faBell} className=' ps-5 text-[20px]' />
          </div>
          <div className='ms-auto flex items-center'>
            <FontAwesomeIcon icon={faGear} className=' ps-5 text-[20px]' />
            <div className='circle flex items-center justify-center rounded-[50%] mx-[20px] text-center'>
              <FontAwesomeIcon icon={faUser} className=' text-[40px] text-[white] font-thin ' />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
