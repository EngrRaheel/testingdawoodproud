import React from "react";
import Navbar from "../../../../components/common/Navbar";
import Footer from "../../../../components/common/Footer";

function YoutubeConsutation() {
  return (
    <div className="w-full">
      <div className="w-full  bg-[#121521]  h-[16rem]  md:h-[20rem]">
        <Navbar bg_color={"white"} />
        <div className=" max-w-[1172px] mx-auto">
          <div className="flex justify-start items-center space-y-2 py-4  w-full mt-2 md:mt-12">
            <h2 className=" text-2xl md:text-5xl lg:text-5xl font-bold abdal_color ml-[8%] ">
              We love our customers
              <br />
              <span>
                And we&#39;re flattered to <br /> know they love us!
               </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto bg-white min-h-screen">

      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default YoutubeConsutation;
