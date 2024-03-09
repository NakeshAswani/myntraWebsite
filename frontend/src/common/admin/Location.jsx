import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Location() {
    const location = useLocation()
    const pathSegments = location.pathname.slice(1).split('/');
    return (
        <div className='w-full py-3 px-4 shadow-lg rounded-b-3xl font-bold text-[20px] '>
            {pathSegments.map((segment, index) => (
                <span key={index}>
                    {segment}
                    {index < pathSegments.length - 1 && (
                        <>
                        &nbsp;<FontAwesomeIcon icon={faArrowRight} />&nbsp;
                        </>
                    )}
                </span>
            ))}
        </div>
    )
}