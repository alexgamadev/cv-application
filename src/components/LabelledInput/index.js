import React from 'react';
import styles from './LabelledInput.module.css';

const LabelledInput = (props) => {
    const { children, align } = props;

    return (
        <div className={`${align === "col" ? styles.labelColumn : styles.labelRow}`} >
            {children}
        </div>
    );
};

export default LabelledInput;