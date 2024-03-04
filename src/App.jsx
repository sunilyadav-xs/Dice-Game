import Home from "./components/Home";
import { useState } from "react";
import Gamepage from "./components/Gamepage";
import "./App.css";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false); 

  return (
    <>
      <div className="App">
        {isGameStarted ? (
          <Gamepage />
        ) : (
          
           <Home toggle={() => setIsGameStarted(!isGameStarted)} /> 
        )}
      </div>
    </>
  );
}

export default App;
