import React from 'react';
import './Players.scss';

function Players(props) {
    let { scorePlayers, currentScore, activePlayer, isWinner } = props

    function getName (index) {
      let defaultName = `Player ${index + 1}`
      if (activePlayer === index && isWinner === true) {
        defaultName = 'Winner'
      }
      return defaultName
    }
  return (
    <div className="players">
      <div className={`player-panel 
      ${activePlayer === 0 && !isWinner ? 'active' : ''}
      ${activePlayer === 0 && isWinner ? 'winner' : ''}
      `}>
  <div className="player-name">{getName(0)}</div>
  <div className="player-score">{ scorePlayers[0] }</div>
          <div className="player-current-box">
              <div className="player-current-label">Current</div>
  <div className="player-current-score">{ activePlayer === 0 ? currentScore : 0 }</div>
          </div>
      </div>
      
      <div className={`player-panel 
      ${activePlayer === 1 && !isWinner ? 'active' : ''}
      ${activePlayer === 1 && isWinner ? 'winner' : ''}
      `}>
          <div className="player-name">{getName(1)}</div>
          <div className="player-score">{ scorePlayers[1] }</div>
          <div className="player-current-box">
              <div className="player-current-label">Current</div>
              <div className="player-current-score">{ activePlayer === 1 ? currentScore : 0 }</div>
          </div>
      </div>
    </div>
  );
}

export default Players;
