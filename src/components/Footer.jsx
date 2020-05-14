import React from "react";

export default function Footer() {
  return (
    <div id="contact" className="contact-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h3>Get in touch.</h3>
          <div className="container-part">
            <a href=" # ">
              <img
                alt="../assets/images/Icon-simple-google.png"
                src="/images/Icon-simple-google.png"
              />
            </a>
            &nbsp;
            <a href=" # ">
              <img
                alt="../assets/images/Icon awesome-slack-hash.png"
                src="/images/Icon awesome-slack-hash.png"
              />
            </a>
            &nbsp;
            <a href=" # ">
              {" "}
              <img
                alt="../assets/images/Icon simple-github.png"
                src="/images/Icon simple-github.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
