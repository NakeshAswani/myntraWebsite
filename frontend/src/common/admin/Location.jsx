import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Location() {
    const location = useLocation()
    return (
        <div className='w-full py-3 px-4 shadow-lg  font-bold text-[28px] text-center bg-[white] font-mono'>
           Welcome To Admin Panel
        </div>
    )
}