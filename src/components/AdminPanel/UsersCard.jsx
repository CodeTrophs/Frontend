import React from 'react';
import './UsersCard.css';

function UsersCard(props) {
	return (
		<div className="UserCard">
			<div className="UserCardAvatar">.</div>
			<br />
			<div>{props.name}</div>
			<div>{props.title}</div>
			<div>
				<b>Joining Date:</b> {props.joiningDate}
			</div>
		</div>
	);
}

export default UsersCard;
