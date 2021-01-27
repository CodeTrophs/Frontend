import React from 'react';

import styles from '../../scss/privacy.module.scss';

const Privacy = () => {
  return (
    <div className={styles['privacy-container']}>
      <img
        src="/images/privacy-decor-left.png"
        alt="Decorative"
        className={styles['privacy-decoration-left']}
      />

      <div className={styles['privacy-contents-container']}>
        <img
          src="/images/privacy-decor-top.png"
          alt="Decorative"
          className={styles['privacy-decoration-top']}
        />

        <div className={styles['privacy-contents']}>
          <p className="mb-l">
            Thank you for choosing to spend your time and to enhance your coding
            skills and knowledge at Programmer Challenge.We hope that you have a
            great experience using this website.Your privacy is very crucial to
            us. Below are the specifications we adhere to while storing the
            information you provide us on the Programmer Challenge platform. To
            use this site is extensively your individual selection and every
            individual is responsible for his/her behaviour online.
          </p>

          <p className="mb-l">
            <strong>Account and Profile Data</strong> taken at Programmer
            Challenge while the user is creating an account includes your name,
            your contact information, your email address and other information
            that you may be willing to provide. This information along with your
            photo, and any information that you choose to provide in your public
            account will be available for viewing to the users of Programmer
            Challenge. Once you create a profile, other users will be able to
            see in your profile certain information about your activity on
            Programmer Challenge, theanswers you post, and your edits to your
            code.
          </p>
          <p className="mb-l">
            <strong>Your Content:</strong>
            We collect and store the information and content that you post to
            the platform. This helps us to maintain a record of your
            achievements on the platform and acts as a decisive element to your
            progress record. This information, however, shall not be shared with
            any other third-party organisation. Also, a certain level of decorum
            is also expected out of you in the comments section.
          </p>
          <p className="mb-l">
            <strong>Third Party Websites:</strong>
            Users might see third party advertisements along with various other
            information on the website that may link to other internet websites.
            We do not handle the products along with solutions that show up on
            these third-party websites, so we cannot be responsible ofwhat they
            have to offer on their internet pages. Once on their website the
            privacy policy of their website shall comply and not ours. We are
            accountable for the information asked or stored by such websites.
          </p>
          <p className="mb-l">
            You can contribute and share answers on our site for the well-being
            and good of the society and the community. You, generally, shall
            license your content, unless it’s in the domain of the public. All
            materials of the site might upgrade regularly.
          </p>
          <p className="mb-l">
            Lastly, when you use our platform, you agree to our Terms of
            Service, accept our Privacy Policy.
          </p>
          <p>
            If you need to contact us, you can email us at{' '}
            <a href="mailto:codetrophs@gmail.com">codetrophs@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
