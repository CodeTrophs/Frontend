import React from 'react';
import './AddSkillsCard.css';

function AddSkillsCard(props) {
	return (
		<div id="AddSkillsCard">
			<div>{props.name}</div>
			<button>Make Changes</button>
		</div>
	);
}

export default AddSkillsCard;
