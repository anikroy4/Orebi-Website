import React from 'react'
import Container from './Container'
import Image from './Image'
import { Link } from 'react-router-dom'

const TopSell = () => {
    return (
        <>
            <div className='md:pt-[140px] md:pb-32 py-5'>
                <Container className="flex justify-between gap-x-3 xl:gap-x-0 px-3 xl:px-0">
                    <div className='w-[780px]'>
                        <Link to="">
                            <Image className="w-full" src="src/assets/offersell1.jpg" />
                        </Link>
                    </div>
                    <div className='w-[776px] flex flex-col justify-between'>
                        <Link to="">
                            <Image className="w-full" src="src/assets/offersell3.jpg" />
                        </Link>
                        <Link to="">
                            <Image className="w-full" src="src/assets/offersell2.jpg" />
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default TopSell