import React from "react";
import Navbar from "../../../../components/common/Navbar";
import Footer from "../../../../components/common/Footer";
import SideBar from "../../../../components/Services Page Sections/SidebarSevices";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

function YoutubeConsutation() {
  const liItem = [
    {
      name: "1. Free Consultation",
      id: "free_consultation",
    },
    {
      name: "2. Tailored Content Strategy",
      id: "tailored_content_strategy",
    },
    {
      name: "3. Channel Analysis ",
      id: "channel_analysis",
    },
    {
      name: "4. Audience Development ",
      id: "audience_development",
    },
    {
      name: "5. YouTube Video SEO",
      id: "youtube_video_seo",
    },
  ];

  const sectionIds = [
    "free_consultation",
    "tailored_content_strategy",
    "channel_analysis",
    "audience_development",
    "youtube_video_seo",
  ];

  return (
    <div className="">
      <Head>
        <title>
          Certified YouTube Consultant | Get Free Consultation with YouTube
          Expert
        </title>
        <meta
          name="description"
          content="Looking for a certified YouTube marketing consultant?
           Get a free YouTube Consulting and Tailored Content Strategy to boost your channel's success."
        />
        <meta
          name="keywords"
          content="YouTube Consultant, Certified YouTube Consulting, YouTube Marketing Consultant"
        />
        <meta property="og:title" content="YouTube Consultation" />
        <meta
          property="og:description"
          content="This is the YouTube Consultation page description."
        />
        <meta property="og:image" content="" />
      </Head>

      <div className="w-full flex flex-col justify-center items-center h-full font-Barlow bg-[#001b47]">
        <div className="w-full bg-white ">
          <Navbar bg_color={"white"} position={"sticky"} />
        </div>
        <div className="flex flex-col justify-center items-start mt-8 -space-y-8">
          <div className="text-[#01b88d]">
            {/* Channels <span className="text-white">/</span> YouTube Videos */}
          </div>
          <div className="grid grid-cols-1  xl:grid-cols-12  justify-center items-center mx-auto max-w-[700px]  w-full min-h-[300px] gap-4 ">
            <div className=" text-white xl:col-start-1 xl:col-span-6 flex flex-col items-center justify-center text-center xl:text-left mt-8 xl:mt-1">
              <h1 className=" text-[24px] md:text-[24px] xl:text-[24px] font-bold xl:leading-[35px]">
                {/* We love our customers */}
                Certified YouTube Consulting
                <br />
                <span className="text-[#01b88d]">
                  Get Free Content Strategy from YouTube Experts
                </span>
              </h1>
            </div>
            <div className="w-[100%] h-[150px] md:h-[180px] xl:h-[150px] relative xl:col-start-8 xl:col-span-4 mb-4">
              <Image
                src="/Images/ServicesheroImg.svg"
                fill
                alt="ServicesheroImg"
                className="object-contain"
              ></Image>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12  bg-white w-full">
          {/* sidebar here  */}
          <div className=" mx-[4%] col-span-3 mt-6">
            <div className="sticky top-12 shadow-md rounded-xl">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div>
          <div className="w-full mx-auto bg-white min-h-screen col-span-6 ">
            <div className="mx-auto w-[100%]  mt-5 p-2">
              {/* <h1 className="  font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-12">
                Certified YouTube Consulting | Get Free Content Strategy &
                Consultation from YouTube Experts
              </h1> */}
            </div>
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start">
                <div className="flex flex-col justify-center item-center gap-4 mb-3">
                  <h3 className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-normal  mt-4 ">
                    Welcome to Dawood Proud, the hub of certified YouTube
                    consultants who are passionate about helping your YouTube
                    channel thrive. Unlock your channel&apos;s true potential
                    with our expert guidance and tailored content strategies.
                  </h3>
                  <h3 className="text-[36px] font-bold ">
                    Why Choose Our YouTube Consulting Services?
                  </h3>
                </div>

                {/* image comes here.. */}
                {/* <div className="relative h-[350px] w-[95%] md:w-[100%] bg-blue mx-auto">
                  <Image
                    src="/Images/Services/Keyword Research.png"
                    alt="YouTube Keyword Research"
                    fill
                    className="object-contain"
                  />
                </div> */}

                {/* all the content starts here... */}
                <div className="space-y-4 mt-8 p-3">
                  <h2
                    id="free_consultation"
                    className="text-xl md:text-2xl font-bold"
                  >
                    Free Consultation
                  </h2>
                  <p className="text-[16px] md:text-[20.4px] font-normal">
                    Take advantage of our complimentary YouTube consultation
                    with experienced experts. Gain valuable insights and
                    personalized strategies to accelerate your channel&apos;s
                    growth.
                  </p>

                  <h2
                    id="tailored_content_strategy"
                    className="text-xl md:text-2xl font-bold"
                  >
                    Tailored Content Strategy
                  </h2>
                  <p className="text-[16px] md:text-[20.4px] font-normal">
                    Every channel is unique, and we understand the importance of
                    customized approaches. Our consultants will develop a
                    tailored content strategy to maximize your channel&apos;s
                    success.
                  </p>

                  <h2
                    id="channel_analysis"
                    className="text-xl md:text-2xl  font-bold"
                  >
                    Channel Analysis
                  </h2>
                  <p className="text-[16px] md:text-[20.4px] font-normal">
                    Our experts will conduct a comprehensive analysis of your
                    channel, examining your content, audience, engagement, and
                    SEO. Identify strengths and opportunities for improvement.
                  </p>

                  <h2
                    id="audience_development"
                    className="text-xl md:text-2xl  font-bold"
                  >
                    Audience Development
                  </h2>
                  <p className="text-[16px] md:text-[20.4px] font-normal">
                    Build a loyal and engaged audience through our proven
                    techniques. We&apos;ll help you identify your target
                    audience, optimize content to meet their interests, and
                    foster strong connections.
                  </p>

                  <h3
                    id="youtube_video_seo"
                    className="text-xl md:text-2xl  font-bold"
                  >
                    YouTube Video SEO
                  </h3>
                  <p className="text-[16px] md:text-[20.4px] font-normal">
                    Enhance your channel&apos;s visibility with effective search
                    engine optimization techniques. Our consultants will
                    optimize titles, tags, descriptions, and metadata for better
                    discoverability.
                  </p>

                  <h3 className="text-[36px] font-bold ">
                    Ready to Take Your YouTube Channel to New Heights?
                  </h3>
                  <p className="text-[16px] md:text-[20.4px] font-normal">
                    Contact our certified YouTube consultants today to claim
                    your free consultation. Let us help you unlock the full
                    potential of your channel and achieve the success you
                    deserve. Start your journey towards YouTube excellence with
                    Dawood Proud.
                  </p>
                  <p className="text-[16px] md:text-[20.4px] font-normal">
                    Remember, our commitment is to your growth and success. Get
                    in touch now and embark on a transformative YouTube journey
                    with our expert guidance and tailored strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default YoutubeConsutation;
