import React from 'react';

import SectionCard from '../SectionCard';
import LabelledInput from '../LabelledInput';
import StartEndDate from '../StartEndDate';
import EditableTitle from '../EditableTitle';

const ExperienceCard = (props) => {
    const { data, deleteFunc } = props;

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
            <StartEndDate data={data.dates ?? null} />
            <LabelledInput align="col">
                <label htmlFor={"job-desc-" + data.id}>Job description:</label>
                <textarea id={"job-desc-" + data.id} placeholder="Job Description/Tasks" defaultValue={data.description ?? null}></textarea>
            </LabelledInput>
        </SectionCard>
    );
}

export default ExperienceCard;