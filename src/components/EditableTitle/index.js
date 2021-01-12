import React from 'react';
import styles from './EditableTitle.module.css';

export default class EditableTitle extends React.Component {
    constructor(props) {
        super(props);
        const { title } = props;

        this.state = {
            isEditable: true,
            title,
        }

        this.toggleEdit = this.toggleEdit.bind(this);
        this.editTitle = this.editTitle.bind(this);
    }
      
    toggleEdit({currentTarget}) {
        this.setState((prevState) => ({
            isEditable: !prevState.isEditable,
        }));
    }
    
    editTitle({target}) {
        this.setState({
            title: target.value,
        });
    }

    render() {
        return (
            <div >
                { !this.state.isEditable ? 
                    <h1 className={styles.title} onDoubleClick={this.toggleEdit}>{this.state.title}</h1> : 
                    <input type="text" autoFocus defaultValue={this.state.title} className={styles.titleInput} onChange={this.editTitle} onBlur={this.toggleEdit}></input>
                }
            </div>
        );
    }
}
