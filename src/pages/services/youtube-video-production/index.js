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
      name: "6. Staying Updated with YouTube Algorithm",
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

      <div className="w-full flex flex-col justify-center items-center h-full font-Inter">
        <div className="w-full  bg-[#121521] ">
          <Navbar bg_color={"white"} position={"sticky"} />
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
                YouTube Video Creation Services to Maximize Your YouTube Success
              </h1>
            </div>
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start">
                <div className="flex flex-col justify-center item-center gap-4 mb-3">
                  <h3 className="text-base md:text-lg p-2 lg:p-1 font-normal font-Inter mt-4">
                    Are you looking to skyrocket your YouTube video rankings and
                    attract a consistent flow of views and engaged subscribers?
                    Look no further! Our team of YouTube SEO experts is here to
                    help you achieve your goals and dominate the YouTube search
                    results.
                    <br />
                    <br />
                    <span>
                      At Dawood Proud, we understand the importance of having
                      your videos rank high in YouTube's search results. With
                      millions of videos uploaded every day, it's crucial to
                      have a strong presence and visibility to stand out from
                      the competition.
                    </span>
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
                  <h3 className="text-base md:text-lg lg:text-xl font-Inter font-medium p-1 -mb-8">
                    Here's how our YouTube SEO experts can assist you:
                  </h3>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-16 p-3 ">
                  <h2
                    id="youtube_keyword_research"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    YouTube Keyword Research
                  </h2>
                  <p className="text-sm sm:text-base">
                    Our skilled team will conduct in-depth keyword research
                    using our DP Web Crawlers. By identifying the most relevant,
                    high volume, low competition and high-performing keywords in
                    your niche, we can ensure that your videos are targeting the
                    right audience and maximizing their visibility.
                  </p>

                  <h2
                    id="optimized_title_description_optimization"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    Optimized Title and Description Optimization
                  </h2>
                  <p className="text-sm sm:text-base">
                    We will optimize your video titles and descriptions based on
                    variations of the targeted keywords. This optimization
                    technique not only helps improve your video's relevancy to
                    search queries but also increases the chances of attracting
                    clicks and views.
                  </p>

                  <h2
                    id="high_volume_tags_hashtags"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    High-Volume Tags and Hashtags
                  </h2>
                  <p className="text-sm sm:text-base">
                    Our YouTube SEO Experts will carefully select and add
                    high-volume tags and hashtags to your videos. These tags and
                    hashtags will enhance the discoverability of your content
                    and improve its chances of appearing in relevant search
                    results and recommendation algorithms.
                  </p>

                  <h2
                    id="internal_linking_youtube_videos"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    Internal Linking of YouTube Videos
                  </h2>
                  <p className="text-sm sm:text-base">
                    We will implement effective internal linking strategies
                    within your YouTube channel. By interconnecting your videos,
                    we can boost the overall visibility of your content and
                    encourage viewers to explore more of your channel,
                    increasing watch time and engagement.
                  </p>

                  <h3
                    id="end_screen_cards_integration"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    End Screen and Cards Integration
                  </h3>
                  <p className="text-sm sm:text-base">
                    Our team will leverage the power of YouTube's end screen and
                    cards feature to promote your other videos, playlists, or
                    even external links. By strategically placing end screens
                    and cards, we can drive more traffic to your content and
                    keep viewers engaged within your channel.
                  </p>

                  <h3
                    id="staying_updated_youtube_algorithm"
                    className="text-xl md:text-2xl font-semibold"
                  >
                    Staying Updated with YouTube Algorithm
                  </h3>
                  <p className="text-sm sm:text-base">
                    Our YouTube SEO specialists are constantly monitoring the
                    latest updates and changes to YouTube's algorithm. This
                    allows us to adapt our strategies and techniques
                    accordingly, ensuring that your videos align with the
                    platform's guidelines and take full advantage of any
                    algorithmic changes.
                  </p>

                  <p className="text-sm sm:text-base">
                    With our comprehensive YouTube SEO services, you can expect
                    to see significant improvements in your video rankings,
                    organic traffic, and subscriber engagement. Let us help you
                    unlock the full potential of your YouTube channel and
                    achieve the success you deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default youtubeseo;
