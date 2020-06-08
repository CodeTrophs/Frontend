import React, { useState, useEffect, useContext } from 'react';

import {setBasicInfo, storedUserData} from '../../firestore/profileSettings';
import styles from '../../scss/settings.module.scss';
import UserContext from '../UserContext';

const Basicinfo = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState(null);
  const [showStatus, setShowStatus] = useState(false);
  const {User} = useContext(UserContext);


  useEffect(()=>{
    async function getBasicInfo() {
      const result =await storedUserData(User.uid);
      if(result !== null) {
        if(result.firstName !== undefined) setFirstName(result.firstName);
        if(result.lastName !== undefined) setlastName(result.lastName);
        if(result.email !== undefined)  setEmail(result.email);
        if(result.userName !== undefined) setUserName(result.userName);
      }
    }
    if(User)
    getBasicInfo();
  },[User]);

  async function handleFormSubmit(e) {
    e.preventDefault();
    const {uid} = User;
    const formData = JSON.stringify({
      firstName,
      lastName,
      email,
      userName,
      uid
    });
    const response = await setBasicInfo(formData);
    setStatus(response.status);
    setShowStatus(true);
    const timer = setTimeout(() => {
      setShowStatus(false);
    }, 5000);
    return () => clearTimeout(timer);

  }

return(
  <div>
    <div className={styles['basic-head']}>
      <h4 style={{ fontWeight: '500' }}>Lets Get Started</h4>
    </div>
    <form onSubmit={handleFormSubmit}>
      <div className={styles.qns}>
        <p>Email</p>
        <input className={styles.input} value={email} type="email" placeholder="Email" onChange={e=>setEmail(e.currentTarget.value)} required/>
        <p>First Name</p>
        <input className={styles.input} value={firstName} type="text" placeholder="First Name" onChange={e => setFirstName(e.currentTarget.value)} required/>
        <p>Last Name</p>
        <input className={styles.input} value={lastName} type="text" placeholder="Last Name" onChange={e => setlastName(e.currentTarget.value)} />
        <p>Username</p>
        <input className={styles.input} value={userName} placeholder="Username" onChange={e => setUserName(e.currentTarget.value)} />
        <button type="submit" className={styles.submitButton}>Save</button>
        {
          showStatus === true &&
            <div className={styles.status}>
              <p>{status}</p>
              <button className={styles.statusCancelButton} type="button" onClick={()=>setShowStatus(false)}> X </button>
            </div>
        } 
      </div> 
    </form>
  </div>
)
};
export default Basicinfo;
