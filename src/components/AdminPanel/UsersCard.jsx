import React from 'react';
import './UsersCard.css';

function UsersCard(props) {
	return (
		<div id="UserCard">
			<div id="UserCardAvatar">.</div>
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
