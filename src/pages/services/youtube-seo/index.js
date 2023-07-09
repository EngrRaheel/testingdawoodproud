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
      name: "2. High-Quality Content",
      id: "high_quality_content",
    },
    {
      name: "3. Engaging Faceless YouTube Content",
      id: "engaging_faceless_youtube_content",
    },
    {
      name: "4. Tailored Solutions",
      id: "tailored_solutions",
    },
    {
      name: "5. Collaboration and Communication",
      id: "collaboration_communication",
    },
    {
      name: "6. Timely Delivery",
      id: "timely_delivery",
    },
  ];

  const sectionIds = [
    "professional_expertise",
    "high_quality_content",
    "engaging_faceless_youtube_content",
    "tailored_solutions",
    "collaboration_communication",
    "timely_delivery",
  ];

  return (
    <div className="">
      <Head>
        <title>
          YouTube SEO Services to Rank High in YouTube Search Results
        </title>
        <meta
          name="description"
          content="YouTube SEO Agency to Boost your YouTube video rankings. Let our Experts help you gain Consistent Views and Engaged Subscribers."
        />
        <meta
          name="keywords"
          content="YouTube SEO Services, YouTube SEO Expert, YouTube SEO Agency, YouTube SEO Company, YouTube Video SEO Services"
        />
        <meta property="og:title" content="YouTube Consultation" />
        <meta
          property="og:description"
          content="This is the YouTube Consultation page description."
        />
        <meta property="og:image" content="" />
      </Head>

      <div className="w-full flex flex-col justify-center items-center h-full font-Halvic bg-[#001b47]">
        <div className="w-full bg-white">
          <Navbar bg_color={"white"} position={"sticky"} />
        </div>
        <div className="grid grid-cols-1  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px] ">
          <div className=" text-white md:col-start-4 md:col-span-5 flex flex-col items-center justify-center text-center md:text-left mt-8 ">
            <h1 className=" text-[24px] md:text-[32px] lg:text-[36px] xl:text-[44px] font-bold xl:leading-[60px] font-Factor_A  max-w-2xl ">
              {/* We love our customers
              <br />
              <span className="text-[#01b88d]">
                And we&#39;re flattered to <br /> know they love us!
              </span> */}
              <span className="text-[#01b88d]">Best YouTube SEO Services </span>
              to Rank your Videos at the Top of YouTube Search Results
            </h1>
          </div>
          <div className="w-[100%] h-[150px] md:h-[200px] lg:h-[250px] relative md:col-start-9 md:col-span-3 mb-4">
            <Image
              src="/Images/Services/YouTube_SEO_service.png"
              fill
              alt="Youtube_SEO"
              className="object-contain"
            ></Image>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12  bg-white  mx-auto max-w-full  w-full ">
          {/* sidebar here  */}
          <div className="mx-5  md:col-span-3 mt-6 ">
            <div className="sticky top-12 ">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div>
          <div className="w-full mx-auto bg-white min-h-screen md:col-start-4 md:col-span-7 p-2">
            <div className="max-w-[1172px] mx-auto">
              {/* <h1 className="font-Inter font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-12">
                Best YouTube SEO Services to Rank your Videos at the Top of
                YouTube Search Results
              </h1> */}
            </div>
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start">
                <div className="flex flex-col justify-center item-center gap-4 mb-3">
                  <h3 className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter">
                    At Dawood Proud, we offer comprehensive YouTube video
                    production services to help you maximize your success on the
                    platform. Our team of YouTube experts is dedicated to
                    creating high-quality, engaging content that will captivate
                    your audience and drive results.
                    <br />
                    <br />
                    <span>
                      With our YouTube video creation services, we provide a
                      range of solutions tailored to your specific needs.
                      Whether you&apos;re an individual creator, a brand, or a
                      business, we have the expertise to deliver outstanding
                      videos that align with your goals and resonate with your
                      target audience.
                    </span>
                  </h3>

                  {/* image comes here.. */}
                  {/* <div className="relative h-[350px] w-[95%] md:w-[100%] bg-blue mx-auto">
                    <Image
                      src="/Images/Services/Keyword Research.png"
                      alt="YouTube Keyword Research"
                      fill
                      className="object-contain"
                    />
                  </div> */}
                  <h3 className="text-[24px] md:text-[36px] xl:text-[42px] font-bold font-Factor_A">
                    Why Choose Our YouTube Video Production Services:
                  </h3>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-16 p-3 ">
                  <h2
                    id="professional_expertise"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Professional Expertise
                  </h2>
                  <p className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter">
                    Our team consists of experienced professionals who
                    understand the intricacies of YouTube video production. We
                    stay up to date with the latest trends, techniques, and
                    strategies to ensure that your videos stand out from the
                    crowd.
                  </p>

                  <h2
                    id="high_quality_content"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    High-Quality Content
                  </h2>
                  <p className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter">
                    We pride ourselves on delivering exceptional quality in
                    every video we create. From scripting and storyboarding to
                    filming and editing, we maintain a keen eye for detail to
                    produce polished, visually appealing videos that leave a
                    lasting impact.
                  </p>

                  <h2
                    id="engaging_faceless_youtube_content"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Engaging Faceless YouTube Content
                  </h2>
                  <p className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter">
                    Our video production approach emphasizes engaging faceless
                    content that captivates viewers. We understand the
                    importance of connecting with your audience, and our
                    creative team excels at crafting videos that resonate with
                    viewers, even without on-screen talent.
                  </p>

                  <h2
                    id="tailored_solutions"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Tailored Solutions
                  </h2>
                  <p className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter">
                    We recognize that each YouTube channel is unique, with its
                    own branding, goals, and target audience. Our services are
                    fully customizable to meet your specific requirements. We
                    take the time to understand your vision and tailor our
                    approach accordingly, ensuring that the final product aligns
                    seamlessly with your brand identity.
                  </p>

                  <h3
                    id="collaboration_communication"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Collaboration and Communication
                  </h3>
                  <p className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter">
                    We believe in working closely with our clients throughout
                    the video production process. From initial ideation to final
                    delivery, we maintain open lines of communication, seeking
                    your input and feedback at every stage. Our collaborative
                    approach ensures that your vision is brought to life while
                    leveraging our expertise.
                  </p>

                  <h3
                    id="timely_delivery"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Timely Delivery
                  </h3>
                  <p className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter">
                    We understand the importance of timely delivery in the
                    fast-paced world of YouTube. Our team is committed to
                    meeting deadlines without compromising on quality. You can
                    trust us to deliver your videos promptly, allowing you to
                    maintain a consistent content schedule and engage your
                    audience effectively.
                  </p>

                  <p className="text-[16px] md:text-[20.4px] p-2 lg:p-1 font-light leading-[32.4px]  mt-4 font-Inter">
                    Partner with Dawood Proud for your YouTube video production
                    needs and take your channel to new heights. Contact us today
                    to discuss how our services can help you achieve your
                    YouTube goals.
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
