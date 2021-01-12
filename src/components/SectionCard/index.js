import React from 'react';
import styles from './SectionCard.module.css'

const SectionCard = (props) => {
  const { children, title, heading, fontSize } = props;
  return (
    <div className={styles.sectionCard}>
      <div className={styles.heading}>
        {title ? <h2 styles={{fontSize: 60}}className={styles.sectionTitle}>{title}</h2> : null}
        {heading ? heading : null}
      </div> 
      {children}
    </div>
  );
}

export default SectionCard;
