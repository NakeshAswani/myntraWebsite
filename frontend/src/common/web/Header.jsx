import React from 'react'
import logo from "../../images/Myntra-icon-logo.svg"
import { Link } from 'react-router-dom'
export function Header() {
  return (
    <>
      <header className='w-[100%] border border-1 border-[blue] flex justify-between items-center  bg-[white] '>
        <div className='logo_section p-[20.77px]'>
          <img src={logo} alt="" className='w-[53px]' />
        </div>

        <div className='categories_name flex items-center justify-between h-[80px]'>

          {/* <------------------------------------------------------------------------------------------------------------------------------------> */}

          {/* mens */}
          <Link className=' categories_inner1 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550] relative'>MEN
            {/* mens dropdown */}
            <div className='mens_dropdown absolute w-[auto] top-[105%] bg-[white] left-0  p-[20px] flex '>
              {/*dropdown section 1*/}
              <div className='dropdown_section1 w-[170px]'>
                {/*topwear list*/}
                <div className='top_wear_list '>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color3 mb-[5px]'>Topwear</li>
                    {/* topwear subcategory */}
                    <li className='text-[14px] font-[400]'>T-Shirts</li>
                    <li className='text-[14px] font-[400]'>Casual Shirts</li>
                    <li className='text-[14px] font-[400]'>Formal Shirts</li>
                    <li className='text-[14px] font-[400]'>Sweatshirts</li>
                    <li className='text-[14px] font-[400]'>Sweaters</li>
                    <li className='text-[14px] font-[400]'>Jackets</li>
                    <li className='text-[14px] font-[400]'>Blazers</li>
                    <li className='text-[14px] font-[400]'>Suits</li>
                    <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'>Rain Jackets</li>

                  </ul>
                </div>
                {/* india festive  */}
                <div className='india_festive_list'>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color3 mt-[5px]'>Indian &amp; Festive Wear</li>
                    {/* indian festive wear subcategory */}
                    <li className='text-[14px] font-[400]'>Kurtas &amp; Kurta Sets</li>
                    <li className='text-[14px] font-[400]'>Sherwanis</li>
                    <li className='text-[14px] font-[400]'>Nehru Jackets</li>
                    <li className='text-[14px] font-[400]'>Dhotis</li>
                  </ul>
                </div>
              </div>



              {/* dropdown section 2  */}
              <div className='dropdown_section2 ml-[50px] w-[170px]'>
                {/* bottomwear*/}
                <div className='bottom_wear_list'>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color3 mb-[5px]'>Bottomwear</li>
                    {/* bottomwear subcategory */}
                    <li className='text-[14px] font-[400]'>Jeans</li>
                    <li className='text-[14px] font-[400]'>Casual Trousers</li>
                    <li className='text-[14px] font-[400]'>Formal Trousers</li>
                    <li className='text-[14px] font-[400]'>Shorts</li>
                    <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'>Track Pants &amp; Joggers</li>
                  </ul>
                </div>

                {/* innerwear_sleepwear */}
                <div className="innerwear_sleepwear_list">
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color3 mb-[5px]'>Innerwear &amp; Sleepwear</li>
                    {/* innerwear sleeper subcategory */}
                    <li className='text-[14px] font-[400]'>Briefs &amp; Trunks</li>
                    <li className='text-[14px] font-[400]'>Boxers</li>
                    <li className='text-[14px] font-[400]'>Vests</li>
                    <li className='text-[14px] font-[400]'>Sleepwear &amp; Loungewear</li>
                    <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'>Thermals</li>
                  </ul>
                </div>


                {/* plus_size */}
                <div className="plus_size_list">
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color3 mb-[5px]'>Plus Size</li>
                    {/* subcategory */}
                  </ul>
                </div>
              </div>
            </div>
          </Link >

          {/* <-------------------------------------------------------------------------------------------------------------------------------------> */}

          {/* womens */}
          < Link className=' categories_inner2 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550] relative' > WOMEN
            {/* womens_dropdown */}
            <div div className='womens_dropdown absolute w-[auto] bg-[white] top-[105%] left-0  p-[20px] flex' >
              {/* womens_dropdown_1 */}
              <div className='womens_dropdown_1 w-[170px]'>

                {/* indian_fusion list section */}
                <div className='indian_fusion_list'>

                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color4 mb-[5px]'>Indian &amp; Fusion Wear</li>
                    {/* subcategory */}
                    <li className='text-[14px] font-[400]'>Kurtas &amp; Suits</li>
                    <li className='text-[14px] font-[400]'>Kurtis, Tunics &amp; Tops</li>
                    <li className='text-[14px] font-[400]'>Sarees</li>
                    <li className='text-[14px] font-[400]'>Ethnic Wear</li>
                    <li className='text-[14px] font-[400]'>Leggings, Salwars &amp; Churidars</li>
                    <li className='text-[14px] font-[400]'>Skirts &amp; Palazzos</li>
                    <li className='text-[14px] font-[400]'>Dress Materials</li>
                    <li className='text-[14px] font-[400]'>Lehenga Cholis</li>
                    <li className='text-[14px] font-[400]'>Dupattas &amp; Shawls</li>
                    <li className='text-[14px] font-[400]'>Jackets</li>
                    <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'></li>



                  </ul>
                </div>


                {/* rain jackets list section */}
                <div className='rain_jackets'>
                  <ul className=' font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color4 mt-[5px]'>Rain Jackets</li>
                    {/* subcategory */}
                  </ul>
                </div>



                {/* Watches_Wearables list section */}
                <div className='Watches_Wearables'>
                  <ul className=' font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color4 mt-[5px]'>Watches &amp; Wearables</li>
                    {/* subcategory */}
                  </ul>
                </div>

              </div>


              {/* womens_dropdown_2 */}
              <div className='womens_dropdown_2 w-[170px]  ml-[50px]'>
                <div className='Western_wear_list'>
                  <ul className=' font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color4 mt-[5px]'>Western Wear</li>
                    {/* subcategory */}
                    <li className='text-[14px] font-[400]'>Dresses</li>
                    <li className='text-[14px] font-[400]'>Tops</li>
                    <li className='text-[14px] font-[400]'>Tshirts</li>
                    <li className='text-[14px] font-[400]'>Jeans</li>
                    <li className='text-[14px] font-[400]'>Trousers &amp; Capris</li>
                    <li className='text-[14px] font-[400]'>Shorts &amp; Skirts</li>
                    <li className='text-[14px] font-[400]'>Co-ords</li>
                    <li className='text-[14px] font-[400]'>Playsuits</li>
                    <li className='text-[14px] font-[400]'>Jumpsuits</li>
                    <li className='text-[14px] font-[400]'>Shrugs</li>
                    <li className='text-[14px] font-[400]'>Sweaters &amp; Sweatshirts</li>
                    <li className='text-[14px] font-[400]'>Jackets &amp; Coats</li>
                    <li className='text-[14px] font-[400]'>Blazers &amp; Waistcoats</li>
                    <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'></li>

                  </ul>
                </div>


                {/* women_plus_size_list */}
                <div className="women_plus_size_list">
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color4 mb-[5px]'>Plus Size</li>
                    {/* subcategory */}
                  </ul>
                </div>
              </div>
            </div >
          </Link >
          {/* <-------------------------------------------------------------------------------------------------------------------------------------> */}


          {/*kids*/}
          <Link className=' categories_inner3 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550] relative z-[99]'>KIDS
            {/* kids dropdown */}
            <div className='kids_dropdown absolute z-[-999] w-[auto] top-[105%] bg-[white] left-0  p-[20px] flex '>
              {/* kids dropdown section 1*/}
              <div className='kids_dropdown_section1 w-[170px]'>
                {/* boys clothing list*/}
                <div className='boys_clothing_list '>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color5 mb-[5px]'>Boys Clothing</li>
                    {/* topwear subcategory */}
                    <li className='text-[14px] font-[400]'>T-Shirts</li>
                    <li className='text-[14px] font-[400]'>Shirts</li>
                    <li className='text-[14px] font-[400]'>Shorts</li>
                    <li className='text-[14px] font-[400]'>Jeans</li>
                    <li className='text-[14px] font-[400]'>Trousers</li>
                    <li className='text-[14px] font-[400]'>Clothing Sets</li>
                    <li className='text-[14px] font-[400]'>Ethnic Wear</li>
                    <li className='text-[14px] font-[400]'>Track Pants &amp; Pyjamas</li>
                    <li className='text-[14px] font-[400]'>Jacket, Sweater &amp; Sweatshirts</li>
                    <li className='text-[14px] font-[400]'>Party Wear</li>
                    <li className='text-[14px] font-[400]'>Innerwear &amp; Thermals</li>
                    <li className='text-[14px] font-[400]'>Nightwear &amp; Loungewear</li>
                    <li className='text-[14px] font-[400]'>Value Packs</li>

                  </ul>
                </div>

              </div>



              {/*kids dropdown section 2  */}
              <div className='Kids_dropdown_section2 ml-[50px] w-[170px]'>
                {/* girls_clothing*/}
                <div className='girls_clothing_list'>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color5 mb-[5px]'>Girls Clothing</li>
                    {/*  subcategory */}
                    <li className='text-[14px] font-[400]'>Dresses</li>
                    <li className='text-[14px] font-[400]'>Tops</li>
                    <li className='text-[14px] font-[400]'>Tshirts</li>
                    <li className='text-[14px] font-[400]'>Clothing Sets</li>
                    <li className='text-[14px] font-[400]'>Lehenga choli</li>
                    <li className='text-[14px] font-[400]'>Kurta Sets</li>
                    <li className='text-[14px] font-[400]'>Party wear</li>
                    <li className='text-[14px] font-[400]'>Dungarees &amp; Jumpsuits</li>
                    <li className='text-[14px] font-[400]'>Skirts &amp; shorts</li>
                    <li className='text-[14px] font-[400]'>Tights &amp; Leggings</li>
                    <li className='text-[14px] font-[400]'>Jeans, Trousers &amp; Capris</li>
                    <li className='text-[14px] font-[400]'>Jacket, Sweater &amp; Sweatshirts</li>
                    <li className='text-[14px] font-[400]'>Innerwear &amp; Thermals</li>
                    <li className='text-[14px] font-[400]'>Nightwear &amp; Loungewear</li>
                    <li className='text-[14px] font-[400]'>Value Packs</li>
                  </ul>
                </div>


              </div>
            </div>
          </Link>


          {/* <-------------------------------------------------------------------------------------------------------------------------------------->*/}
          {/* HOME & LIVING */}
          <Link className=' categories_inner4 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550] relative z-[99]'>HOME & LIVING
            <div className='home_living_dropdown absolute w-[auto] top-[105%] bg-[white] left-0  p-[20px] flex '>
              {/* kids dropdown section 1*/}
              <div className='home_living_dropdown1 w-[170px]'>
                {/*bed linen list*/}
                <div className='bed_linen_list '>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color6 mb-[5px]'>Bed Linen &amp; Furnishing</li>
                    {/* bed lilen subcategory */}
                    <li className='text-[14px] font-[400]'>Bed Runners</li>
                    <li className='text-[14px] font-[400]'>Mattress Protectors</li>
                    <li className='text-[14px] font-[400]'>Bedsheets</li>
                    <li className='text-[14px] font-[400]'>Bedding Sets</li>
                    <li className='text-[14px] font-[400]'>Blankets, Quilts &amp; Dohars</li>
                    <li className='text-[14px] font-[400]'>Pillows &amp; Pillow Covers</li>
                    <li className='text-[14px] font-[400]'>Bed Covers</li>
                    <li className='text-[14px] font-[400]'>Diwan Sets</li>
                    <li className='text-[14px] font-[400]'>Chair Pads &amp; Covers</li>
                    <li className='text-[14px] font-[400]'>Sofa Covers</li>
                    <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'></li>
                  </ul>
                </div>

                {/*flooring list*/}
                <div className='flooring_list'>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color6 mb-[5px]'>Flooring</li>
                    {/* subcategory */}
                    <li className='text-[14px] font-[400]'>Floor Runners</li>
                    <li className='text-[14px] font-[400]'>Carpets</li>
                    <li className='text-[14px] font-[400]'>Floor Mats &amp; Dhurries</li>
                    <li className='text-[14px] font-[400]'>Door Mats</li>
                  </ul>
                </div>


              </div>





              {/* section 2  */}
              <div className='home_living_dropdown2 ml-[50px] w-[170px]'>
                {/* girls_clothing*/}
                <div className='bath_list'>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color6 mb-[5px]'>Bath</li>
                    {/*  subcategory */}
                    <li className='text-[14px] font-[400]'>Bath Towels</li>
                    <li className='text-[14px] font-[400]'>Hand &amp; Face Towels</li>
                    <li className='text-[14px] font-[400]'>Beach Towels</li>
                    <li className='text-[14px] font-[400]'>Towels Set</li>
                    <li className='text-[14px] font-[400]'>Bath Rugs</li>
                    <li className='text-[14px] font-[400]'>Bath Robes</li>
                    <li className='text-[14px] font-[400]'>Bathroom Accessories</li>
                    <li className='text-[14px] font-[400]'>Shower Curtains</li>
                    <li className='text-[14px] font-[400]'>Lamps &amp; Lighting</li>
                    <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'></li>

                  </ul>
                </div>
                <div className='floor_lamps'>
                  <ul>
                    <li className='font-[700] text-[14px] text-color6 mb-[5px]'>Floor Lamps</li>
                    <li className='text-[14px] font-[400]'>Ceiling Lamps</li>
                    <li className='text-[14px] font-[400]'>Table Lamps</li>
                    <li className='text-[14px] font-[400]'>Wall Lamps</li>
                    <li className='text-[14px] font-[400]'>Outdoor Lamps</li>
                    <li className='text-[14px] font-[400]'>String Lights</li>
                  </ul>
                </div>

              </div>
            </div>
          </Link>


          {/* <-------------------------------------------------------------------------------------------------------------------------------------->*/}
          <Link className=' categories_inner5 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550]'>BEAUTY</Link>
        </div >

        yghtfhth
      </header >
    </>
  )
}





