import React from 'react';
import LabelledInput from '../LabelledInput';
import styles from './StartEndDate.module.css';
import { DateTime } from 'luxon';

export default class StartEndDate extends React.Component{
    constructor(props) {
        super(props);
        const { startDate = null, endDate = null } = props;
        this.state = {
            startDate,
            endDate,
            errors: {
                dates: "",
            },
            isOngoing: false,
        };

        this.toggleOngoing = this.toggleOngoing.bind(this);
        //console.log(startDate.fromISODate());
    }
    dateChange = (e) => {
        e.preventDefault();
        const {target} = e;
        let errors = this.state.errors;

        if(target.id === "startDate") {
            this.isDateValid(target.value, this.state.endDate, errors);
            this.setState({
                startDate: target.value,
            });
        } else if(target.id === "endDate") {
            this.isDateValid(this.state.startDate, target.value, errors);
            this.setState({
                endDate: target.value,
            });
        }

        this.setState({
            errors, 
        })
    }

    isDateValid = (startDate, endDate, errors) => {
        if(startDate === null || endDate === null || this.state.isOngoing) {
            console.log("Error clear");
            errors.dates = "";
        }
        else if (this.state.isOngoing && endDate < startDate) {
            console.log("Error date");
            errors.dates = "End date cannot be before start date";
        } else {
            console.log("Error clear");
            errors.dates = "";
        }
    }

    toggleOngoing(e) {
        console.log('Here');
        const { target } = e;
        this.setState({
            isOngoing: target.checked,
        });
        this.isDateValid(this.state.startDate, this.state.endDate, this.state.errors);
    }

    render() {
        const {errors, startDate, endDate} = this.state;
        console.log(errors.dates.length);
        return (
            <div>
                <div className={styles.datesContainer}>
                    <LabelledInput align="row">
                        <label htmlFor="startDate">Start date:</label>
                        <input  type="date" 
                                id="startDate" 
                                className={errors.dates && 'invalid'} 
                                onChange={this.dateChange}
                                value={startDate == null ? "" : startDate}
                                max={DateTime.local().toISODate()}
                        />
                    </LabelledInput>
                    <LabelledInput align="row">
                        <label htmlFor="endDate">End date:</label>
                        <input  type="date"
                                id="endDate" 
                                className={errors.dates && 'invalid'}  
                                onChange={this.dateChange}
                                value={endDate == null ? DateTime.local().toISODate() : endDate}
                                min={startDate == null ? "" : startDate}
                                disabled={this.state.isOngoing}
                        />
                    </LabelledInput>
                    <LabelledInput align="row" style={{alignSelf: "center"}}>
                        <label htmlFor="ongoing">Ongoing:</label>
                        <input  type="checkbox"
                                id="ongoing"
                                onClick={this.toggleOngoing}
                        />
                    </LabelledInput>
                </div>
                {errors.dates.length > 0 && 
                    <span className={'error'}>{errors.dates}</span>}
            </div>
            
        );
    }
    
}
