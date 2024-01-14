import React from 'react'
import Container from './Container'
import Product from './Product'

const SpecialOffers = () => {
    return (
        <>
            <div className='py-[130px]'>
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
            </div>

        </>
    )
}

export default SpecialOffers