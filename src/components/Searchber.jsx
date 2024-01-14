import React, { useEffect } from 'react'
import { FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { AiFillCaretDown } from 'react-icons/ai'
import Flex from '../components/layer/Flex'
import List from '../components/layer/List'
import ListItem from '../components/layer/ListItem'
import Image from '../components/layer/Image'
import SubCategory from '../components/layer/SubCategory'




const Searchber = () => {


  useEffect(() => {

    function categoryToggle() {
      let category = document.querySelector(".category")

      category.classList.toggle("show")
    }



    let categoryBtn = document.querySelector(".categoryBtn")
    categoryBtn.addEventListener("click", () => {
      categoryToggle()
    })




    // ==============================================

    function userToggle() {
      let userAccount = document.querySelector(".userAccount")

      userAccount.classList.toggle("show")
    }



    let userBtn = document.querySelector(".userBtn")
    userBtn.addEventListener("click", () => {
      userToggle()
    })

    // ====================

    // ==============================================

    function cardToggle() {
      let cardDisplay = document.querySelector(".cardDisplay")

      cardDisplay.classList.toggle("show")
    }



    let cardBtn = document.querySelector(".cardBtn")
    cardBtn.addEventListener("click", () => {
      cardToggle()
    })

    // ====================
    return (() => {
      let categoryBtn = document.querySelector(".categoryBtn")
      categoryBtn.addEventListener("click", () => {
        categoryToggle()
      })

      let userBtn = document.querySelector(".userBtn")
      userBtn.addEventListener("click", () => {
        userToggle()
      })

      let cardBtn = document.querySelector(".cardBtn")
      cardBtn.addEventListener("click", () => {
        cardToggle()
      })

    })

  })




  return (
    <div className='bg-[#F5F5F3] md:py-6 py-6 md:border border-0 border-[#979797] pt-3'>
      <div className='max-w-container mx-auto flex justify-between items-center flex-wrap md:flex-nowrap md:pb-0 pb-4  md:px-0'>
        <div className='relative z-10 md:order-1 order-2'>
          <Flex className="categoryBtn pl-3  md:pb-0 cursor-pointer items-center gap-x-[10px] ">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
              <path d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z" fill="#262626" />
              <path d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z" fill="#262626" />
            </svg>
            <p className='font-DM text-sm text-[#262626]'>Shop by Category</p>
          </Flex>

          <div className='category invisible opacity-0 w-[263px] category bg-slate-400 absolute md:top-full translate-y-4 md:translate-y-6 left-0'>
            <List className="flex-col ">
              <ListItem listLiClassName="group bg-[#262626] border-b border-[#2D2D2D]" className="relative py-4 px-5 text-[rgb(255,255,255,0.7)] w-full hover:text-[#fff] hover:ml-3" listInnerItem="Accesories">
                {/* problem */}
                <SubCategory className="transition duration-700 group-hover:opacity-100 group-hover:visible opacity-0 invisible md:absolute static group-hover:flex flex-wrap md:flex-nowrap hidden justify-between left-full top-0 bg-slate-500" />
              </ListItem>
              <ListItem listLiClassName=" bg-[#262626] border-b border-[#2D2D2D]" className="py-4 px-5 text-[rgb(255,255,255,0.7)] w-full hover:text-[#fff] hover:ml-3" listInnerItem="Furniture" />
              <ListItem listLiClassName=" bg-[#262626] border-b border-[#2D2D2D]" className="py-4 px-5 text-[rgb(255,255,255,0.7)] w-full hover:text-[#fff] hover:ml-3" listInnerItem="Electronics" />
              <ListItem listLiClassName=" bg-[#262626] border-b border-[#2D2D2D]" className="py-4 px-5 text-[rgb(255,255,255,0.7)] w-full hover:text-[#fff] hover:ml-3" listInnerItem="Clothes" />
              <ListItem listLiClassName=" bg-[#262626] border-b border-[#2D2D2D]" className="py-4 px-5 text-[rgb(255,255,255,0.7)] w-full hover:text-[#fff] hover:ml-3" listInnerItem="Bags" />
              <ListItem listLiClassName=" bg-[#262626] border-b border-[#2D2D2D]" className="py-4 px-5 text-[rgb(255,255,255,0.7)] w-full hover:text-[#fff] hover:ml-3" listInnerItem="Home appliances" />
            </List>

          </div>
        </div>
        <div className='mx-3  md:mx-0 mb-4 md:mb-0 relative w-full md:w-auto md:order-2 order-1'>
          <input className='bg-white md:w-[601px] w-full py-4 px-5 outline-0' placeholder='Search Products' type="search" />
          <FaSearch className='absolute right-5 top-1/2 translate-y-[-50%]' />
        </div>
        <Flex className='gap-x-10 md:order-3 order-3 '>
          <Flex className="relative ">
            <Flex className='userBtn gap-x-[10px]'>
              <FaUserAlt />
              <AiFillCaretDown />
            </Flex>
            <div className='userAccount z-10 opacity-0 invisible absolute translate-y-4 top-full right-0'>
              <List className="flex-col w-[200px]">
                <ListItem className="text-center border border-transparent hover:border-[#F0F0F0] py-4 text-white bg-[#2B2B2B] hover:bg-white hover:text-black" listInnerItem="My Account" />
                <ListItem className="text-center border border-transparent hover:border-[#F0F0F0] py-4 text-white bg-[#2B2B2B] hover:bg-white hover:text-black" listInnerItem="Log Out" />
              </List>
            </div>
          </Flex>
          <div className='relative'>
            <div className='pr-3  md:pr-0'>
              <FaShoppingCart className='cardBtn' />
            </div>
            <div className='cardDisplay z-10 invisible opacity-0 absolute top-full translate-y-4 right-0 md:translate-y-4 border border-[#F0F0F0]'>
              <Flex className='w-[358px] items-center justify-between p-5 bg-[#F5F5F3]'>
                <Flex className='gap-5 items-center'>
                  <div className='w-20 h-20'>
                    <Image src="src/assets/cardimage.jpg" />
                  </div>
                  <div>
                    <h4>Black Smart Watch</h4>
                    <p>$44.00</p>
                  </div>
                </Flex>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M6.89545 5L9.73835 2.1571C10.0872 1.80824 10.0872 1.24261 9.73835 0.893466L9.10653 0.261648C8.75767 -0.0872159 8.19205 -0.0872159 7.8429 0.261648L5 3.10455L2.1571 0.261648C1.80824 -0.0872159 1.24261 -0.0872159 0.893466 0.261648L0.261648 0.893466C-0.0872159 1.24233 -0.0872159 1.80795 0.261648 2.1571L3.10455 5L0.261648 7.8429C-0.0872159 8.19176 -0.0872159 8.75739 0.261648 9.10653L0.893466 9.73835C1.24233 10.0872 1.80824 10.0872 2.1571 9.73835L5 6.89545L7.8429 9.73835C8.19176 10.0872 8.75767 10.0872 9.10653 9.73835L9.73835 9.10653C10.0872 8.75767 10.0872 8.19205 9.73835 7.8429L6.89545 5Z" fill="#262626" />
                  </svg>
                </div>
              </Flex>
              <div className='w-[358px] p-5 bg-white'>
                <p>Subtotal: <span>$44.00</span></p>
                <Flex className="justify-between mt-3">
                  <a className='inline-block py-4 px-10 border border-black text-black hover:bg-black hover:text-white' href="#">View Cart</a>
                  <a className='inline-block py-4 px-10 border border-black text-black hover:bg-black hover:text-white' href="#">Checkout</a>
                </Flex>
              </div>
            </div>
          </div>
        </Flex>
      </div>
    </div>
  )
}

export default Searchber