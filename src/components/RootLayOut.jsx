import React from 'react'
import Navbar from './Navbar'
import Searchber from './Searchber'
import Footer from './layer/Footer'
import Fottericon from './Fottericon'

import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
    return (
        <>
            <Navbar />
            <Searchber />
            <Outlet />
            <Footer />
            <Fottericon />
        </>
    )
}

export default RootLayOut