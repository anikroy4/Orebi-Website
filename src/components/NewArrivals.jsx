import React from 'react'
import Container from './layer/Container'
import Product from './layer/Product'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';






function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" h-16 w-16 bg-slate-50 flex justify-center items-center absolute right-5 rounded-full top-1/2 translate-y-[-50%] z-10 "

      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" h-16 w-16 bg-slate-50 flex justify-center items-center absolute left-5 rounded-full top-1/2 translate-y-[-50%] z-10 "

      onClick={onClick}
    >

      <FaArrowLeft />
    </div>
  );
}

const NewArrivals = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <div>
        <Container className="max-w-[1640px]"> 
        <h2 className='font-dm font-bold text-4xl ml-5 mb-[50px]'>
          New Arrivals
        </h2>
          <Slider {...settings}>
            <div className='px-5'>
              <Product diffrentSrc="src/assets/Product1.jpg" />
            </div>
            <div className='px-5'>
              <Product diffrentSrc="src/assets/Product2.jpg" />
            </div>
            <div className='px-5'>
              <Product diffrentSrc="src/assets/Product3.jpg" />
            </div>
            <div className='px-5'>
              <Product diffrentSrc="src/assets/Product4.jpg" />
            </div>
            <div className='px-5'>
              <Product diffrentSrc="src/assets/Product2.jpg" />
            </div>
          </Slider>
        </Container>
      </div>

    </>
  )
}

export default NewArrivals