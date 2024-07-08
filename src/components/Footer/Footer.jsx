import React from 'react'
import './Footer.css'
import video2 from '../../Assets/video-2.mp4';
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { FaTripadvisor } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import { AiOutlineTwitter, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

function Footer() {
    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted typeof='video/mp4'></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel With Us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder='Enter Email Address' />
                        <button className='btn flex' type='submit'>
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className='footerCard flex'>
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="/" className='logo flex'><MdOutlineTravelExplore className='icon' /> Travel.</a>
                        </div>

                        <div className="footerParagraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde facere, fuga itaque libero reiciendis ratione earum repellat maxime qui possimus tenetur est ipsam perspiciatis nam aliquid, omnis dolores labore quos!
                        </div>
                        <div className="footerSocials flex">
                            <AiOutlineTwitter className='icon' />
                            <AiFillYoutube className='icon' />
                            <AiFillInstagram className='icon' />
                            <FaTripadvisor className='icon' />
                        </div>

                        <div className="grid footerLinks">
                            <div className="linkGroup">
                                <span className="groupTitle">OUR AGENCY</span>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    Services
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    Insurance
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    Agency
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    Tourism
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    Payment
                                </li>
                            </div>
                            <div className="linkGroup">
                                <span className="groupTitle">PARINERS</span>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    Bookings
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    Rentcars
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    HostelWorld
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    Trivago
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    Trip Advisor
                                </li>
                            </div>
                            <div className="linkGroup">
                                <span className="groupTitle">LAST MINUTE</span>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    London
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    California
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    Indonsia
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    Europo
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className="icon" />
                                    Oceanis
                                </li>
                            </div>
                        </div>
                        <div className="footerDiv flex">
                            <small>BEST TRAVEL WEBSITE THEME</small>
                            <small>COPYRIGHT RESERVED - OMAR AFIFI</small>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    )
}

export default Footer;