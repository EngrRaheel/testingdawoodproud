
import Hero from "../../components/Herosection/Hero";
import ServiceCards from "../../components/Services components/ServiceCards"

import SuperchargeYT from "../../components/ConsultationForm/CallToAction";
import YtSlider from "../../components/YtSlider/Slider";
import Head from "next/head";
import Footer from "../../components/common/Footer";




const Home = () => {
  return (
    <div className=" bg-[white] ">
      <Head>
        <title>
        Dawood Proud: YouTube Agency for all YouTube Growth Services
        </title>
        <meta
          name="description"
          content="Leading YouTube Channel Growth Agency that offers comprehensive Content Strategy and Best YouTube Growth Services to dominate the platform."
        />
        <meta
          name="keywords"
          content=" YouTube Agency, YouTube Growth Agency, YouTube Channel Growth Agency, Dawood Proud, DawoodProud"
        />
        <meta property="og:title" content="YouTube Consultation" />
        <meta
          property="og:description"
          content="This is the YouTube Consultation page description."
        />
        <meta property="og:image" content="" />
      </Head>

      <Hero />

      <YtSlider />
      <ServiceCards />
      <SuperchargeYT />
      <Footer />
    </div>
  )
}

export default Home