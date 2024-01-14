import React from 'react'
import Container from './Container'
import Product from './Product'

const SpecialOffers = () => {
    return (
        <>
            <div className='py-[130px]'>
                <Container>
                    <h3 className='font-dm font-bold text-4xl ml-5 mb-[50px]'>
                        Special Offers
                    </h3>
                <Container className='max-w-[1640px] flex justify-between pt-5'>

                    <div className='px-5'>
    <Product diffrentSrc="src/assets/specialoffer1.jpg" />
                    </div>
                    <div className='px-5'>
                    <Product diffrentSrc="src/assets/specialoffer2.jpg" />
                    </div>
                    <div className='px-5'>
                     <Product diffrentSrc="src/assets/specialoffer3.jpg" />
                    </div>
                    <div className='px-5'>
                    <Product diffrentSrc="src/assets/specialoffer4.jpg" />
                    </div>
                    </Container>
                </Container>
            </div>

        </>
    )
}

export default SpecialOffers