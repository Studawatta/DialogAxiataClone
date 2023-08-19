import SearchIcon from "@mui/icons-material/Search";
import Person2Icon from "@mui/icons-material/Person2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { useState } from "react";
import logo from "../../assets/logo.png";
import useMediaQuery from "../../hooks/useMediaQuary";
import "./Navbar.scss";
const Navbar = () => {
  const [Highlight, setHilight] = useState("explore");
  const [typeHighlight, setTypeHilight] = useState("personal");
  const [lanHighlight, setLanHilight] = useState("english");
  const [showDropDown, setShowDropDown] = useState(false);

  const isAboveSmallScreens = useMediaQuery("(min-width:769px)");
  const isAboveMobileScreens = useMediaQuery("(min-width:765px)");

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="right">
          <div className="top">
            {isAboveSmallScreens ? (
              <div className="topLeft">
                <span
                  onClick={() => setTypeHilight("personal")}
                  className={
                    typeHighlight === "personal" ? "typeHighlight" : "item"
                  }
                >
                  Personal
                </span>
                <span
                  onClick={() => setTypeHilight("business")}
                  className={
                    typeHighlight === "business" ? "typeHighlight" : "item"
                  }
                >
                  Business
                </span>
                <span
                  className={
                    typeHighlight === "about" ? "typeHighlight" : "item"
                  }
                  onClick={() => setTypeHilight("about")}
                >
                  About
                </span>
              </div>
            ) : (
              <div className="topLeftDropDown">
                <div
                  className="button"
                  onClick={() => setShowDropDown(!showDropDown)}
                >
                  {typeHighlight}
                  <KeyboardArrowDownIcon />
                </div>
                {showDropDown && (
                  <div className="dropDown">
                    <span>Personal</span>
                    <span>Business</span>
                    <span>About</span>
                  </div>
                )}
              </div>
            )}

            <div className="topRight">
              {isAboveMobileScreens && (
                <div className="lanCont">
                  <span
                    onClick={() => setLanHilight("english")}
                    className={
                      lanHighlight === "english" ? "lanHighlight" : "item"
                    }
                  >
                    English
                  </span>
                  <span
                    onClick={() => setLanHilight("sinhala")}
                    className={
                      lanHighlight === "sinhala" ? "lanHighlight" : "item"
                    }
                  >
                    Sinhala
                  </span>
                  <span
                    onClick={() => setLanHilight("tamil")}
                    className={
                      lanHighlight === "tamil" ? "lanHighlight" : "item"
                    }
                  >
                    Tamil
                  </span>
                </div>
              )}

              <div className="topButtonsCont">
                <button className="cartButton">
                  <ShoppingCartSharpIcon className="icon" />
                  {isAboveMobileScreens && "Cart Empty"}
                </button>
                <button className="reloadButton">Reload / Pay Bill</button>
                <button className="loginButton">
                  {isAboveMobileScreens ? "Login / Register" : <Person2Icon />}
                </button>
              </div>
            </div>
          </div>
          {isAboveMobileScreens ? (
            <div className="bottom">
              <div className="bottomLeft">
                <span
                  className={Highlight === "explore" ? "highlight" : "item"}
                  onClick={() => setHilight("explore")}
                >
                  EXPLORE & SHOP
                </span>
                <span
                  className={Highlight === "account" ? "highlight" : "item"}
                  onClick={() => setHilight("account")}
                >
                  MY ACCOUNT
                </span>
                <span
                  className={Highlight === "support" ? "highlight" : "item"}
                  onClick={() => setHilight("support")}
                >
                  SUPPROT
                </span>
              </div>
              <div className="bottomRight">
                <input type="text" className="search" />
                <span className="icon">
                  <SearchIcon className="icon" />
                </span>
              </div>
            </div>
          ) : (
            <div className="lanCont">
              <span
                onClick={() => setLanHilight("english")}
                className={lanHighlight === "english" ? "lanHighlight" : "item"}
              >
                English
              </span>
              <span
                onClick={() => setLanHilight("sinhala")}
                className={lanHighlight === "sinhala" ? "lanHighlight" : "item"}
              >
                Sinhala
              </span>
              <span
                onClick={() => setLanHilight("tamil")}
                className={lanHighlight === "tamil" ? "lanHighlight" : "item"}
              >
                Tamil
              </span>
            </div>
          )}
        </div>
      </div>
      {isAboveMobileScreens ? (
        ""
      ) : (
        <div className="bottomContainer">
          <button>Reload / Pay Bill</button>
          <button>Menu</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
