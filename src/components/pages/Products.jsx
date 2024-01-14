import React from 'react'
import Container from '../layer/Container'

import Bredcumd from '../Bredcumd';
import { FaThLarge } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import Filter from '../layer/Filter';

import { FaPlus } from "react-icons/fa";
import Product from '../layer/Product';


const Products = () => {
    return (
        <>
            <div>
                <Container>
                    <Bredcumd />

                    <div className='flex justify-between'>
                        <div className="left w-[370px] ">
                            <h3 className='text-[#262626] font-sans mb-5 font-bold text-[20px]'>Shop by Category</h3>
                            <ul>
                                <Filter CategoryName="Category 1" plus={<FaPlus />} />
                                <Filter CategoryName="Category 2" />
                                <Filter CategoryName="Category 3" plus={<FaPlus />} />
                                <Filter CategoryName="Category 4" />
                                <Filter CategoryName="Category 5" plus={<FaPlus />} />
                            </ul>
                            <h3 className='text-[#262626] font-sans mb-5 font-bold text-[20px]'>Shop by Color</h3>
                            <ul>
                                <Filter className="pl-5 relative after:content-[''] after:w-3 after:h-3 after:bg-[#000000] after:absolute after:left-0 after:top-1/2  after:translate-y-[-50%] after:rounded-full" CategoryName="Color 1" />
                                <Filter className="pl-5 relative after:content-[''] after:w-3 after:h-3 after:bg-[#FF8686] after:absolute after:left-0 after:top-1/2  after:translate-y-[-50%] after:rounded-full" CategoryName="Color 2" />
                                <Filter className="pl-5 relative after:content-[''] after:w-3 after:h-3 after:bg-[#7ED321] after:absolute after:left-0 after:top-1/2  after:translate-y-[-50%] after:rounded-full" CategoryName="Color 3" />
                                <Filter className="pl-5 relative after:content-[''] after:w-3 after:h-3 after:bg-[#B6B6B6] after:absolute after:left-0 after:top-1/2  after:translate-y-[-50%] after:rounded-full" CategoryName="Color 4" />
                                <Filter className="pl-5 relative after:content-[''] after:w-3 after:h-3 after:bg-[#15CBA5] after:absolute after:left-0 after:top-1/2  after:translate-y-[-50%] after:rounded-full" CategoryName="Color 5" />
                            </ul>
                            <h3 className='text-[#262626] font-sans mb-5 font-bold text-[20px]'>Shop by Brand</h3>
                            <ul>
                                <Filter CategoryName="Brand 1" />
                                <Filter CategoryName="Brand 2" />
                                <Filter CategoryName="Brand 3" />
                                <Filter CategoryName="Brand 4" />
                                <Filter CategoryName="Brand 5" />
                            </ul>
                            <h3 className='text-[#262626] font-sans mb-5 font-bold text-[20px]'>Shop by Price</h3>
                            <ul>
                                <Filter CategoryName="$0.00 - $9.99" />
                                <Filter CategoryName="$10.00 - $19.99" />
                                <Filter CategoryName="$20.00 - $29.99" />
                                <Filter CategoryName="$30.00 - $39.99" />
                                <Filter CategoryName="$40.00 - $69.99" />
                            </ul>

                        </div>
                        <div className="right w-[1190px]  ">
                            <div className='flex justify-between'>
                                <div className='flex text-xl gap-5'>
                                    <div className='w-9 h-9 bg-black flex justify-center items-center hover:bg-transparent hover:text-white border border-transparent hover:border-[#F0F0F0]'><FaThLarge className='w-[13px] h-[14px] text-base text-white ' />
                                    </div>
                                    <div className='w-9 h-9 bg-black flex justify-center items-center  hover:bg-transparent hover:text-white border border-transparent hover:border-[#F0F0F0]'><FaBars className='w-[13px] h-[14px] text-base text-white  ' />
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <p className='mr-4'>Sort by:</p>
                                    <select className='mr-10'>
                                        <option value="Featured">Featured</option>
                                    </select>
                                    <p className='mr-4'>Show</p>
                                    <select className='mr-10'>
                                        <option value="36">36</option>
                                    </select>
                                </div>
                            </div>
                            <div className="product flex flex-wrap gap-x-[40px] gap-y-[50px] my-[50px]">
                                <Product offer="New" OffferClassName="py-1 px-3" diffrentSrc="src/assets/ptp.jpg" />
                                <Product offer="-10%" OffferClassName="py-1 px-3" diffrentSrc="src/assets/Image2.jpg" />
                                <Product offer="" OffferClassName="" diffrentSrc="src/assets/Image3.jpg" />
                                <Product offer="" OffferClassName="" diffrentSrc="src/assets/Image4.jpg" />
                                <Product offer="New" OffferClassName="py-1 px-3" diffrentSrc="src/assets/Image5.jpg" />
                                <Product offer="" OffferClassName="" diffrentSrc="src/assets/Image6.jpg" />
                                <Product offer="-10%" OffferClassName="py-1 px-3" diffrentSrc="src/assets/Image7.jpg" />
                                <Product offer="-10%" OffferClassName="py-1 px-3" diffrentSrc="src/assets/Image8.jpg" />
                                <Product offer="-15%" OffferClassName="py-1 px-3" diffrentSrc="src/assets/Image9.jpg" />
                                <Product offer="" OffferClassName="" diffrentSrc="src/assets/Image10.jpg" />
                                <Product offer="" OffferClassName="" diffrentSrc="src/assets/Image11.jpg" />
                                <Product offer="" OffferClassName="" diffrentSrc="src/assets/Image12.jpg" />
                            </div>


                        </div>
                    </div>

                </Container>
            </div>
        </>
    )
}

export default Products