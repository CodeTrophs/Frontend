import React from 'react';

import styles from '../css/modal.module.css';

/* eslint-disable-next-line react/prop-types */
const Modal = ({ org, hideModal }) => (
  <div className={styles.modal}>
    <div className={styles['modal-main']}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions  */}
      <img
        onKeyDown={hideModal}
        onClick={hideModal}
        src="/SVG/cross-icon.png"
        alt="x"
        style={{
          width: '40px',
          position: 'absolute',
          right: '10px',
          cursor: 'pointer'
        }}
      />
      <div className="heading" style={{ textAlign: 'center' }}>
        <h1 style={{ fontWeight: '500', fontSize: '42px' }}>
          {/* eslint-disable-next-line react/prop-types */}
          {org.organisation}
        </h1>
        <p style={{ fontWeight: '400', color: '#C6C6C6', paddingTop: '5px' }}>
          {/* eslint-disable-next-line react/prop-types  */}
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
            {/* eslint-disable-next-line react/prop-types */}
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
          {/* eslint-disable-next-line react/prop-types */}
          {org.langTags.map((tag) => (
            <p
              key={tag}
              style={{
                display: 'inline-block',
                borderRadius: '10px',
                border: '1px black solid',
                padding: '1px 5px',
                fontWeight: '400',
                fontSize: '12px',
                margin: ' 10px 5px',
                cursor: 'pointer'
              }}>
              {/* eslint-disable-next-line react/prop-types */}
              {tag}
            </p>
          ))}
        </div>
        <div className="topic-tags">
          <h3>Topics</h3>
          {/* eslint-disable-next-line react/prop-types */}
          {org.topicTags.map((tag) => (
            <p
              key={tag}
              style={{
                display: 'inline-block',
                borderRadius: '10px',
                border: '1px black solid',
                padding: '1px 5px',
                fontWeight: '400',
                fontSize: '12px',
                margin: ' 10px 5px',
                cursor: 'pointer'
              }}>
              {/* eslint-disable-next-line react/prop-types */}
              {tag}
            </p>
          ))}
        </div>
        <div className="links">
          <h3>Links</h3>
          {/* eslint-disable-next-line react/prop-types */}
          <a href={org.github}>
            <img
              src="/SVG/org-github-icon.svg"
              /* eslint-disable-next-line react/prop-types */
              alt={org.github}
              style={{
                margin: ' 0 10px',
                cursor: 'pointer'
              }}
            />
          </a>
          {/* eslint-disable-next-line react/prop-types */}
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
      <div className="repos">
        <h3 style={{ fontWeight: '400', fontSize: '24px', marginTop: '20px' }}>
          Top Repos
        </h3>
      </div>
    </div>
  </div>
);

export default Modal;
