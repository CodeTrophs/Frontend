import PropTypes from 'prop-types';
import React from 'react';
import './UsersCard.css';

function UsersCard({ name, title, joiningDate }) {
  return (
    <div className="UserCard">
      <div className="UserCardAvatar">.</div>
      <br />
      <div>{name}</div>
      <div>{title}</div>
      <div>
        <b>Joining Date:</b> {joiningDate}
      </div>
    </div>
  );
}

UsersCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  joiningDate: PropTypes.string.isRequired
};

export default UsersCard;
