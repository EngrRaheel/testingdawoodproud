import { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';
import { style } from '@mui/system';
import { Fade } from 'react-awesome-reveal';
import { FiTarget } from "react-icons/fi"
import Image from "next/image";


function ServiceCard2({ heading, heading2, para, btntext, bgColor, link, images, icon, text, bg }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={`w-full min-h-[100vh] font-Inter text-[black] relative ${bgColor}`}>
            <div className='grid grid-cols-1 md:grid-cols-2  justify-center md:justify-center md:items-center max-w-[1024px] mx-auto px-12' >
                <div className='flex flex-col justify-center items-center md:items-start gap-4'>
                    <div className='flex flex-col justify-start items-start gap-6'>
                        <div className='flex justify-center items-center gap-6'>
                            <div className={`rounded-full ${bg} p-1`}>
                                {icon}
                            </div>
                            <h3 className='text-[20px] font-bold'>{text}</h3>
                        </div>
                        <h3 className="font-extrabold text-[24px] md:text-[36px] lg:text-[40px] text-center md:text-left leading-[43px] md:max-w-sm">{heading2}</h3>
                    </div>
                    <p className='text-[#231F20] font-light text-[18px] md:text-[18px] lg:text-[22px] text-center md:text-left md:max-w-sm'>{para}</p>
                </div>


                {/* <Fade delay={100} duration={1000} triggerOnce={true} cascade={true} direction={isMobile ? 'left' : 'right'}  > */}
                    <div className='md:flex-1 w-full'>

                        <div className='w-[80%] h-[300px] md:h-[350px] relative  '>
                            <Image src={images} alt="" fill className='object-contain ' />
                        </div>

                    </div>
                {/* </Fade> */}


            </div>
        </div >
    )
}

export default ServiceCard2