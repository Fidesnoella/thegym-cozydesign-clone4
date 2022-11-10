import React from 'react';
import Image from 'next/image';
import susie from '../../../public/assets/images/susie.webp'
import martin from '../../../public/assets/images/martin.webp'
import eric from '../../../public/assets/images/eric.webp'
import michael from '../../../public/assets/images/michael.webp'
import chat from '../../../public/assets/images/chat-icon-black.svg'


function Clients(props) {
    return (
        <div className='bg-primary'>
           <div className='mx-auto container w-full py-24 px-6 md:px-20 lg:px-52'>
             <h2 className='text-navy text-6xl text-center'>❤️ from our clients</h2>
             <div className='border-b-4 w-10 border-secondary mt-10 mx-auto'></div>
             <div className='grid md:grid-cols-2 mt-28 relative'>
                <div className="absolute inset-0 mx-auto my-auto bg-primary rounded-full  flex justify-center items-center w-20 h-20 translate-y-24"><Image src={chat}/></div>
                <div className='mt-auto'>
                    <div className='bg-navy  bg-noise  shadow-2xl flex flex-col justify-center text-right rounded-tl-lg rounded-tr-lg rounded-bl-full pt-[5rem] pr-[2.5rem] pb-[5rem] pl-[3.75rem] m-4 text-xl gap-y-5'>
                        <Image src={susie} className="border-[0.188rem] rounded-[3.25rem] mx-auto w-20 h-20 border-white"/>
                        <h5 className='text-secondary text-xl font-semibold'>&#34;One of the top design professionals…&#34;</h5>
                        <p className='text-primary text-lg font-normal'>I connect with hundreds of talented folks on a regular basis, and I can say with complete 
                            confidence that Lee is one of the best UX designers in Aquent/Vitamin T&#39;s global network.</p>
                        <div>
                            <strong className='font-bold text-primary'>Susie Pollasky</strong>
                        </div>
                        <div className='text-primary text-xs font-normal'>
                        Now: Leadership Recruiting @ Product Design<br/>at Facebook 
                        </div>
                    </div>
                </div>
                <div className='bg-slate  shadow-2xl bg-noise flex w-96 flex-col justify-center text-right rounded-tl-full rounded-tr-full rounded-br-mmd pt-[5rem] pr-[2.5rem] pb-[5rem] pl-[3.75rem] m-4 text-xl gap-y-5'>
                    <Image src={martin} className="border-[0.188rem] rounded-[3.25rem] mx-auto w-20 h-20 border-white"/>
                    <h5 className='text-secondary text-xl font-semibold'>“They’re a very well-rounded organization…”</h5>
                    <p className='text-primary text-lg font-normal'>
                    Cost per conversion and all of those metrics have dropped significantly. We used to pay an average of $100 per lead that converts… now we have that  down to about $20.
                     Sessions and contacts have also gone up astronomically, at least threefold. Organic search and social media referrals have all continued to skyrocket. 
                     We’re really pleased.
                    </p>
                    <div>
                        <strong className='font-bold text-primary'>MARTIN SPRITZER</strong>
                    </div>
                    <div className='text-primary text-xs font-normal'>
                    General Manager @ iQuoteXpress 
                    </div>
                </div>
                <div className='bg-Stone shadow-2xl h-[28.125rem] ml-auto w-96 bg-noise flex flex-col justify-center text-right rounded-tl-full rounded-bl-smd  rounded-br-smd py-[5rem] px-[2.5rem]  m-4 text-xl gap-y-5'>
                    <Image src={eric} className="border-[0.188rem] rounded-[3.25rem] self-end w-20 h-20  border-white"/>
                    <h5 className='text-primary text-xl font-bold'>“They&#39;re just good people.”</h5>
                    <p className='text-primary text-lg font-normal'>
                    They were a pleasure to work with and I&#39;m really happy with the results. They pretty much nailed it.
                    </p>
                    <div>
                        <strong className='font-bold text-primary'>ERIC WEISS</strong>
                    </div>
                    <div className='text-primary text-xs font-normal'>
                    Founder @ Full Cycle Product <br/> Development
                    </div>
                </div>
                
                <div className='bg-default shadow-2xl bg-noise flex flex-col justify-center text-left rounded-tr-full rounded-br-smd rounded-bl-smd pt-[5rem] pr-[2.5rem] pb-[5rem] pl-[3.75rem] m-4 text-xl gap-y-5'>
                    <Image src={michael} className="border-[0.188rem] rounded-[3.25rem] w-20 h-20 self-start border-white"/>
                    <h5 className='text-secondary text-xl font-semibold'>“The project was successful”</h5>
                    <p className='text-primary text-lg font-normal'>.
                    They strive to come up with good design, and they focus on all the right things.
                     The quality of their work is high, and all the deliverables are very well-organized and professional.
                    </p>
                    <div>
                        <strong className='font-bold text-primary'>MICHAEL WEISFELD</strong>
                    </div>
                    <div className='text-primary text-xs font-normal'>
                    Director of Digital Marketing @ National Funding
                    </div>
                </div>

             </div>
           </div>
        </div>
    );
}

export default Clients; 