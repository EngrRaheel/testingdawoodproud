import React from "react";
import Navbar from "../common/Navbar";
import Image from "next/image";
import { height } from "@mui/system";
import { AiFillStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc"
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import SignUp from "./SignUp"
function Hero() {
    return (

        <div className="w-full min-h-screen flex flex-col items-center justify-center font-Inter mx-auto bg-[#001b47]">
            <Navbar bg_color={"bg-gradient-to-b from-[#121521] to-[#121521]/0"} position={'fixed'} />

            {/* hero section text and images div */}
            <div className="grid grid-cols-1  xl:grid-cols-12  justify-center !items-center mx-auto max-w-[1200px] min-h-[90vh] ">

                <div className="h-full w-full  text-white text-center flex flex-col  items-center justify-center  xl:col-start-1 xl:col-span-5">
                    {/* hero section text */}
                    <div className=" flex flex-col justify-center items-center xl:justify-start xl:items-start mx-auto  p-0 sm:p-4 md:p-6 gap-4">
                        <div className="flex flex-col justify-center xl:justify-start items-center xl:items-start  xl:-space-y-3 ">
                            <h1 className=" font-extrabold text-[32px] sm:text-[36px] md:text-[50px] lg:text-[60px] ">Dawood Proud</h1>
                            <h1 className=" font-extrabold text-[28px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#01b88d]"> Stand Out from Crowd</h1>
                        </div>
                        <div className="text-center xl:text-left font-medium md:font-semibold px-3 sm:px-0 lg:font-medium sm:text-[16px] md:text-[16px] lg:text-[16px] text-[white]/70">
                            <p> Ultimate Destination for all <strong> YouTube Growth Services</strong> <br />to take your channel to new heights.</p>
                            {/* <p>All the successful YouTubers have one thing in common  <strong> {"\"They have Winnig Content Strategy.\""}</strong>  </p> */}
                        </div>
                        <div>
                            <Link href={"/consultation"} className="text-sm ">
                                <button className='flex justify-center items-center px-1 py-2  rounded-3xl xl:rounded-lg  font-bold text-white button mt-0 '>
                                    Let&#39;s Start a New Project
                                    <BsArrowRightShort size={25} />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* hero image here */}
                    {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-1 justify-between items-center max-w-[768px] w-full px-4 mx-auto">
                        <div className="flex flex-col gap-2 ">
                            <div className='w-[200px] md:w-[250px] h-[100px] md:h-[130px] relative '>
                                <Image src={"/Images/trustpilot.webp"} alt={'image for the truts pilot'} fill />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className='flex flex-col justify-center items-center text-white hover:text-[#00b67a] font-semibold text-base' >5.0 reviews on Trustpilot</p>
                                <p className='flex flex-col justify-center items-center text-white hover:text-[#00b67a] font-semibold text-base' >Based on 684 Reviews</p>
                            </div>

                        </div>
                        <div className='gap-2 border-1 border-solid border-[black] flex flex-col justify-center items-center p-3 shadow-sm  rounded-sm'>
                            <div className="flex justify-center items-center gap-3">
                                <FcGoogle className="text-[40px]"></FcGoogle>
                                <p className="text-[white] text-[28px] sm:text-[24px] md:text-[30px] font-bold">Google Reviews</p>
                            </div>
                            <div className='flex  justify-center items-center text-[#eeee0d]'>
                                <AiFillStar className="text-[35px] sm:text-[30px] md:text-[40px]" />
                                <AiFillStar className="text-[35px] sm:text-[30px] md:text-[40px]" />
                                <AiFillStar className="text-[35px] sm:text-[30px] md:text-[40px]" />
                                <AiFillStar className="text-[35px] sm:text-[30px] md:text-[40px]" />
                                <AiFillStar className="text-[35px] sm:text-[30px] md:text-[40px]" />
                            </div>
                            <div className=" text-[18px] sm:text-[16px]  md:text-[20px]">
                                <p> <strong>4.9</strong> Stars | Based on <strong>521</strong> Reviews</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className=" xl:col-start-8 xl:col-span-5 mx-auto w-full flex flex-col items-center">
                    <SignUp />
                </div>

            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 justify-center items-center bg-blue/5 w-full h-full ">
                <div className="relative h-[250px] w-[300px] xs:w-[400px] sm:w-[500px] mx-auto ">
                    <Image src="/Images/herosection/heroImage.webp" fill alt="heroImage" className="object-contain" />
                </div>
                <div className="grid grid-cols-1 justify-center items-center space-y-2 my-4">
                    <div className="flex flex-col justify-start items-center">
                        <p className="text-white font-bold font-Inter tracking-widest text-[18px] sm:text-[22px]">
                            PUSH YOUR CHANNEL TO THE
                        </p>
                        <div className="relative h-[100px] w-[280px] xl:-ml-24">
                            <Image src="/Images/herosection/heroImage2.svg" fill alt="heroImage2" className="object-contain" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center max-w-sm mx-auto">
                        <p className="text-left font-Inter  xl:text-[20px] text-white">
                            Discover how to <span className="hero_bg ">grow your YouTube <br /> channel</span>  with our professional coaches.
                        </p>
                    </div>
                    <div className="flex flex-col xs:flex-row justify-center items-center gap-4 xs:gap-8">
                        <div>
                            <Link href={"/consultation"} className="text-xs xl:text-sm">
                                <button className='border border-solid border-[#f0f0f0] px-4 py-2 ml-2 rounded-full  font-bold text-white  bg-blue/40  hover:bg-white hover:text-blue'>
                                    Get Free Consultation
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link href={"/services"} className="text-xs xl:text-sm ">
                                <button className=' px-4 py-2 ml-2 rounded-full  font-bold text-white  bg-blue/40  hover:bg-white hover:text-blue'>
                                    <div className="flex justify-center items-center gap-2">
                                        <p>See all Services</p>
                                        <svg fill="none" viewBox="0 0 20 21" width="20" class="css-orecyf"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.334"></path></svg>
                                    </div>

                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

