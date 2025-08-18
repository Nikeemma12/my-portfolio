import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import {
  MdDarkMode,
  MdContactPage,
  MdLightMode,
  MdOutlineMenuBook,
} from "react-icons/md";
import { SiHyperskill, SiEnterprisedb } from "react-icons/si";
import { TfiMenuAlt } from "react-icons/tfi";
function Navbar() {
  const [lightmode, setLight] = useState(
    localStorage.getItem("lightmode") === "active"
  );
  useEffect(() => {
    localStorage.setItem("lightmode", lightmode ? "active" : "inactive");
    if (lightmode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [lightmode]);
  const HandleClick = () => {
    setLight((l) => !l);
  };
  const [hide, setHide] = useState(true);
  const handleHide = () => {
    setHide((h) => !h);
  };
  return (
    <div className="general-cont">
      <button onClick={handleHide}>
        <TfiMenuAlt style={{ fontSize: "2em" }} />
      </button>
      <header className={hide ? "unhide" : "hide"}>
        <h3>
          <span>Nzube</span>Portfolio
        </h3>
        <ul className="nav">
          <li>
            <FaHome />
            <a href="#">Home</a>
          </li>
          <li>
            <SiHyperskill />
            <a href="#">Skills</a>
          </li>
          <li>
            <MdContactPage />
            <a href="#">Contact</a>
          </li>
          <li>
            <SiEnterprisedb />
            <a href="#">Projects</a>
          </li>
        </ul>
        <div className="end-header">
          <button className="theme-switch" onClick={HandleClick}>
            <span>
              <MdDarkMode style={{ color: "black", fontSize: "1.3em" }} />
            </span>
            <span>
              <MdLightMode style={{ color: "white", fontSize: "1.3em" }} />
            </span>
          </button>
        </div>
      </header>
    </div>
  );
}
export default Navbar;
