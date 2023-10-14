import React from 'react'
import darkLogo from '../assets/darkLogo.png'
import twitter from '../assets/twitter.png'
import feather from '../assets/feather.png'
import fbLogo from '../assets/fbLogo.png'
import Group2 from '../assets/Group2.png'


function PageFootSection() {
  return (
  <>
{/* Final Section */}
<section className="lastsec" style={{ marginTop: 90 }} id="URLs">
  <div id="foot">
    <div className="lastsec1">
      <img
        src={darkLogo}
        alt="logo"
        style={{ marginBottom: 20 }}
        className="logoo"
      />
      <div className="icons">
        <a href="">
          <img src={twitter} alt="twitter-logo" />
        </a>
        <a href="">
          <img src={feather} alt="IG-logo" />
        </a>
        <a href="">
          <img src={Vector2} alt="Linkln-logo" />
        </a>
        <a href="">
          <img src={fbLogo} alt="fb-logo" />
        </a>
      </div>
    </div>
    <div className="first">
      <h3>Why Scissor?</h3>
      <ul>
        <li>Scissor 101</li>
        <li>Integrations &amp; API</li>
        <li>Pricing</li>
      </ul>
    </div>
    <div className="second">
      <h3>Solutions</h3>
      <ul>
        <li>Social Media</li>
        <li>Digital Marketing</li>
        <li>Customer Service</li>
        <li>For Developers</li>
      </ul>
    </div>
    <div>
      <h3>Products</h3>
      <ul>
        <li>Link Management</li>
        <li>QR Codes</li>
        <li>Link-in-bio </li>
      </ul>
    </div>
    <div className="third">
      <h3>Company</h3>
      <ul>
        <li>About Scissor</li>
        <li>Careers</li>
        <li>Partners</li>
        <li>Press</li>
        <li>Contact</li>
        <li>Reviews</li>
      </ul>
    </div>
    <div className="empty"></div>
    <div>
      <h3>Resources</h3>
      <ul>
        <li>Blog</li>
        <li>Resource Library</li>
        <li>Developers</li>
        <li>App Connectors</li>
        <li>Support</li>
        <li>Trust Center</li>
        <li>Browser Extension</li>
        <li>Mobile App</li>
      </ul>
    </div>
    <div className="forth">
      <h3>Features</h3>
      <ul>
        <li>Branded Links</li>
        <li>Mobile Links</li>
        <li>Campaign</li>
        <li>Management &amp;</li>
        <li>Analytics</li>
        <li>QR Code generation</li>
      </ul>
    </div>
    <div className="fifth">
      <h3>Legal</h3>
      <ul>
        <li>Private Policy</li>
        <li>Cookie Policy</li>
        <li>Terms of Service</li>
        <li>Acceptable Use Policy</li>
        <li>Code of Conduct</li>
      </ul>
    </div>
  </div>
  <footer style={{ float: "right", marginTop: "-200px" }}>
    <img src={Group2} alt="" style={{ marginBottom: "-80px" }} />
    <div style={{ marginLeft: 120 }}>
      <p>Term of Service | Security | ⓒ Scissor 2023</p>
    </div>
  </footer>
</section>


</>
  );
}

export default PageFootSection;




