import React from 'react'
import Container from './Container'
import Product from './Product'



const BestSeller = () => {
    return (
        <div className='py-[130px]'>
            <Container className='max-w-[1640px] flex justify-between pt-5'>

                <div className='px-5'>
                    <Product offer="" OffferClassName="" diffrentSrc="src/assets/Product8.jpg" />
                </div>
                <div className='px-5'>
                    <Product diffrentSrc="src/assets/Product7.jpg" />
                </div>
                <div className='px-5'>
                    <Product diffrentSrc="src/assets/Product6.jpg" />
                </div>
                <div className='px-5'>
                    <Product diffrentSrc="src/assets/Product5.jpg" />
                </div>
            </Container>
        </div >
    )
}

export default BestSeller