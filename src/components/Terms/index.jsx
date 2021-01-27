import React from 'react';

import styles from '../../scss/term.module.scss';

const Terms = () => {
  return (
    <div className={styles['term-container']}>
      <img
        src="/images/term-decor-left.png"
        alt="Decorative"
        className={styles['term-decoration']}
      />

      <div className={styles['term-contents-container']}>
        <div className={styles['term-heading-container']}>
          <img
            src="/images/term-heading.png"
            className={styles['term-heading-image']}
            alt="Decorative"
          />
          <h1 className={styles['term-heading-text']}>Terms of Service</h1>
        </div>

        <div className={styles['term-contents']}>
          <p className="mb-l">
            Following are the terms of service and use of our website:
          </p>

          <p className="mb-l">
            <h3>Our Vision</h3>
            <p>
              We envision a world where sharing information and knowledge with
              others will cost a person just their time and nothing more. For
              every question answered by you, there shall be more and more
              kindness in the world. We intend to empower and produce content
              for the pedagogical community.
            </p>
          </p>

          <p>
            <h3>Your Responsibilities and Prerogatives</h3>

            <p className="mb-l">
              While we may provide you the service of openly discussing
              problems, you’re responsible for everything you shall post,
              keeping in mind the civility and awareness of human rights.
            </p>
            <p className="mb-l">
              You shall adhere to a lawful behavior and shall not violate any
              societal norms. You pledge to not harm our technological
              infrastructure, the violation of which may lead to first,
              termination of your account and relation to us, followed by
              subsequent severe actions. You also adhere to our Terms of Use and
              to the applicable community rules when you visit our site or take
              part in our communities’ discussions.
            </p>
            <p className="mb-l">
              You are allowed to use, read and print our media for free. You can
              share our articles under open licenses, free of any cost, provided
              it is attributed back to us and respect the rights of the author,
              including any “not for reproduction” designation. You can
              contribute and share answers on our site for the well-being and
              good of the society and the community. You, generally, shall
              license your content, unless it’s in the domain of the public.
            </p>
            <p className="mb-l">
              We do not endorse or verify content posted by you. Our content and
              media are provided to you without any guarantees. You are
              responsible for your own use of our website. Posts from other
              professionals shall not be treated as a substitution for
              professional advice for your specific predicament.
            </p>
            <p className="mb-l">
              We have offered tools for you to give feedback and report
              complaints. If you think someone has violated your intellectual
              property, other laws, or our policies, you can initiate a report
              at the contact us portal or by using our in-product reporting
              link.
            </p>
            <p className="mb-l">
              We are always trying to provide you with new-age experience and in
              order to do so, may alter the website without providing you any
              prior notice.
            </p>
            <p>
              Lastly, when you use our platform, you agree to our Terms of
              Service, accept our Privacy Policy; abide by our Acceptable Use
              Policy, Copyright Policy, and Trademark Policy.
            </p>
          </p>
        </div>
      </div>

      <img
        src="/images/term-decor-right.png"
        alt="Decorative"
        className={styles['term-decoration']}
      />
    </div>
  );
};

export default Terms;
