import React from "react";
import Navbar from "../../../../components/common/Navbar";
import Footer from "../../../../components/common/Footer";
import SideBar from "../../../../components/Services Page Sections/SidebarSevices";
import Image from "next/image";
import Head from "next/head";
function youtubeseo() {
  const liItem = [
    {
      name: "1. YouTube Keyword Research",
      id: "youtube_keyword_research",
    },
    {
      name: "2. Optimized Title and Description Optimization",
      id: "optimized_title_description_optimization",
    },
    {
      name: "3. High-Volume Tags and Hashtags ",
      id: "high_volume_tags_hashtags",
    },
    {
      name: "4. Internal Linking of YouTube Videos",
      id: "internal_linking_youtube_videos",
    },
    {
      name: "5. End Screen and Cards Integration",
      id: "end_screen_cards_integration",
    },
    {
      name: "6. Staying Updated with  YouTube Algorithm",
      id: "staying_updated_youtube_algorithm",
    },
  ];

  const sectionIds = [
    "youtube_keyword_research",
    "optimized_title_description_optimization",
    "high_volume_tags_hashtags",
    "internal_linking_youtube_videos",
    "end_screen_cards_integration",
    "staying_updated_youtube_algorithm",
  ];

  return (
    <div className="">
      <Head>
        <title>YouTube Video Production Services from YouTube Experts</title>
        <meta
          name="description"
          content="Reach your YouTube Goals with our Video Creation Services. Get high-quality, engaging faceless YouTube Content from leading YouTube Video Production Company."
        />
        <meta
          name="keywords"
          content=" YouTube Video Production Services, YouTube Video Creation Services, youtube production companies, youtube video production company, youtube production agencies"
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
              <span className="text-[#01b88d]">YouTube Video Creation </span>
              Services to Maximize Your YouTube Success
            </h1>
          </div>
          <div className="w-[100%] h-[150px] md:h-[200px] lg:h-[230px] relative md:col-start-9 md:col-span-3 mb-4">
            <Image
              src="/Images/Services/YouTube Content Creation.png"
              fill
              alt="Youtube_VideoCreatoin"
              className="object-contain"
            ></Image>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12  bg-white w-full">
          {/* sidebar here  */}
          <div className="md:col-span-3 mt-6 ">
            <div className="sticky top-12 ">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div>
          <div className="w-full mx-auto bg-white min-h-screen md:col-start-4 md:col-span-6 p-2 mb-28 md:mb-40">
            <div className="max-w-[1172px] mx-auto">
              {/* <h1 className="font-Inter font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-12">
                YouTube Video Creation Services to Maximize Your YouTube Success
              </h1> */}
            </div>
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start">
                <div className="flex flex-col justify-center item-center gap-4 mb-3">
                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Are you looking to skyrocket your YouTube video rankings
                      and attract a consistent flow of views and engaged
                      subscribers?
                    </p>
                    <p>
                      Look no further! Our team of YouTube SEO experts is here
                      to help you achieve your goals and dominate the YouTube
                      search results.
                    </p>
                    <p>
                      At Dawood Proud, we understand the importance of having
                      your videos rank high in YouTube&apos;s search results.
                    </p>
                    <p>
                      With millions of videos uploaded every day, it&apos;s
                      crucial to have a strong presence and visibility to stand
                      out from the competition.
                    </p>
                  </div>
                  <h3 className="text-[24px] md:text-[36px] xl:text-[42px] font-bold font-Factor_A">
                    Here&apos;s how our YouTube SEO experts can assist you:
                  </h3>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-16 p-3 ">
                  <h2
                    id="youtube_keyword_research"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    YouTube Keyword Research
                  </h2>
                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Our skilled team will conduct in-depth keyword research
                      using our DP Web Crawlers.
                    </p>
                    <p>
                      By identifying the most relevant, high volume, low
                      competition and high-performing keywords in your niche, we
                      can ensure that your videos are targeting the right
                      audience and maximizing their visibility.
                    </p>
                  </div>

                  <h2
                    id="optimized_title_description_optimization"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Optimized Title and Description Optimization
                  </h2>
                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      We will optimize your video titles and descriptions based
                      on variations of the targeted keywords.
                    </p>
                    <p>
                      This optimization technique not only helps improve your
                      video&apos;s relevancy to search queries but also
                      increases the chances of attracting clicks and views.
                    </p>
                  </div>
                  <h2
                    id="high_volume_tags_hashtags"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    High-Volume Tags and Hashtags
                  </h2>
                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Our YouTube SEO Experts will carefully select and add
                      high-volume tags and hashtags to your videos.
                    </p>
                    <p>
                      These tags and hashtags will enhance the discoverability
                      of your content and improve its chances of appearing in
                      relevant search results and recommendation algorithms.
                    </p>
                  </div>
                  <h2
                    id="internal_linking_youtube_videos"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Internal Linking of YouTube Videos
                  </h2>
                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      We will implement effective internal linking strategies
                      within your YouTube channel.
                    </p>
                    <p>
                      By interconnecting your videos, we can boost the overall
                      visibility of your content and encourage viewers to
                      explore more of your channel, increasing watch time and
                      engagement.
                    </p>
                  </div>
                  <h3
                    id="end_screen_cards_integration"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    End Screen and Cards Integration
                  </h3>

                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Our team will leverage the power of YouTube&apos;s end
                      screen and cards feature to promote your other videos,
                      playlists, or even external links.
                    </p>
                    <p>
                      By strategically placing end screens and cards, we can
                      drive more traffic to your content and keep viewers
                      engaged within your channel.
                    </p>
                  </div>
                  <h3
                    id="staying_updated_youtube_algorithm"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Staying Updated with YouTube Algorithm
                  </h3>

                  <div className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Our YouTube SEO specialists are constantly monitoring the
                      latest updates and changes to YouTube&apos;s algorithm.
                    </p>
                    <p>
                      This allows us to adapt our strategies and techniques
                      accordingly, ensuring that your videos align with the
                      platform&apos;s guidelines and take full advantage of any
                      algorithmic changes.
                    </p>
                    <p>
                      With our comprehensive YouTube SEO services, you can
                      expect to see significant improvements in your video
                      rankings, organic traffic, and subscriber engagement.
                    </p>
                    <p>
                      Let us help you unlock the full potential of your YouTube
                      channel and achieve the success you deserve.
                    </p>
                  </div>
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
