import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'
import React from 'react'

import { HomePage } from './Pages/HomePage.js'
import { Product } from './Pages/Product.js'
import { Header } from './Components/Header.js'
import { Footer } from './Components/Footer.js'

import { AccountPage } from './Pages/AccountPage.js'
import Card from './Components/Card'
import Category from './Components/Category.js'
import CircleCard from './Components/CircleCard.js'
import CardSec1 from './Components/CardSec1.js'

function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Pages/HomePage" element={<HomePage />} />
          <Route path="/Pages/AccountPage" element={<AccountPage />} />
          <Route path="/Pages/Product" element={<Product />} />
          
          
        </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
