import React from 'react';
import Image from 'next/image';
import lockup from '../../../public/assets/icons/lockup_reverse.svg'


function Designer(props) {
    return (
        <div>
            <div className='mx-auto relative'>
                <div className='flex flex-col md:flex-row items-center justify-center py-24 gap-x-20'>
                    <Image src={lockup} className="w-[7rem]"/>
                    <div className='text-white w-80 md:w-[500px] items-center md:items-start flex flex-col gap-y-5 font-sans'>
                        <h3 className='font-bold text-5xl'>Psst...<br/>
                        are you a designer?
                        </h3>
                        <p>Consider joining our <span className='text-red font-bold hover:underline cursor-pointer'>San Diego Design Designers</span>  group. More than 700 people, we meet online via Slack and in person at social events around the city.
                             It’s a great opportunity to share ideas, get inspired, find support, and celebrate great design.</p>
                    </div>
                </div>
                <video src='/assets/images/designer-video.mp4' muted loop autoPlay controls="" className='w-full absolute h-full object-cover -z-10 top-0'></video>
            </div>
        </div>
    );
}

export default Designer;