import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { myntraContext } from '../../Context/MainContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faPalette, faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import adminBaseUrl from '../../common/admin/AdminBaseUrl'

export function Dashboard() {
  const { sideBar } = useContext(myntraContext)
  const [api, setApi] = useState({
    categoryData: [],
    subCategoryData: [],
    productData: [],
    colorData: [],
    userData: [],
    orderData: [],
  })
  const apiArray = ["category/view-category", "category/view-sub-category", "product/view-product", "color/view-color", "user/view-users", "order/view-orders"]
  const getResponse = async () => {
    const obj = { ...api };
    const requests = apiArray.map((item, index) =>
      axios.get(adminBaseUrl + item).then((response) => response.data.data)
    );
    const responses = await Promise.all(requests);
    responses.forEach((finalResponse, index) => {
      const items = Object.keys(api)[index];
      obj[items] = finalResponse;
    });
    setApi(obj);
  };
  useEffect(() => {
    getResponse()
  }, [])
  return (
    <div>
      <Header />
      <div className={`grid ${(sideBar) ? "grid-cols-[200px_auto]" : "grid-cols-[100px_auto]"} pt-[84px]`}>
        <Sidebar />
        <div className='w-full'>
          <Location />
          <div className='p-4'>
            <h1 className='w-max text-4xl font-bold mb-6 bgClipColor leading-[2.8rem]'>Dashboard</h1>
            <div className='w-full grid grid-cols-4 gap-x-10 gap-y-10'>
              <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                  <FontAwesomeIcon icon={faCopyright} />
                </div>
                <div className='bg-[white] rounded-md p-2 font-medium'>
                  Main Category: {api?.categoryData?.length > 0 ? api?.categoryData?.length : ""}<br />
                  Sub Category: {api?.subCategoryData?.length > 0 ? api?.subCategoryData?.length : ""}
                </div>
              </div>
              <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                  <FontAwesomeIcon icon={faProductHunt} />
                </div>
                <div className='bg-[white] rounded-md p-2 font-medium'>
                  Product: {api?.productData?.length > 0 ? api?.productData?.length : ""}
                </div>
              </div>
              <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                  <FontAwesomeIcon icon={faPalette} />
                </div>
                <div className='bg-[white] rounded-md p-2 font-medium'>
                  Colors: {api?.colorData?.length > 0 ? api?.colorData?.length : ""}
                </div>
              </div>
              <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className='bg-[white] rounded-md p-2 font-medium'>
                  Users: {api?.userData?.length > 0 ? api?.userData?.length : ""}
                </div>
              </div>
              <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto] gap-[2px]'>
                <div className='bg-[white] rounded-md p-2 text-center text-5xl'>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                <div className='bg-[white] rounded-md p-2 font-medium'>
                  Orders: {api?.orderData?.length > 0 ? api?.orderData?.length : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}