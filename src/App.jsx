import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// css
import './App.css'

// components
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Product from "./pages/Product/Product"
import Erro404 from "./pages/Erro404/Erro404"

const App = () => {

  return (
    <>

      <BrowserRouter>

        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Erro404 />}/>

        </Routes>

        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App