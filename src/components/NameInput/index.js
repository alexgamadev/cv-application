import React from 'react';
import styles from './NameInput.module.css';
import LabelledInput from '../LabelledInput';

const NameInput = (props) => {
  const { name } = props;
  return (
    <div className={styles.namesContainer}>
      <LabelledInput align="col">
        <label htmlFor="first-name">First name:</label>
        <input type="text" id="first-name" placeholder="First Name" defaultValue={name.first}/>
      </LabelledInput>
      <LabelledInput align="col">
        <label htmlFor="last-name">Last name:</label>
        <input type="text" id="last-name" placeholder="Last Name" defaultValue={name.last}/>
      </LabelledInput>
    </div>
  );
}
export default NameInput;
