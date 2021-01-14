import React, { useState } from 'react';
import LabelledInput from '../LabelledInput';
import styles from './StartEndDate.module.css';
import { DateTime } from 'luxon';

const StartEndDate = (props) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isOngoing, setOngoing] = useState(false);

    return (
        <div>
            <div className={styles.datesContainer}>
                <LabelledInput align="row">
                    <label htmlFor="startDate">Start date:</label>
                    <input  type="date" 
                            id="startDate" 
                            onChange={(e) => setStartDate(e.target.value)}
                            defaultValue={props.data?.startDate ?? null}
                            value={startDate ?? null}
                            max={DateTime.local().toISODate()}
                    />
                </LabelledInput>
                <LabelledInput align="row">
                    <label htmlFor="endDate">End date:</label>
                    <input  type="date"
                            id="endDate"
                            onChange={(e) => setEndDate(e.target.value)}
                            defaultValue={props.data?.endDate ?? null}
                            value={endDate == null ? DateTime.local().toISODate() : endDate}
                            min={startDate == null ? "" : startDate}
                            disabled={isOngoing}
                    />
                </LabelledInput>
                <LabelledInput align="row" style={{alignSelf: "center"}}>
                    <label htmlFor="ongoing">Ongoing:</label>
                    <input  type="checkbox"
                            id="ongoing"
                            onClick={() => setOngoing(!isOngoing)}
                    />
                </LabelledInput>
            </div>
        </div>
    );
}
export default StartEndDate;
