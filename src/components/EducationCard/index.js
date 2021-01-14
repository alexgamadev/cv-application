import React from 'react';  

import SectionCard from '../SectionCard';
import LabelledInput from '../LabelledInput';
import StartEndDate from '../StartEndDate';
import EditableTitle from '../EditableTitle';

const EducationCard = (props) => {
  const {data} = props;

  return (
    <SectionCard>
      <div className="flex flex-sb">
        <EditableTitle title={data.institute ?? "Institute Name Here"} />
        <button className="btn error" id={data.id} onClick={props.deleteFunc}>Delete - </button>
      </div>
      <StartEndDate startDate={data.dates?.start} endDate={data.dates?.end}/>
      <LabelledInput align="col">
        <label htmlFor={"subject-" + data.id}>Subject name:</label>
        <input type="text" id={"subject-" + data.id} placeholder="Subject Name" defaultValue={data.subject ?? null}/>
      </LabelledInput>
    </SectionCard>
  );
}

export default EducationCard;
