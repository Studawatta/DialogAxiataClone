import "./QuickLinks.scss";
import RouterIcon from "@mui/icons-material/Router";
import TvIcon from "@mui/icons-material/Tv";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
const QuickLinks = () => {
  const quicklinks = [
    {
      name: "Mobile",
      icon: <PhoneAndroidIcon className="phoneIcon" />,
    },
    {
      name: "Broadband",
      icon: <RouterIcon className="routerIcon" />,
    },
    {
      name: "Dialog TV",
      icon: <TvIcon className="tvIcon" />,
    },
    {
      name: "Shop",
      icon: <LocalOfferIcon className="shopIcon" />,
    },
    {
      name: "Support",
      icon: <HelpOutlineIcon className="supportIcon" />,
    },
  ];
  return (
    <div className="quickLinks">
      <div className="cont">
        {quicklinks.map((item, index) => (
          <div key={index} className="card">
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
