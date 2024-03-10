import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Location() {
    const location = useLocation()
    return (
        <div className='px-5'>
            {"Home"+location.pathname}
        </div>
    )
}