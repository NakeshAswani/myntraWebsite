import React from 'react'
import { Header } from "../../common/web/Header"

export function MyOrders() {
  return (
    <div>
      <Header />
      <div className='w-full px-3 py-12'>
        <h1 className='font-bold text-3xl text-center mb-10'>
          <span className='text-[#f8581c] me-1'>My</span>
          <span className='text-[#ff59bd]'>Orders</span>
        </h1>
        <table className='border mx-auto' cellPadding={10}>
          <tr className='border'>
            <th className='border'>Order Id</th>
            <th className='border'>Product Name</th>
            <th className='border'>Category Name</th>
            <th className='border'>Sub-Category Name</th>
            <th className='border'>Product Price</th>
            <th className='border'>Product Color</th>
            <th className='border'>Quantity</th>
            <th className='border'>Total Amount</th>
          </tr>
          <tr className='border'>
            <th className='border'>123456789123456789</th>
            <th className='border'>T-shirt</th>
            <th className='border'>Men</th>
            <th className='border'>Topwear</th>
            <th className='border'>500 Rs</th>
            <th className='border'>Blue</th>
            <th className='border'>1</th>
            <th className='border'>500 Rs</th>
          </tr>
        </table>
      </div>
    </div>
  )
}