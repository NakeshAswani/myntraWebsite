import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faBell, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import logo_image from "../../images/Myntra-icon-logo.svg"
import { Link } from 'react-router-dom'
import profile from "../../images/pngtree-user-vector-avatar-png-image_1541962-removebg-preview.png"

export default function Header() {
  return (
    <header className=' bg-gradient-to-r from-[#000a41] to-[#68b8d8]  h-[84px] fixed w-full z-[999]'>
      <div className=' container-fluid shadow-md '>
        <div className='flex items-center px-4 py-3'>

          <div className='flex items-center ml-[15px]'>
            <img src={logo_image} alt='' width={65} />
          </div>

          <div className='ms-auto flex items-center'>
            <Link to={"/admin/profile"}>
              <img src={profile} className='text-[35px] w-[60px] text-[white] bg-gradient-to-tr from-[#38408f] to-[#f5b810] p-[2px] rounded-full ms-3' />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
