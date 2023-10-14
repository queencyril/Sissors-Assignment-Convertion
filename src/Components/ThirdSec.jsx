import React from 'react'
import sideline from '../assets/sideline.jpg'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

function Sec3() {
  return (
  <>
 
  {/* Third Section */}
  <section id="sec3">
  <div className="sec-3">
    <img src={sideline} alt="SideLine" id="img1" />
    <h1>
      Why choose <span style={{ color: "#005AE2" }}>Scissors</span>
    </h1>
    <p>
      Scissors is the hub of everything that has to do with your link
      management. We shorten your URLs, allow you creating custom ones for your
      personal, business, event usage. Our swift QR code creation, management
      and usage tracking with advance analytics for all of these is second none.
    </p>
  </div>
  <div>
    <div>
      <img
        src={icon1}
        alt="logo"
        style={{ width: 40, margin: "0 50px 20px 30px" }}
      />
    </div>
    <div className="sec3-1">
      <h1>URL Shortening</h1>
      <p>
        Scissor allows you to shorten URLs of your business, events. Shorten
        your URL at scale, URL redirects.
      </p>
    </div>
  </div>
  <div>
    <div>
      <img
        src= {icon2}
              alt="logo"
        style={{ width: 40, margin: "0 50px 20px 20px" }}
      />
    </div>
    <div className="sec3-2">
      <h1>Custom URLs</h1>
      <p>
        With Scissor, you can create custom URLs, with the length you want! A
        solution for socials and businesses.
      </p>
    </div>
  </div>
  <div></div>
  <div>
    <div>
      <img
        src={icon3}
        alt="logo"
        style={{ width: 40, margin: "0 50px 20px 30px" }}
      />
    </div>
    <div className="sec3-3">
      <h1>QR Codes</h1>
      <p>
        Generate QR codes to your business, events. Bring your audience and
        customers to your doorstep with this scan and go solution.
      </p>
    </div>
  </div>
  <div>
    <div>
      <img
        src={icon4}
        alt="logo"
        style={{ width: 40, margin: "0 50px 20px 20px" }}
      />
    </div>
    <div className="sec3-4">
      <h1>Data Analytics</h1>
      <p>
        Receive data on the usage of either your shortened URL, custom URLs or
        generated QR codes. Embedded to monitor progress.
      </p>
    </div>
  </div>
</section>


</>
  );
}

export default Sec3;
