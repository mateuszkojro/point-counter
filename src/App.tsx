import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  
  let [bgColor, setBgColor] = useState("black")

  let[showSettings, setShowSettings] = useState(true)

  let [player1Name, setPlayer1Name] = useState("Player 1");
  let [player2Name, setPlayer2Name] = useState("Player 2");
  
  let [servingPlayer, setServingPlayer] = useState(player1Name)

  let [player1Score, setPlayer1Score] = useState(0);
  let [player2Score, setPlayer2Score] = useState(0);

  function updateServing(show : boolean) {
    let scoreSum = player1Score + player2Score;
    if (scoreSum % 3 === 2) {
      if (scoreSum % 2 === 1) {
        setServingPlayer(player1Name)
      }
      else {
        setServingPlayer(player2Name)
      }

      if (show){
        setBgColor("red")
        setTimeout(() => { setBgColor("black") }, 1000)
      }
    }
  }

  function increaseScore (playerName : String){

    if (playerName === player1Name){
      setPlayer1Score(player1Score + 1)
    }
    else {
      setPlayer2Score(player2Score + 1)
    }

    updateServing(true)

  }

  function decreaseScore (playerName: String){
    

    let newScore
    if (playerName === player1Name) {
      newScore = player1Score - 1 < 0 ? 0 : player1Score - 1
      setPlayer1Score(newScore)
    }
    else {
      newScore = player2Score - 1 < 0 ? 0 : player2Score - 1
      setPlayer2Score(newScore)
    }

    updateServing(false)
  }

  return (
    <div className="App" style={{backgroundColor : bgColor}}>
      <header className="App-header">
      <h1>Count your points</h1>
      <table style={{width : "80%"}}>
        <tr style={{textAlign: 'center', border: "0.5em"}}>
            <td onClick={() => { increaseScore(player1Name) }}>
            <h1>{player1Score}</h1>
            <h4>{player1Name}</h4>
          </td>
            <td onClick={()=>{ increaseScore(player2Name) }}>
              <h1>{player2Score}</h1>
              <h4>{player2Name}</h4>
            </td>
        </tr>
        <tr>
          <td>
            <u onClick={() => {decreaseScore(player1Name)}} > Decrease {player1Name} </u>
          </td>
            <td>
              <u onClick={() => { decreaseScore(player2Name) }} > Decrease {player2Name} </u>
            </td>
        </tr>
      </table>
      <h5>
        Now serving {servingPlayer}
      </h5>
      <u onClick={()=> setShowSettings(!showSettings)}>Change names</u>
      <section hidden={showSettings}>
        <table>
            <tr style={{ textAlign: 'center', border: "0.5em" }} >
            <td>
                <input type="text" defaultValue={player1Name} onChange={(event)=> {setPlayer1Name(event.currentTarget.value)}}></input>
            </td>
            <td>
                <input type="text" defaultValue={player2Name} onChange={(event) => { setPlayer2Name(event.currentTarget.value) }}></input>
            </td>
          </tr>
        </table>
        
      </section>
      </header>
    </div>
    
  );
}

export default App;
