import React from 'react';
import SectionCard from '../SectionCard';
import NameInput from '../NameInput';
import LabelledInput from '../LabelledInput';

const PersonalInfo = (props) => {
  const {data} = props;
  return (
    <SectionCard title="Personal Information">
      <NameInput name={data.name}/>
      <LabelledInput align="col">
        <label htmlFor="email">Enter email address:</label>
        <input type="email" id="email" placeholder="Email address" defaultValue={data.contact.email}/>
      </LabelledInput>
      <LabelledInput align="col">
        <label htmlFor="mobile">Enter mobile number:</label>
        <input type="tel" id="mobile" placeholder="Mobile number" defaultValue={data.contact.mobile}/>
      </LabelledInput>
    </SectionCard>
  );
}

export default PersonalInfo;
