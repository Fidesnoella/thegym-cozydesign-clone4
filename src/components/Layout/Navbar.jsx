import React from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/icons/Cozy_logo_canvas.svg'
import menu from '../../../public/assets/icons/menu.svg'
import Link from 'next/link';

function Navbar(props) {
    const tags = [
        {page: "Get Cozy" , link: "about" },
        { page: "What We do", link: "services" },
        { page: "Our Work", link: "work"},
        { page: "The blog", link: "blog"},
        { page: "Say Hi", link: "contact"}

    ]
    return (
        <div>
            <nav className='bg-gradient-to-r to-indigo from-navy absolute z-50 w-full'>
                <div className='hidden lg:flex px-12 py-4 justify-between items-center'>
                    <div>
                        <Link href="/"><Image src={logo} alt='logo' className='w-[7rem]'/></Link>
                    </div>
                    <div>
                        <ul className='flex font-sans gap-x-8 font-semibold text-2xl leading-6 text-primary'>
                            {
                                tags.map((tag, i) => {
                                    return <li className='navbar_link' key={i}><Link href={`/${tag.link}`}>{tag.page}</Link></li> 
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='lg:hidden flex items-center justify-center py-4 gap-x-10 text-white'>
                    <Link href="/"><Image src={logo} alt='logo' className='w-[6rem]' /></Link>
                    <Image src={menu} alt='menu' className='font-bold' />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;