import "./BottomSlider.scss";
import img01 from "../../assets/botomSliderImgs/img01.jpg";
import img02 from "../../assets/botomSliderImgs/img02.jpg";
import img03 from "../../assets/botomSliderImgs/img03.jpg";
import img04 from "../../assets/botomSliderImgs/img04.jpg";
import img05 from "../../assets/botomSliderImgs/img05.jpg";
import img06 from "../../assets/botomSliderImgs/img06.jpg";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RouterIcon from "@mui/icons-material/Router";
import { useEffect, useState } from "react";

const BottomSlider = () => {
  const [selected, setSelected] = useState("orderOnline");
  const images = [
    img01,
    img02,
    img03,
    img04,
    img01,
    img05,
    img06,
    img02,
    img04,
    img03,
    img05,
    img02,
    img01,
    img04,
    img01,
    img05,
    img06,
    img01,
    img05,
    img06,
    img02,
    img01,
    img02,
    img03,
    img04,
    img01,
    img05,
    img06,
    img02,
    img04,
    img03,
    img05,
    img02,
    img01,
    img04,
    img01,
    img05,
    img06,
    img01,
    img05,
    img06,
    img02,
  ];
  const [c, setC] = useState("");
  useEffect(() => {
    setC("bottomSliderAction");
  });
  return (
    <div className="bottomSlider">
      <div className={c}>
        <div>
          {images.map((img, index) => (
            <img src={img} key={index} />
          ))}
        </div>
      </div>

      <div className="content">
        <h1>Order all your Dialog Connections Online</h1>
        <p>FREE Island-Wide Delivery</p>
        <button>ORDER NOW</button>
      </div>
      <div className="bottomButtons">
        <div
          className={selected === "orderOnline" ? "selectedButton" : "buttons"}
          onClick={() => setSelected("orderOnline")}
        >
          <LocalOfferIcon className="icon" />
          Order Online
        </div>
        <div
          className={
            selected === "homeBroadband" ? "selectedButton" : "buttons"
          }
          onClick={() => setSelected("homeBroadband")}
        >
          <RouterIcon className="icon" />
          Home Broadband
        </div>
      </div>
    </div>
  );
};

export default BottomSlider;
