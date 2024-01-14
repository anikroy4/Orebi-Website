// import React, { useEffect } from 'react'
import List from '../components/layer/List'
import ListItem from '../components/layer/ListItem'
import Image from '../components/layer/Image'

import { FaBars } from 'react-icons/fa'
import { useEffect } from 'react'

const Navbar = () => {
  useEffect(() => {

    function navToggle() {
      let navList = document.querySelector(".navList")
      navList.classList.toggle("show")
    }

    let navBtn = document.querySelector(".navBtn")
    navBtn.addEventListener("click", () => {
      navToggle()
    })

    return (() => {
      let navBtn = document.querySelector(".navBtn")
      navBtn.addEventListener("click", () => {
        navToggle()
      })
    })


  }, [])


  return (
    <>
      <nav className='bg-white'>
        <div className='relative flex mx-auto h-20 max-w-container items-center justify-between px-3 md:px-0'>

          <Image href="/" src="../src/assets/Logo.png" />


          <List className="navList mx-auto gap-x-10 md:visible invisible md:opacity-100 absolute left-0 top-full z-10 md:static flex-col md:flex-row bg-slate-400 md:bg-transparent w-full md:w-auto p-5 md:p-0">
            <ListItem className=" text-[#767676] hover:text-[#262626]" active='text-active'href='/' listInnerItem="Home" />
            <ListItem className=" text-[#767676] hover:text-[#262626]" href="/products" listInnerItem="Shop"/>
            <ListItem className=" text-[#767676] hover:text-[#262626]" listInnerItem="About" />
            <ListItem className=" text-[#767676] hover:text-[#262626]" listInnerItem="Contacts" />
            <ListItem className=" text-[#767676] hover:text-[#262626]" listInnerItem="Journal" />
          </List>

          <div>
            <FaBars className='navBtn md:hidden block' />
          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar