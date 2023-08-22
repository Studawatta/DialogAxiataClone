import { useEffect, useState } from "react";
import slide01 from "../../assets/topSliderImgs/slide01.jpg";
import slide02 from "../../assets/topSliderImgs/slide02.jpg";
import slide03 from "../../assets/topSliderImgs/slide03.jpg";
import slide04 from "../../assets/topSliderImgs/slide04.jpg";

import "./TopSlider.scss";
const TopSlider = () => {
  const [imgNum, setImgNum] = useState(0);
  const slideImages = [slide01, slide02, slide03, slide04];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imgNum === slideImages.length - 1) {
        setImgNum(0);
      } else {
        setImgNum(imgNum + 1);
      }
    }, 7000);
  });
  return (
    <div className="topSlider">
      <img src={slideImages[imgNum]} alt="slideImg" />
      <div className="pointsCont">
        {slideImages.map((img, index) => (
          <div
            className={index === imgNum ? "pointCurr" : "point"}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TopSlider;
