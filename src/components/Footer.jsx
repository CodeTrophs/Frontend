import Link from 'next/link';
import React from 'react';

import styles from '../scss/footer.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    // ===========================================================================================
    //                   Footer Links
    //     ===========================================================================================
    <footer className={styles.footer}>
      {/* Quick links  */}
      <div className={styles.socials}>
        <div className="container text-white text-center my-3">
          <h1 className="text-white font-weight-bold text-center">
            Contact Us
          </h1>
          <p className="text-white text-center">
            Reach out to us on Slack, Github or join in the chat room
          </p>
          <div className="row w-100 mx-auto d-flex justify-content-center">
            <div className="col-xs-3 px-md-4 px-2 d-flex justify-content-center">
              <div
                style={styles.socialmediaicons}>
                <a href="https://www.facebook.com/codetrophs">
                  <i className="fab py-4 py-lg-3 text-white fa-2x fa-facebook-f" />
                </a>
              </div>
            </div>
            <div className="col-xs-3 px-md-4 px-2 d-flex justify-content-center">
              <div
                style={styles.socialmediaicons}>
                <a href="https://discord.com/invite/urV8vGk">
                  <i className="fab py-4 py-lg-3 text-white fa-2x fa-discord" />
                </a>
              </div>
            </div>
            <div className=" col-xs-3 px-md-4 px-2 d-flex justify-content-center">
              <div
                style={styles.socialmediaicons}>
                <a href="https://github.com/CodeTrophs">
                  <i className="fab py-4 py-lg-3 text-white fa-2x fa-github" />
                </a>
              </div>
            </div>
            <div className=" col-xs-3 px-md-4 px-2 d-flex justify-content-center">
              <div
                style={styles.socialmediaicons}>
                <a href="https://www.linkedin.com/company/codetrophs/">
                  <i className="fab py-4 py-lg-3 text-white fa-2x fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="row w-75 mx-auto my-4 d-flex justify-content-center">
            <div className="col-md-4">
              <Link href="/about">
                <p className="btn text-white effect">About us</p>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href="/terms-of-service">
                <p className="btn text-white effect">Terms of Services</p>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href="/privacy-policy effect">
                <p className="btn text-white">Privacy Policy</p>
              </Link>
            </div>
            <div className="col-md-12 py-3">
              &copy;2021 <b>CodeTrophs</b>. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
const styles={
  socialmediaicons:{  
                  height: '70px',
                  width: '70px',
                  border: '2px solid #fff',
                  borderRadius: '50%',
                  '&:hover':{
                backgroundColor:'#154477'
                }
              }
};
