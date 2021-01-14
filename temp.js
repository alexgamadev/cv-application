import React, { useEffect, useState } from 'react';
import SectionCard from '../SectionCard';
import EducationCard from '../EducationCard';

const Education = (props) => {
  const [eduArr, setEduArr] = useState(props.data);
  const [maxLength, setMaxLength] = useState(props.data.length);

  const addNewEducation = (e) => {
    setEduArr(prevArr => [prevArr, {id: maxLength + 1}]);
    setMaxLength(maxLength + 1);
  }

  const deleteEducation = (e) => {
    const {target} = e;
    setEduArr(eduArr.filter(education => education.id != target.id));
  }

  return (
    <SectionCard title="Education" heading={<button className="btn success" onClick={addNewEducation}>Add New</button>}>
      {eduArr.map((value) => <EducationCard key={value.id} data={value} deleteFunc={deleteEducation}/>)}
    </SectionCard>
  );
}

export default Education;
