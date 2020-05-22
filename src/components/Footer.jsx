import React from 'react';

export default function Footer() {
  return (
    <footer className="Footer">
      
      <div className="reach-links">
      <div className="centered"><h1>REACH OUT TO US ON </h1></div>
        <a href="https://github.com/OpenSouceCode">
          <img
            alt="../assets/images/footer-github.png"
            src="/images/footer-github.png"
          />
        </a>
        <a href="https://join.slack.com/t/opensourcecode/shared_invite/zt-dcirfg6f-IYydr1qUsAAYaq_ZA48jmg">
          <img
            alt="../assets/images/footer-slack.png"
            src="/images/footer-slack.png"
          />
        </a>

        <a href="https://www.linkedin.com/company/opensourcecode">
          {' '}
          <img
            alt="../assets/images/footer-linkedin.png"
            src="/images/footer-linkedin.png"
          />
        </a>
      </div>
    </footer>
  );
}
