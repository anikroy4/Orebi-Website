import React from 'react'
import Image from './Image'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { LuRotate3D } from 'react-icons/lu'
import Container from './Container'



const Product = ({ diffrentSrc, className, offer, OffferClassName }) => {
  return (
    <>
      <div className={` ${className}`}>

        <Container className="md:flex flex gap-x-5">

          {/* this is image tag */}
          <div>
            <div className='relative group'>
              <div>
                <Image className="" src={diffrentSrc} />
              </div>
              <p className={`absolute top-4 left-4 bg-[#262626] text-white ${OffferClassName}`}>{offer}</p>
              <div className=" bg-white absolute bottom-0 left-0 w-full h-0 py-[30px] cursor-pointer opacity-0 invisible group-hover:opacity-100  group-hover:visible group-hover:h-[156px]">
                <div className='flex flex-col h-full justify-between text-xs pr-3'>
                  <div className='flex items-center  gap-x-4 justify-end'>
                    <p className=''>Add to Wish List</p>
                    <BsFillHeartFill className='' />
                  </div>
                  <div className='flex items-center gap-x-4 justify-end'>
                    <p className=''>Compare</p>
                    <LuRotate3D className='text-[#262626] text-lg ' />
                  </div>
                  <div className='flex items-center gap-x-4 justify-end'>
                    <p className=''>Add to Cart </p>
                    <FaShoppingCart className='text-[#262626] text-lg ' />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex justify-between '>
              <h3 className='font-dm text-[19px] font-bold	text-4xl'>Basic Crew Neck Tee</h3>
              <p>$44.00</p>
            </div>
            <div>
              <p className='items-start left-0'>Black</p>
            </div>

          </div>


        </Container>
      </div >




    </>
  )
}

export default Product