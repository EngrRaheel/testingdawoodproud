import React from "react";
import Navbar from "../../../../components/common/Navbar";
import Footer from "../../../../components/common/Footer";
import SideBar from "../../../../components/Services Page Sections/SidebarSevices";
import Image from "next/image";
import Head from "next/head";
function youtubeseo() {
  const liItem = [
    {
      name: "1. Effortless Channel Growth",
      id: "effortless_channel_growth",
    },
    {
      name: "2. Professional Expertise",
      id: "professional_expertise",
    },
    {
      name: "3. Time-Saving Solution",
      id: "time_saving_solution",
    },
    {
      name: "4. Customized Approach",
      id: "customized_approach",
    },
    {
      name: "5. Increased Reach and Engagement",
      id: "increased_reach_engagement",
    },
  ];

  const sectionIds = [
    "effortless_channel_growth",
    "professional_expertise",
    "time_saving_solution",
    "customized_approach",
    "increased_reach_engagement",
  ];
  return (
    <div className="">
      <Head>
        <title>
          YouTube Automation Services: Grow your Channel without Making Videos
        </title>
        <meta
          name="description"
          content="Discover our YouTube Automation Services and grow your channel effortlessly. Achieve success without creating videos. Get YouTube Automation done for you."
        />
        <meta
          name="keywords"
          content="YouTube Automation Services, youtube automation without making videos, YouTube Automation Done for You"
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
              <span className="text-[#01b88d]">
                YouTube Automation Done For You:{" "}
              </span>
              Grow your YouTube Channel without Making Videos
            </h1>
          </div>
          <div className="w-[100%] h-[150px] md:h-[200px] lg:h-[250px] relative md:col-start-9 md:col-span-2 mb-4">
            <Image
              src="/Images/ServicesheroSVGs/youtube-automation.svg"
              fill
              alt="youtube-automation"
              className="object-contain"
            ></Image>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12  bg-white  mx-auto max-w-full  w-full ">
          {/* sidebar here  */}
          <div className="mx-5   md:col-span-3 mt-6 ">
            <div className="sticky top-12 ">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div>
          <div className="w-full mx-auto bg-white min-h-screen md:col-start-4 md:col-span-7 p-2">
            <div className="max-w-[1172px] mx-auto">
              {/* <h1 className="font-Inter font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-12">
                YouTube Automation Done For You: Grow your YouTube Channel
                without Making Videos
              </h1> */}
            </div>
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start">
                <div className="flex flex-col justify-center item-center gap-4 ">
                  <h3 className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter">
                    At Dawood Proud, we offer comprehensive YouTube Automation
                    Services designed to help you grow your channel without the
                    hassle of creating videos. Our expert team will handle all
                    aspects of automation, allowing you to achieve success
                    effortlessly. With our proven strategies, you can unlock the
                    full potential of your YouTube channel and maximize your
                    reach. Whether you&apos;re a content creator, business
                    owner, or aspiring influencer, our &quot;Done For You&quot;
                    approach ensures that your channel flourishes while you
                    focus on other important aspects of your online presence.
                    Say goodbye to the time-consuming task of video creation and
                    let us take care of the automation process for you. With our
                    YouTube Automation Services, you&apos;ll experience
                    substantial growth and engagement, attracting a wider
                    audience and increasing your subscribers. Start your journey
                    towards YouTube success today with Dawood Proud&apos;s
                    professional and reliable YouTube Automation Services.
                  </h3>

                  {/* image comes here.. */}
                  <div className="relative h-[350px] w-[95%] md:w-[100%] bg-blue mx-auto">
                    <Image
                      src="/Images/Services/Keyword Research.png"
                      alt="YouTube Keyword Research"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-12">
                    <h3 className="text-[24px] md:text-[36px] xl:text-[42px] font-bold font-Factor_A">
                      Our YouTube Automation Services
                    </h3>
                    <p className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px] ">
                      Discover the benefits of our comprehensive YouTube
                      Automation Services:
                    </p>
                  </div>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-12 p-3 ">
                  <h2
                    id="effortless_channel_growth"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Effortless Channel Growth
                  </h2>
                  <ul className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter list-disc px-2">
                    <li>
                      Experience substantial channel growth without the hassle
                      of creating videos.
                    </li>
                    <li>
                      Our automation strategies ensure consistent and targeted
                      audience engagement.
                    </li>
                  </ul>

                  <h2
                    id="professional_expertise"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Professional Expertise
                  </h2>
                  <ul className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter list-disc px-2">
                    <li>
                      Benefit from our team of experts who are experienced in
                      YouTube automation.
                    </li>
                    <li>
                      We stay up-to-date with the latest trends and algorithms
                      to optimize your channel&apos;s performance.
                    </li>
                  </ul>

                  <h2
                    id="time_saving_solution"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Time-Saving Solution
                  </h2>
                  <ul className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter list-disc px-2">
                    <li>
                      Save valuable time by outsourcing the time-consuming task
                      of video creation.
                    </li>
                    <li>
                      Focus on other important aspects of your online presence
                      while we handle the automation process.
                    </li>
                  </ul>

                  <h2
                    id="customized_approach"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Customized Approach
                  </h2>
                  <ul className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter list-disc px-2">
                    <li>
                      We tailor our services to meet your specific goals and
                      requirements.
                    </li>
                    <li>
                      Our team will work closely with you to understand your
                      target audience and develop a customized automation
                      strategy.
                    </li>
                  </ul>

                  <h2
                    id="increased_reach_engagement"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Increased Reach and Engagement
                  </h2>
                  <ul className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter list-disc px-2">
                    <li>
                      Attract a wider audience and increase your subscriber
                      base.
                    </li>
                    <li>
                      Our proven techniques and optimization methods will
                      enhance your channel&apos;s visibility and engagement.
                    </li>
                  </ul>
                  <br />
                  <h3 className="text-[24px] md:text-[36px] xl:text-[42px] font-bold font-Factor_A">
                    Get Started with YouTube Automation Today!
                  </h3>
                  <p>
                    Achieve YouTube success without the stress of video
                    creation. Let Dawood Proud&apos;s YouTube Automation
                    Services handle the process for you. Contact us now to get
                    started and take your YouTube channel to new heights..
                  </p>
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
