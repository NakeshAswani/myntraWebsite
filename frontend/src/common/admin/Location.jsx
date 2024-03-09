import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Location() {
    const location = useLocation()
    return (
        <div className='w-full py-3 px-4 shadow-lg rounded-b-3xl font-bold text-[20px]'>
            {location.pathname.slice(1,location.pathname.length)}
        </div>
    )
}