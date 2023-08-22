import "./BottomSlider.scss";
import img01 from "../../assets/botomSliderImgs/img01.jpg";
import img02 from "../../assets/botomSliderImgs/img02.jpg";
import img03 from "../../assets/botomSliderImgs/img03.jpg";
import img04 from "../../assets/botomSliderImgs/img04.jpg";
import img05 from "../../assets/botomSliderImgs/img05.jpg";
import img06 from "../../assets/botomSliderImgs/img06.jpg";
import { useEffect, useState } from "react";

const BottomSlider = () => {
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
  ];
  const [c, setC] = useState("");
  useEffect(() => {
    setC("bottomSlider");
  });
  return (
    <div className={c}>
      <div>
        {images.map((img, index) => (
          <img src={img} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BottomSlider;
