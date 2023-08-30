import Ads from "../../components/Ads/Ads";
import BottomSlider from "../../components/BottomSlider/BottomSlider";
import Coverage from "../../components/Coverage/Coverage";
import CustomerFeedback from "../../components/CustomerFeedback/CustomerFeedback";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import News from "../../components/News/News";
import OurSolutions from "../../components/OurSolutions/OurSolutions";
import PayBill from "../../components/PayBill/PayBill";
import QuickLinks from "../../components/QuickLinks/QuickLinks";
import TopSlider from "../../components/TopSlider/TopSlider";
import Vision from "../../components/Vision/Vision";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="cont">
        <TopSlider />
        <PayBill />
        <BottomSlider />
      </div>
      <QuickLinks />
      <Ads />
      <Coverage />
      <Vision />
      <CustomerFeedback />
      <News />
      <OurSolutions />
      <Footer />
    </>
  );
};

export default Home;
