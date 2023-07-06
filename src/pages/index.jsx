
import Hero from "../../components/Herosection/Hero";
import ServiceCards from "../../components/Services components/ServiceCards"

import SuperchargeYT from "../../components/ConsultationForm/CallToAction";
import YtSlider from "../../components/YtSlider/Slider";

import Footer from "../../components/common/Footer";




const Home = () => {
  return (
    <div className=" bg-[white] ">
      {/* [url('/Images/main-bg1.jpg')] */}
      <Hero />

      <YtSlider />
      <ServiceCards />
      <SuperchargeYT />
      <Footer />
    </div>
  )
}

export default Home