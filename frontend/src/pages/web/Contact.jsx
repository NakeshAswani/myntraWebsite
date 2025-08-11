import React from 'react'
import { Header } from '../../common/web/Header'
import { Footer } from '../../common/web/Footer'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div>
            <Header />
            <div className='py-10 max-w-7xl mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-10'>Contact Us</h1>
                <div className='grid grid-cols-[30%_auto] gap-3 items-center'>
                    <div>
                        <h2 className='text-[20px] font-bold mb-4'>Registered Office Address</h2>
                        <p className='font-medium mb-4'>
                            Buildings Alyssa,<br />
                            Begonia and Clover situated in Embassy Tech Village,<br />
                            Outer Ring Road,<br />
                            Devarabeesanahalli Village,<br />
                            Varthur Hobli,<br />
                            Bengaluru – 560103, India
                        </p>
                        <p className='font-medium mb-4'>
                            CIN: U72300KA2007PTC041799
                        </p>
                        <p className='font-medium'>
                            Telephone: <Link to={"tel:+91-80-61561999"}>+91-80-61561999</Link>
                        </p>
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4439283518336!2d77.696068474154!3d12.943420815497314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae134779c74969%3A0x726990f6a50a2a20!2sMyntra%20Office!5e0!3m2!1sen!2sin!4v1710015694198!5m2!1sen!2sin" title='Myntra Headquater Location' width="100%" height="450" style={{ border: "0px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}