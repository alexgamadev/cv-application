import React from 'react';

import SectionCard from '../SectionCard';
import LabelledInput from '../LabelledInput';
import StartEndDate from '../StartEndDate';
import EditableTitle from '../EditableTitle';
import { render } from '@testing-library/react';

export default class ExperienceCard extends React.Component {
    constructor(props) {
        super(props);
        const { data = null, deleteFunc} = props;
        this.state = {
            data,
            deleteFunc,
        }
    }

    render() {
        const { data, deleteFunc } = this.state;
        return (
            <SectionCard>
                <div className="flex flex-sb">
                    <EditableTitle title={data.company ?? "Company Name Here"}/>
                    <button className="btn error" id={data.id} onClick={deleteFunc}>Delete</button>
                </div>
                <LabelledInput align="col">
                    <label htmlFor={"job-title-" + data.id}>Job title:</label>
                    <input type="text" id={"job-title-" + data.id} placeholder="Job Title" defaultValue={data.jobTitle ?? null}></input>
                </LabelledInput>
                <StartEndDate startDate={data.dates?.start} endDate={data.dates?.end} />
                <LabelledInput align="col">
                    <label htmlFor={"job-desc-" + data.id}>Job description:</label>
                    <textarea id={"job-desc-" + data.id} placeholder="Job Description/Tasks" defaultValue={data.description ?? null}></textarea>
                </LabelledInput>
            </SectionCard>
        );
    }
    
}