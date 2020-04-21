import React, { useState, useEffect, useMemo } from 'react';
import './App.scss';

import Players from './components/Players'
import Control from './components/Control'
import Dices from './components/Dices'
import Popup from './components/Popup'

function App(props) {
  const [info, setInfo] = useState({
    scorePlayers: [0,0],
    currentScore: 0,
    scoreDices: [2,5],
    activePlayer: 0,
    isPlaying: false,
    myAlert: false,
    isPopup: false,
    finalScore: 'init'
  })

  function openPopup (finalScore) {
        setInfo(prev => {
          return {
            ...prev,
            isPopup: true
          }
        })
  }

  function startGame () {
    setInfo(prev => {
      return {
        ...prev,
        isPopup: false,
        scorePlayers: [0,0],
        currentScore: 0,
        scoreDices: [1,1],
        activePlayer: 0,
        isPlaying: true
      }
    })
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


  function handleRollDice () {
    if (info.isPlaying) {
      let dice1 = getRndInteger(1,6), dice2 = getRndInteger(1,6)
      console.log(dice1, dice2)
      setInfo(prev => {
        return {
          ...prev,
          scoreDices: [dice1,dice2],
          currentScore: info.currentScore + dice1 + dice2
        }
      })
      if (dice1 === 1 || dice2 === 1) {
        setInfo(prev => {
          return {
            ...prev,
            myAlert: true
          }
        })
        nextPlayer()
      }
    } else {
      alert('Vui lòng nhấn nút NEW GAME để bắt đầu chơi!')
    }
  }

  function handleHold () {
    // luong suy nghi stupid dau tien
    /* console.log('info.scorePlayers', info.scorePlayers)
    console.log('info.currentScore', info.currentScore)
    let scorePlayer1, scorePlayer2
    if (info.activePlayer === 0) {
      scorePlayer1 = info.scorePlayers[0] + info.currentScore
    } else if (info.activePlayer === 1) {
      scorePlayer2 = info.scorePlayers[1] + info.currentScore
    }
    console.log('scorePlayer1', scorePlayer1)
    console.log('scorePlayer2', scorePlayer2)
    setInfo(prev => {
      return {
        ...prev,
        scorePlayers: [scorePlayer1, scorePlayer2]
      }
    }) */

    if (info.isPlaying) {
      // cach minh tu giai ko can clone array nhu ben duoi
      // dan den du lieu chay sai te le
      // useMemo chay con khong dc
      // let oldScore = info.scorePlayers[info.activePlayer]
      // info.scorePlayers[info.activePlayer] = info.scorePlayers[info.activePlayer] + info.currentScore

      // cach giai cua zenvn
      let oldScore = info.scorePlayers[info.activePlayer]
      let cloneScorePlayers = [...info.scorePlayers]
      cloneScorePlayers[info.activePlayer] = oldScore + info.currentScore
      
      setInfo(prev => {
        return {
          ...prev,
          scorePlayers: cloneScorePlayers,
        }
      })
      // debugger
      nextPlayer()

    } else {
      alert('Vui lòng nhấn nút NEW GAME để bắt đầu chơi!')
    }
  }

  function nextPlayer () {
    setInfo(prev => {
      return {
        ...prev,
        activePlayer: info.activePlayer === 0 ? 1 : 0,
        currentScore: 0,
      }
    })
  }
    

  function handleFinalScore (finalScorexxx) {
    // if (finalScorexxx !== '' && finalScorexxx > 0) {
      setInfo(prev => ({...prev, finalScore: +finalScorexxx}))
    // }
      
  }

  function isWinnerX (scorePlayersxxx, finalScorexxx) {
    if (finalScorexxx !== 'init') {
      if (scorePlayersxxx[0] >= finalScorexxx || scorePlayersxxx[1] >= finalScorexxx ) {
        // debugger
        setInfo(prev => ({
          ...prev,
          isPlaying: false
        }))
        // chay lai nextPlayer de active dung nguoi chien thang
        // do loi chay nextPlayer ở nút Hold
        nextPlayer()
        return true
      }
      return false
    }
      
  }


  const isWinner = useMemo(() => {
    return isWinnerX(info.scorePlayers, info.finalScore)
  },[info.scorePlayers, info.finalScore])


  useEffect(() => {
    if (info.myAlert) {
      setTimeout(() => alert(`Bạn đã gieo được số 1. Rất tiếc, chúng tôi phải bỏ điểm tạm thời của bạn đã tích cóp dc và chuyển lượt chơi cho Player ${info.activePlayer + 1} !`), 100)
      setInfo(prev => {
        return {
          ...prev,
          myAlert: false
        }
      })
    }
  }, [info.myAlert, info.activePlayer])


  // useEffect(() => {
  //   openPopup(info.finalScore)
  // }, [info.finalScore])




  return (
    <div className="app">
      <div className="wrapper clearfix">
        isWinner {JSON.stringify(isWinner)} <br />
        activePlayer {JSON.stringify(info.activePlayer)}
        <Players isWinner={isWinner} scorePlayers={info.scorePlayers} currentScore={info.currentScore} activePlayer={info.activePlayer}/>
        <Control handleRollDice={handleRollDice} handleHold={handleHold} handleFinalScore={handleFinalScore} openPopup={openPopup} isPlaying={info.isPlaying} />
        <Dices scoreDices={info.scoreDices} />
      </div>
      <Popup isPopup={info.isPopup} startGame={startGame}/>
    </div>
  );
}

export default App;
