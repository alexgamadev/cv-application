import React from 'react';
import SectionCard from '../SectionCard';
import EducationCard from '../EducationCard';

export default class Education extends React.Component {
  constructor(props) {
    super();

    const { data } = props;
    const maxLength = data.length;
    this.state = {
      educationArr: data,
      maxLength,
    }

    this.addNewEducation = this.addNewEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  addNewEducation(e) {
    this.setState(prevState => ({
      educationArr: [...prevState.educationArr, {id: prevState.maxLength + 1}],
      maxLength: prevState.maxLength + 1
    }));
  }

  deleteEducation(e) {
    const {target} = e;
    this.setState(prevState => {
      return {     	
        educationArr: prevState.educationArr.filter(education => education.id != target.id),
      }
    });
  }

  render() {
    return (
      <SectionCard title="Education" heading={<button className="btn success" onClick={this.addNewEducation}>Add New</button>}>
        {this.state.educationArr.map((value, key) => <EducationCard key={value.id} data={value} deleteFunc={this.deleteEducation}/>)}
      </SectionCard>
    );
  }
}
