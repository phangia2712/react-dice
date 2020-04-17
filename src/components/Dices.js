import React from 'react';
import './Dices.scss';

function Dices(props) {
  let { scoreDices } = props
  return (
    <div className="dices">
      <div id="dice-1" className="dice">
          <div className={`spinner dice-${scoreDices[0]}`}>
              <div className="face1">1</div>
              <div className="face2">2</div>
              <div className="face3">3</div>
              <div className="face4">4</div>
              <div className="face5">5</div>
              <div className="face6">6</div>
          </div>
      </div>
      <div id="dice-2" className="dice">
          <div className={`spinner dice-${scoreDices[1]}`}>
              <div className="face1">1</div>
              <div className="face2">2</div>
              <div className="face3">3</div>
              <div className="face4">4</div>
              <div className="face5">5</div>
              <div className="face6">6</div>
          </div>
      </div>
    </div>
  );
}

export default Dices;
