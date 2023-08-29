import "./Vision.scss";
import v01 from "../../assets/vision/v01.jpg";
import v02 from "../../assets/vision/v02.jpg";
import v03 from "../../assets/vision/v03.jpg";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
const Vision = () => {
  const cardContent = [
    {
      image: v01,
      header: "New digital possibilities for marginalised communities",
      button: "LEARN MORE >",
    },
    {
      image: v02,
      header: "Connecting women with professional support",
      button: "LEARN MORE >",
    },
    {
      image: v03,
      header: "Investing in the top young minds",
      button: "LEARN MORE >",
    },
  ];
  return (
    <div className="vision">
      <div className="container">
        <h1>True to our vision of "Empowering & Enriching Sri Lankan Lives"</h1>
        <p>
          Dialog is working in your communities, supporting Sri Lankans in all
          their endeavours
        </p>
        <div className="bottom">
          {cardContent.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt="image" />
              <div>
                <h2>{card.header}</h2>
                <button>{card.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;
