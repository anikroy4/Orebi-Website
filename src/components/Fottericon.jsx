import React from 'react'
import Container from './layer/Container'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Fottericon = () => {
    return (
        <>
            <div className='pb-[130px] bg-[#F5F5F3]'>
                <Container className="flex justify-between">
                    <div className=' icon flex gap-4 ml-10'>
                        <FaFacebookF className='left-20' />
                        <FaLinkedinIn />
                        <FaInstagram />

                    </div>
                    <div>
                        <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Fottericon