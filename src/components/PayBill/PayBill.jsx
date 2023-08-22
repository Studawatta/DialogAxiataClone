import "./PayBill.scss";
import SimCardIcon from "@mui/icons-material/SimCard";
import RouterIcon from "@mui/icons-material/Router";
import HouseIcon from "@mui/icons-material/House";
import TvIcon from "@mui/icons-material/Tv";
const PayBill = () => {
  return (
    <div className="payBill">
      <div className="numberInput">
        <span>Pay bills & Reload</span>
        <div>
          <input type="text" placeholder="Enter connection number" />
          <button>GO</button>
        </div>
      </div>
      <div className="rightItem">
        <HouseIcon className="icon" />
        <span>Smart Home</span>
      </div>
      <div className="rightItem">
        <SimCardIcon className="icon" />
        <span>Buy SIM</span>
      </div>
      <div className="rightItem">
        <RouterIcon className="icon" />
        <span>Buy Broadband</span>
      </div>
      <div className="rightItem">
        <TvIcon className="icon" />

        <span>Buy Dialog TV</span>
      </div>
    </div>
  );
};

export default PayBill;
