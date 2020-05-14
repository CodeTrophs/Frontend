import React from "react";
import styles from "../../css/home.module.css";

export default function WelcomeComponent() {
  return (
    <div className="main-banner">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="main-banner-text">
                  <p className={styles["landing-text"]}>
                    Search and Contribute to Some of the Best
                    <br />
                    <span>OPEN SOURCE PROJECTS</span>
                  </p>
                  <div className={styles["landing-container"]}>
                    <div className={styles.row}>
                      <div className={styles["left-col-img"]}>
                        <img alt="left-svg" src="/images/left-SVG.png" />
                      </div>

                      <div className={styles["left-col-btns"]}>
                        <div className={styles["sign-in-buttons"]}>
                         

                          <button
                            className={styles["google-button"]}
                            type="submit"
                          >
                            <img
                              alt="Icon-simple-google"
                              src="/images/Icon-simple-google.png"
                            />
                            <p>Sign in with Google</p>
                          </button>

                          <button
                            className={styles["github-button"]}
                            type="submit"
                          >
                            <img
                              alt="Icon-awesome-github.png"
                              src="/images/Iconawesome-github.png"
                            />
                            <p>Sign in with Github</p>
                          </button>
                        </div>

                        <div className={styles["email-section"]}>
                          <h3>Sign in with email.</h3>
                          <form className={styles.email}>
                            <input
                              type="email"
                              className={styles["email-input sign-in-input"]}
                              placeholder="Email"
                            />

                            <div className={styles.name}>
                              <input
                                type="text"
                                className={styles["name-fname sign-in-input"]}
                                placeholder="First Name"
                              />
                              <input
                                type="text"
                                className={styles["name-lname sign-in-input"]}
                                placeholder="Last Name"
                              />
                            </div>

                            <input
                              type="password"
                              className={styles["password-input sign-in-input"]}
                              placeholder="Choose password"
                            />
                            <div className={styles["email-buttons"]}>
                              <button
                                type="submit"
                                className={styles["email-submit"]}
                              >
                                Submit
                              </button>
                              <button
                                type="submit"
                                className={styles["email-next"]}
                              >
                                Next
                              </button>
                              {/* eslint-disable-next-line react/button-has-type */}
                              <button className={styles["email-cancel"]}>
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className={styles["home-right-col"]}>
                        <img alt="right-svg.png" src="/images/right-svg.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="WelcomeComponent">
    //   <h5 className={styles['welcome-title']}>
    //     WELCOME TO OPEN SOURCE CODE PLATFORM
    //   </h5>
    //   <p className={styles['landing-text']}>
    //     Search and Contribute to Some of the Best
    //     <br />
    //     <span>OPEN SOURCE PROJECTS</span>
    //   </p>
    // </div>
  );
}
