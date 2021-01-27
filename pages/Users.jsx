import React from 'react';

import UsersCard from '../src/components/AdminPanel/UsersCard';
import styles from '../src/scss/Users.module.scss';

const ActiveUsers = [
  {
    name: 'James Joseph',
    title: 'random',
    joiningDate: '09-10-20'
  },
  {
    name: 'James Joseph',
    title: 'random',
    joiningDate: '09-10-20'
  },
  {
    name: 'James Joseph',
    title: 'random',
    joiningDate: '09-10-20'
  },
  {
    name: 'James Joseph',
    title: 'random',
    joiningDate: '09-10-20'
  }
];

function Users() {
  return (
    <div>
      <h1 className={styles.UserswelcomeName}>Welcome John,</h1>
      <h3>The Dashboard for your analytics.</h3>
      <br />
      <br />
      <h3>Active Users</h3>
      <hr className="UsersHr" />
      <br />
      {ActiveUsers.map((ActiveUser) => {
        return (
          <UsersCard
            name={ActiveUser.name}
            title={ActiveUser.title}
            joiningDate={ActiveUser.joiningDate}
          />
        );
      })}
    </div>
  );
}

export default Users;
