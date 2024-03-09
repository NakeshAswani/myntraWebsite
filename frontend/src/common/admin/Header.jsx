import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faBell, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import logo_image from "../../images/Myntra-icon-logo.svg"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-[grey] bg-opacity-10 h-[84px]'>
      <div className=' container-fluid shadow-md '>
        <div className='flex items-center px-4 py-3'>
          <div className='flex items-center'>
            <img src={logo_image} width={60} />
            <div className='text-[20px] font-bold px-2'>Myntra</div>
          </div>
          <div className='ms-auto flex items-center'>
            <FontAwesomeIcon icon={faEnvelope} className=' ps-5 text-[20px]' />
            <FontAwesomeIcon icon={faBell} className=' ps-5 text-[20px]' />
            <FontAwesomeIcon icon={faPowerOff} className=' ps-5 text-[20px]' />
            <Link to={"/admin/profile"}>
              <FontAwesomeIcon icon={faUser} className='text-[35px] text-[white] background_admin p-3 rounded-full ms-3' />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
