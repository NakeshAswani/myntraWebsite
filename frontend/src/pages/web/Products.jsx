import React, { useEffect, useState } from 'react'
import { Header } from '../../common/web/Header'
import { Footer } from '../../common/web/Footer'
import Location from '../../common/web/Location'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import webBaseUrl from '../../common/web/WebBaseUrl'
import csscolors from "css-color-names"

export default function Products() {
  const [api, setApi] = useState({
    productImageLink: "",
    productData: [],
    subCategoryData: [],
    colorData: [],
    subCatName: "",
    subCatDesc: ""
  })
  const [colorName, setColorName] = useState("")
  const urlId = useLocation().search
  const getResponse = async () => {
    const obj = { ...api }
    if (colorName === "" && colorName === undefined && colorName === null) {
      await axios.get(webBaseUrl + `product/view-product/${urlId}`)
        .then((response) => response.data)
        .then((finalResponse) => {
          obj.productImageLink = finalResponse?.productImageLink
          obj.productData = finalResponse?.data
        })
        .catch(error => {
          console.error(error)
        })
    }
    else {
      await axios.get(webBaseUrl + `product/view-product/${urlId}&productColor=${colorName}`)
        .then((response) => response.data)
        .then((finalResponse) => {
          obj.productImageLink = finalResponse?.productImageLink
          obj.productData = finalResponse?.data
        })
        .catch(error => {
          console.error(error)
        })
    }
    await axios.get(webBaseUrl + "category/view-sub-category")
      .then((response) => response.data)
      .then((finalResponse) => {
        const name = finalResponse?.data.filter((items, index) => items?._id === urlId.replace("?subCategoryId=", ""))
        obj.subCatName = name[0].subCategoryName
        obj.subCatDesc = name[0].subCategoryDescription
        const catId = name[0].categoryId._id
        const catviseSubCat = finalResponse?.data.filter((items, index) => items?.categoryId._id === catId)
        obj.subCategoryData = catviseSubCat
      })
    await axios.get(webBaseUrl + "color/view-color")
      .then((response) => response.data)
      .then((finalResponse) => {
        obj.colorData = finalResponse?.data
      })
      .catch(error => {
        console.error(error)
      })
    setApi(obj)
  }
  useEffect(() => {
    getResponse()
  }, [urlId, colorName])
  return (
    <div className='main1'>
      <Header />
      <div className='py-10'>
        {
          (api?.subCatName !== "" && api?.subCatName !== undefined && api?.subCatName !== null)
            ?
            <Location urlIdToName={api?.subCatName} />
            :
            <Location urlIdToName={""} />
        }
        <h2 className='capitalize font-bold mt-2 p-[0px_20px_20px_20px]'>
          {api?.subCatDesc}
          <span className='font-normal lowercase'>
            - {api?.productData?.length} items
          </span>
        </h2>
        <div className='grid grid-cols-[20%_auto]'>
          <div className='p-[0px_20px_20px_20px] mt-[8px] border-b'>
            <h2 className='uppercase font-bold'>filters</h2>
          </div>
          <div className='p-5 border-b'></div>
          <div className='border-r'>
            <div className='p-5 border-b'>
              <h2 className='uppercase font-bold mb-2'>categories</h2>
              <ul className='capitalize'>
                {
                  (api?.subCategoryData?.length >= 1)
                    ?
                    api?.subCategoryData?.map((items, index) => {
                      return (
                        <li key={index}>
                          <Link to={`/products/?subCategoryId=${items?._id}`}>
                            {items?.subCategoryName}
                          </Link>
                        </li>
                      )
                    })
                    :
                    ""
                }
              </ul>
            </div>
            <div className='p-5 border-b'>
              <h2 className='uppercase font-bold mb-2'>color</h2>
              <ul className='capitalize'>
                <li>
                  <input type="radio" name='color' className='me-1' value={colorName} checked={colorName === ""} onChange={() => setColorName("")} />
                  all items
                </li>
                {
                  (api?.colorData?.length >= 1)
                    ?
                    api?.colorData?.map((items, index) => {
                      return (
                        <li key={index}>
                          <input type="radio" name='color' className='me-1' value={items?.colorName} checked={colorName === items?.colorName} onChange={() => setColorName(items?.colorName)} />
                          <input type="color" value={csscolors[items?.colorName]} className='w-[18px] h-[22px] bg-[transparent]' disabled />
                          {items?.colorName}
                        </li>
                      )
                    })
                    :
                    ""
                }
              </ul>
            </div>
          </div>
          <div className='p-6'>
            <div className='pb-10'>
              <div className='border-b mb-8 grid grid-cols-4 gap-x-16 gap-y-8'>
                {
                  (api?.productData?.length >= 1)
                    ?
                    api?.productData?.map((items, index) => {
                      return (
                        <Link to={`/product/product-description/?productId=${items?._id}`} key={index}>
                          <div>
                            <figure className='relative'>
                              <img src={api?.productImageLink + items?.productImage} alt='' />
                              <span className='absolute bottom-2 left-2 text-[12px] font-medium bg-[white] bg-opacity-60 px-1'>
                                {items?.productRating}
                                <FontAwesomeIcon icon={faStar} className='px-1 border-r text-[darkgreen]' />
                                <span className='ps-1'>{items?.ratingCount}</span>
                              </span>
                            </figure>
                            <figcaption className='py-2 px-2 bg-[grey] bg-opacity-5'>
                              <h3 className='text-[15px] font-bold capitalize'>
                                {items?.productName}
                              </h3>
                              <p className='text-[14px] capitalize'>
                                {items?.productDescription.slice(0, 29)}...
                              </p>
                              <p className='text-[13px]'>
                                <span className='font-semibold'>
                                  Rs. {items?.finalPrice}
                                </span>
                                <span className='text-[11px] text-[black] text-opacity-50 line-through px-1'>
                                  Rs. {items?.productPrice}
                                </span>
                                <span className='text-[11px] text-[red] text-opacity-60'>
                                  (~{(((items?.productPrice - items?.finalPrice) / items?.productPrice) * 100).toFixed(2)}% OFF)
                                </span>
                              </p>
                            </figcaption>
                          </div>
                        </Link>
                      )
                    })
                    :
                    ""
                }
              </div>
              {/* <div className='col-span-4 grid grid-cols-[30%_auto] items-center'>
                <div className='text-[14px]'>
                  Page 1 of 10
                </div>
                <div className='flex gap-10'>
                  <ul className='flex gap-2'>
                    <li className='bg-[black] bg-opacity-80 text-[white] border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>1</li>
                    <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>2</li>
                    <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>3</li>
                    <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>4</li>
                    <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>5</li>
                    <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>6</li>
                    <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>7</li>
                    <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>8</li>
                    <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>9</li>
                    <li className='border border-[black] border-opacity-0 py-1 px-[6px] hover:border-opacity-10'>10</li>
                  </ul>
                  <button className='border border-[black] border-opacity-80 px-4 font-semibold rounded'>Next <FontAwesomeIcon icon={faAngleRight} /></button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}