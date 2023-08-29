import "./News.scss";
import n01 from "../../assets/news/n01.png";
import n02 from "../../assets/news/n02.png";
import n03 from "../../assets/news/n03.png";
import n04 from "../../assets/news/n04.png";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState } from "react";

const News = () => {
  const newsRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);

  const handleClick = (direction) => {
    let distance = newsRef.current.getBoundingClientRect().x - 218.375;
    console.log(distance);
    if (direction === "left" && slideNumber < 3) {
      setSlideNumber(slideNumber + 1);
      newsRef.current.style.transform = `translateX(${-380.5 + distance}px)`;
    } else if (direction === "right" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      newsRef.current.style.transform = `translateX(${370 + distance}px)`;
    }
  };

  const cardContent = [
    {
      news: "Dialog Axiata Awarded Forrester's Customer-Obsessed...",
      image: n01,
    },
    {
      news: "Dialog Delivers a World of Exclusive Benefits with All New Power Plans",
      image: n02,
    },
    {
      news: "Dialog Successfully Trials Wi-Fi 6 powered by 5G via Drones",
      image: n03,
    },
    {
      news: "Sew Desatama Dialog’ Initiative Commissions New Tower",
      image: n04,
    },
    {
      news: "Sew Desatama Dialog’ Initiative Commissions New Tower",
      image: n04,
    },
    {
      news: "Sew Desatama Dialog’ Initiative Commissions New Tower",
      image: n04,
    },
    {
      news: "Sew Desatama Dialog’ Initiative Commissions New Tower",
      image: n04,
    },
    {
      news: "Sew Desatama Dialog’ Initiative Commissions New Tower",
      image: n04,
    },
    {
      news: "Sew Desatama Dialog’ Initiative Commissions New Tower",
      image: n04,
    },
    {
      news: "Sew Desatama Dialog’ Initiative Commissions New Tower",
      image: n04,
    },
    {
      news: "Sew Desatama Dialog’ Initiative Commissions New Tower",
      image: n04,
    },
    {
      news: "Sew Desatama Dialog’ Initiative Commissions New Tower",
      image: n04,
    },
    {
      news: "Sew Desatama Dialog’ Initiative Commissions New Tower",
      image: n04,
    },
  ];
  return (
    <div className="news">
      <div className="container">
        <h1>Dialog news & announcements</h1>
        <div className="slider">
          <div className="arrow" onClick={() => handleClick("left")}>
            <ArrowBackIosNewRoundedIcon />
          </div>
          <div className="sliderContent">
            <div className="mover" ref={newsRef}>
              {cardContent.map((content, index) => (
                <div key={index} className="card">
                  <p> {content.news}</p>
                  <img src={content.image} alt="image" />
                </div>
              ))}
            </div>
          </div>
          <div className="arrow" onClick={() => handleClick("right")}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
