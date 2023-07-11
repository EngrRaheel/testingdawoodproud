
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';
import { style } from '@mui/system';
import { Fade } from 'react-awesome-reveal';
import { FiTarget } from "react-icons/fi"
import Image from "next/image";

function ServiceCard2({ heading, heading2, para, btntext, bgColor, link, images, icon, bg, text }) {
    return (
        <div className={`w-full min-h-[100vh] font-Inter text-[black] relative ${bgColor}`}>
            <div className="w-full ">
                <div className="w-full max-w-[1200px]  flex flex-col items-center justify-center  mx-auto gap-3 md:gap-16 mt-12">

                    {/* <h2 className=' max-w-auto md:max-w-[580px] font-extrabold text-[28px] md:text-[38px] lg:text-[38px] text-center '>{heading}</h2> */}


                    <div className='flex flex-col md:flex-row justify-center md:justify-center md:items-center max-w-[1200px]'>
                        <div className='flex-1 mb-6 md:mb-0 p-2 sm:p-6 md:p-0'>
                            <Fade delay={100} duration={1000} triggerOnce={true} cascade={true} direction="left"  >
                                <div className='w-full h-[300px] md:h-[350px] relative drop-shadow-2xl '>
                                    <Image src={images} alt="" fill className='object-contain ' />
                                </div>
                            </Fade>
                        </div>

                        <div className='w-full flex-1 '>
                            <div className='px-[5%] md:pl-[15%] md:pr-[7%] space-y-5 flex flex-col justify-center items-center md:items-start'>
                                <div className='flex flex-col justify-start items-start gap-4'>
                                    <div className='flex justify-center items-center gap-3'>
                                        <div className={`rounded-full ${bg} p-1`}>
                                            {icon}
                                        </div>

                                        <h3 className='text-[20px] font-bold'>{text}</h3>
                                    </div>
                                    <h3 className="font-extrabold text-[24px] md:text-[36px] lg:text-[40px] text-center md:text-left leading-[43px]">{heading2}</h3>
                                </div>

                                <p className='text-[#231F20] font-light text-[18px] md:text-[18px] lg:text-[22px] text-center md:text-left px-[12px]'>{para}</p>
                                {/* <div className=' self-center md:self-start'>
                                    <Link rel="stylesheet" href={`${link}`}>
                                        <button className='flex justify-center items-center font-bold mt-1 px-2 sm:px-4  py-2 sm:py-3 gap-1  sm:gap-2 rounded-2xl text-xs sm:text-base bg-[#001b47] hover:bg-[#052964] text-white'>
                                            {btntext}
                                            <svg fill="none" viewBox="0 0 20 21" width="20" className="css-orecyf">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.334"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ServiceCard2