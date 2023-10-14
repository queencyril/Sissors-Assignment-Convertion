import React from 'react'
import Group3 from '../assets/Group3.png'
import sideline from '../assets/sideline.jpg'

function FaqAndRevolutionizingSec() {
  return (
  <>

  {/* FAQs */}
  <div id="FAQs">
    <div className="sec6">
      <img src={sideline} alt="blackmark" className="mark" />
      <div>
        <h1>FAQs</h1>
      </div>
      <div className="faq">
        <section>
          <details>
            <summary>How does URL shortening work? </summary>
            <p>
              URL shortening works by taking a long URL and creating a shorter,
              condensed version that redirects to the original URL. When a user
              clicks on the shortened link, they are redirected to the intended
              destination.
            </p>
          </details>
          <details>
            <summary>
              Is it necessary to create an account to use the URL shortening
              service?{" "}
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium cupiditate quaerat quia fugiat reprehenderit, possimus
              architecto. Ratione accusantium adipisci quas eius repudiandae
              commodi enim? Vitae veniam earum ipsa optio voluptatem.
            </p>
          </details>
          <details>
            <summary>
              Are the shortened links permanent? Will they expire?{" "}
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium cupiditate quaerat quia fugiat reprehenderit, possimus
              architecto. Ratione accusantium adipisci quas eius repudiandae
              commodi enim? Vitae veniam earum ipsa optio voluptatem.
            </p>
          </details>
          <details className="summ">
            <summary>
              Are there any limitations on the number of URLs I can shorten?{" "}
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium cupiditate quaerat quia fugiat reprehenderit, possimus
              architecto. Ratione accusantium adipisci quas eius repudiandae
              commodi enim? Vitae veniam earum ipsa optio voluptatem.
            </p>
          </details>
          <details className="detail">
            <summary>
              Can I customize the shortened URLs to reflect my brand or content?{" "}
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium cupiditate quaerat quia fugiat reprehenderit, possimus
              architecto. Ratione accusantium adipisci quas eius repudiandae
              commodi enim? Vitae veniam earum ipsa optio voluptatem.
            </p>
          </details>
          <details>
            <summary>
              Can I track the performance of my shortened URLs?{" "}
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium cupiditate quaerat quia fugiat reprehenderit, possimus
              architecto. Ratione accusantium adipisci quas eius repudiandae
              commodi enim? Vitae veniam earum ipsa optio voluptatem.
            </p>
          </details>
          <details>
            <summary>
              How secure is the URL shortening service? Are the shortened links
              protected against spam or malicious activity?{" "}
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium cupiditate quaerat quia fugiat reprehenderit, possimus
              architecto. Ratione accusantium adipisci quas eius repudiandae
              commodi enim? Vitae veniam earum ipsa optio voluptatem.
            </p>
          </details>
          <details>
            <summary>What is a QR code and what can it do? </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium cupiditate quaerat quia fugiat reprehenderit, possimus
              architecto. Ratione accusantium adipisci quas eius repudiandae
              commodi enim? Vitae veniam earum ipsa optio voluptatem.
            </p>
          </details>
          <details className="last-de">
            <summary>
              Is there an API available for integrating the URL shortening
              service into my own applications or websites?{" "}
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium cupiditate quaerat quia fugiat reprehenderit, possimus
              architecto. Ratione accusantium adipisci quas eius repudiandae
              commodi enim? Vitae veniam earum ipsa optio voluptatem.
            </p>
          </details>
        </section>
      </div>
    </div>
  </div>
  <section style={{ marginTop: 120 }}>
    <div
      className="sec7"
      style={{
        textAlign: "center",
        padding: 90,
        background:
          "linear-gradient(180deg, #1E3448 99.99%, rgba(30, 52, 72, 0.00) 100%)"
      }}
    >
      <div>
        <img
          src={Group3}
          alt="bg"
          style={{
            float: "left",
            marginLeft: "-110px",
            marginTop: "-90px",
            zIndex: 2,
            marginRight: "-500px"
          }}
        />
      </div>
      <div>
        <h1>Revolutionizing Link Optimization</h1>
      </div>
      <div className="btn4">
        <button>Get Started</button>
      </div>
    </div>
  </section>

</>
  );
}

export default FaqAndRevolutionizingSec;
