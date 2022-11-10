import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import clutch from '../../../public/assets/icons/clutch.webp'
import transparent from '../../../public/assets/icons/transparent.webp'
import marketing from '../../../public/assets/icons/Digital-Marketing.webp'
import webDesign from '../../../public/assets/icons/Best-Web-Design.webp'
import horizantal from '../../../public/assets/icons/Horizontal-Seal.svg'
import xotly from '../../../public/assets/icons/xotly.webp'
import verified from  '../../../public/assets/icons/verified-agency-vista-badge.png'
import newbadge from  '../../../public/assets/icons/new-badge.png'
import AccreditedBadge from  '../../../public/assets/icons/Accredited-Badge.webp'


function Marketing(props) {
    return (
        <div className='wave'>
            <div className='mx-auto container w-full py-24 px-6 md:px-32 lg:px-48 flex flex-col lg:flex-row gap-10'>
                <div className='flex flex-col gap-y-10 max-w-[50rem] font-sans'>
                    <strong className='font-bold text-3xl text-navy pb-5'>🌴🐻🇺🇸</strong>
                    <h2 className='text-navy font-semibold text-7xl'>Get Cozy</h2>
                    <h3 className='text-4xl text-Stone font-normal'>Design & digital marketing<br/>in San Diego, California</h3>
                    <p className='text-navy text-[1.375rem] max-w-[35rem]'>We’re an award-winning design shop based in South Park, San Diego. We efficiently combine the best parts of 
                        user experience (UX) with creative design and execution to create effective collateral that connects with the human beings who interact with them. 🤯</p>
                    <p className='text-navy text-[1.375rem] max-w-[35rem]'>No epic quests for inspiration. Just pragmatic collaboration and efficient results from big-agency graduates with decades of experience.</p>
                    <Button>WHY WE DO WHAT WE DO</Button>
                </div>
                <div className='grid grid-cols-2 gap-10 ml-3 lg:ml-20'>
                    <div className='flex flex-col gap-y-5'>
                        <Image src={clutch} className="w-40" />
                        <Image src={transparent} className="w-40" />
                        <Image src={marketing} className="w-40" />
                        <Image src={webDesign} className="w-40" />
                    </div>
                    <div className='flex flex-col gap-y-5'>
                    <span>
                        <Image src={horizantal} className="w-40"/>
                        <p className='text-navy text-center'>BBB rating: A+</p>
                    </span>
                    <Image src={xotly} className="w-40"/>
                    <Image src={verified} className="w-40"/>
                    <Image src={newbadge} className="w-40"/>
                    <Image src={AccreditedBadge} className="w-40"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Marketing;