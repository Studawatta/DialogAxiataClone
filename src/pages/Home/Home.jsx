import BottomSlider from "../../components/BottomSlider/BottomSlider";
import Navbar from "../../components/Navbar/Navbar";
import PayBill from "../../components/PayBill/PayBill";
import TopSlider from "../../components/TopSlider/TopSlider";
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
    </>
  );
};

export default Home;
