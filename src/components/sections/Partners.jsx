import React from 'react';
import Image from 'next/image';
import npca from '../../../public/assets/icons/NPCA logo - light.svg';
import natialfund from '../../../public/assets/icons/national funding logo full.svg';
import lightstream  from '../../../public/assets/icons/lightstream logo.svg';
import Sapient from '../../../public/assets/icons/Sapient.svg';
import thermofisher  from '../../../public/assets/icons/thermofisher logo full.svg';
import sony from '../../../public/assets/icons/sony logo full.svg';
import sdge from '../../../public/assets/icons/sdge logo.svg';


function Partners(props) {
    return (
        <div className=' bg-navy'>
            <div className='mx-auto container flex flex-col gap-y-10 px-6 text-center items-center justify-center py-14'>
                <h1 className='text-secondary text-3xl font-normal'>More than 150 happy clients</h1>
                <div className='flex flex-col md:flex-row gap-10'>
                    <Image src={npca} className="w-32"/>
                    <Image src={natialfund} className="w-32" />
                    <Image src={lightstream} className="w-32" />
                    <Image src={Sapient} className="w-32" />
                    <Image src={thermofisher} className="w-32"  />
                    <Image src={sony} className="w-32" />
                    <Image src={sdge} className="w-16" />
                </div>
            </div>
        </div>
    );
}

export default Partners;