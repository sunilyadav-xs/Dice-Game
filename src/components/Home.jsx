const Home = ({ toggle }) => {
  // const [bgColor, setBgColor]  = useState(true);
  return (
    <div className="container">
      <div className="image-box">
        <img src="/images/dices.png" alt="dice-image" />
      </div>
      <div className="game-name">
        <h1>DICE GAME</h1>
        <button className="btn btn1" onClick={toggle} >Play Now</button>
      </div>
    </div>
  );
};

export default Home;
