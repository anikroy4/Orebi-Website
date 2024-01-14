import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Image from './layer/Image';
import Container from './layer/Container';
import { PiNumberTwoBold } from 'react-icons/pi'
import { FaCaravan } from 'react-icons/fa'
import { LuRotateCcw } from 'react-icons/lu'

const Bannar = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div style={{ margin: "0px", position: "absolute", left: "163px", top: "50%", transform: "translateY(-50%)" }}>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          height: "30px",
          paddingRight: "10px",
          color: "blue",
          borderRight: "2px white solid",
          fontSize: "0"
        }}
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1410,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          appendDots: dots => (
            <div style={{ margin: "0px", position: "absolute", left: "50%", bottom: "15px", transform: "translateX(-50%)" }}>
              <ul style={{ display: "flex" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                paddingBottom: "10px",
                color: "transparent",
                borderBottom: "2px red solid",

              }}
            >
              0{i + 1}
            </div>
          ),
        }
      }
    ]
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <Image className="w-full" src="src/assets/banner.jpg" />
          </div>
          <div>
            <Image className="w-full" src="src/assets/banner.jpg" />
          </div>
          <div>
            <Image className="w-full" src="src/assets/banner.jpg" />
          </div>
        </Slider>


        <div className='bg-white md:py-[30px] py-4 mt-[-5px] border border-[#F0F0F0]'>
          <Container className="flex md:justify-between gap-y-3 gap-3 justify-center  flex-wrap md:flex-row ">
            <div>
              <p className='flex text-xs md:text-base font-dm items-center text-[#6D6D6D]'><span className='mr-4'><PiNumberTwoBold className='text-[#262626] text-lg ' /></span>Two years warranty</p>
            </div>
            <div>
              <p className='flex flex-row-reverse sm:flex-row text-xs md:text-base font-dm items-center text-[#6D6D6D]'><span className='ml-4 sm:mr-4'><FaCaravan className='text-[#262626] text-lg ' /></span>Free shipping</p>
            </div>
            <div>
              <p className='flex text-xs md:text-base font-dm items-center text-[#6D6D6D]'><span className='mr-4'><LuRotateCcw className='text-[#262626] text-lg ' /></span>Return policy in 30 days</p>
            </div>

          </Container>
        </div>
      </div>
    </>
  )
}

export default Bannar