import React from 'react';
import Image from 'next/image';
import getcozy from '../../../public/assets/images/getcozy.png'
import Button from '../ui/Button';

// flex pb-14 flex-col lg:flex-row 

function Hero({props}) {
    return (
        
        <div className='pt-36 pb-20 w-full bg-gradient-to-r to-navy from-indigo overflow-hidden'>
            <div className='lg:relative mx-auto container'>
            <div className='flex flex-col lg:flex-row pl-0 llg:pl-20'>
               <div className='flex flex-col px-6 lg:px-0 gap-y-10 w-[25rem] md:w-[33.719rem]'>
                <h1 className='bg-secondary mix-blend-exclusion bg-noise bg-clip-text text-transparent font-sans text-[4rem] md:text-[5.625rem] font-black leading-[5rem] md:leading-[6.188rem]'>Your design team for the cost of a salary.</h1>
                <h4 className='text-[1.5rem] md:text-[2.5rem] leading-[2.5] md:leading-[3.25rem]  mix-blend-exclusion bg-noise bg-clip-text text-transparent bg-primary font-semibold'>Full-service design support that growing B2B and non-profit organizations need. Are you strained because you should have a design team but you don&#39;t?</h4>
                <Button style={"bg-noise w-[20rem] md:w-[30rem]"}>SEE HOW WE WORK & WHAT WE DO</Button>
               </div> 
               <div className='lg:absolute lg:right-0 lg:pt-24 lg:-mr-28 px-10 lg:px-0 '>
                  <Image src={getcozy} />
               </div>
            </div>
            </div>
        </div>
    );
}

export default Hero;