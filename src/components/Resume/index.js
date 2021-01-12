import React from 'react';
import PersonalInfo from '../PersonalInfo';
import Education from '../Education';
import Experience from '../Experience';
import data from '../../data';
import styles from './Resume.module.css';

const Resume = (props) => {
    const { title } = props;
    console.log(data);
    return (
      <div className={styles.container}>
        <h1 className={styles.center}>{title}</h1>
        <PersonalInfo data={data.personal}/>
        <Education data={data.education}/>
        <Experience data={data.experiences}/>
      </div>
    );
}

export default Resume;

