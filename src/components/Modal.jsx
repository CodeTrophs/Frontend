import PropTypes from 'prop-types';
import React from 'react';

import styles from '../scss/modal.module.scss';

const Modal = ({ org, hideModal }) => (
  <div className={styles.modal}>
    <div className={styles['modal-main']}>
      <button
        type="button"
        onKeyDown={hideModal}
        onClick={hideModal}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          position: 'absolute',
          right: '10px',
          cursor: 'pointer'
        }}>
        <img src="/SVG/cross-icon.png" alt="x" style={{ width: '40px' }} />
      </button>

      <div className="heading" style={{ textAlign: 'center' }}>
        <h1 style={{ fontWeight: '500', fontSize: '42px' }}>
          {org.organisation}
        </h1>
        <p style={{ fontWeight: '400', color: '#C6C6C6', paddingTop: '5px' }}>
          {org.link}
        </p>
      </div>
      <div
        className={styles.description}
        style={{ marginTop: '40px', display: 'flex' }}>
        <div className={styles['left-col']} style={{ width: '100%' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '500' }}>Description</h3>
          <p
            style={{
              color: '#5F5F5F',
              fontSize: '18px',
              display: '-webkit-box',
              WebkitLineClamp: '5',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
            {org.orgDescription}
          </p>
        </div>
        <div className={styles['right-col']}>
          <img
            src="/SVG/org-des-img.svg"
            alt="erior"
            style={{ width: '60%', float: 'right', marginRight: '40px' }}
          />
        </div>
      </div>
      <div className={styles['tag-cards']}>
        <div className="lang-tags">
          <h3>Languages</h3>
          <div className={styles.tags}>
            {org.langTags.map((tag) => (
              <p
                key={tag}
                style={{
                  display: 'inline-block',
                  borderRadius: '10px',
                  border: '1px black solid',
                  padding: '1px 5px',
                  fontWeight: '400',
                  margin: ' 10px 5px',
                  cursor: 'pointer'
                }}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="topic-tags">
          <h3>Topics</h3>
          <div className={styles.tags}>
            {org.topicTags.map((tag) => (
              <p
                key={tag}
                style={{
                  display: 'inline-block',
                  borderRadius: '10px',
                  border: '1px black solid',
                  padding: '1px 5px',
                  fontWeight: '400',
                  margin: ' 10px 5px',
                  cursor: 'pointer'
                }}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="links">
          <h3>Links</h3>
          <div className={styles.tags}>
            <a href={org.github}>
              <img
                src="/SVG/org-github-icon.svg"
                alt={org.github}
                style={{
                  margin: ' 0 10px',
                  cursor: 'pointer'
                }}
              />
            </a>

            <a href={org.slack}>
              <img
                src="/SVG/org-slack-icon.svg"
                alt="slack"
                style={{
                  margin: ' 0 10px',
                  cursor: 'pointer'
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="repos">
        <h3 style={{ fontWeight: '400', fontSize: '24px', marginTop: '20px' }}>
          Top Repos
        </h3>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  org: PropTypes.exact({
    organisation: PropTypes.string,
    id: PropTypes.number,
    link: PropTypes.string,
    orgDescription: PropTypes.string,
    langTags: PropTypes.arrayOf(PropTypes.string),
    topicTags: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
    slack: PropTypes.string,
    bgurl: PropTypes.string
  }).isRequired,
  hideModal: PropTypes.func.isRequired
};

export default Modal;
