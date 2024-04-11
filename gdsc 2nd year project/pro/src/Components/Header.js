import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import React from 'react'

import HomePage from '../Pages/HomePage.js'

export const Header = () => {

  //   function displayPage() {
  //     return (
  //       <BrowserRouter>
  //         <Routes>
  //           <Route path="./Contact.js" element={<Contact />} />
  //         </Routes>
  //       </BrowserRouter>
  //     )
  //   }

  const [navLangSelect, setNavLangSelect] = React.useState(["English", "Hindi", "Tamil", "Telgu"]);

  return (
    <>
      <nav className="navbar">


        {/* UPPER ONE LINER TEST I NAVBAR */}
        <nav className="uprText">
          <div></div>
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="uprNavLink" style={{ color: "white", }}>Shop Now</a></span>
          <div className="languageSelect" style={{ cursor: "pointer" }}>{navLangSelect[0]}
            <span class="material-symbols-outlined">
              arrow_drop_down
            </span></div>
        </nav>


        {/* MAIN NAVBAR */}
        <nav className='mainNav'>
          <div className='mainBar'>
            <div className='mainBarCentre'>
              <img src={'./exclusiveLogo.png'} />

              <div className='anchors'>
                <NavLink to="../Pages/HomePage" className="mainBarCentreText">Home</NavLink>
                <NavLink to="../Pages/Contact" className="mainBarCentreText">Contact</NavLink>
                <NavLink to="../Pages/AccountPage" className="mainBarCentreText">Account</NavLink>
                <NavLink to="../Pages/Product" className="mainBarCentreText">Product</NavLink>
              </div>

            </div>


            <div className='mainBarRight'>

              <div className='searchContainer'>
                <input type='text' placeholder='What are you looking for?' style={{ border: "none" }} />
                <span class="material-symbols-outlined">
                  search
                </span>
              </div>

              <div className='utilities'>
                <span class="material-symbols-outlined">
                  favorite
                </span>
                <span class="material-symbols-outlined">
                  shopping_cart
                </span>
                <span class="material-symbols-outlined" style={{ backgroundColor: "#DB9F44", borderRadius: "50%", height: "26px", width: "25px" }}>
                  person
                </span>
              </div>
            </div>
          </div>
        </nav>
      </nav>


    </>
  );
}


