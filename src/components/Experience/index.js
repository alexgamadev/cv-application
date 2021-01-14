import React, { useState } from 'react';
import ExperienceCard from '../ExperienceCard';

import SectionCard from '../SectionCard';

const Experience = (props) => {
  const [expArr, updateArr] = useState(props.data);
  const [maxLength, setMaxLength] = useState(props.data.length);

  const addExperience = () => {
    updateArr(prevArr => [...prevArr, {id: maxLength}]);
    setMaxLength(maxLength + 1);
  }

  const deleteExperience = ({target}) => {
    updateArr(expArr.filter(item => item.id != target.id));
  };

  return (
    <SectionCard title="Experience" heading={<button className="btn success" onClick={addExperience}>Add New</button>}>
      {expArr.map(value => <ExperienceCard key={value.id} data={value} deleteFunc={deleteExperience}/>)}
    </SectionCard>
  );
}

export default Experience;