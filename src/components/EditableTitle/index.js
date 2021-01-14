import React, { useState } from 'react';
import styles from './EditableTitle.module.css';

const EditableTitle = (props) => {
    const [isEditable, setEditable] = useState(true);
    const [title, setTitle] = useState(props.title);

    const editTitle = (e) => {
        const { target } = e;
        setTitle(target.value);
    }

    return (
        <div >
            { !isEditable ? 
                <h1 className={styles.title} onDoubleClick={() => setEditable(!isEditable)}>{title}</h1> : 
                <input type="text" autoFocus defaultValue={title} className={styles.titleInput} onChange={editTitle} onBlur={() => setEditable(!isEditable)}></input>
            }
        </div>
    );
}

export default EditableTitle;
