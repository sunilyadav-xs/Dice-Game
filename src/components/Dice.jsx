const Dice = ({currentDice, rollDice}) => {
  
  return (
    <div className="classContainer" onClick={rollDice}>
    <div className="dice" >
      <img src={`/images/dice_${currentDice}.png`} alt="dice-img" />
    </div>
      <p>Click on Dice to roll</p>
    </div>
  );
};

export default Dice;
