import React from 'react'
import linestroke from '../assets/linestroke.png'

function HeroSection() {
  return (
  <>
  {/* Hero Section */}
  <section id="herosection">
    <div className="main">
      <h1>
        {" "}
        Optimize Your Online Experience with Our Advanced{" "}
        <span style={{ color: "#005AE2" }}>URL Shortening</span>
        Solution
      </h1>
    </div>
    <div
      id="line"
      style={{
        width: "70vw",
        margin: "0 auto",
        textAlign: "center",
        marginTop: "-10px"
      }}
    >
      <img src={linestroke} alt="stroke_img" />
    </div>
    <div className="main_paragraph">
      <p>
        {" "}
        Personalize your shortened URLs to align with your brand identity.
        Utilize custom slugs, branded links, and domain customization options to
        reinforce your brand presence and enhance user engagement.
      </p>
    </div>
    <div className="btns">
      <button>Sign Up</button>
      <button>Learn more</button>
    </div>
  </section>
</>
  );
}

export default HeroSection;
