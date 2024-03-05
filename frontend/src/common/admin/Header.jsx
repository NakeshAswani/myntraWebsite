import React, { useContext, useEffect } from 'react'
import logo_image from "../../images/Myntra-icon-logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGear, faHouse, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faBell, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { adminContext } from '../../Contextdata/AdminContext'

export default function Header() {
  let {sidBar, setSitBar} = useContext(adminContext)
  let changedata = ()=> setSitBar(!sidBar);
  
  console.log(sidBar)
  return (
    <>
      <div className=' container-fluid shadow-md '>
        <div className='flex items-center px-4 py-3'>
          <div className='flex items-end'>
            <img src={logo_image} width={70} />
            {(sidBar) ? 
            <div className=' text-[20px] font-bold px-2 '>Myntra</div>
            : 
            ""  
          }
          </div>
          <div>
            <FontAwesomeIcon icon={faBars} className=' ps-5 text-[20px]' onClick={changedata} />
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
    </>
  )
}
