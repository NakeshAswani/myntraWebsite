import React from 'react'
import logo from "../../images/Myntra-icon-logo.svg"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
export function Header() {
  return (
    <>
      <header className='w-[100%] flex justify-between items-center bg-[white] shadow-md'>
        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/* logo_section */}
        <Link to={"/"}>
          <div className='logo_section p-[20.77px]'>
            <img src={logo} alt="" className='w-[53px]' />
          </div>
        </Link>

        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/* menubar categories_section */}

        <div className='categories_name flex items-center justify-between h-[80px] bg-[white] '>

          {/* <------------------------------------------------------------------------------------------------------------------------------------> */}

          {/* mens */}
          <Link className=' categories_inner1 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550] relative z-[999]'>MEN
            {/* mens dropdown */}
            <div className='mens_dropdown absolute w-[auto] top-[105%] bg-[white] left-0  p-[20px] flex z-[-99] '>
              {/*dropdown section 1*/}
              <div className='dropdown_section1 w-[170px]'>
                {/*topwear list*/}
                <div className='top_wear_list '>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color3 mb-[5px]'><Link to={"/products"}>Topwear</Link></li>
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
          < Link className=' categories_inner2 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550] relative z-[999]' > WOMEN
            {/* womens_dropdown */}
            <div div className='womens_dropdown absolute w-[auto] bg-[white] top-[105%] left-0  p-[20px] z-[-99] flex' >
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
          <Link className=' categories_inner3 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550] relative z-[999]'>KIDS
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
          <Link className=' categories_inner4 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550] relative z-[999]'>HOME & LIVING
            <div className='home_living_dropdown absolute w-[auto] top-[105%] bg-[white] left-0  p-[20px] flex z-[-999] '>
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
                  <ul className='font-[100] leading-[27px]'>
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
          <Link className=' categories_inner5 h-[100%] mr-[25px] flex items-center px-[5px] text-[15px] font-[550] z-[9999] relative'>BEAUTY
            <div className=' beauty_dropdown absolute w-[auto] top-[105%] bg-[white] left-0 abc  p-[20px] flex z-[-999]'>
              {/* makeup clothing list*/}
              <div className='w-[170px] beauty_dropdown1'>
                <div className='makeup_list '>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color5 mb-[5px]'>Makeup</li>
                    {/* makeup subcategory */}
                    <li className='text-[14px] font-[400]'>Lipstick</li>
                    <li className='text-[14px] font-[400]'>Lip Gloss</li>
                    <li className='text-[14px] font-[400]'>Lip Liner</li>
                    <li className='text-[14px] font-[400]'>Mascara</li>
                    <li className='text-[14px] font-[400]'>Eyeliner</li>
                    <li className='text-[14px] font-[400]'>Kajal</li>
                    <li className='text-[14px] font-[400]'>Eyeshadow</li>
                    <li className='text-[14px] font-[400]'>Foundation</li>
                    <li className='text-[14px] font-[400]'>Primer</li>
                    <li className='text-[14px] font-[400]'>Concealer</li>
                    <li className='text-[14px] font-[400]'>Compact</li>
                    <li className='text-[14px] font-[400]'>Nail Polish</li>
                  </ul>
                </div>
              </div>



              <div className='w-[170px] beauty_dropdown2'>
                <div className='makeup_list '>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color5 mb-[5px]'></li>
                    {/* makeup subcategory */}
                    <li className='text-[14px] font-[400]'></li>
                    <li className='text-[14px] font-[400]'></li>
                    <li className='text-[14px] font-[400]'></li>
                    <li className='text-[14px] font-[400]'></li>
                    <li className='text-[14px] font-[400]'></li>
                    <li className='text-[14px] font-[400]'></li>
                    <li className='text-[14px] font-[400]'></li>
                    <li className='text-[14px] font-[400]'></li>
                    <li className='text-[14px] font-[400]'></li>
                    <li className='text-[14px] font-[400]'></li>
                    <li className='text-[14px] font-[400]'></li>
                    <li className='text-[14px] font-[400]'></li>
                  </ul>
                </div>

                <div className='skincare_list'>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color5 mb-[5px]'>Skincare, Bath &amp; Body</li>
                    {/* makeup subcategory */}
                    <li className='text-[14px] font-[400]'>Face Moisturiser</li>
                    <li className='text-[14px] font-[400]'>Cleanser</li>
                    <li className='text-[14px] font-[400]'>Masks &amp; Peel</li>
                    <li className='text-[14px] font-[400]'>Sunscreen</li>
                    <li className='text-[14px] font-[400]'>Serum</li>
                    <li className='text-[14px] font-[400]'>Face Wash</li>
                    <li className='text-[14px] font-[400]'>Eye Cream</li>
                    <li className='text-[14px] font-[400]'>Lip Balm</li>
                    <li className='text-[14px] font-[400]'>Body Lotion</li>
                    <li className='text-[14px] font-[400]'>Body Wash</li>
                    <li className='text-[14px] font-[400]'>Body Scrub</li>
                    <li className='text-[14px] font-[400]'>Hand Cream</li>
                    <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'></li>
                  </ul>
                </div>

                <div className='baby_care_list'>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color5 mb-[5px]'>Baby Care</li>
                    {/* baby subcategory */}
                    <li className='text-[14px] font-[400] border-b-[1px] border-[#eaeaec] pb-[7px]'></li>
                  </ul>
                </div>


                <div className='baby_care_list'>
                  <ul className='font-[100] leading-[27px]'>
                    {/* category */}
                    <li className='font-[700] text-[14px] text-color5 mb-[5px]'>Masks</li>
                    {/* masks subcategory */}
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div >

        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/* menubar_section */}
        <div className='menubar text-[25px] text-[#494848] absolute left-[100px]'>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/* search section */}


        <div className='search w-[300px] flex items-center p-[5px] pl-[8px] mr-[10px] rounded-[5px] outline outline-[0.5px] outline-[#8080804d]'>
          <div className='search_icon'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className='search_input w-[90%]'>
            <input type="text" className=' w-[100%] h-[30px] outline-none ml-[10px] text-[15px]' placeholder="Search For Products, brands and more" />
          </div>
        </div>

        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
        {/*  profile_and_cart_section */}

        <div className='profile_and_cart_section flex justify-between items-center w-[90px] mr-[30px]'>

          <div className='search_icon_section text-center'>
            <div className='search_icon2 text-[20px]'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className='search_heading text-[14px] mt-[-7px] font-[600]'>Search</div>
          </div>

          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          {/* profile_section */}

          <div className='profile_section text-center relative'>
            <div className='profile_icon text-[20px]'>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className='profile_heading text-[14px] mt-[-7px] font-[600]'>Profile</div>


            <div className=' w-[320px] bg-[white] p-[20px] absolute top-[140%] left-[-500%] shadow-md headerProfileBox'>
              <p className='font-[700] text-start text-[13px]'>Welcome</p>
              <p className='text-[14px] text-start'>To access account and manage orders</p>

              <div className='flex items-start login_btn'>
                <Link to={"/register"}>
                  <button className='text-color3 font-[750] text-[15px] p-[5px] px-[10px] mt-[10px] border border-1 border-[#8080808a]'>LOGIN / SIGNUP</button>
                </Link>
              </div>

              <div className='w-[100%] my-[15px] free_border'></div>

              <ul className='text-start text-[#5a5959] text-[15px]'>
                <Link to={"/my-orders"}><li>Orders</li></Link>
                <Link to={"/about-us"}><li>About Us</li></Link>
                <Link to={"/contact-us"}><li>Contact Us</li></Link>
              </ul>
            </div>
          </div>

          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          {/* cart_section */}

          <div className='cart_section text-center'>
            <Link to={"/cart"}>
              <div className='cart_icon text-[20px]'>
                <FontAwesomeIcon icon={faCartPlus} />
              </div>
              <div className='cart_heading text-[14px] mt-[-7px] font-[600]'>Cart</div>
            </Link>
          </div>
        </div>


      </header >
    </>
  )
}