import { useState } from "react";

const Numbers = ({selectedNumber, setSelectedNumber, error, setError}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  
  return (
    <div className="selectNumber">
      <p>{error}</p>
      <div className="numbers">
        {arrNumber.map((value, i) => (
          <div
            className={`number ${selectedNumber ===  value ? 'selectedNumber' : ''}`}
            key={i}
            onClick={() =>{ 
              setSelectedNumber(value);
              setError('');
              }}>
            {value}
          </div>
        ))}
      </div>
      <h1>Select Number</h1>
    </div>
  );
};

export default Numbers;
