import React from 'react';
import Display from './Display';

const Person = ({ filtered }) => {
  return (
    <ol className="list-group list-group-numbered">
      {filtered.length
        ? filtered.map((person) => (
            <Display key={person.name} info={person} number={person.number} />
          ))
        : `User not found`}
    </ol>
  );
};

export default Person;
