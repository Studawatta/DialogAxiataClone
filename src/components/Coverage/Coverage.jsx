import "./Coverage.scss";
import coverage from "../../assets/coverage.png";

const Coverage = () => {
  return (
    <div className="coverage">
      <div className="container">
        <div className="left">
          <p>
            <span>Sri Lanka's</span>
            <br />
            Widest Network
          </p>
          <button>CHECK COVERAGE</button>
        </div>
        <img src={coverage} alt="coverage" />
      </div>
    </div>
  );
};

export default Coverage;
