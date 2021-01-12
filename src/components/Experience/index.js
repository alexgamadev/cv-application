import React from 'react';
import ExperienceCard from '../ExperienceCard';

import SectionCard from '../SectionCard';

export default class Experience extends React.Component {
  constructor(props) {
    super();
    const { data } = props; 
    
    this.state = {
      experienceArr: data,
    }

    this.addNewExperience = this.addNewExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  addNewExperience(e) {
    this.setState(prevState => ({
      experienceArr: [...prevState.experienceArr, {id: prevState.experienceArr.length}]
    }));
  }

  deleteExperience(e) {
    const {target} = e;
    this.setState(prevState => {
      return {     	
        experienceArr: prevState.experienceArr.filter(experience => experience.id != target.id),
      }
    });
  }

  render(){
    return (
      <SectionCard title="Experience" heading={<button className="btn success" onClick={this.addNewExperience}>Add New</button>}>
        {this.state.experienceArr.map((value, key) => <ExperienceCard key={value.id} data={value} deleteFunc={this.deleteExperience}/>)}
      </SectionCard>
    );
  }
}