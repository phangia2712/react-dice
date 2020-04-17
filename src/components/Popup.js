import React from 'react';
import './Popup.scss';

function Popup(props) {
  let { isPopup } = props
  return (
    <div className={`popup ${isPopup ? 'open' : ''}`}>
        <div className="wrap-me">
            <p>Luat choi: Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident incidunt repellendus at, veniam repellat pariatur in consequuntur, quos libero aliquid itaque doloribus. Earum beatae asperiores neque accusantium, facere delectus minima nisi eos velit ducimus?</p>
            <button onClick={props.startGame}>I got it</button>
        </div>
    </div>
  );
}

export default Popup;
