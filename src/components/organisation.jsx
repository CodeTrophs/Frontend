import React, { useState } from 'react';
import Modal from './modal';

// eslint-disable-next-line react/prop-types
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
        // eslint-disable-next-line react/prop-types
        background: `url(${org.bgurl}) no-repeat center`,
        minWidth: '100%',
        height: '350px',
        borderRadius: '20px',
        paddingTop: '20px',
        boxShadow: '5px 5px 10px rgb(202, 202, 202)',
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <img
        onKeyDown={showModal}
        onClick={showModal}
        src="/SVG/org-view.svg"
        alt="view"
        style={{
          float: 'right',
          marginRight: '10px',
          width: '30px',
          cursor: 'pointer',
        }}
      />

      <h1
        style={{
          color: 'white',
          paddingTop: '55px',
          marginLeft: '10px',
          fontWeight: '500',
          fontSize: '35px',
        }}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {org.organisation}
      </h1>
      <div
        style={{
          backgroundColor: 'white',
          marginTop: '2px',
          width: '100%',
          height: '220px',
          borderRadius: '20px',
        }}
      >
        <p
          style={{
            color: '#6D6D6D',
            fontWeight: '300',
            fontSize: '14px',
            padding: '20px 20px',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line react/prop-types */}
          {org.orgDescription}
        </p>
        <div>
          {/* eslint-disable-next-line react/prop-types */}
          <a href={org.github}>
            <img
              src="/SVG/org-github-icon.svg"
              alt="github"
              style={{
                margin: ' 0 10px',
                marginLeft: '25px',
                marginTop: '20px',
                cursor: 'pointer',
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
                marginTop: '20px',
                cursor: 'pointer',
              }}
            />
          </a>
        </div>

        <div className="Tags" style={{ marginLeft: '15px' }}>
          {/* eslint-disable-next-line react/prop-types */}
          {org.langTags.map((tag) => (
            <p
              style={{
                display: 'inline-block',
                borderRadius: '10px',
                border: '1px black solid',
                padding: '1px 5px',
                fontWeight: '300',
                fontSize: '10px',
                margin: ' 10px 5px',
                cursor: 'pointer',
              }}
            >
              {/* eslint-disable-next-line react/prop-types */}
              {tag}
            </p>
          ))}
        </div>
      </div>
      {ModalShow && <Modal org={org} hideModal={showModal} />}
    </div>
  );
};
export default organisation;
