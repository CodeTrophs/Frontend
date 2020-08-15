import React from 'react';


import styles from '../../../scss/drawertogglebutton.module.scss';
const drawerToggleButton = props => (
    <button className={styles['toggle-button']} onClick={props.click}>
        <div className={styles['toggle-button__line']} />
        <div className={styles['toggle-button__line']}/>
        <div className={styles['toggle-button__line']}/>
    </button>
);

export default drawerToggleButton;