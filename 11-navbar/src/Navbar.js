import { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { social } from "./data";

import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if(showLinks){
        linksContainerRef.current.style.height = `${linksHeight}px`
    }else{
        linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])
  return (
    <nav>
      <div className="nav-center">
        <nav className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </nav>

        <Sidebar showLinks={showLinks} linksContainerRef={linksContainerRef} linksRef={linksRef}/>

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
