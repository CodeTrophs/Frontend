import { Link } from 'next/link';
import React from 'react';

import styles from '../../scss/AdminPanelNavbar.module.scss';

function AdminPanelNavbar() {
  return (
    <div>
      <div className={styles.admin_panel_left_part}>
        <div className={styles.avatar}>_</div>
        <div className={styles.name}>John Doe</div>
        <div className={styles.sizedBox} />

        <Link
          to="/addskills"
          className={styles.admin_panel_link}
          activeClassName={styles.admin_panel_link_active}>
          Add Skills
        </Link>

        <Link
          to="/reports"
          className={styles.admin_panel_link}
          activeClassName={styles.admin_panel_link_active}>
          Reports
        </Link>

        <Link
          to="/feed"
          className={styles.admin_panel_link}
          activeClassName={styles.admin_panel_link_active}>
          Feed
        </Link>

        <Link
          to="/users"
          className={styles.admin_panel_link}
          activeClassName={styles.admin_panel_link_active}>
          Users
        </Link>
      </div>
    </div>
  );
}

export default AdminPanelNavbar;
