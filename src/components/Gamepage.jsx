import Dice from "./Dice";
import Numbers from "./Numbers";
import Rules from "./Rules";
import Score from "./Score";
import { useState } from "react";

const Gamepage = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const [showRules, setShowRules] = useState(false);

  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber){
      setError('You have not selected any number');
      
      return;
    } 
    const randomNumber = randomNumberGenerator(1, 7);
    setCurrentDice(randomNumber);

    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <main>
        <Score score={score} />
        <Numbers
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </main>
      <div className="middle">
        <Dice
          currentDice={currentDice}
          rollDice={rollDice}
        />
        <button className="btn btn2" onClick={resetScore} >Reset</button>
        <button className="btn btn1" onClick={()=>setShowRules(!showRules)}>{showRules ? 'Hide Rules' : 'Show Rules'}</button>
        {showRules && <Rules />}
      </div>
    </>
  );
};

export default Gamepage;
