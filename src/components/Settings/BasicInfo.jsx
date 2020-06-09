import React, { useState, useEffect, useContext } from 'react';

import { toast } from 'react-toastify';

import {setBasicInfo, storedUserData} from '../../firestore/profileSettings';
import styles from '../../scss/settings.module.scss';
import UserContext from '../UserContext';

const Basicinfo = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
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
    const formData = {
      firstName,
      lastName,
      email,
      userName,
      uid
    };
    const response = await setBasicInfo(formData);
    if(response.status === 'success')
      toast.success(<div><img src='/icons/save-icon.svg' alt="save"/> Basic Information Updated Successfully </div>);
    if(response.status === 'error')
      toast.error(<div><img src='/icons/error-icon.svg' alt="error" /> Some Error Occurred! Please try again later. </div>);
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
        <input className={styles.input} value={userName} placeholder="Username" onChange={e => setUserName(e.currentTarget.value)} required/>
        <button type="submit" className={styles.submitButton}>Save</button>

      </div> 
    </form>
  </div>
)
};
export default Basicinfo;
