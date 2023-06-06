import React, { Fragment } from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import ServiceCards from "../../../components/Services Page Sections/ServiceCards";
function ServicesPage() {
  return (
    <Fragment>
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="This is a description of my page." />
      </Head>
      <div className="w-full min-h-screen font-Inter text-white bg-white h-full">
        <div className="w-full  bg-[#121521]  h-[16rem]  md:h-[22rem] ">
          <Navbar bg_color={"white"} />
          <div className=" max-w-[1172px] mx-auto">
            <div className="flex justify-start items-center space-y-2 py-4  w-full mt-2 md:mt-12">
              <h1 className=" text-2xl md:text-5xl lg:text-5xl font-bold abdal_color ml-[8%] ">
                We love our customers
                <br />
                <span>
                  And we&#39;re flattered to <br /> know they love us!
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className=" bg-[#121521] w-full bg-cover bg-center bg-[url('/Images/blob_bg_2.png')">
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
