import React from 'react'
import sideline from '../assets/sideline.jpg'
import checkCircle from '../assets/checkCircle.jpg'
import checkCirclewhite from '../assets/checkCirclewhite.png'

function AnalyticsSec() {
  return (
  <> 
  {/* Fourth Section */}
  
  <section id="Analytics">
    <div className="sec4">
      <div>
        <img
          src={sideline}
          alt="blackmark"
          style={{ paddingLeft: 560, marginTop: 70 }}
        />
      </div>
      <div className="sec4-1">
        <h1>
          A <span style={{ color: "#005AE2" }}>price perfect</span> for your
          needs.
        </h1>
        <p>
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>
    </div>
    <div id="sec-4">
      <div className="cards card1 card">
        <p>Basic</p>
        <div>
          <h1>Free</h1>
          <p>Free plan for all users</p>
          <ul className="items" style={{ listStyle: "none" }}>
            <li>
              <img src={checkCircle} alt="checklogo" />
              Unlimited URL Shortening
            </li>
            <li>
              <img src={checkCircle} alt="checklogo" />
              Basic Link Analytics
            </li>
            <li>
              <img src={checkCircle} alt="checklogo" />
              Customizable Short Links
            </li>
            <li>
              <img src={checkCircle} alt="checklogo" />
              Standard Support
            </li>
            <li>
              {" "}
              <img src={checkCircle} alt="checklogo" />
              Ad-supported
            </li>
          </ul>
        </div>
      </div>
      <div className="cards card2">
        <p>Professional</p>
        <div>
          <h1>$15/month</h1>
          <p>Ideal for business creators</p>
          <ul className="items2" style={{ listStyle: "none" }}>
            <li>
              <img src={checkCirclewhite} alt="logo" />
              Enhanced Link Analytics
            </li>
            <li>
              <img src={checkCirclewhite} alt="logo" />
              Custom Branded Domains
            </li>
            <li>
              <img src={checkCirclewhite} alt="logo" />
              Advanced Link Customization
            </li>
            <li>
              <img src={checkCirclewhite} alt="logo" />
              Priority Support
            </li>
            <li>
              <img src={checkCirclewhite} alt="logo" />
              Ad-free Experience
            </li>
          </ul>
        </div>
      </div>
      <div className="cards card3 card" style={{ marginLeft: "-15px" }}>
        <p>Teams</p>
        <div>
          <h1>$25 / month</h1>
          <p>Share with up to 10 users</p>
          <ul className="items3" style={{ listStyle: "none" }}>
            <li>
              <img src={checkCircle} alt="logo" />
              Team Collaboration
            </li>
            <li>
              <img src={checkCircle} alt="logo" />
              User Roles and Permissions
            </li>
            <li>
              <img src={checkCircle}  alt="logo" />
              Enhanced Security
            </li>
            <li>
              <img src={checkCircle} alt="logo" />
              API Access
            </li>
            <li>
              <img src={checkCircle} alt="logo" />
              Dedicated Account
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  </section>
  <section>
    <div className="btns2">
      <button>Get Custom Pricing</button>
      <button>Select Pricing</button>
      <div></div>
    </div>
  </section>
</>
  );
}

export default AnalyticsSec;

