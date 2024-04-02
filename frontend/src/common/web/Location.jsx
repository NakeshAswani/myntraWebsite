import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Location({ urlIdToName }) {
    const location = useLocation()
    return (
        <div className='px-5 capitalize'>
            {"Home" + location.pathname + urlIdToName}
        </div>
    )
}