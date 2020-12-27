import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminPanelNavbar.css';

function AdminPanelNavbar() {
	return (
		<div>
			<div id="admin-panel-left-part">
				<div id="avatar">_</div>
				<div id="name">John Doe</div>
				<div className="sizedBox" />

				<NavLink to="/addskills" className="admin-panel-link" activeClassName="admin-panel-link-active">
					Add Skills
				</NavLink>

				<NavLink to="/reports" className="admin-panel-link" activeClassName="admin-panel-link-active">
					Reports
				</NavLink>

				<NavLink to="/feed" className="admin-panel-link" activeClassName="admin-panel-link-active">
					Feed
				</NavLink>

				<NavLink to="/users" className="admin-panel-link" activeClassName="admin-panel-link-active">
					Users
				</NavLink>
			</div>
		</div>
	);
}

export default AdminPanelNavbar;
