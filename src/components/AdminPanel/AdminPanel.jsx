import React from 'react';
import './AdminPanel.css';
import AdminPanelNavbar from './AdminPanelNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddSkills from './AddSkills';
import AddSkillCategory from './AddSkillCategory';
import Reports from './Reports';
import Feed from './Feed';
import Users from './Users';

const AdminPanel = () => {
	return (
		<div>
			<Router>
				<AdminPanelNavbar />
				<div className="admin-panel-right-part">
					<Switch>
						<Route path="/addSkills" component={AddSkills} />
						<Route path="/addSkillCategory" component={AddSkillCategory} />
						<Route path="/reports" component={Reports} />
						<Route path="/feed" component={Feed} />
						<Route path="/users" component={Users} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default AdminPanel;
