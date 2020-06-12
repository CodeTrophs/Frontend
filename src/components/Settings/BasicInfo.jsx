import React, { useState, useEffect, useContext } from 'react';

import { toast } from 'react-toastify';

import {setBasicInfo, storedUserData} from '../../firestore/profileSettings';
import * as FormValidation from '../../FormValidation';
import styles from '../../scss/settings.module.scss';
import LinearLoader from '../LinearLoader';
import UserContext from '../UserContext';

const Basicinfo = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [Loading, setLoading] = useState(false);
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

let uid = null;
  if(User) {
    uid=User.uid;
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = {
      firstName,
      lastName,
      email,
      userName,
      uid
    };

  const FormValidationResult = await FormValidation.checkEmail('EmailError', email) &&
                               await FormValidation.checkLimit50('firstNameError', firstName.length) &&
                               await FormValidation.checkLimit50('lastNameError', lastName.length) &&
                               await FormValidation.checkUserName('userNameError', userName, uid);
  if(FormValidationResult === true) {
    const response = await setBasicInfo(formData);
    if(response.status === 'success')
      toast.success(<div><img src='/icons/save-icon.svg' alt="save"/> Basic Information Updated Successfully </div>);
    if(response.status === 'error')
      toast.error(<div><img src='/icons/error-icon.svg' alt="error" /> Some Error Occurred! Please try again later. </div>);
  }
  setLoading(false);
}

return(
  <div>
    <div className={styles['basic-head']}>
      <h4 style={{ fontWeight: '500' }}>Lets Get Started</h4>
    </div>
    <form onSubmit={handleFormSubmit}>
      <div className={styles.qns}>
        <p>Email</p>
        <input 
          className={styles.input} 
          value={email} 
          placeholder="Email" 
          onChange={e=>{
            setEmail(e.currentTarget.value);
            FormValidation.checkEmail('EmailError',e.currentTarget.value);
          }}
        />
        <p id='EmailError' className='input-field-error' />
        <p>First Name</p>
        <input 
          className={styles.input} 
          value={firstName} 
          type="text" 
          placeholder="First Name" 
          onChange={e => {
            setFirstName(e.currentTarget.value);
            FormValidation.checkLimit50('firstNameError',e.currentTarget.value.length);
            }}
        />
        <p id='firstNameError' className='input-field-error' />
        <p>Last Name</p>
        <input 
          className={styles.input} 
          value={lastName} 
          type="text" 
          placeholder="Last Name" 
          onChange={e => {
            setlastName(e.currentTarget.value);
            FormValidation.checkLimit50('lastNameError', e.currentTarget.value.length);
          }} 
        />
        <p id="lastNameError" className='input-field-error' />
        <p>Username</p>
        <input 
          className={styles.input} 
          value={userName} 
          placeholder="Username" 
          onChange={e => {
            setUserName(e.currentTarget.value);
            FormValidation.checkUserName('userNameError', e.currentTarget.value, uid);
          }} 
        />
        <p id='userNameError' className='input-field-error' />
        {
          !Loading &&
          <button type="submit" className={styles.submitButton}>Save</button>
        }
        {
          Loading &&
          <LinearLoader />
        }
      </div> 
    </form>
  </div>
)
};
export default Basicinfo;
