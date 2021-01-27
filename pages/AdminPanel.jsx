import React from 'react';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import AddSkillCategory from '../src/components/AdminPanel/AddSkillCategory';
// import AddSkills from '../src/components/AdminPanel/AddSkills';
import AdminPanelNavbar from '../src/components/AdminPanel/AdminPanelNavbar';
// import Feed from '../src/components/AdminPanel/Feed';
// import Reports from '../src/components/AdminPanel/Reports';
// import Users from '../src/components/AdminPanel/Users';
// import styles from '../src/scss/AdminPanel.module.scss';

const AdminPanel = () => {
  return (
    <div>
      {/* <Router> */}
      <AdminPanelNavbar />
      {/* <div className={styles.admin_panel_right_part}>
          <Switch>
            <Route path="/addSkills" component={AddSkills} />
            <Route path="/addSkillCategory" component={AddSkillCategory} />
            <Route path="/reports" component={Reports} />
            <Route path="/feed" component={Feed} />
            <Route path="/users" component={Users} />
          </Switch>
        </div> */}
      {/* </Router> */}
    </div>
  );
};

export default AdminPanel;
