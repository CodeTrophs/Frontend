import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Modal from './Modal';

const organisation = ({ org }) => {
  const [ModalShow, setModalShow] = useState(false);

  const showModal = () => {
    if (ModalShow) {
      setModalShow(false);
    } else {
      setModalShow(true);
    }
  };
  return (
    <div
      style={{
        background: `url(${org.bgurl}) no-repeat center`,
        minWidth: '100%',
        height: '350px',
        borderRadius: '20px',
        paddingTop: '20px',
        boxShadow: '5px 5px 10px rgb(202, 202, 202)'
      }}>
      <button
        type="button"
        onKeyDown={showModal}
        onClick={showModal}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          float: 'right',
          marginRight: '10px',
          cursor: 'pointer'
        }}>
        <img src="/SVG/org-view.svg" alt="view" style={{ width: '30px' }} />
      </button>

      <h1
        style={{
          color: 'white',
          paddingTop: '55px',
          marginLeft: '10px',
          fontWeight: '500',
          fontSize: '35px'
        }}>
        {org.organisation}
      </h1>
      <div
        style={{
          backgroundColor: 'white',
          marginTop: '2px',
          width: '100%',
          height: '220px',
          borderRadius: '20px'
        }}>
        <p
          style={{
            color: '#6D6D6D',
            fontWeight: '300',
            fontSize: '14px',
            padding: '20px 20px',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
          {org.orgDescription}
        </p>
        <div>
          <a href={org.github}>
            <img
              src="/SVG/org-github-icon.svg"
              alt="github"
              style={{
                margin: ' 0 10px',
                marginLeft: '25px',
                marginTop: '20px',
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
                marginTop: '20px',
                cursor: 'pointer'
              }}
            />
          </a>
        </div>

        <div className="Tags" style={{ marginLeft: '15px' }}>
          {org.langTags.map((tag) => (
            <p
              key={tag}
              style={{
                display: 'inline-block',
                borderRadius: '10px',
                border: '1px black solid',
                padding: '1px 5px',
                fontWeight: '300',
                margin: ' 10px 5px',
                cursor: 'pointer'
              }}>
              {tag}
            </p>
          ))}
        </div>
      </div>
      {ModalShow && <Modal org={org} hideModal={showModal} />}
    </div>
  );
};

organisation.propTypes = {
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
  }).isRequired
};

export default organisation;
