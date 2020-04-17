import React/* , { useState, useEffect } */ from 'react';
import './Control.scss';

function Control(props) {
  let { isPlaying } = props

  
  /* const [inputForm, setInputForm] = useState({
    strFinalScore           : ''
  })
  const handleChangeInputForm = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
setInputForm( prev => ({
            ...prev,
            [name]: value
    }))
}
useEffect(() => {
  props.handleFinalScore(inputForm.strFinalScore)
}, [inputForm.strFinalScore]) */


const handleChangeInputForm = (event) => {
  props.handleFinalScore(event.target.value)
}

  function handleNewGame () {
      props.openPopup()
  }

  function checkInputKey (e) {
    if (e.keyCode === 13) {
      handleNewGame()
    }
  }

  
  return (
    <div className="control">
      <button onClick={handleNewGame} className="control btn-new"><i className="ion-ios-plus-outline"></i>New game</button>
      <button onClick={props.handleRollDice} className="control btn-roll"><i className="ion-ios-loop"></i>Roll dice</button>
      <button onClick={props.handleHold} className="control btn-hold"><i className="ion-ios-download-outline"></i>Hold</button>
      
      <input disabled={isPlaying} type="number" /* name="strFinalScore" value={inputForm.strFinalScore} */ onChange={handleChangeInputForm} onKeyUp={checkInputKey} placeholder="Final score" className="final-score" />
    </div>
  );
}

export default Control;
