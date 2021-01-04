import React from 'react';
import './AddSkillCategory.css';

function AddSkillCategory() {
	return (
		<div>
			<div>
				<span className="addSkillCatHeading">Add Skill Category</span>
			</div>
			<hr className="addSkillCatHR" />
			<br />
			<div>You can add a skill here and also questions</div>
			<div>related to that skill for test.</div>
			<br />
			<h3>Skill Name</h3>
			<input type="text" className="SkillNameInput" />
			<h4>Add Questions</h4>
			<div className="AddSkillCatQuestions">
				<h4>Question 1</h4>
				<hr className="AddSkillCatHR" />
				<br />
				<h4>Which one do you like?</h4>
				<input type="radio" className="Option1" name="options" value="Option1" />
				<label for="male"> Option 1</label>
				<br />
				<input type="radio" className="Option2" name="options" value="Option2" />
				<label for="female"> Option 2</label>
				<br />
				<input type="radio" className="Option3" name="options" value="Option3" />
				<label for="other"> Option 3</label>
			</div>
			<button className="submit">Submit</button>
			<button className="cancel">Cancel</button>
		</div>
	);
}

export default AddSkillCategory;
