import React from 'react';
import './AddSkillsCard.css';

function AddSkillsCard(props) {
	return (
		<div className="AddSkillsCard">
			<div>{props.name}</div>
			<button>Make Changes</button>
		</div>
	);
}

export default AddSkillsCard;
