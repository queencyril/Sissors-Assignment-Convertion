import React from 'react'
import Logo from "../assets/Logo.png";
import Vector1 from "../assets/Vector1.png";

function NavSec() {
  return (
  <>
  {/* NavBar Section */}
  <nav>
    <div className="topnav">
      <div className="headerlogo">
        <img src={Logo} alt="headerlogo" width="130px" />
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#URLs">My URLs</a>
          </li>
          <li>
            <a href="#Features">
              Features <img src={Vector1} alt="" />
            </a>
          </li>
          <li>
            <a href="#Pricing">Pricing</a>
          </li>
          <li>
            <a href="#Analytics">Analytics</a>
          </li>
          <li>
            <a href="#FAQs">FAQs</a>
          </li>
        </ul>
      </div>
      <div>
        <button>Log in</button>
        <button>Try for free</button>
      </div>
    </div>
  </nav>
</>
  );
}

export default NavSec;
