import React from 'react'
import Container from './Container'
import List from './List'
import ListItem from './ListItem'
import { Link } from 'react-router-dom'
import Image from './Image'

const Footer = () => {
    return (
        <>
            <div className=" bg-[#F5F5F3]" >
                <Container className=" flex ">

                    <div className="left w-1/2 py-10  flex gap-[100px]  ">

                        <List className="flex-col  p-10 ">
                            <h2 className='font-dm text-xl leading-6 font-bold text-[#262626]'> MENU</h2>
                            <ListItem className=" teaxt-[#6D6D6D] text-4xl" active='text-active' listInnerItem="Home" />
                            <ListItem className="" listInnerItem="Shop" />
                            <ListItem className="" listInnerItem="About" />
                            <ListItem className="" listInnerItem="Contacts" />
                            <ListItem className="" listInnerItem="Journal" />
                        </List>

                        <List className="flex-col p-10">
                            <h2 className='font-dm text-xl leading-6 font-bold text-[#262626]'> SHOP</h2>
                            <ListItem className="" active='text-active' listInnerItem="Home" />
                            <ListItem className="" listInnerItem="Shop" />
                            <ListItem className="" listInnerItem="About" />
                            <ListItem className="" listInnerItem="Contacts" />
                            <ListItem className="" listInnerItem="Journal" />
                        </List>
                        <List className="flex-col p-10">
                            <h2 className='font-dm text-xl leading-6 font-bold text-[#262626] '> HELP</h2>
                            <ListItem className="" active='text-active' listInnerItem="Home" />
                            <ListItem className="" listInnerItem="Shop" />
                            <ListItem className="" listInnerItem="About" />
                            <ListItem className="" listInnerItem="Contacts" />
                            <ListItem className="" listInnerItem="Journal" />
                        </List>


                    </div>
                    <div className="right w-1/2 py-10 flex justify-between">
                        <div className="contact p-10">
                            <div className='font-dm '>
                                (052) 611-5711 <br />
                                company@domain.com
                                <p>575 Crescent Ave. Quakertown, PA 18951</p>
                            </div>
                        </div>
                        <Link to="">
                            <Image className="flex p-10" src="src/assets/Logo.png" />
                        </Link>
                    </div>

                </Container>


            </div>


        </>
    )
}

export default Footer