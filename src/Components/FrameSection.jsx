import React from 'react'
import downframe from '../assets/downframe.jpg'
import Frame from '../assets/Frame.png'
import hiddenimg from '../assets/hiddenimg.png'

function FrameSec() {
  return (
  <>
 
  {/* Designing the frames */}
  <div className="frames">
    <div>
      <img src={hiddenimg} alt="hidden-img" id="buttomframe" />
    </div>
    <div>
      <img src={Frame} alt="top-img" id="topframe" />
    </div>
    <div className="frameparagraph">
      <p>
        Seamlessly transform your long URLs into{" "}
        <span style={{ fontWeight: 600 }}>concise</span> and{" "}
        <span style={{ fontWeight: 600 }}>shareable links</span> with just few
        clicks..
      </p>
    </div>
  </div>
  {/* Lower-disc */}
  <div>
    <img src={downframe} alt="downframe" id="lowerdisc" />
  </div>
</>
  );
}

export default FrameSec;
