import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <>
            <footer className='w-[100%] mt-[25px] border border-1 border-[blue] pt-[30px] flex justify-evenly'>
                <div className=' w-[15%] border border-1 border-[blue] leading-7'>
                    <h5 className='font-[800] text-[13px] text-[#555454]'>CATEGORIES</h5>
                    <ul className='text-[#555454] text-[15px]'>
                        <li> <Link>Men</Link></li>
                        <li><Link>Women</Link></li>
                        <li><Link>Kids</Link></li>
                        <li><Link>Home & Living</Link></li>
                        <li><Link>Beauty</Link></li>



                    </ul>
                </div>
                <div className=' w-[15%] border border-1 border-[red]'></div>
                <div className=' w-[30%] border border-1 border-[pink]'></div>
                <div className=' w-[15%] border border-1 border-[purple]'></div>
            </footer>
        </>
    )
}
