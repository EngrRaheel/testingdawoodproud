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
      <div className="min-h-screen">
        <div className="w-full  flex flex-col items-center justify-center font-Inter mx-auto bg-[#001b47] min-h-[80vh]">
          <Navbar bg_color={"white"} position={"fixed"} />

          {/* services hersection is here  */}
          <div className="grid grid-cols-1  xl:grid-cols-12  justify-center items-center mx-auto max-w-[1200px]  w-full min-h-[50%] gap-8">
            <div className=" text-white xl:col-start-1 xl:col-span-6 flex flex-col items-center justify-center text-center xl:text-left mt-8 xl:mt-1">
              <h1 className=" text-2xl md:text-4xl xl:text-5xl font-bold ">
                We love our customers
                <br />
                <span className="text-[#01b88d]">
                  And we&#39;re flattered to <br /> know they love us!
                </span>
              </h1>
            </div>
            <div className="w-[90%] h-[150px] md:h-[200px] xl:h-[300px] relative xl:col-start-8 xl:col-span-4 ">
              <Image
                src="/Images/ServicesheroImg.svg"
                fill
                alt="ServicesheroImg"
                className="object-contain"
              ></Image>
            </div>
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
