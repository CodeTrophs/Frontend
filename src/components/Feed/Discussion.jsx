// import React from 'react';

// import styles from '../../scss/discussion.module.scss';

// const Discussion = () => {
//   return (
    
//     <div className={styles.container}>
      
//       <div className={styles.top}>
//         <h2>Discussion</h2>
//       </div>
//       <div className={styles.middle}>No discussions yet</div>
//       <div className={styles.bottom}>
//         <textarea name="discussion" id="discussion" />
//         <img src="/SVG/attachment.svg" alt="attachment" />

//         <img src="/SVG/send.svg" alt=">" />
//       </div>
//     </div>
//   );
// };

// export default Discussion;


import React, {Component} from 'react';
import styles from '../../scss/discussion.module.scss';

import Toolbar from '../Discussion/Toolbar/Toolbar';
import SideDrawer from '../Discussion/SideDrawer/SideDrawer';
import Backdrop from '../Discussion/Backdrop/Backdrop';
import MainComponent from '../Discussion/MainComponent/MainComponent';

class discussion extends Component   {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <MainComponent />
        </main>
        
      </div>
    );
  }
}

export default discussion;
