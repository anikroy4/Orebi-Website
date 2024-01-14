import React from 'react'
import {
  Route, Routes
} from "react-router-dom";
import RootLayOut from './components/RootLayOut';
import Home from "./components/pages/Home"
import Products from './components/pages/Products';
import About from './components/pages/About';

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<RootLayOut />}>

        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/About' element={<About />} />

      </Route>
    </Routes>
  )
}

export default App