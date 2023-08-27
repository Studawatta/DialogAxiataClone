import "./Ads.scss";
import ad01 from "../../assets/adsImgs/ad01.jpg";
import ad02 from "../../assets/adsImgs/ad02.jpg";
import ad03 from "../../assets/adsImgs/ad03.png";
import ad04 from "../../assets/adsImgs/ad04.jpg";

const Ads = () => {
  const ads = [
    {
      head: "South Asia's First Trail Network",
      desc: "Now in More Locations",
      button: "LEARN MORE",
      img: ad01,
    },
    {
      head: "Access zoom, youtube, teams Apps and Web Browsing at Amazing Rates",
      desc: "",
      button: "ACTIVATE NOW",
      img: ad02,
    },
    {
      head: "Play & Stand a Chance to Win upto Rs.5000/- Reloads & Data 5GB",
      desc: "Terms & Conditions Apply",
      button: "PLAY NOW",
      img: ad03,
    },
    {
      head: "UNLIMITED Calls to Any Network",
      desc: "Rs.650/- a month (Inclusive of Taxes)",
      button: "ACTIVATE NOW",
      img: ad04,
    },
  ];
  return (
    <div className="ads">
      {ads.map((ad, index) => (
        <div key={index} className="card">
          <div className="top">
            <h1>{ad.head}</h1>
            <span>{ad.desc}</span>
            <button>{ad.button}</button>
          </div>

          <img src={ad.img} alt="img" />
        </div>
      ))}
    </div>
  );
};

export default Ads;
