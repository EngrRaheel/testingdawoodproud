import React from "react";
import Navbar from "../../../../components/common/Navbar";
import Footer from "../../../../components/common/Footer";
import SideBar from "../../../../components/Services Page Sections/SidebarSevices";
import Image from "next/image";
import Head from "next/head";
function youtubeseo() {
  const liItem = [
    {
      name: "1. Low Competition",
      id: "low_competition",
    },
    {
      name: "2. High Volume",
      id: "high_volume",
    },
    {
      name: "3. Rising Trend ",
      id: "rising_trend",
    },
    {
      name: "4. YouTube Shorts Niches",
      id: "youtube_shorts_niches",
    },
    {
      name: "5. Top Faceless YouTube Niches",
      id: "top_faceless_youtube_niches",
    },
  ];

  const sectionIds = [
    "low_competition",
    "high_volume",
    "rising_trend",
    "youtube_shorts_niches",
    "top_faceless_youtube_niches",
  ];

  return (
    <div className="">
      <Head>
        <title>
          Get YouTube Niches with Low Competition for Your Target Audience
        </title>
        <meta
          name="description"
          content="Uncover profitable YouTube Automation Niches with low competition and Niches for YouTube Shorts that perfectly align with your target audience."
        />
        <meta
          name="keywords"
          content=" youtube niches with low competition, youtube automation niches, niches for youtube shorts, top faceless youtube niches"
        />
        <meta property="og:title" content="YouTube Consultation" />
        <meta
          property="og:description"
          content="This is the YouTube Consultation page description."
        />
        <meta property="og:image" content="" />
      </Head>

      <div className="w-full flex flex-col justify-center items-center h-full font-Halvic bg-[#001b47]">
        <div className="w-full bg-white ">
          <Navbar bg_color={"white"} position={"sticky"} />
        </div>
        <div className="grid grid-cols-1  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px]  ">
          <div className=" text-white md:col-start-4 md:col-span-5 flex flex-col items-center justify-center text-center md:text-left mt-8 xl:mt-1">
            <h1 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-3xl ">
              <span className="text-[#01b88d]">YouTube Niches with Low </span>
              Competition Services to Optimize for Your Target Audience
            </h1>
          </div>
          <div className="w-[100%] h-[150px] md:h-[200px] lg:h-[250px] relative md:col-start-9 md:col-span-2 mb-4">
            <Image
              src="/Images/Services/YouTube Niches with Low Competition.svg"
              fill
              alt="youtube-niche-with-low-competition"
              className="object-contain"
            ></Image>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12  bg-white  mx-auto max-w-full  w-full ">
          {/* sidebar here  */}
          <div className="mx-5   md:col-span-3 mt-6 ">
            <div className="sticky top-12">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div>
          <div className="w-full mx-auto bg-white min-h-screen md:col-start-4 md:col-span-6 p-2 mb-28 md:mb-40">
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start">
                <div className="flex flex-col justify-center item-center gap-4 mt-4">
                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Discover YouTube niches with low competition and high
                      volume to optimize your channel for success.
                    </p>{" "}
                    <p>
                      Our services specialize in identifying profitable niches
                      that perfectly align with your target audience.
                    </p>{" "}
                    <p className="font-medium">
                      Here are key points about our YouTube niche services:{" "}
                    </p>
                  </div>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-12 p-3 ">
                  <h2
                    id="low_competition"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Low Competition
                  </h2>

                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Stand out in a crowded YouTube landscape by targeting
                      niches with low competition.
                    </p>
                    <p>
                      Establish yourself as a go-to resource in your field and
                      attract an engaged audience.
                    </p>
                  </div>
                  <h2
                    id="high_volume"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    High Volume
                  </h2>

                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Tap into a larger audience potential by focusing on niches
                      with high search volume.
                    </p>
                    <p>
                      Increase your views, subscribers, and engagement by
                      targeting topics people are actively searching for.
                    </p>
                  </div>
                  <h2
                    id="rising_trend"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Rising Trend
                  </h2>

                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Stay ahead of the competition by identifying niches on the
                      rise.
                    </p>
                    <p>
                      Capitalize on emerging trends and position yourself as a
                      trendsetter to attract a dedicated following.
                    </p>
                  </div>
                  <h2
                    id="youtube_shorts_niches"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    YouTube Shorts Niches
                  </h2>

                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Optimize your content for YouTube Shorts, a rapidly
                      growing feature.
                    </p>
                    <p>
                      Find niches tailored for short-form videos to maximize
                      visibility and engagement.
                    </p>
                  </div>
                  <h2
                    id="top_faceless_youtube_niches"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Top Faceless YouTube Niches
                  </h2>

                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Explore niches that don&apos;t require showing your face.
                      Cater to different preferences and create engaging content
                      while maintaining privacy or exploring alternative styles.
                    </p>
                  </div>
                  <br />

                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      At DawoodProud, we specialize in helping you find the
                      perfect YouTube niches with low competition that resonate
                      with your target audience.
                    </p>
                    <p>
                      Maximize your channel&apos;s potential with our expertise
                      in YouTube automation and in-depth research techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[1172px] mx-auto"></div>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default youtubeseo;
