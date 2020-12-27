import React from 'react';
import './Users.css';
import UsersCard from './UsersCard';

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
			<h1 id="UserswelcomeName">Welcome John,</h1>
			<h3>The Dashboard for your analytics.</h3>
			<br />
			<br />
			<h3>Active Users</h3>
			<hr />
			<br />
			{ActiveUsers.map((ActiveUser) => {
				return (
					<UsersCard name={ActiveUser.name} title={ActiveUser.title} joiningDate={ActiveUser.joiningDate} />
				);
			})}
		</div>
	);
}

export default Users;
