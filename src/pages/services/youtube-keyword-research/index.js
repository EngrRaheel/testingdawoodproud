import React from "react";
import Navbar from "../../../../components/common/Navbar";
import Footer from "../../../../components/common/Footer";
import SideBar from "../../../../components/Services Page Sections/SidebarSevices";
import Image from "next/image";
import Head from "next/head";
function youtubeseo() {
  const liItem = [
    {
      name: "1. Professional Expertise",
      id: "professional_expertise",
    },
    {
      name: "2. Low Competition, High Volume",
      id: "low_competition_high_volume",
    },
    {
      name: "3. Free Consistent Views ",
      id: "free_consistent_views",
    },
    {
      name: "4. Engaged Subscribers",
      id: "engaged_subscribers",
    },
    {
      name: "YouTube Keywords Research Process",
      id: "yotube_keyword_research_process",
    },

    {
      name: "1. Understanding Your Niche",
      id: "understanding_your_niche",
    },
    {
      name: "2. Comprehensive Keyword Analysis",
      id: "comprehensive_keyword_analysis",
    },
    {
      name: "3. Keyword Recommendations",
      id: "keyword_recommendations",
    },
    {
      name: "4. Implementation Guidance",
      id: "implementation_guidance",
    },
  ];

  const sectionIds = [
    "understanding_your_niche",
    "comprehensive_keyword_analysis",
    "keyword_recommendations",
    "implementation_guidance",
  ];
  return (
    <div className="">
      <Head>
        <title>
          YouTube Keywords Research Services to get Consistent Views & Engaged
          Subscribers
        </title>
        <meta
          name="description"
          content="Get Low Competition and High Volume Keywords for YouTube Titles by YouTube Experts to get Free Consistent Views and Engaged Subscribers from YouTube Search Results"
        />
        <meta
          name="keywords"
          content=" YouTube Keywords Research Services, Keywords for YouTube Titles, Keywords for YouTube Services"
        />
        <meta property="og:title" content="YouTube Consultation" />
        <meta
          property="og:description"
          content="This is the YouTube Consultation page description."
        />
        <meta property="og:image" content="" />
      </Head>

      <div className="w-full flex flex-col justify-center items-center h-full font-Inter bg-[#001b47]">
        <div className="w-full ">
          <Navbar bg_color={"white"} position={"sticky"} />
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-12  bg-white w-full">
          {/* sidebar here  */}
          <div className=" mx-[4%] col-span-3 mt-6">
            <div className="sticky top-12 shadow-md rounded-xl">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div>
          <div className="w-full mx-auto bg-white min-h-screen col-span-7 ">
            <div className="mx-auto w-[100%]  mt-5 p-2">
              <h1 className="font-Inter font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-12">
                YouTube Keywords Research Services to Leverage Low Competition &
                High Volume Keywords
              </h1>
            </div>
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start">
                <div className="flex flex-col justify-center item-center gap-4 ">
                  <h3 className="text-base md:text-lg p-2 lg:p-1 font-normal font-Inter mt-4">
                    Are you looking to maximize your visibility on YouTube and
                    attract a dedicated audience? Our YouTube Keywords Research
                    Services provide you with expert assistance in finding low
                    competition and high volume keywords to enhance your YouTube
                    titles and increase your chances of ranking higher in
                    YouTube search results.
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
                  <h3 className="text-base md:text-xl lg:text-2xl font-Inter font-semibold p-1 -mb-8">
                    Why Choose Our YouTube Keywords Research Services?
                  </h3>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-12 p-3 ">
                  <h2
                    id="professional_expertise"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    Professional Expertise
                  </h2>
                  <p className="text-sm sm:text-base">
                    Our team of YouTube experts has extensive knowledge and
                    experience in keyword research specifically tailored for
                    YouTube. We understand the platform&apos;s algorithm and can
                    identify keywords that have the potential to bring you
                    consistent views and engaged subscribers.
                  </p>

                  <h2
                    id="low_competition_high_volume"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    Low Competition, High Volume
                  </h2>
                  <p className="text-sm sm:text-base">
                    High Volume: We delve deep into keyword analysis to discover
                    hidden gems - low competition keywords with high search
                    volume. By leveraging these keywords in your video titles,
                    you can stand out from the crowd and attract more organic
                    traffic.
                  </p>

                  <h2
                    id="free_consistent_views"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    Free Consistent Views
                  </h2>
                  <p className="text-sm sm:text-base">
                    Optimizing your YouTube titles with the right keywords
                    increases your chances of appearing in relevant search
                    results. This exposure brings you free, consistent views
                    from users actively searching for content in your niche.
                  </p>

                  <h2
                    id="engaged_subscribers"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    Engaged Subscribers
                  </h2>
                  <p className="text-sm sm:text-base">
                    When your video appears in search results with compelling
                    titles, it captures the attention of potential subscribers
                    who are genuinely interested in your content. By targeting
                    the right keywords, we help you attract engaged subscribers
                    who are more likely to interact, comment, and share your
                    videos.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start">
                <div className="flex flex-col justify-center item-center gap-4 mb-3">
                  <h3
                    id="yotube_keyword_research_process"
                    className="text-base md:text-xl lg:text-2xl font-Inter font-semibold p-1 "
                  >
                    Our YouTube Keywords Research Process
                  </h3>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-16 p-3 ">
                  <h2
                    id="understanding_your_niche"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    Understanding Your Niche
                  </h2>
                  <p className="text-sm sm:text-base">
                    We start by gaining a thorough understanding of your niche,
                    target audience, and content goals. This allows us to tailor
                    our keyword research to your specific needs.
                  </p>

                  <h2
                    id="comprehensive_keyword_analysis"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    Comprehensive Keyword Analysis
                  </h2>
                  <p className="text-sm sm:text-base">
                    Our team conducts in-depth research using advanced tools and
                    techniques to identify relevant keywords with low
                    competition and high search volume. We analyze trends,
                    search patterns, and competitor strategies to uncover
                    untapped keyword opportunities.
                  </p>

                  <h2
                    id="keyword_recommendations"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    Keyword Recommendations
                  </h2>
                  <p className="text-sm sm:text-base">
                    Based on our research, we provide you with a comprehensive
                    list of recommended keywords for your YouTube titles. These
                    keywords are carefully selected to maximize your visibility
                    and engagement.
                  </p>

                  <h2
                    id="implementation_guidance"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    Implementation Guidance
                  </h2>
                  <p className="text-sm sm:text-base">
                    We guide you on how to effectively incorporate the
                    researched keywords into your video titles to optimize your
                    chances of ranking higher in YouTube search results.
                  </p>

                  <p className="text-sm sm:text-base">
                    Unlock the power of YouTube&apos;s search algorithm and increase
                    your channel&apos;s visibility with our YouTube Keywords Research
                    Services. Gain consistent views, attract engaged
                    subscribers, and grow your channel organically. Contact us
                    today to leverage low competition and high volume keywords
                    for your YouTube titles.
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

export default youtubeseo;
