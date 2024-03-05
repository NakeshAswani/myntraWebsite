import React, { useContext } from 'react'
import { adminContext } from '../../Contextdata/AdminContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  let { sidBar, setSitBar } = useContext(adminContext)
  return (
    <>
      <div className={(sidBar) ? 'w-[218px] shadow-md' : 'w-[137px] shadow-md'}>
        <div className=' p-[10px] w-[100%] '>
          <ul>
            <h2 className='text-center font-semibold text-[25px]'>Welcome</h2>
            <li className=''>
              <FontAwesomeIcon icon={faUser} className=' ps-5 text-[20px]' />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
