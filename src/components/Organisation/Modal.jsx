import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../scss/modal.module.scss';

const Modal = ({ org, tech, topics, hideModal }) => (
  <div className={styles.modal}>
    <div className={styles['modal-main']}>
      {/** ==================================================== Heading ====================================================  */}
      <div className={styles.heading}>
        <div className={styles['heading-text']}>
          <h1>{org.name}</h1>
          <p>{org.website}</p>
        </div>
        <button
          type="button"
          onKeyDown={hideModal}
          onClick={hideModal}
          className={styles['close-button']}>
          <img src="/SVG/cross-icon.png" alt="x" />
        </button>
      </div>
      {/** ==================================================== Heading Ends here ==================================================== */}
      {/** ==================================================== Description ==================================================== */}
      <div className={styles.description}>
        <div className={styles['description-text']}>
          <h2>Description</h2>
          {org.long_description}
        </div>
        <div className={styles['description-image']}>
          <img src="/SVG/org-des-img.svg" alt="" />
        </div>
      </div>

      {/** ==================================================== Description Ends here ==================================================== */}
      {/** ==================================================== Tag Cards ==================================================== */}
      <div className={styles['tag-cards']}>
        <div className={styles['tag-card']}>
          <h2>Technologies</h2>
          <div className={styles.tags}>
            {tech.map((tag) => (
              <p key={tag} className={styles.tag}>
                {tag.toUpperCase()}
              </p>
            ))}
          </div>
        </div>
        <div className={styles['tag-card']}>
          <h2>Topics</h2>
          <div className={styles.tags}>
            {topics.map((topic) => (
              <p key={topic} className={styles.tag}>
                {topic}
              </p>
            ))}
          </div>
        </div>
        <div className={styles['tag-card']}>
          <h2>Links</h2>
          <div className={styles.tags}>
            <a href={org.website} target="_blank" rel="noopener noreferrer">
              <img src="/icons/website.svg" alt="Website" />
            </a>

            <a
              href={org.idea_list_url}
              target="_blank"
              rel="noopener noreferrer">
              <img src="/icons/idea.svg" alt="Ideas" />
            </a>

            <a
              href={org.irc_channel_url}
              target="_blank"
              rel="noopener noreferrer">
              <img src="/icons/chat.svg" alt="Chat" />
            </a>
          </div>
        </div>
      </div>
      {/** ==================================================== Tag Cards Ends here ==================================================== */}
    </div>
  </div>
);

Modal.propTypes = {
  org: PropTypes.shape({
    name: PropTypes.string,
    website: PropTypes.string,
    idea_list_url: PropTypes.string,
    irc_channel_url: PropTypes.string,
    short_description: PropTypes.string,
    long_description: PropTypes.string,
    topicTags: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
    slack: PropTypes.string,
    bgurl: PropTypes.string
  }).isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  hideModal: PropTypes.func.isRequired
};

export default Modal;
