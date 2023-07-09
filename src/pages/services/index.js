import React, { Fragment } from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import Head from "next/head";
import ServiceCards from "../../../components/Services Page Sections/ServiceCards";
import Image from "next/image";

function ServicesPage() {
  return (
    <Fragment>
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="This is a description of my page." />
      </Head>
      <div className="w-full flex flex-col justify-center items-center h-full font-Halvic bg-[#001b47]">
        <div className="w-full bg-white ">
          <Navbar bg_color={"white"} position={"sticky"} />
        </div>
        <div className="grid grid-cols-1  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px]  ">
          <div className=" text-white md:col-start-2 md:col-span-5 flex flex-col items-center justify-center text-center md:text-left mt-8 xl:mt-1">
            <h1 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-3xl ">
              We love our customers
              <br />
              <span className="text-[#01b88d]">
                And we&#39;re flattered to <br /> know they love us!
              </span>
            </h1>
          </div>
          <div className="w-[100%] h-[150px] md:h-[200px] lg:h-[250px] relative md:col-start-9 md:col-span-2 mb-4">
            <Image
              src="/Images/ServicesheroSVGs/serviceshero.svg"
              fill
              alt="services"
              className="object-contain"
            ></Image>
          </div>
        </div>

        <div className="  w-full bg-white">
          <ServiceCards />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default ServicesPage;
