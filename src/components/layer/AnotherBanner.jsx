import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import Image from './Image'

const AnotherBanner = () => {
    return (
        <>
            <Container className='max-w-[1600px] pt-8 py-7'>
                <div>
                    <Link>
                        <Image className="w-full" src="src/assets/anotherbanner.jpg" />
                    </Link>
                </div>

            </Container>

        </>
    )
}

export default AnotherBanner