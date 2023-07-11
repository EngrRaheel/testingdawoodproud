import React, { Fragment } from 'react'
import Head from 'next/head';

import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import { Images } from '../../../next.config';
import Image from 'next/image';
import PorftfoliCard from '../../../components/Portfolio/PortfoliCard';
import TwitterTweet from '../../../components/Portfolio/TwitterTweet';
import SiderBar from '../../../components/Portfolio/SiderBar';
import PortfoliPage from "../../../components/Portfolio/PorfolioPage"
import InstagramPost from '../../../components/Portfolio/InstagramPost';

function Portfolio() {
    return (
        <div className='w-full min-h-screen font-Inter text-white bg-white h-full'>
            <Head>
                <title>Yotube SEO</title>
                <meta name="description" content="This is a description of my page." />
            </Head>


            <div className='w-full bg-white text-[black]'>
                <Navbar bg_color={"white"} position={"sticky"} />
            </div>

            <div className="grid grid-cols-1  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px]  bg-[#001b47]">
                <div className=" text-white md:col-start-4 md:col-span-5 flex flex-col items-center justify-center text-center md:text-left mt-8 xl:mt-1">
                    <h1 className='text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-xl '>
                        <span className="text-[#01b88d]"> We love our customers </span>
                        And we&#39;re flattered to know they love us!
                    </h1>
                </div>
                <div className="w-[100%] h-[150px] md:h-[200px] lg:h-[250px] relative md:col-start-9 md:col-span-2 mb-4">
                    <Image
                        src="/Images/ServicesheroSVGs/youtube-niche-with-low-competition.svg"
                        fill
                        alt="youtube-niche-with-low-competition"
                        className="object-contain"
                    ></Image>
                </div>
            </div>

            <div className='grid  grid-cols-1 sm:grid-cols-12  mt-6 mx-auto '>
                <div className=' mx-[4%] col-span-3 flex justify-center sm:justify-end '>
                    <div className='sticky top-12'>
                        <SiderBar />
                    </div>
                </div>
                <div className='sm:col-start-4 sm:col-span-7 mx-auto '>
                    <PortfoliPage />
                </div>
            </div>

            <Footer />


        </div>

    )
}

export default Portfolio