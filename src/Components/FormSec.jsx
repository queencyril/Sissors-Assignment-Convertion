import React from 'react'
import bg1 from '../assets/bg1.png'
import dropdownarrow from '../assets/dropdownarrow.png'
import magicWand from '../assets/magicWand.png'

function FormSec() {
  return (
  <>

  {/* form section */}
  <div>
    <img
      src={bg1}
      alt=""
      style={{ zIndex: 20, height: 430, marginLeft: "-200px" }}
    />
  </div>
  <section
    style={{
      background:
        "linear-gradient(180deg, #1E3448 99.99%, rgba(30, 52, 72, 0.00) 100%)",
      padding: "70px 0 20px 0",
      marginTop: "-436px"
    }}
  >
    <div id="form">
      <form action="submit">
        <input type="text" placeholder="Paste URL here..." />
        <div className="forminput">
          <div style={{ marginRight: 8 }}>
            <input type="text" placeholder="Choose Domain" />
          </div>
          <div>
            <input type="text" placeholder="Type Alias here" />
          </div>
        </div>
        <img
          src={dropdownarrow}
               alt="selectbutton"
          className="drop"
        />
        <div>
          <div id="trimbtn" style={{ marginBottom: "-10px" }}>
            <button> Trim URL</button>
          </div>
          <div>
            <img
              src={magicWand}
              alt="wardtool"
              style={{ marginLeft: 230, marginTop: "-50px" }}
            />
          </div>
          <div className="terms-and-privacy">
            <p>
              By clicking TrimURL, I agree to the{" "}
              <a href="">Terms of Service</a>, <a href="">Privacy Policy</a> and
              Use of Cookies.
            </p>
          </div>
        </div>
      </form>
    </div>
  </section>

</>
  );
}

export default FormSec;


