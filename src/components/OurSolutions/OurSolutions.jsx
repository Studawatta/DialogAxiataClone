import "./OurSolutions.scss";
import s01 from "../../assets/solutions/s01.png";
import s02 from "../../assets/solutions/s02.png";
import s03 from "../../assets/solutions/s03.png";
import s04 from "../../assets/solutions/s04.png";
import s05 from "../../assets/solutions/s05.png";
import s06 from "../../assets/solutions/s06.png";

const OurSolutions = () => {
  const solutions = [
    {
      image: s01,
      name: "eZ Cash",
    },
    {
      image: s02,
      name: "Genie",
    },
    {
      image: s03,
      name: "Doc990",
    },
    {
      image: s04,
      name: "444.lk",
    },
    {
      image: s05,
      name: "Lesi Pay",
    },
    {
      image: s06,
      name: "Dialog Finance",
    },
  ];
  return (
    <div className="ourSolutions">
      <div className="container">
        <h1>Our solutions to improve your lifestyle</h1>
        <p>Stay one step ahead every day with our digital solutions</p>
        <div className="bottom">
          {solutions.map((solution, index) => (
            <div key={index} className="card">
              <img src={solution.image} alt="image" />
              <span>{solution.name}</span>
            </div>
          ))}
        </div>
        <button>VIEW MORE</button>
      </div>
    </div>
  );
};

export default OurSolutions;
