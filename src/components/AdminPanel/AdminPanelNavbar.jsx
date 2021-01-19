import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../scss/AdminPanelNavbar.module.scss';

function AdminPanelNavbar() {
  return (
    <div>
      <div className={styles.admin_panel_left_part}>
        <div className={styles.avatar}>_</div>
        <div className={styles.name}>John Doe</div>
        <div className={styles.sizedBox} />

        <NavLink
          to="/addskills"
          className={styles.admin_panel_link}
          activeClassName={styles.admin_panel_link_active}>
          Add Skills
        </NavLink>

        <NavLink
          to="/reports"
          className={styles.admin_panel_link}
          activeClassName={styles.admin_panel_link_active}>
          Reports
        </NavLink>

        <NavLink
          to="/feed"
          className={styles.admin_panel_link}
          activeClassName={styles.admin_panel_link_active}>
          Feed
        </NavLink>

        <NavLink
          to="/users"
          className={styles.admin_panel_link}
          activeClassName={styles.admin_panel_link_active}>
          Users
        </NavLink>
      </div>
    </div>
  );
}

export default AdminPanelNavbar;
