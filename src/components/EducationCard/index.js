import React from 'react';  

import SectionCard from '../SectionCard';
import LabelledInput from '../LabelledInput';
import StartEndDate from '../StartEndDate';
import EditableTitle from '../EditableTitle';

export default class EducationCard extends React.Component {
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
            <EditableTitle title={data.institute ?? "Institute Name Here"} />
            <button className="btn error" id={data.id} onClick={deleteFunc}>Delete</button>
          </div>
          <StartEndDate startDate={data.dates?.start} endDate={data.dates?.end}/>
          <LabelledInput align="col">
            <label htmlFor={"subject-" + data.id}>Subject name:</label>
            <input type="text" id={"subject-" + data.id} placeholder="Subject Name" defaultValue={data.subject ?? null}/>
          </LabelledInput>
        </SectionCard>
      );
    }
}
