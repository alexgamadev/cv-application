import React from 'react';
import SectionCard from '../SectionCard';
import NameInput from '../NameInput';
import LabelledInput from '../LabelledInput';

export default class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      data,
    }
  }
  
  render() {
    return (
      <SectionCard title="Personal Information">
        <NameInput name={this.state.data.name}/>
        <LabelledInput align="col">
          <label htmlFor="email">Enter email address:</label>
          <input type="email" id="email" placeholder="Email address" defaultValue={this.state.data.contact.email}/>
        </LabelledInput>
        <LabelledInput align="col">
          <label htmlFor="mobile">Enter mobile number:</label>
          <input type="tel" id="mobile" placeholder="Mobile number" defaultValue={this.state.data.contact.mobile}/>
        </LabelledInput>
      </SectionCard>
    );
  }
}
