import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/icons/Cozy_logo_denim.svg'
import emoji from '../../../public/assets/icons/emoji.webp'
import twitter from '../../../public/assets/icons/twitter.svg'
import linkedin from '../../../public/assets/icons/linkedin.svg'
import facebook from '../../../public/assets/icons/facebook.svg'
import instagram from '../../../public/assets/icons/instagram.svg'
import youtube from '../../../public/assets/icons/youtube.svg'
import clutch from '../../../public/assets/icons/clutch.svg'
import envelope from '../../../public/assets/icons/envelope.svg'
import heart from '../../../public/assets/icons/heart-icon.svg'
import horizantal from '../../../public/assets/icons/Horizontal-Seal.svg'
import shield from '../../../public/assets/icons/shield-logo-member.png'
import reviews from '../../../public/assets/icons/reviews.png'

function Footer(props) {
    const links = [ "About", "Services", "Work", "Blog", "Contact"]
    return (
        <>
            <footer className='bg-primary text-Stone'>
                 <div className='mx-auto container w-full py-24 px-6 md:px-20 lg:px-28'>
                    <div>
                        <div className='flex flex-col justify-between lg:flex-row gap-10 md:gap-20 lg:gap-40'>
                            <div className='flex flex-col items-center md:flex-row gap-10'>
                            <Image src={logo} className="w-[6rem]"/>
                                <ul className='footer_link'>
                                {
                                    links.map((link, index) =>{
                                        return <li key={index}><Link href="/">{link}</Link></li>
                                    })
                                }
                                </ul>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-20 items-center'>
                                <div className='flex text-sm text-red font-normal gap-3'>
                                    <Image src={emoji} className="w-5 h-5" alt='designer' />
                                    <h3>San Diego Digital Designers</h3>   
                                </div>
                                <div className='flex  gap-3 items-center'>
                                    <div className='bg-skyBlue rounded-md w-8 h-8 flex items-center justify-center hover:opacity-50'><Image src={twitter} alt='twitter'/></div>
                                    <div className='bg-darkBlue rounded-md w-8 h-8 flex items-center justify-center hover:opacity-50'><Image src={linkedin} alt='linkedin' /></div>
                                    <div className='bg-teal rounded-md w-8 h-8 flex items-center justify-center hover:opacity-50'><Image src={facebook} alt='facebook' /></div>
                                    <div className='bg-lightRed rounded-md w-8 h-8 flex items-center justify-center hover:opacity-50'><Image src={instagram} alt='instagram' /></div>
                                    <div className='bg-darkRed rounded-md w-8 h-8 flex items-center justify-center hover:opacity-50'><Image src={youtube} alt='youtube' /></div>
                                    <div className='bg-lighteal rounded-md w-8 h-8 flex items-center justify-center hover:opacity-50'><Image src={clutch} alt='clutch' className='w-4'/></div>
                                    <div className='bg-darkteal rounded-md w-8 h-8 flex items-center justify-center hover:opacity-50'><Image src={envelope} alt='envelope' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-Stone py-8 border-b-2'></div>
                    <div className='flex flex-col lg:flex-row justify-between items-center mt-20 gap-y-10 lg:gap-y-0'>
                        <div className='flex flex-col lg:flex-row gap-10'>
                            <span>
                                <Image src={horizantal} className="w-[10rem]"/>
                                <p className='text-navy text-center'>BBB rating: A+</p>
                            </span>
                            <Image src={shield} className="w-[10rem]" />
                            <Image src={reviews} className="w-[10rem] h-[4rem]"/>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-16'>
                            <h2 className='flex flex-row text-sm items-center  gap-2 text-navy'>Made with <span><Image src={heart} alt='love'/></span> in beautiful, sunny San Diego. ©2021</h2>
                            <ul className='footer_link privacy'>
                            <li><Link href="#">Privacy</Link></li>
                            <li><Link href="#">Photo Credit</Link></li>
                            </ul>
                        </div>
                    </div>
                 </div>
            </footer>
        </>
    );
}

export default Footer;