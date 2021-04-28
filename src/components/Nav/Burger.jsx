import React, { useState } from 'react';

import styles from '../../scss/burger.module.scss';
import RightNavbar from './RightNavbar';

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <div className= {styles.burger_div} onClick={() => setOpen(!open)} onKeyDown={() => setOpen(!open)} role="button" tabIndex="0">
        <div className={open?styles.div_open : styles.div_close}/>
        <div className={open?styles.div_open : styles.div_close}/>
        <div className={open?styles.div_open : styles.div_close}/>
      </div>
      <RightNavbar open={open}/>
    </>
  )
}

export default Burger
